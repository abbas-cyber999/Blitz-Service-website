import { MetadataRoute } from "next";

const baseUrl = "https://www.blitz-service-gmbh.de";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/services",
    "/ueber-uns",
    "/bewertungen",
    "/contact",
    "/impressum",
    "/datenschutz"
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7
  }));
}
