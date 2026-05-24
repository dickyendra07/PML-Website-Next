import ServiceDetailTemplate from "@/components/pages/ServiceDetailTemplate";
import { servicePages } from "@/data/service-pages";

export const metadata = {
  title: "BA/BE Studies | Pharma Metric Labs",
  description: "End-to-end bioequivalence study support from clinical conduct and bioanalysis to regulatory-ready reporting.",
};

export default function BabeStudiesPage() {
  return <ServiceDetailTemplate data={servicePages.babe} />;
}
