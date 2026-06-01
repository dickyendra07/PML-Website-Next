import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import CompanyProfilePageClient from "./CompanyProfilePageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/about-us/company-profile", {
    title: "Company Profile",
    description:
      "Explore Pharma Metric Labs company profile, capabilities, experience, quality standards, and CRO service focus.",
  });
}

export default function CompanyProfilePage() {
  return <CompanyProfilePageClient />;
}
