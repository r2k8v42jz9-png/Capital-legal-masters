import type { MetadataRoute } from "next";

const BASE_URL = "https://legalmasters.uz";

/**
 * Generates /robots.txt — allows full indexing and references the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
