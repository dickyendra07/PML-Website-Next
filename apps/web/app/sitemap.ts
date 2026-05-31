import type { MetadataRoute } from "next";

const baseUrl = "https://pharmametriclabs.com";

const routes = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/about-us",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/babe-studies",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/clinical-trial",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/contract-analysis",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/services/regulatory-consultation",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/facilities",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/facilities/clinical-facilities",
    priority: 0.75,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/facilities/analytical-facilities",
    priority: 0.75,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/facilities/supporting-facilities",
    priority: 0.75,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/facilities/vr-gallery",
    priority: 0.65,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/insight",
    priority: 0.7,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/insight/articles",
    priority: 0.65,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/insight/news",
    priority: 0.65,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/insight/publications",
    priority: 0.65,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/insight/faq",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/contact",
    priority: 0.85,
    changeFrequency: "monthly" as const,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
