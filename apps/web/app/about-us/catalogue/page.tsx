import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import CataloguePageClient from "./CataloguePageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/about-us/catalogue", {
    title: "Catalogue",
    description:
      "Access Pharma Metric Labs catalogue, company materials, service information, and downloadable references.",
  });
}

export default function CataloguePage() {
  return <CataloguePageClient />;
}
