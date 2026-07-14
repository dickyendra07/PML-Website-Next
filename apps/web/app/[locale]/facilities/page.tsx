import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import FacilitiesPageClient from "./FacilitiesPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/facilities", {
    title: "Facilities & Capability",
    description:
      "Explore Pharma Metric Labs clinical, analytical, and supporting facilities for reliable study execution and laboratory operations.",
  });
}

export default function FacilitiesPage() {
  return <FacilitiesPageClient />;
}
