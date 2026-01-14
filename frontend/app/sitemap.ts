// website sitemap
import { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://khemrajneupane.com.np",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://khemrajneupane.com.np/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://khemrajneupane.com.np/services",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://khemrajneupane.com.np/projects",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://khemrajneupane.com.np/blog",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://khemrajneupane.com.np/contact",
      lastModified: new Date(),
      priority: 0.3,
    },
  ];
}
