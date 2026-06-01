import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import AboutUsPageClient from "./AboutUsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/about-us", {
    title: "About Pharma Metric Labs",
    description:
      "Learn about Pharma Metric Labs, an independent CRO in Indonesia with multidisciplinary expertise, scientific integrity, and reliable study execution support.",
  });
}

export default function AboutUsPage() {
  return <AboutUsPageClient />;
}
