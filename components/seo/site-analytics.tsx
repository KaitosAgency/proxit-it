import { GoogleAnalytics } from "@next/third-parties/google";
import { gaMeasurementId, isGoogleAnalyticsEnabled } from "@/lib/analytics";

export function SiteAnalytics() {
  if (!isGoogleAnalyticsEnabled()) {
    return null;
  }

  return <GoogleAnalytics gaId={gaMeasurementId} />;
}
