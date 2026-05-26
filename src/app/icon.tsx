import { ImageResponse } from "next/og";
import { SCALES_DATA_URI_BOLD, NAVY } from "@/lib/brand";

// Favicon — Next.js injects <link rel="icon"> automatically.
export const size = { width: 96, height: 96 };
export const contentType = "image/png";

export default function Icon() {
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={SCALES_DATA_URI_BOLD} width={72} height={72} alt="" />
      </div>
    ),
    size
  );
}
