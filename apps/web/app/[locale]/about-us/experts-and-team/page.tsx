import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import ExpertsTeamPageClient from "./ExpertsTeamPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/about-us/experts-and-team", {
    title: "Experts & Team",
    description:
      "Meet Pharma Metric Labs multidisciplinary experts across clinical, laboratory, regulatory, and project workflows.",
  });
}

export default function ExpertsTeamPage() {
  return <ExpertsTeamPageClient />;
}
