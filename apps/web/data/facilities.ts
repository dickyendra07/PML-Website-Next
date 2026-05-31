export type FacilityKey =
  | "clinical-facilities"
  | "analytical-facilities"
  | "supporting-facilities"
  | "vr-gallery";

export type FacilityItem = {
  key: FacilityKey;
  title: string;
  eyebrow: string;
  href: string;
  summary: string;
  image: string;
  gallery: string[];
  points: string[];
};

export const facilities: FacilityItem[] = [
  {
    key: "clinical-facilities",
    title: "Clinical Facilities",
    eyebrow: "Clinical Study Support",
    href: "/facilities/clinical-facilities",
    summary:
      "Clinical facility support for controlled study activities, including expanded 70-bed capacity, screening and dosing areas, experienced clinical research staff, and 24-hour medical support.",
    image: "/images/pml/facilities-gallery/clinical-main.jpg",
    gallery: [
      "/images/pml/facilities-gallery/clinical-main.jpg",
      "/images/pml/facilities-gallery/clinical-room.jpg",
      "/images/pml/facilities-gallery/clinical-support.jpg",
      "/images/pml/facilities-gallery/clinical-bed.jpg",
      "/images/pml/facilities-gallery/clinical-area.jpg",
      "/images/pml/facilities-gallery/clinical-extra.jpg",
    ],
    points: [
      "70-bed clinical facility capacity",
      "Dedicated screening and dosing area",
      "Experienced clinical research staff",
      "24-hour medical support",
      "Healthy volunteer database support",
      "Ambulance support for study operations",
    ],
  },
  {
    key: "analytical-facilities",
    title: "Analytical Facilities",
    eyebrow: "Laboratory Capability",
    href: "/facilities/analytical-facilities",
    summary:
      "Analytical laboratory capability supported by instruments and workflows for bioanalysis, contract analysis, product testing, documentation, and regulatory-ready reporting.",
    image: "/images/pml/facilities-gallery/analytical-main.jpg",
    gallery: [
      "/images/pml/facilities-gallery/analytical-main.jpg",
      "/images/pml/facilities-gallery/analytical-lab-1.jpg",
      "/images/pml/facilities-gallery/analytical-lab-2.jpg",
      "/images/pml/facilities-gallery/analytical-equipment-1.jpg",
      "/images/pml/facilities-gallery/analytical-equipment-2.jpg",
      "/images/pml/facilities-gallery/analytical-equipment-3.jpg",
      "/images/pml/facilities-gallery/analytical-equipment-4.jpg",
      "/images/pml/facilities-gallery/analytical-equipment-5.jpg",
      "/images/pml/facilities-gallery/analytical-equipment-6.jpg",
      "/images/pml/facilities-gallery/analytical-equipment-7.jpg",
    ],
    points: [
      "LC-MS/MS analytical support",
      "GC-FID and GC-MS capability",
      "ICP-OES support",
      "HPLC analytical workflow",
      "Bioanalytical method support",
      "Laboratory documentation and reporting",
    ],
  },
  {
    key: "supporting-facilities",
    title: "Supporting Facilities",
    eyebrow: "Operational Support",
    href: "/facilities/supporting-facilities",
    summary:
      "Supporting facility infrastructure for reliable study and laboratory operations, including drug storage, archive room, sample handling, and study operation support.",
    image: "/images/pml/facilities-gallery/support-main.jpg",
    gallery: [
      "/images/pml/facilities-gallery/support-main.jpg",
      "/images/pml/facilities-gallery/support-room.jpg",
      "/images/pml/facilities-gallery/support-storage.jpg",
      "/images/pml/facilities-gallery/support-archive.jpg",
      "/images/pml/facilities-gallery/support-operation.jpg",
    ],
    points: [
      "Drug storage room",
      "Archive room",
      "Sample receiving and handling support",
      "Study operation infrastructure",
      "Documentation workflow support",
      "Project coordination support",
    ],
  },
  {
    key: "vr-gallery",
    title: "VR Gallery",
    eyebrow: "Facility Experience",
    href: "/facilities/vr-gallery",
    summary:
      "Interactive facility experience that allows visitors and sponsors to explore PML facility visuals through the official VR tour gallery.",
    image: "/images/pml/facilities-gallery/analytical-lab-1.jpg",
    gallery: [
      "/images/pml/facilities-gallery/analytical-lab-1.jpg",
      "/images/pml/facilities-gallery/clinical-main.jpg",
      "/images/pml/facilities-gallery/support-main.jpg",
    ],
    points: [
      "Interactive VR facility tour",
      "Visual overview of PML environment",
      "External VR gallery access",
      "Useful for sponsor introduction",
      "Supports remote facility review",
      "Direct link to official VR experience",
    ],
  },
];

export function getFacilityByKey(key: FacilityKey) {
  return facilities.find((facility) => facility.key === key);
}
