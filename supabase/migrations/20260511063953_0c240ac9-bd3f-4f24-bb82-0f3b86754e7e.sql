INSERT INTO public.applications (name, contact, role, intent, message, locale, honeypot)
  VALUES ('Replay Test', 'replay-test@example.com', 'partner', 'replay verification', 'End-to-end smoke test from replay.', 'en', '')
  RETURNING id, created_at;