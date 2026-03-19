import type { MetadataRoute } from "next";

// ─── Robots.txt ───────────────────────────────────────────────────────────────

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.rivieraliveconsulting.com/sitemap.xml",
  };
}
