type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", action, params);
}

export function trackContactFormSubmit(topic: string): void {
  trackEvent("generate_lead", {
    method: "contact_form",
    topic,
  });
}
