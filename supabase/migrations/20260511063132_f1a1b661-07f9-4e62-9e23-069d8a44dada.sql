-- Threat model:
-- The edge function rate limit protects notification emails from being spammed.
-- Honeypot + length CHECKs + RLS protect THIS TABLE from being flooded.
-- These are TWO SEPARATE controls; do not relax one assuming the other has it covered.

CREATE TABLE public.applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  contact text NOT NULL,
  role text NOT NULL,
  intent text,
  message text,
  locale text NOT NULL DEFAULT 'en',
  honeypot text NOT NULL DEFAULT '',
  CONSTRAINT applications_role_check CHECK (role IN ('train','youth','partner','client','support','contractor')),
  CONSTRAINT applications_locale_check CHECK (locale IN ('en','my')),
  CONSTRAINT applications_name_len CHECK (char_length(name) BETWEEN 1 AND 120),
  CONSTRAINT applications_contact_len CHECK (char_length(contact) BETWEEN 3 AND 200),
  CONSTRAINT applications_message_len CHECK (message IS NULL OR char_length(message) <= 2000),
  CONSTRAINT applications_intent_len CHECK (intent IS NULL OR char_length(intent) <= 80),
  CONSTRAINT applications_honeypot_empty CHECK (honeypot = '')
);

ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a valid application"
  ON public.applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    honeypot = ''
    AND char_length(name) BETWEEN 1 AND 120
    AND char_length(contact) BETWEEN 3 AND 200
    AND role IN ('train','youth','partner','client','support','contractor')
    AND locale IN ('en','my')
    AND (message IS NULL OR char_length(message) <= 2000)
    AND (intent IS NULL OR char_length(intent) <= 80)
  );

CREATE POLICY "Authenticated can read applications"
  ON public.applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE INDEX applications_created_at_idx ON public.applications (created_at DESC);
CREATE INDEX applications_role_idx ON public.applications (role);