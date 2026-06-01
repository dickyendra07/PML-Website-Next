import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Pharma Metric Labs CRO services, including BA/BE studies, clinical trial services, contract analysis, and regulatory consultation for pharmaceutical development.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
