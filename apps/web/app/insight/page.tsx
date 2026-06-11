import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import InsightPageClient from "./InsightPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/insight", {
    title: "Insight",
    description:
      "Explore Pharma Metric Labs articles, news, publications, and FAQ content about CRO services, BA/BE study, clinical trials, and regulatory topics.",
  });
}

export default function InsightPage() {
  return <InsightPageClient />;
}
