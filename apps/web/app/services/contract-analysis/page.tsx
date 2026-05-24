import ServiceDetailTemplate from "@/components/pages/ServiceDetailTemplate";
import { servicePages } from "@/data/service-pages";

export const metadata = {
  title: "Contract Analysis | Pharma Metric Labs",
  description: "Reliable analytical testing support for product quality, safety, compliance, and documentation needs.",
};

export default function ContractAnalysisPage() {
  return <ServiceDetailTemplate data={servicePages["contract-analysis"]} />;
}
