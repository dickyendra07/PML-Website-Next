import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/page-seo";
import ClientsPageClient from "./ClientsPageClient";

export async function generateMetadata(): Promise<Metadata> {
  return generatePageMetadata("/about-us/clients", {
    title: "Clients & Network",
    description:
      "Learn about Pharma Metric Labs local and international client network, hospital partnerships, and investigator collaboration.",
  });
}

export default function ClientsPage() {
  return <ClientsPageClient />;
}
