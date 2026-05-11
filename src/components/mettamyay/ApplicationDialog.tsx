import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useT, useLang } from "@/i18n/LangProvider";
import { supabase } from "@/integrations/supabase/client";
import type { DictKey } from "@/i18n/dictionary";

// The six allowed values mirror the CHECK constraint on applications.role.
// Editing here without editing the migration (or vice versa) will break inserts.
export const ROLE_VALUES = ["train", "youth", "partner", "client", "support", "contractor"] as const;
export type RoleValue = (typeof ROLE_VALUES)[number];

const roleLabelKey: Record<RoleValue, DictKey> = {
  train: "role.train.label",
  youth: "role.youth.label",
  partner: "role.partner.label",
  client: "role.client.label",
  support: "role.support.label",
  contractor: "role.contractor.label",
};

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultRole?: RoleValue;
};

type Status = "idle" | "submitting" | "success" | "error";

const ApplicationDialog = ({ open, onOpenChange, defaultRole = "train" }: Props) => {
  const t = useT();
  const { lang } = useLang();

  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [role, setRole] = useState<RoleValue>(defaultRole);
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // must stay empty
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (open) {
      setRole(defaultRole);
      setStatus("idle");
      setErrorMsg("");
    }
  }, [open, defaultRole]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;
    if (!name.trim() || !contact.trim()) {
      setErrorMsg(t("form.required"));
      setStatus("error");
      return;
    }
    setStatus("submitting");
    setErrorMsg("");

    try {
      const intent = role; // mirror role for now; can diverge later

      // 1. Insert into the protected table (RLS + CHECK do the validation).
      const { error: insertError } = await supabase.from("applications").insert({
        name: name.trim(),
        contact: contact.trim(),
        role,
        intent,
        message: message.trim() || null,
        locale: lang,
        honeypot,
      });

      if (insertError) {
        console.error("[application] insert failed", insertError);
        setStatus("error");
        setErrorMsg(t("form.error"));
        return;
      }

      // 2. Fire-and-await notification (won't block the success state on failure).
      const { error: fnError } = await supabase.functions.invoke("notify-application", {
        body: { name: name.trim(), contact: contact.trim(), role, intent, message, locale: lang, honeypot },
      });
      if (fnError) console.warn("[application] notification failed (row still saved)", fnError);

      setStatus("success");
      setName("");
      setContact("");
      setMessage("");
    } catch (err) {
      console.error("[application] unexpected error", err);
      setStatus("error");
      setErrorMsg(t("form.error"));
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-mm-cream border-mm-clay/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif-elegant text-2xl text-mm-charcoal">{t("form.title")}</DialogTitle>
          <DialogDescription className="text-mm-earth">{t("form.subtitle")}</DialogDescription>
        </DialogHeader>

        {status === "success" ? (
          <div className="py-6 text-center">
            <div className="text-mm-clay text-3xl mb-3">✓</div>
            <p className="text-mm-charcoal text-base">{t("form.success")}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Honeypot — visually hidden but reachable to bots. */}
            <div aria-hidden className="absolute -left-[9999px] top-0 h-0 w-0 overflow-hidden" tabIndex={-1}>
              <label>
                Company
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </label>
            </div>

            <div>
              <label className="block text-[0.75rem] tracking-[0.1em] uppercase text-mm-clay mb-1.5">
                {t("form.name")} <span className="text-mm-clay">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                maxLength={120}
                className="w-full bg-mm-warm-white border border-mm-clay/20 px-3 py-2 rounded-sm text-mm-charcoal focus:outline-none focus:border-mm-clay"
              />
            </div>

            <div>
              <label className="block text-[0.75rem] tracking-[0.1em] uppercase text-mm-clay mb-1.5">
                {t("form.contact")} <span className="text-mm-clay">*</span>
              </label>
              <input
                type="text"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                maxLength={200}
                className="w-full bg-mm-warm-white border border-mm-clay/20 px-3 py-2 rounded-sm text-mm-charcoal focus:outline-none focus:border-mm-clay"
              />
            </div>

            <div>
              <label className="block text-[0.75rem] tracking-[0.1em] uppercase text-mm-clay mb-1.5">
                {t("form.role")}
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value as RoleValue)}
                className="w-full bg-mm-warm-white border border-mm-clay/20 px-3 py-2 rounded-sm text-mm-charcoal focus:outline-none focus:border-mm-clay"
              >
                {ROLE_VALUES.map((r) => (
                  <option key={r} value={r}>
                    {t(roleLabelKey[r])}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[0.75rem] tracking-[0.1em] uppercase text-mm-clay mb-1.5">
                {t("form.message")}
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={2000}
                rows={3}
                className="w-full bg-mm-warm-white border border-mm-clay/20 px-3 py-2 rounded-sm text-mm-charcoal focus:outline-none focus:border-mm-clay resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-[0.85rem] text-destructive">{errorMsg || t("form.error")}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full text-[0.78rem] font-medium tracking-[0.12em] uppercase text-mm-warm-white bg-mm-clay px-6 py-3 rounded-sm hover:bg-mm-clay-dark transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? t("form.submitting") : t("form.submit")}
            </button>

            <p className="text-[0.7rem] text-mm-earth/70 italic text-center pt-1">{t("form.privacy")}</p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationDialog;
