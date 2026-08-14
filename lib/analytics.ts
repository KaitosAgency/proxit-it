export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export const googleSiteVerification =
  process.env.GOOGLE_SITE_VERIFICATION?.trim() ?? "";

export function isGoogleAnalyticsEnabled(): boolean {
  return gaMeasurementId.length > 0;
}

export function isGoogleSearchConsoleVerified(): boolean {
  return googleSiteVerification.length > 0;
}
