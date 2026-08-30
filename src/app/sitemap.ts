import { MetadataRoute } from "next";
import { productCategories } from "@/lib/data/categories";
import { getAllRepairCombinations } from "@/lib/data/dji-service";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dronebhai.com";
  const currentDate = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/dji-service`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/branches`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  // All 16 Product category landing pages
  const categoryRoutes: MetadataRoute.Sitemap = productCategories.map((cat) => ({
    url: `${baseUrl}/products/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  // All DJI repair service matrix combinations (e.g. mini-4-pro/gimbal-replacement)
  const repairCombinations = getAllRepairCombinations();
  const repairRoutes: MetadataRoute.Sitemap = repairCombinations.map((combo) => ({
    url: `${baseUrl}/dji-service/${combo.model}/${combo.repairType}`,
    lastModified: currentDate,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...categoryRoutes, ...repairRoutes];
}
