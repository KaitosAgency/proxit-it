import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Proxi IT — Infogérance et services managés à Bourges";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #000f1f 0%, #001b36 45%, #0d7377 100%)",
          padding: "64px 72px",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              borderRadius: 999,
              background: "rgba(95, 194, 186, 0.15)",
              padding: "10px 18px",
              color: "#5fc2ba",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Infogérance · Bourges
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 900,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "rgba(255, 255, 255, 0.82)",
              maxWidth: 920,
            }}
          >
            Supervision 24/7, maintenance proactive, support humain. Intégrateur Odoo certifié.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(95, 194, 186, 0.35)",
            paddingTop: 28,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ fontSize: 40, fontWeight: 800, color: "#5fc2ba" }}>{site.name}</div>
            <div style={{ fontSize: 24, color: "rgba(255, 255, 255, 0.75)" }}>
              {site.address.full}
            </div>
          </div>
          <div style={{ fontSize: 24, color: "rgba(255, 255, 255, 0.65)" }}>{site.phone}</div>
        </div>
      </div>
    ),
    size,
  );
}
