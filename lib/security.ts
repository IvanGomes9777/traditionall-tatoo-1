import crypto from 'crypto';

/* ---------- CSRF (double-submit token) ---------- */

export function generateCsrfToken(): string {
  return crypto.randomBytes(32).toString('hex');
}

export function validateCsrfToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken || token.length !== sessionToken.length) {
    return false;
  }
  try {
    return crypto.timingSafeEqual(Buffer.from(token), Buffer.from(sessionToken));
  } catch {
    return false;
  }
}

/* ---------- Input sanitizing ---------- */

export function sanitizeText(text: string): string {
  return text.replace(/[<>]/g, '').trim();
}

/* ---------- Validation ---------- */

export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email) && email.length <= 254;
}

export function validatePhone(phone: string): boolean {
  const clean = phone.replace(/\D/g, '');
  return clean.length >= 6 && clean.length <= 15;
}

/* ---------- Rate limiting (in-memory, per instance) ---------- */

const requests = new Map<string, number[]>();

export function simpleRateLimit(
  identifier: string,
  maxRequests = 5,
  windowMs = 60 * 60 * 1000, // 1 hour
): boolean {
  const now = Date.now();
  const timestamps = (requests.get(identifier) ?? []).filter(
    (t) => now - t < windowMs,
  );
  if (timestamps.length >= maxRequests) {
    requests.set(identifier, timestamps);
    return false;
  }
  timestamps.push(now);
  requests.set(identifier, timestamps);
  return true;
}
