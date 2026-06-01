import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import ServicesPageClient from "./ServicesPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/services", {
    title: "Services",
    description:
      "Explore Pharma Metric Labs CRO services, including BA/BE studies, clinical trial services, contract analysis, and regulatory consultation for pharmaceutical development.",
  });
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
