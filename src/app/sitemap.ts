import { MetadataRoute } from "next";
import { business } from "@/config/business";

const baseUrl = `https://${business.domain}`;

const routes = [
  "",
  "/services",
  "/ueber-uns",
  "/bewertungen",
  "/contact",
  "/impressum",
  "/datenschutz"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8
  }));
}
