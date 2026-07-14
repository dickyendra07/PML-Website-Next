import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Pharma Metric Labs to discuss BA/BE study, clinical trial, contract analysis, regulatory management, and pharmaceutical project inquiries.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
