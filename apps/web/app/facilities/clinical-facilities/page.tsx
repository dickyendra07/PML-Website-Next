import FacilityDetailTemplate from "@/components/pages/FacilityDetailTemplate";
import { getFacilityByKey } from "@/data/facilities";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Clinical Facilities | Pharma Metric Labs",
  description: "Clinical facility support for controlled study activities at Pharma Metric Labs.",
};

export default function ClinicalFacilitiesPage() {
  const data = getFacilityByKey("clinical-facilities");
  if (!data) notFound();

  return <FacilityDetailTemplate data={data} />;
}
