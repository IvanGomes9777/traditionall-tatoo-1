export type Consent = { necessary: true; maps: boolean };

const KEY = 'ad-cookie-consent';
export const CONSENT_EVENT = 'cookie-consent-changed';

export function readConsent(): Consent | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Consent) : null;
  } catch {
    return null;
  }
}

export function writeConsent(maps: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(KEY, JSON.stringify({ necessary: true, maps }));
  window.dispatchEvent(new Event(CONSENT_EVENT));
}
