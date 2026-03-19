import type { MetadataRoute } from "next";

// ─── Sitemap ─────────────────────────────────────────────────────────────────
// Generated at build time. Add new pages here as the site grows.

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.rivieraliveconsulting.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
