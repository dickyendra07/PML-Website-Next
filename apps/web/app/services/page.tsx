import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import ServicesPageClient from "./ServicesPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/services", {
    title: "Services",
    description:
      "Explore Pharma Metric Labs CRO services, including BA/BE study, clinical trial, contract analysis, and regulatory management for pharmaceutical development.",
  });
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
