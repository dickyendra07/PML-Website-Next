import FacilityDetailTemplate from "@/components/pages/FacilityDetailTemplate";
import { getFacilityByKey } from "@/data/facilities";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Analytical Facilities",
  description:
    "Analytical laboratory capability and instrument support at Pharma Metric Labs.",
};

export default function AnalyticalFacilitiesPage() {
  const data = getFacilityByKey("analytical-facilities");
  if (!data) notFound();

  return <FacilityDetailTemplate data={data} />;
}
