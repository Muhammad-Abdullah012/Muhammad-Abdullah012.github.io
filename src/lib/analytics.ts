declare function gtag(...args: unknown[]): void;

export function trackEvent(name: string, params?: Record<string, string | number>) {
  if (typeof gtag !== 'undefined') {
    gtag('event', name, params ?? {});
  }
}
