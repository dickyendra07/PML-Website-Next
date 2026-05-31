import FacilityDetailTemplate from "@/components/pages/FacilityDetailTemplate";
import { getFacilityByKey } from "@/data/facilities";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Supporting Facilities | Pharma Metric Labs",
  description: "Supporting facility infrastructure for study and laboratory operations at Pharma Metric Labs.",
};

export default function SupportingFacilitiesPage() {
  const data = getFacilityByKey("supporting-facilities");
  if (!data) notFound();

  return <FacilityDetailTemplate data={data} />;
}
