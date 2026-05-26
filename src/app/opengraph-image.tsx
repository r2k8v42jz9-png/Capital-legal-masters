import { ImageResponse } from "next/og";
import { SCALES_DATA_URI, NAVY } from "@/lib/brand";

// Open Graph image — Next.js injects og:image (and Twitter uses it as a
// fallback for twitter:image). 1200×630 is the standard social card size.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Capital Legal Masters — Yuridik firma | O'zbekiston";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: NAVY,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid rgba(214,178,76,0.35)",
            borderRadius: 10,
            padding: "54px 96px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SCALES_DATA_URI} width={168} height={168} alt="" />
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 60,
              fontWeight: 700,
              letterSpacing: 4,
              color: "#E7CE7E",
            }}
          >
            CAPITAL LEGAL MASTERS
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 25,
              letterSpacing: 12,
              color: "#C9B36A",
            }}
          >
            MCHJ · LAW FIRM
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 21,
              letterSpacing: 2,
              color: "#9FB0C8",
            }}
          >
            legalmasters.uz
          </div>
        </div>
      </div>
    ),
    size
  );
}
