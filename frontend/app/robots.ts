import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*", //all bots (Google, Bing etc)
      allow: "/", // all page crawl garn sakha xa
      disallow: ["/api/", "/admin/", "/auth/"], // yo to page chai show nagrw
    },
    sitemap: "https://khemrajneupane.com.np/sitemap.xml",
  };
}
