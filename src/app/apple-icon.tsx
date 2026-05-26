import { ImageResponse } from "next/og";
import { SCALES_DATA_URI, NAVY, GOLD } from "@/lib/brand";

// Apple touch icon — Next.js injects <link rel="apple-touch-icon">.
// 180×180 square; also referenced as the Organization logo in JSON-LD.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          background: NAVY,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SCALES_DATA_URI} width={104} height={104} alt="" />
        <div
          style={{
            display: "flex",
            marginTop: 8,
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 6,
            color: GOLD,
          }}
        >
          CLM
        </div>
      </div>
    ),
    size
  );
}
