import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import ContractAnalysisPageClient from "./ContractAnalysisPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/services/contract-analysis", {
    title: "Contract Analysis",
    description:
      "Explore Pharma Metric Labs contract analysis services for analytical testing, product quality, safety, compliance, and documentation needs.",
  });
}

export default function ContractAnalysisPage() {
  return <ContractAnalysisPageClient />;
}
