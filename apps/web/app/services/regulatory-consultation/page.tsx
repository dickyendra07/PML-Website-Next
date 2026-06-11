import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import RegulatoryConsultationPageClient from "./RegulatoryConsultationPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/services/regulatory-consultation", {
    title: "Regulatory Management",
    description:
      "Explore Pharma Metric Labs regulatory management services for BPOM registration, ACTD documents, compliance, and submission readiness.",
  });
}

export default function RegulatoryConsultationPage() {
  return <RegulatoryConsultationPageClient />;
}
