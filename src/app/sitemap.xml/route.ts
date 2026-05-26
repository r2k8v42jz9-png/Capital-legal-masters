const BASE_URL = "https://legalmasters.uz";

type SitemapEntry = {
  loc: string;
  changefreq: "monthly" | "yearly";
  priority: number;
};

// Same URLs / metadata as before — unchanged.
const ENTRIES: SitemapEntry[] = [
  { loc: BASE_URL, changefreq: "monthly", priority: 1.0 },
  { loc: `${BASE_URL}/#services`, changefreq: "monthly", priority: 0.9 },
  { loc: `${BASE_URL}/#arbitration`, changefreq: "monthly", priority: 0.8 },
  { loc: `${BASE_URL}/#contact`, changefreq: "yearly", priority: 0.7 },
];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

/**
 * Serves /sitemap.xml as valid XML with an explicit
 * `application/xml` content type (instead of plain-text rendering).
 */
export async function GET(): Promise<Response> {
  const lastmod = new Date().toISOString();

  const urls = ENTRIES.map(
    ({ loc, changefreq, priority }) => `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(1)}</priority>
  </url>`
  ).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
