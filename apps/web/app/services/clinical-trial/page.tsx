import ServiceDetailTemplate from "@/components/pages/ServiceDetailTemplate";
import { servicePages } from "@/data/service-pages";

export const metadata = {
  title: "Clinical Trial Services | Pharma Metric Labs",
  description: "Clinical research support across study planning, regulatory coordination, site management, monitoring, and medical writing.",
};

export default function ClinicalTrialPage() {
  return <ServiceDetailTemplate data={servicePages["clinical-trial"]} />;
}
