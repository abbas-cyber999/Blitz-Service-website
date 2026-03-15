import { MetadataRoute } from "next";

const baseUrl = "https://www.blitz-service-gmbh.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/api/admin"]
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
