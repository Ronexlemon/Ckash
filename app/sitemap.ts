import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ckash.app",
      lastModified: new Date()
    },
    {
      url: "https://ckash.app/blog",
      lastModified: new Date(),
    }
    
  ];
}
