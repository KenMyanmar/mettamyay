// Mettamyay — notify-application
//
// THREAT MODEL (read before changing):
// This function is ONE of TWO independent controls protecting the project:
//   1. Edge function rate limit (here)         → protects the notification email channel
//      from being spammed and protects against bursts.
//   2. Honeypot + length CHECK + RLS (in DB)   → protects the `applications` table
//      itself from being flooded.
// Do NOT relax one assuming the other has it covered. Both must remain in place.
//
// This function runs with verify_jwt = false (set in supabase/config.toml) so
// anonymous visitors can submit. It re-validates the payload server-side
// (defence in depth) and only then sends/logs the notification.

import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const ALLOWED_ROLES = ["train", "youth", "partner", "client", "support", "contractor"] as const;
type Role = (typeof ALLOWED_ROLES)[number];

// ── Rate limit (in-memory; resets on cold start; v1 only) ──────────────
// 1 submission per IP per 60s, hard cap 10/hour.
type Bucket = { last: number; windowStart: number; count: number };
const buckets = new Map<string, Bucket>();
const MIN_INTERVAL_MS = 60_000;
const HOUR_MS = 60 * 60 * 1000;
const HOUR_CAP = 10;

const checkRate = (ip: string): { ok: boolean; reason?: string } => {
  const now = Date.now();
  const b = buckets.get(ip) ?? { last: 0, windowStart: now, count: 0 };
  if (now - b.windowStart > HOUR_MS) {
    b.windowStart = now;
    b.count = 0;
  }
  if (now - b.last < MIN_INTERVAL_MS) {
    return { ok: false, reason: "Too many submissions, please wait a moment." };
  }
  if (b.count >= HOUR_CAP) {
    return { ok: false, reason: "Hourly submission limit reached." };
  }
  b.last = now;
  b.count += 1;
  buckets.set(ip, b);
  return { ok: true };
};

type Payload = {
  name?: unknown;
  contact?: unknown;
  role?: unknown;
  intent?: unknown;
  message?: unknown;
  locale?: unknown;
  honeypot?: unknown;
};

const isStr = (v: unknown): v is string => typeof v === "string";

const validate = (p: Payload):
  | { ok: true; data: { name: string; contact: string; role: Role; intent: string; message: string; locale: "en" | "my" } }
  | { ok: false; error: string } => {
  // Honeypot must be empty/missing — bots fill it, humans don't.
  if (p.honeypot && String(p.honeypot).trim() !== "") {
    return { ok: false, error: "Rejected." };
  }
  if (!isStr(p.name) || p.name.trim().length < 1 || p.name.length > 120) return { ok: false, error: "Invalid name" };
  if (!isStr(p.contact) || p.contact.trim().length < 3 || p.contact.length > 200) return { ok: false, error: "Invalid contact" };
  if (!isStr(p.role) || !ALLOWED_ROLES.includes(p.role as Role)) return { ok: false, error: "Invalid role" };
  if (p.message != null && (!isStr(p.message) || p.message.length > 2000)) return { ok: false, error: "Message too long" };
  if (p.intent != null && (!isStr(p.intent) || p.intent.length > 80)) return { ok: false, error: "Intent too long" };
  const locale = isStr(p.locale) && (p.locale === "en" || p.locale === "my") ? (p.locale as "en" | "my") : "en";

  return {
    ok: true,
    data: {
      name: p.name.trim(),
      contact: p.contact.trim(),
      role: p.role as Role,
      intent: isStr(p.intent) ? p.intent : (p.role as string),
      message: isStr(p.message) ? p.message : "",
      locale,
    },
  };
};

// v1 notification: log payload. When RESEND_API_KEY is configured later,
// switch to a real send. The destination is hard-coded to ken@parami.com
// per launch direction; will switch to hello@metabumi.org post-launch.
const NOTIFY_TO = "ken@parami.com";

const sendNotification = async (data: Record<string, unknown>) => {
  const resendKey = Deno.env.get("RESEND_API_KEY");
  if (!resendKey) {
    console.log("[notify-application] (no RESEND_API_KEY) would send to", NOTIFY_TO, data);
    return { sent: false, reason: "no-resend-key" };
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Mettamyay <hello@metabumi.org>",
        to: [NOTIFY_TO],
        subject: `New ${data.role} application — ${data.name}`,
        text: `Name: ${data.name}\nContact: ${data.contact}\nRole: ${data.role}\nLocale: ${data.locale}\n\n${data.message ?? ""}`,
      }),
    });
    const body = await res.text();
    if (!res.ok) {
      console.error("[notify-application] resend failed", res.status, body);
      return { sent: false, reason: `resend-${res.status}` };
    }
    return { sent: true };
  } catch (err) {
    console.error("[notify-application] resend threw", err);
    return { sent: false, reason: "exception" };
  }
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";

  const rate = checkRate(ip);
  if (!rate.ok) {
    return new Response(JSON.stringify({ error: rate.reason }), {
      status: 429,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: Payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const v = validate(payload);
  if (!v.ok) {
    return new Response(JSON.stringify({ error: v.error }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const result = await sendNotification(v.data);
  return new Response(JSON.stringify({ ok: true, notification: result }), {
    status: 200,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});
