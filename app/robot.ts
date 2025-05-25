import { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      // all the user agents from all Search engines
      userAgent: "*",
      allow: ["/", "/blog"],
      disallow: [],
    },
    sitemap: "https://ckash.app/sitemap.xml",
  };
}
