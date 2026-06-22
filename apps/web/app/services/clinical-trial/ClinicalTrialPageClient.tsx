"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import OtherServices from "@/components/OtherServices";

const heroSlides = [
  "/images/pml/services/clinical-trial-hero.png",
  "/images/pml/services/clinical-trial-monitoring.png",
  "/images/pml/services/clinical-trial-regulatory.png",
];

const scopeGroups = [
  {
    title: "Medical Writing",
    icon: "document",
    items: [
      "Study document development",
      "Study report development",
      "Scientific publication",
      "Clinical evaluation report development",
    ],
  },
  {
    title: "Study Sites",
    icon: "building",
    items: [
      "Site feasibility and selection",
      "Laboratory feasibility and selection",
      "Budget negotiation and CTA",
      "GCP training",
      "Study site management and payment",
    ],
  },
  {
    title: "Regulatory",
    icon: "shield",
    items: [
      "EC and BPOM submission support",
      "Import license support",
      "Material transfer agreement support",
      "Inspection and audit support",
    ],
  },
  {
    title: "Clinical and Safety Monitoring",
    icon: "monitor",
    items: [
      "Monitoring visit",
      "Safety monitoring",
      "ISF and TMF maintenance",
      "Investigational product management",
      "Pharmacovigilance support",
      "Study close-out activities",
    ],
  },
  {
    title: "Data Management and Statistics",
    icon: "chart",
    items: [
      "Sample size calculation",
      "Data management plan and statistical analysis plan development",
      "Randomization",
      "Data collection, validation, and cleaning",
      "Statistical analysis",
    ],
  },
  {
    title: "Other Clinical Research Support",
    icon: "network",
    items: [
      "Preclinical studies support",
      "Biocompatibility studies",
      "Health technology assessment",
      "Systematic review and meta-analysis",
    ],
  },
];

const clients = [
  "Pharmaceutical companies",
  "Medical device companies",
  "Biotechnology companies",
  "Food and beverage companies",
  "Cosmetic companies",
  "Contract Research Organizations from other regions or countries",
];

const benefits = [
  {
    title: "End-to-end clinical trial support",
    text: "PML supports clinical research activities from planning and regulatory coordination to monitoring, data management, and study close-out.",
    icon: "check",
  },
  {
    title: "Local CRO expertise in Indonesia",
    text: "PML helps sponsors navigate local site coordination, regulatory requirements, and operational execution in Indonesia.",
    icon: "map",
  },
  {
    title: "Hospital and investigator network",
    text: "Clinical trial activities can be supported through hospital partnerships, site feasibility, and investigator coordination.",
    icon: "network",
  },
  {
    title: "Regulatory and quality readiness",
    text: "Support includes EC/BPOM submission, GCP alignment, inspection readiness, and documentation workflows.",
    icon: "shield",
  },
];

const workflow = [
  "Initial consultation and clinical research requirement review",
  "Study planning, study document development and/or review, site feasibility",
  "Site selection, EC submission, regulatory (BPOM / Kemenkes) submission",
  "EC approval, regulatory (BPOM / Kemenkes) approval, and study initiation",
  "Clinical monitoring, safety monitoring, project management, and study site management",
  "Study close-out, data management, analytical statistics, final report writing",
];

const coreTherapeuticAreas = [
  { title: "Oncology", icon: "oncology" },
  { title: "Nutrition", icon: "nutrition" },
  { title: "Pediatrics", icon: "pediatrics" },
  { title: "Medical Device", icon: "medical-device" },
  { title: "Orthopedic", icon: "orthopedic" },
  { title: "Stem Cell and Derivatives", icon: "stem-cell" },
  { title: "Nephrology", icon: "nephrology" },
];

const extendedTherapeuticAreas = [
  { title: "Cardiology", icon: "cardiology" },
  { title: "Psychology", icon: "psychology" },
  { title: "Respiratory", icon: "respiratory" },
  { title: "Hormonal", icon: "hormonal" },
  { title: "Endocrinology", icon: "endocrinology" },
  { title: "Gastroenterology", icon: "gastroenterology" },
  { title: "Immunomodulator", icon: "immunomodulator" },
  { title: "Herbal / Standardized Herbal Medicine / Phytopharma", icon: "herbal" },
];

const requirements = [
  "Study objective and clinical research category",
  "Product type or investigational product information",
  "Target indication, therapeutic area, and intended population",
  "Study protocol or draft study design, if available",
  "Target timeline, study location preference, and site requirements",
  "Regulatory destination or submission requirement, if available",
];

const faqs = [
  {
    question: "Why conduct clinical trials in Indonesia?",
    answer:
      "Indonesia offers access to a large and diverse patient population, experienced investigators, competitive operational costs, and growing regulatory support for clinical research.",
  },
  {
    question: "What services can PML provide in terms of clinical trials?",
    answer:
      "PML provides end-to-end clinical research services throughout the clinical trial process, including study planning, regulatory strategy, ethics committee submission, site feasibility and selection, project management, clinical monitoring, data management, medical monitoring, pharmacovigilance, and study close-out activities. PML also supports preclinical studies, medical writing, Clinical Evaluation Reports, Health Technology Assessment, systematic review, and meta-analysis.",
  },
  {
    question: "What therapeutic areas does PML have experience in for clinical trials?",
    answer:
      "PML has experience supporting clinical trials across a wide range of therapeutic areas, including acne, oncology, nutrition, pediatrics, nephrology, orthopedics, medical devices, and stem cells and their derivatives.",
  },
  {
    question: "Does PML have experience handling multi-country clinical trials?",
    answer:
      "Yes. PML has experience participating as the local CRO partner for Indonesia in multi-country clinical trials led by global sponsors or global CROs. In these studies, PML supports local study execution and coordination while ensuring compliance with Indonesian regulatory requirements and applicable international guidelines such as Good Clinical Practice standards.",
  },
];

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12L10 17L20 7"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ name }: { name: string }) {
  if (name === "map") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 18L3 21V6L9 3L15 6L21 3V18L15 21L9 18Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 3V18M15 6V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "network") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 7.5L9.5 10M16.5 10L18 7.5M16.5 14L18 16.5M7 16.5L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L19 6V11C19 15.8 16 19.2 12 21C8 19.2 5 15.8 5 11V6L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "building") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 20V7L12 4L18 7V20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 10H10.5M13.5 10H15M9 14H10.5M13.5 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "monitor") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 5H20V16H4V5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 20H16M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 11L10.5 13.5L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "chart") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 19H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9 16V11M13 16V8M17 16V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "document") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 3H14L18 7V21H7V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 3V7H18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return <CheckIcon size={24} />;
}

function ClientIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M8 21V7L12 3L16 7V21" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M5 21H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 10H14M10 14H14M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="7" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 10V16M9 13H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 7V5.5C8 4.7 8.7 4 9.5 4H14.5C15.3 4 16 4.7 16 5.5V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 3V8L5.8 17.2C5.1 18.8 6.2 20.5 8 20.5H16C17.8 20.5 18.9 18.8 18.2 17.2L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (index === 3) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M7 4V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 4V8C5 9.7 6.3 11 8 11C9.7 11 11 9.7 11 8V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 11V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 4V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 4C18 5.2 19 7.2 19 10V12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (index === 4) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 10H15V20H9V10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 10V7.5L12 4L14 7.5V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17.5 6.5L18.5 8.5L20.5 9.5L18.5 10.5L17.5 12.5L16.5 10.5L14.5 9.5L16.5 8.5L17.5 6.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    );
  }

  return <ServiceIcon name="network" />;
}


function TherapeuticAreaIcon({ name }: { name: string }) {
  if (name === "cardiology") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 20S5 15.8 5 9.5C5 6.8 7.1 5 9.4 5C10.7 5 11.7 5.6 12 6.3C12.3 5.6 13.3 5 14.6 5C16.9 5 19 6.8 19 9.5C19 15.8 12 20 12 20Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M7 12H10L11 10L13 15L14.5 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "oncology") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 5V3M12 21V19M5 12H3M21 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "nutrition" || name === "herbal") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M6 13C6 8 10 5 18 5C18 13 15 18 10 18C7.6 18 6 16.1 6 13Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 15C12 11.5 14 9.5 18 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 19C9 18.2 10.6 17.1 12 15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "psychology") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 20V17H8C6.3 17 5 15.7 5 14V11C5 7.1 8.1 4 12 4C15.9 4 19 7.1 19 11C19 14 17.3 16.6 15 17.8V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 11C9.8 10.2 10.7 10.2 11.5 11C12.3 10.2 13.2 10.2 14 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "pediatrics") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M5 21C5.8 17.6 8.3 15.5 12 15.5C15.7 15.5 18.2 17.6 19 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M9.5 8.5H9.6M14.4 8.5H14.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "respiratory") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 4V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12C10 10 7 9 5.5 11.5C4.2 13.7 4 17 4 20C7.5 20 10 18.5 10.5 15L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 12C14 10 17 9 18.5 11.5C19.8 13.7 20 17 20 20C16.5 20 14 18.5 13.5 15L12 12Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "medical-device") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M8 20H16M12 17V20M12 8V14M9 11H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "orthopedic") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M7.5 7.5L16.5 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6.2 10C4.8 9.8 4 8.8 4 7.6C4 6.3 5 5.3 6.3 5.3C6.5 4 7.5 3.2 8.7 3.2C10 3.2 11 4.2 11 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.8 14C19.2 14.2 20 15.2 20 16.4C20 17.7 19 18.7 17.7 18.7C17.5 20 16.5 20.8 15.3 20.8C14 20.8 13 19.8 13 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "stem-cell") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M7 4C12 4 12 20 17 20M17 4C12 4 12 20 7 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 8H16M8 12H16M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "hormonal" || name === "endocrinology") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 4C14.8 7.2 17 10.2 17 13.5C17 16.8 14.8 19 12 19C9.2 19 7 16.8 7 13.5C7 10.2 9.2 7.2 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9.5 14H14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "gastroenterology") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M13 4C16 4.8 18 7 18 10C18 12.7 16.2 14 14 14H11.5C9.6 14 8 15.6 8 17.5C8 19 9 20 10.5 20C13.5 20 16 18 16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 4C8 5.2 7 6.9 7 9C7 11 8.2 12.3 10 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "immunomodulator") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L19 6V11C19 15.8 16 19.2 12 21C8 19.2 5 15.8 5 11V6L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M12 8V15M8.5 11.5H15.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "nephrology") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 5C6.5 5 5 7.3 5 10.5C5 15 7.2 19 10 19C12 19 12 16.5 12 14V10C12 7.2 11 5 9 5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M15 5C17.5 5 19 7.3 19 10.5C19 15 16.8 19 14 19C12 19 12 16.5 12 14" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  return <CheckIcon size={24} />;
}

export default function ClinicalTrialPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTherapeuticTab, setActiveTherapeuticTab] = useState<"core" | "all">("core");

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <main>
      <section className="relative min-h-[520px] overflow-hidden bg-black text-white md:min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          {heroSlides.map((slideImage, index) => (
            <Image
              key={slideImage}
              src={slideImage}
              alt=""
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-[#039147]/22" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-[#039147]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.075]" />

        <div className="pml-container relative flex min-h-[520px] flex-col items-start justify-center py-14 md:min-h-[calc(100vh-80px)] md:py-24">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs font-bold text-black/58 md:mb-10 md:text-sm" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-[#039147]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="transition hover:text-[#039147]">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#039147]">Clinical Trial</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/20 bg-white/95 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#039147] shadow-sm backdrop-blur md:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Clinical Trial
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-black md:mt-6 md:text-6xl lg:text-[68px]">
              End-to-end clinical trial support with local expertise
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-black/70 md:mt-6 md:text-lg md:leading-8">
              PML supports sponsors with clinical research services across study planning,
              regulatory coordination, site management, monitoring, data management, and
              medical writing.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold md:py-4 text-[#039147] shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                Request a Proposal
              </button>

              <a
                href="#clinical-overview"
                className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-7 py-3.5 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white md:py-4"
              >
                Explore Service
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {heroSlides.map((slideImage, index) => (
              <button
                key={slideImage}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide ? "w-8 bg-[#039147]" : "w-2.5 bg-black/25"
                }`}
                aria-label={`Go to Clinical Trial hero slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="clinical-overview" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Service Overview
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Clinical research support from planning to close-out
              </h2>
            </div>

            <div className="space-y-5 text-sm leading-7 text-black/65 md:text-base md:leading-8">
              <p>
                PML provides clinical trial for sponsors that need reliable local
                execution, regulatory coordination, and study management support in Indonesia.
                The service covers study preparation, site feasibility, ethics and regulatory
                coordination, monitoring, safety support, data management, and medical writing.
              </p>

              <p>
                With experience across multiple therapeutic areas and multi-country study
                participation, PML can act as a local CRO partner for sponsors and global CROs
                that require strong operational support and compliance with Indonesian
                requirements and international Good Clinical Practice standards.
              </p>
            </div>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="w-[78vw] max-w-[320px] shrink-0 snap-start rounded-[26px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:w-auto md:max-w-none md:rounded-[28px] md:p-6"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#039147]/10 bg-[#eaf8f0] text-[#039147] transition group-hover:scale-105">
                  <ServiceIcon name={benefit.icon} />
                </div>

                <h3 className="text-lg font-black leading-tight text-black">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{benefit.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore benefits
          </p>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Scope of Service
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Complete clinical trial service coverage
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base">
              PML supports multiple areas of clinical research execution, from medical writing
              and site readiness to monitoring, regulatory coordination, data management, and
              statistical analysis.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {scopeGroups.map((group) => (
              <article
                key={group.title}
                className="w-[78vw] max-w-[320px] shrink-0 snap-start rounded-[26px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:w-auto md:max-w-none md:rounded-[30px] md:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] md:mb-5 md:h-12 md:w-12">
                  <ServiceIcon name={group.icon} />
                </div>

                <h3 className="text-lg font-black leading-tight text-black md:text-xl">{group.title}</h3>

                <ul className="mt-4 space-y-2.5 md:mt-5 md:space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-2 text-xs font-bold leading-5 text-black/65 md:gap-3 md:text-sm md:leading-6">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#039147]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore scope
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="max-w-4xl">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Target Client
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Built for sponsors that need reliable clinical research execution
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black/65">
              PML supports clinical research needs for pharmaceutical companies, medical device
              companies, biotechnology companies, food and beverage companies, cosmetic companies,
              and CRO partners from other regions or countries.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 md:mt-12 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
            {clients.map((client, index) => (
              <article
                key={client}
                className="group rounded-[28px] border border-black/5 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] transition group-hover:bg-[#eaf8f0] group-hover:text-[#039147]">
                  <ClientIcon index={index} />
                </div>

                <h3 className="text-base font-black leading-tight text-black">{client}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Process / Workflow
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                A structured workflow from study preparation to close-out
              </h2>

              <div className="mt-8 space-y-4">
                {workflow.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-[24px] border border-black/5 bg-white p-5 shadow-sm">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#039147] text-sm font-black text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-2 text-sm font-bold leading-6 text-black/70">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
              <Image
                src="/images/pml/services/clinical-trial-monitoring.png"
                alt="Clinical trial monitoring and coordination"
                width={900}
                height={675}
                className="aspect-[4/3] w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Therapeutic Areas
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Experience across multiple clinical research areas
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base">
              PML has experience supporting clinical trials and related clinical research
              activities across a wide range of therapeutic and product areas.
            </p>
          </div>

          <div className="mt-12 w-full">
            <div className="mx-auto flex w-fit rounded-full border border-[#039147]/12 bg-[#f4fbf7] p-1 shadow-sm">
              {[
                ["core", "Core Experiences"],
                ["all", "All Study Areas"],
              ].map(([value, label]) => {
                const active = activeTherapeuticTab === value;

                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setActiveTherapeuticTab(value as "core" | "all")}
                    className={`rounded-full px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] transition md:px-6 ${
                      active
                        ? "bg-[#039147] text-white shadow-[0_14px_30px_rgba(3,145,71,0.22)]"
                        : "text-[#039147] hover:bg-white"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="mt-8 rounded-[36px] border border-black/5 bg-white p-4 shadow-[0_30px_90px_rgba(0,0,0,0.06)] md:p-6">
              <div className="mb-6 flex flex-col gap-3 rounded-[28px] bg-[#f4fbf7] px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#039147]">
                    {activeTherapeuticTab === "core" ? "Highlighted capability" : "Extended capability"}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-black md:text-2xl">
                    {activeTherapeuticTab === "core"
                      ? "PML core clinical trial experience areas"
                      : "Additional clinical research study areas"}
                  </h3>
                </div>

                <p className="max-w-xl text-sm font-medium leading-7 text-black/58">
                  {activeTherapeuticTab === "core"
                    ? "Key areas with stronger experience signals are presented first for clearer sponsor understanding."
                    : "The complete list reflects therapeutic and product areas that may be discussed based on project needs."}
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                {(activeTherapeuticTab === "core" ? coreTherapeuticAreas : extendedTherapeuticAreas).map((area) => (
                  <article
                    key={area.title}
                    className="group flex min-h-[104px] items-center gap-4 rounded-[26px] border border-black/5 bg-white p-4 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#039147]/20 hover:shadow-[0_20px_60px_rgba(3,145,71,0.12)]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] transition duration-300 group-hover:bg-[#039147] group-hover:text-white group-hover:shadow-[0_16px_34px_rgba(3,145,71,0.22)]">
                      <TherapeuticAreaIcon name={area.icon} />
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-base font-black leading-snug text-black">
                        {area.title}
                      </h4>
                      {activeTherapeuticTab === "core" && (
                        <p className="mt-2 text-[10px] font-black uppercase tracking-[0.13em] text-[#039147]">
                          Core experience
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4fbf7] px-4 py-20 text-black md:py-28">
        <Image
          src="/images/pml/services/clinical-trial-proof.png"
          alt=""
          fill
          className="object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-white/72" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/84 to-[#039147]/12" />

        <svg
          className="absolute right-[-120px] top-[-90px] h-[400px] w-[400px] text-[#039147]/10"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <path d="M200 20L356 110V290L200 380L44 290V110L200 20Z" stroke="currentColor" strokeWidth="4" />
        </svg>

        <div className="pml-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Proof & Trust Signals
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Local CRO support for Indonesia and multi-country clinical trials
            </h2>

            <p className="mt-6 text-base leading-8 text-black/68">
              PML has experience participating as the local CRO partner for Indonesia in
              multi-country clinical trials led by global sponsors or global CROs, supporting
              local execution while maintaining regulatory and GCP alignment.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              ["Local CRO", "Indonesia-based coordination for clinical research execution."],
              ["GCP", "Study support aligned with Good Clinical Practice standards."],
              ["Multi-country", "Experience supporting studies led by global sponsors and CROs."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-[30px] border border-black/5 bg-white/92 p-7 shadow-[0_18px_55px_rgba(0,0,0,0.07)] backdrop-blur transition hover:-translate-y-1 hover:border-[#039147]/20 hover:shadow-[0_26px_70px_rgba(3,145,71,0.12)]"
              >
                <p className="text-3xl font-black text-black md:text-4xl">{title}</p>
                <p className="mt-4 text-sm font-bold leading-7 text-black/62">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Required Information
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                What we need to start clinical trial discussion
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base">
                To prepare a relevant proposal or consultation, sponsors can share available
                study, product, regulatory, timeline, and site-related information.
              </p>

              <button
                type="button"
                onClick={openProposal}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)]"
              >
                Discuss This Service
              </button>
            </div>

            <div className="grid gap-4">
              {requirements.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-[22px] border border-black/5 bg-white p-5 shadow-sm">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-[#039147]">
                    <CheckIcon />
                  </span>
                  <p className="text-sm font-bold leading-6 text-black/70">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="clinical-faq" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Clinical Trial FAQ
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto mt-8 max-w-4xl space-y-3 md:mt-10 md:space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[22px] border border-black/5 bg-white p-5 shadow-sm md:rounded-[24px] md:p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-black text-black md:gap-6 md:text-lg">
                  {faq.question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-[#039147] transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-black/60">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OtherServices current="clinical-trial" variant="three" />

      <section className="bg-white pb-24 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[36px] bg-[#f4fbf7] px-8 py-16 text-center text-black shadow-[0_28px_90px_rgba(0,0,0,0.12)] md:px-14 md:py-20">
            <Image
              src="/images/pml/services/clinical-trial-cta.png"
              alt=""
              fill
              className="object-cover opacity-46"
            />

            <div className="absolute inset-0 bg-white/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/74 to-[#039147]/18" />
            <div className="pml-hex-pattern absolute inset-0 opacity-[0.06]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#039147]/10 bg-white/90 shadow-lg backdrop-blur">
                <Image src="/images/LOGO-PML.png" alt="PML" width={64} height={40} className="h-8 w-auto" />
              </div>

              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Need clinical trial support in Indonesia?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/68">
                Share your clinical research requirements with our team and we will help identify
                the right service scope, required information, and next steps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-[#039147] px-8 py-4 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5 hover:bg-[#027a3c]"
                >
                  Request a Proposal
                </button>

                <a
                  href="#clinical-overview"
                  className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-8 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
                >
                  Review Clinical Trial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
