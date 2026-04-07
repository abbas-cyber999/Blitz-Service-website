import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blitz-service-website.vercel.app";

  return ["/", "/reinigung", "/umzug", "/contact", "/bewertungen", "/news", "/impressum", "/datenschutz"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.7
  }));
}
