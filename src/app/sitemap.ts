import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://spacins.ai";

  // Static routes
  const routes = [
    "",
    "/blogs",
    "/services",
    "/solutions",
    "/companions",
    "/contact",
    "/process",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : ("monthly" as const),
    priority: route === "" ? 1 : 0.8,
  }));

  // TODO: Add dynamic blog routes when you have blog data
  // You can import blogEntries and map them to routes

  return routes;
}

