'use server';

import { cookies, headers } from 'next/headers';
import {
  generateCsrfToken,
  validateCsrfToken,
  sanitizeText,
  validateEmail,
  validatePhone,
  simpleRateLimit,
} from '@/lib/security';

const CSRF_COOKIE = 'ad-csrf';

export type InquiryState = {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Record<string, string>;
};

/** Issues a CSRF token, stores it in an httpOnly cookie, returns it for the form. */
export async function issueCsrfToken(): Promise<string> {
  const token = generateCsrfToken();
  const store = await cookies();
  store.set(CSRF_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
    maxAge: 60 * 60, // 1 hour
  });
  return token;
}

export async function submitInquiry(
  _prev: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  // 1. Honeypot — bots fill hidden field; pretend success, do nothing.
  const honeypot = (formData.get('website') as string) || '';
  if (honeypot.trim().length > 0) {
    return { status: 'success', message: 'Danke! Wir melden uns bei dir.' };
  }

  // 2. Rate limit by IP
  const hdrs = await headers();
  const ip =
    hdrs.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    hdrs.get('x-real-ip') ||
    'unknown';
  if (!simpleRateLimit(`inquiry:${ip}`, 5)) {
    return {
      status: 'error',
      message: 'Zu viele Anfragen. Bitte versuch es später noch einmal.',
    };
  }

  // 3. CSRF
  const formToken = (formData.get('csrf-token') as string) || '';
  const store = await cookies();
  const cookieToken = store.get(CSRF_COOKIE)?.value || '';
  if (!validateCsrfToken(formToken, cookieToken)) {
    return {
      status: 'error',
      message:
        'Sicherheits-Token ungültig oder abgelaufen. Bitte lade die Seite neu.',
    };
  }

  // 4. Extract + sanitize
  const name = sanitizeText((formData.get('name') as string) || '');
  const email = ((formData.get('email') as string) || '').toLowerCase().trim();
  const phone = sanitizeText((formData.get('phone') as string) || '');
  const artist = sanitizeText((formData.get('artist') as string) || '');
  const style = sanitizeText((formData.get('style') as string) || '');
  const placement = sanitizeText((formData.get('placement') as string) || '');
  const size = sanitizeText((formData.get('size') as string) || '');
  const idea = sanitizeText((formData.get('idea') as string) || '');
  const consent = formData.get('consent');

  // 5. Validate
  const fieldErrors: Record<string, string> = {};
  if (name.length < 2 || name.length > 100) fieldErrors.name = 'Bitte gib deinen Namen an.';
  if (!validateEmail(email)) fieldErrors.email = 'Bitte gib eine gültige E-Mail an.';
  if (phone && !validatePhone(phone)) fieldErrors.phone = 'Telefonnummer ungültig.';
  if (idea.length < 10) fieldErrors.idea = 'Beschreib deine Idee kurz (min. 10 Zeichen).';
  if (consent !== 'on') fieldErrors.consent = 'Bitte stimme der Datenverarbeitung zu.';

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: 'error',
      message: 'Bitte prüf die markierten Felder.',
      fieldErrors,
    };
  }

  // 6. Deliver. INTEGRATION POINT — connect email (e.g. Resend/SMTP) or a DB here.
  // GDPR: store only as long as needed; see Datenschutzerklärung (Art. 6 Abs. 1 b).
  console.info('[inquiry] new request', {
    name,
    email,
    phone,
    artist,
    style,
    placement,
    size,
    idea: idea.slice(0, 80),
    ip,
  });

  return {
    status: 'success',
    message:
      'Danke für deine Anfrage! Wir melden uns mit einem Vorschlag und einer Skizze bei dir.',
  };
}
