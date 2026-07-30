import type { MetadataRoute } from "next";
import { consultationScenes, insightArticles } from "../content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!baseUrl) return [];
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...consultationScenes.map((scene) => ({ url: `${baseUrl}/services/${scene.id}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 })),
    { url: `${baseUrl}/insights`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/insights/issues`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/insights/technologies`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    ...insightArticles.map((article) => ({ url: `${baseUrl}/insights/${article.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}
