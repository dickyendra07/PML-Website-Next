import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import ClinicalTrialPageClient from "./ClinicalTrialPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/services/clinical-trial", {
    title: "Clinical Trial Services",
    description:
      "Explore Pharma Metric Labs clinical trial services, including study planning, regulatory coordination, site management, monitoring, and medical writing.",
  });
}

export default function ClinicalTrialPage() {
  return <ClinicalTrialPageClient />;
}
