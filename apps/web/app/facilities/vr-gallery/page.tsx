import FacilityDetailTemplate from "@/components/pages/FacilityDetailTemplate";
import { getFacilityByKey } from "@/data/facilities";
import { notFound } from "next/navigation";

export const metadata = {
  title: "VR Gallery",
  description: "Explore Pharma Metric Labs facility through the official VR Gallery.",
};

export default function VrGalleryPage() {
  const data = getFacilityByKey("vr-gallery");
  if (!data) notFound();

  return <FacilityDetailTemplate data={data} />;
}
