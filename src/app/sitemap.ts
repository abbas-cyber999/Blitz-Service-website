import { MetadataRoute } from "next";

const baseUrl = "https://www.deutschhero.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [""].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1
  }));
}
