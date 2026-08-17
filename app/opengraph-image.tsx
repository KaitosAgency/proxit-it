import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = "Proxi IT — Infogérance et supervision 24/7 à Bourges";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const runtime = "nodejs";

const geistBoldUrl =
  "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans@5.2.5/latin-700-normal.woff";
const jetbrainsMonoUrl =
  "https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@5.2.5/latin-500-normal.woff";

async function loadOgFonts() {
  const [geistBold, jetbrainsMono] = await Promise.all([
    fetch(geistBoldUrl).then((response) => response.arrayBuffer()),
    fetch(jetbrainsMonoUrl).then((response) => response.arrayBuffer()),
  ]);

  return {
    geistBold,
    jetbrainsMono,
  };
}

export default async function OpenGraphImage() {
  const { geistBold, jetbrainsMono } = await loadOgFonts();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background: "#000f1f",
          color: "#ffffff",
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 0% 0%, rgba(95, 194, 186, 0.16), transparent 52%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 82% 18%, rgba(95, 194, 186, 0.08), transparent 42%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                borderRadius: 999,
                border: "1px solid rgba(95, 194, 186, 0.3)",
                background: "rgba(95, 194, 186, 0.08)",
                padding: "10px 18px",
                color: "#5fc2ba",
                fontFamily: "JetBrains Mono",
                fontSize: 18,
                fontWeight: 500,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Infogérance · Bourges · Cher
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4, maxWidth: 980 }}>
              <div
                style={{
                  fontSize: 74,
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                }}
              >
                Votre informatique,
              </div>
              <div
                style={{
                  fontSize: 74,
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  color: "#5fc2ba",
                }}
              >
                {"on s'en occupe."}
              </div>
            </div>

            <div
              style={{
                fontSize: 28,
                lineHeight: 1.45,
                color: "#cbd5e1",
                maxWidth: 920,
              }}
            >
              Supervision 24/7, maintenance proactive et support humain pour les entreprises de
              Bourges et environs.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              borderTop: "1px solid rgba(95, 194, 186, 0.22)",
              paddingTop: 24,
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div style={{ fontSize: 34, fontWeight: 700, color: "#5fc2ba" }}>{site.name}</div>
              <div style={{ fontSize: 22, color: "rgba(203, 213, 225, 0.9)" }}>
                {site.address.full}
              </div>
            </div>
            <div style={{ fontSize: 22, color: "rgba(148, 163, 184, 0.95)" }}>{site.phone}</div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: geistBold,
          weight: 700,
          style: "normal",
        },
        {
          name: "JetBrains Mono",
          data: jetbrainsMono,
          weight: 500,
          style: "normal",
        },
      ],
    },
  );
}
