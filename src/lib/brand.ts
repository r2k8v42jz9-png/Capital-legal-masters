// Brand tokens + generated scales-of-justice mark for icons / OG images.
// Rendered via next/og (Satori) — we pass the mark as an SVG data URI,
// which is the most reliable way to embed vector art in ImageResponse.

export const NAVY = "#0A1A40"; // logo background navy
export const GOLD = "#D6B24C"; // logo gold

// Minimal geometric scales of justice (straight-line paths only for max
// Satori/raster compatibility). `sw` = stroke width in the 120 viewBox.
function scalesSvg(sw: number): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" fill="none" stroke="${GOLD}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round"><circle cx="60" cy="16" r="3"/><path d="M60 19 L60 88"/><path d="M26 30 L94 30"/><path d="M26 30 L17 47"/><path d="M26 30 L35 47"/><path d="M16 47 L26 57 L36 47"/><path d="M94 30 L85 47"/><path d="M94 30 L103 47"/><path d="M84 47 L94 57 L104 47"/><path d="M60 88 L49 97"/><path d="M60 88 L71 97"/><path d="M45 97 L75 97"/></svg>`;
}

// Normal weight — for large surfaces (apple-icon, OG image).
export const SCALES_DATA_URI = `data:image/svg+xml,${encodeURIComponent(scalesSvg(3.2))}`;

// Bold weight — stays legible when a browser downscales the favicon to 16px.
export const SCALES_DATA_URI_BOLD = `data:image/svg+xml,${encodeURIComponent(scalesSvg(6.5))}`;
