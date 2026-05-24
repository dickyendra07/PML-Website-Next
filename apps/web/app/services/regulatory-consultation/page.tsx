import ServiceDetailTemplate from "@/components/pages/ServiceDetailTemplate";
import { servicePages } from "@/data/service-pages";

export const metadata = {
  title: "Regulatory Consultation | Pharma Metric Labs",
  description: "Regulatory affairs support for BPOM registration, ACTD documents, compliance, and submission readiness.",
};

export default function RegulatoryConsultationPage() {
  return <ServiceDetailTemplate data={servicePages["regulatory-consultation"]} />;
}
