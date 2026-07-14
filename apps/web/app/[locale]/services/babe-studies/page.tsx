import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import BabeStudiesPageClient from "./BabeStudiesPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/services/babe-studies", {
    title: "BA/BE Study",
    description:
      "Explore Pharma Metric Labs BA/BE study services, including clinical conduct, bioanalysis, reporting, and regulatory-ready study support.",
  });
}

export default function BabeStudiesPage() {
  return <BabeStudiesPageClient />;
}
