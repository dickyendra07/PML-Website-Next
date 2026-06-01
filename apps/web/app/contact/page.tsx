import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Pharma Metric Labs to discuss BA/BE studies, clinical trial services, contract analysis, regulatory consultation, and pharmaceutical project inquiries.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
