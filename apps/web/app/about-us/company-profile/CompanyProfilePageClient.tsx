"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const corporateStats = [
  {
    value: "20+",
    label: "Years Experience",
    desc: "Long-term CRO experience for local and international sponsors.",
  },
  {
    value: "6000+",
    label: "Completed Projects",
    desc: "Completed projects across clinical, analytical, and regulatory service areas.",
  },
  {
    value: "150+",
    label: "Ongoing Projects",
    desc: "Current project pipeline supported by PML teams.",
  },
  {
    value: "300+",
    label: "Sponsors",
    desc: "Trusted by local and international sponsors across regulated industries.",
  },
];

const industryCards = [
  {
    title: "Pharmaceuticals",
    desc: "Drug development, BA/BE studies, analytical testing, and regulatory-ready documentation.",
    icon: "pharma",
  },
  {
    title: "Biotechnology",
    desc: "Scientific support for biologics, advanced therapy products, and technical development needs.",
    icon: "bio",
  },
  {
    title: "Medical Devices",
    desc: "Clinical, regulatory, and documentation support for device-related product pathways.",
    icon: "device",
  },
  {
    title: "Food & Beverage",
    desc: "Laboratory and quality support for selected food, beverage, and UMKM product categories.",
    icon: "food",
  },
  {
    title: "Cosmetics",
    desc: "Testing and compliance support for cosmetic product quality and safety requirements.",
    icon: "cosmetic",
  },
  {
    title: "Traditional Medicines",
    desc: "Regulatory and analytical support for herbal, traditional, and quasi-drug product needs.",
    icon: "traditional",
  },
];

const countries = [
  "United States of America",
  "South Korea",
  "Cambodia",
  "Hong Kong",
  "Indonesia",
  "Malaysia",
  "Maldives",
  "Mauritius",
  "Mongolia",
  "Myanmar",
  "Nigeria",
  "Philippines",
  "Singapore",
  "Sri Lanka",
  "Vietnam",
];


const landmarkByCountry: Record<string, { landmark: string; image: string }> = {
  Cambodia: {
    landmark: "Angkor Wat",
    image: "https://images.unsplash.com/photo-1600431117492-7e5e1c7263c0?auto=format&fit=crop&w=1200&q=80",
  },
  "Hong Kong": {
    landmark: "Victoria Harbour",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1200&q=80",
  },
  Indonesia: {
    landmark: "Borobudur Temple",
    image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
  },
  Malaysia: {
    landmark: "Petronas Twin Towers",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80",
  },
  Maldives: {
    landmark: "Maldives Atolls",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80",
  },
  Mauritius: {
    landmark: "Le Morne Brabant",
    image: "https://images.unsplash.com/photo-1589308454676-22fbe0b9f9cb?auto=format&fit=crop&w=1200&q=80",
  },
  Mongolia: {
    landmark: "Gobi Desert",
    image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=1200&q=80",
  },
  Myanmar: {
    landmark: "Shwedagon Pagoda",
    image: "https://images.unsplash.com/photo-1583499871880-de841d1ace2a?auto=format&fit=crop&w=1200&q=80",
  },
  Nigeria: {
    landmark: "Lagos City",
    image: "https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1200&q=80",
  },
  Philippines: {
    landmark: "Manila Bay",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80",
  },
  Singapore: {
    landmark: "Marina Bay Sands",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80",
  },
  "Sri Lanka": {
    landmark: "Sigiriya Rock",
    image: "https://images.unsplash.com/photo-1588255255721-5b7f8a1f1c8b?auto=format&fit=crop&w=1200&q=80",
  },
  Vietnam: {
    landmark: "Ha Long Bay",
    image: "https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=1200&q=80",
  },
};

const countryDetails = countries.map((country) => {
  const landmark = landmarkByCountry[country] ?? {
    landmark: country,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  };

  return {
    name: country,
    landmark: landmark.landmark,
    title: `${country} regulatory acceptance`,
    desc: `PML’s study report acceptance experience in ${country} supports sponsor confidence for regulatory submission readiness across regional and international markets.`,
    image: landmark.image,
  };
});

const serviceEcosystem = [
  {
    title: "Contract Analysis",
    desc: "Analytical Development Center PML provides laboratory analysis support for product quality, safety, compliance, analytical method development, validation, and documentation needs.",
    href: "/services/contract-analysis",
  },
  {
    title: "BA/BE Study",
    desc: "Bioavailability and bioequivalence study support from clinical conduct and bioanalysis to regulatory-ready reporting.",
    href: "/services/babe-studies",
  },
  {
    title: "Clinical and Preclinical Trial",
    desc: "Clinical research support including study preparation, site coordination, monitoring, documentation, and project execution.",
    href: "/services/clinical-trial",
  },
  {
    title: "Regulatory Management",
    desc: "Regulatory strategy, submission preparation, product review, and post-market compliance support.",
    href: "/services/regulatory-consultation",
  },
];

const accreditations = [
  {
    title: "Testing Laboratory – SNI ISO/IEC 17025:2017",
    label: "Laboratory Accreditation",
    desc: "Demonstrates our commitment to technical competence, quality, and reliable testing results.",
    icon: "lab",
  },
  {
    title: "Kemenkes (Ministry of Health of Republic of Indonesia)",
    label: "Regulatory Inspection",
    desc: "Recommended by Kemenkes to conduct medical device studies.",
    icon: "shield",
  },
  {
    title: "Malaysian NPRA",
    label: "International Recognition",
    desc: "PML is listed under the Bioequivalence Centre Compliance Programme of the National Pharmaceutical Regulatory Agency (NPRA), Ministry of Health Malaysia.",
    icon: "global",
  },
  {
    title: "Plenary Accreditation",
    label: "Clinical Site Readiness",
    desc: "The highest level of certification awarded to primary clinics by Kemenkes. It proves that our clinic consistently complies with strict national health regulations.",
    icon: "clinical",
  },
];

const contactItems = [
  {
    title: "Office Address",
    value: "Gedung Indra Sentral Unit R-U, Jl. Let. Jend. Suprapto No. 60, Cempaka Putih, Jakarta Pusat 10520, Indonesia",
  },
  {
    title: "Phone",
    value: "(021) 4265310",
  },
  {
    title: "Email",
    value: "info@pharmametriclabs.com",
  },
  {
    title: "Website",
    value: "www.pharmametriclabs.com",
  },
];

function IndustryIcon({ name }: { name: string }) {
  const common = "h-6 w-6";

  if (name === "pharma") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 21V8.5a4 4 0 0 1 8 0V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 21h12M8 12h8M10 5h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "bio") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M8 4c4 2 4 6 0 8s-4 6 0 8M16 4c-4 2-4 6 0 8s4 6 0 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M8 7h8M8 12h8M8 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "device") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="7" y="3" width="10" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10 7h4M10 17h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "food") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M7 3v8M11 3v8M7 7h4M9 11v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 3v18M17 3c2 2 3 5 3 8 0 2-1 4-3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "cosmetic") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 10h6l1 10H8l1-10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 10V6a2 2 0 0 1 4 0v4M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21c4.5-3 7-6.5 7-10a7 7 0 0 0-14 0c0 3.5 2.5 7 7 10Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 11c2.5 0 4-1.5 4-4 2.5 1 4 3 4 5.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function AccreditationIcon({ name }: { name: string }) {
  const common = "h-6 w-6";

  if (name === "lab") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 3h6M10 3v5l-4.4 9.2A2.6 2.6 0 0 0 8 21h8a2.6 2.6 0 0 0 2.4-3.8L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 15h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3 19 6v5c0 4.8-2.8 8.2-7 10-4.2-1.8-7-5.2-7-10V6l7-3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="m9 12 2 2 4-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "global") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9S14.2 18.6 12 21M12 3C9.8 5.4 8.7 8.4 8.7 12S9.8 18.6 12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 21V7a4 4 0 0 1 8 0v14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 21h12M9 11h6M10 4h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function CompanyProfilePage() {
  const [activeCountry, setActiveCountry] = useState(countryDetails[0]);

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/pml/services/contract-analysis-cta.png"
          alt=""
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-[#039147]/22" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-[#039147]/20" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.075]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58">
            <Link href="/" className="transition hover:text-[#039147]">Home</Link>
            <span>/</span>
            <Link href="/about-us" className="transition hover:text-[#039147]">About Us</Link>
            <span>/</span>
            <span className="text-[#039147]">Company Profile</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/20 bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147] shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#039147]" />
                Company Profile
              </p>

              <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
                Accelerating research with Pharma Metric Labs
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
                Pharma Metric Labs is an Indonesia-based Contract Research Organization supporting
                pharmaceutical and healthcare development through BA/BE study, clinical research,
                contract analysis, and regulatory affairs consultation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#corporate-snapshot"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
                >
                  View Profile
                </a>

                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-7 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
                >
                  Request a Proposal
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#039147]/15 bg-white/92 p-5 shadow-[0_24px_70px_rgba(3,145,71,0.10)] backdrop-blur-xl md:rounded-[34px] md:p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/58">
                Corporate Snapshot
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {corporateStats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-[#039147]/10 bg-white p-4 shadow-sm">
                    <p className="text-3xl font-black text-[#039147]">{stat.value}</p>
                    <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-black/52">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="corporate-snapshot" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                About PML
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                High-quality research solutions aligned with international standards
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-black/65 md:mt-6 md:space-y-5 md:text-base md:leading-8">
                <p>
                  Since its establishment in 2005, PML has delivered research services that support
                  pharmaceutical and healthcare development. The company combines scientific discipline,
                  quality-focused workflows, and integrated service capability for local and international clients.
                </p>

                <p>
                  PML has completed more than 6,000 projects and continues to manage an active project
                  pipeline with sponsors worldwide. Its expertise spans pharmaceuticals, biotechnology,
                  medical devices, food and beverage, cosmetics, and traditional medicines.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.10)] md:rounded-[34px] md:p-3">
              <Image
                src="/images/pml/hero-lab-hexagon.png"
                alt="Pharma Metric Labs facility"
                width={900}
                height={675}
                className="aspect-[4/3] w-full rounded-[24px] object-cover md:rounded-[26px]"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-5">
            {corporateStats.map((item) => (
              <div key={item.label} className="rounded-[22px] border border-black/5 bg-[#f6faf7] p-4 shadow-sm md:rounded-[28px] md:p-7">
                <p className="text-3xl font-black text-[#039147] md:text-5xl">{item.value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.10em] text-black/40">
                  {item.label}
                </p>
                <p className="mt-3 text-xs font-bold leading-5 text-black/55 md:text-sm md:leading-6">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(3,145,71,0.08),transparent_30%),radial-gradient(circle_at_88%_70%,rgba(3,145,71,0.07),transparent_28%)]" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.025]" />

        <div className="pml-container relative">
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Industries Served
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-black md:text-5xl">
                Supporting regulated industries with CRO and laboratory capability
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-black/60 md:text-base md:leading-8">
              PML supports organizations that need research, testing, regulatory, and documentation
              support across science-driven product categories.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {industryCards.map((industry) => (
              <article
                key={industry.title}
                className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#039147]/20 hover:shadow-[0_26px_80px_rgba(3,145,71,0.14)] md:p-7"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#eaf8f0] transition duration-500 group-hover:scale-125 group-hover:bg-[#039147]/12" />
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#039147] transition-all duration-500 group-hover:w-full" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] ring-1 ring-[#039147]/10 transition duration-300 group-hover:bg-[#039147] group-hover:text-white group-hover:shadow-[0_18px_44px_rgba(3,145,71,0.22)]">
                    <IndustryIcon name={industry.icon} />
                  </div>

                  <h3 className="mt-6 text-xl font-black leading-tight text-black transition group-hover:text-[#039147]">
                    {industry.title}
                  </h3>

                  <p className="mt-3 text-sm font-medium leading-7 text-black/58">
                    {industry.desc}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f4fbf7] px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white">
                    Industry fit
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Services Ecosystem
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Driving progress through integrated service excellence
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
              PML connects clinical, laboratory, and regulatory capabilities to support project
              delivery from early discussion through execution and reporting.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
            {serviceEcosystem.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group w-[78vw] max-w-[320px] shrink-0 snap-start rounded-[26px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:w-auto md:max-w-none md:rounded-[28px] md:p-7"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-sm font-black text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white">
                  ✓
                </div>

                <h3 className="text-lg font-black leading-tight text-black">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {service.desc}
                </p>

                <span className="mt-6 inline-flex text-sm font-extrabold text-[#039147]">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore services
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4fbf7] py-16 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(3,145,71,0.10),transparent_28%),radial-gradient(circle_at_88%_20%,rgba(3,145,71,0.08),transparent_30%)]" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.04]" />

        <div className="pml-container relative">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Regulatory Acceptance
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Study reports accepted across multiple regulatory bodies
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-black/62 md:mt-6 md:text-base md:leading-8">
                PML’s study reports have supported submissions across multiple global regulatory
                bodies, strengthening its position as a trusted CRO partner for local and
                international sponsors.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3">
                {[
                  ["13", "Accepted countries"],
                  ["300+", "Sponsors"],
                  ["190+", "Validated methods"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[22px] border border-black/5 bg-white p-4 shadow-sm md:p-5"
                  >
                    <p className="text-2xl font-black tracking-[-0.04em] text-[#039147] md:text-3xl">
                      {value}
                    </p>
                    <p className="mt-2 text-[10px] font-extrabold uppercase leading-4 tracking-[0.12em] text-black/50 md:text-xs">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <article className="relative overflow-hidden rounded-[34px] border border-[#039147]/10 bg-white p-4 shadow-[0_28px_90px_rgba(3,145,71,0.14)] md:rounded-[42px] md:p-5">
              <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[28px] bg-[#f4fbf7] p-5 md:p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147]">
                    Accepted Countries
                  </p>

                  <div className="mt-5 flex max-h-[310px] flex-wrap gap-2.5 overflow-y-auto pr-1">
                    {countryDetails.map((country) => {
                      const active = activeCountry.name === country.name;

                      return (
                        <button
                          key={country.name}
                          type="button"
                          onClick={() => setActiveCountry(country)}
                          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold shadow-sm transition duration-300 hover:-translate-y-0.5 ${
                            active
                              ? "border-[#039147] bg-[#039147] text-white shadow-[0_16px_34px_rgba(3,145,71,0.22)]"
                              : "border-black/5 bg-white text-[#039147] hover:border-[#039147]/25 hover:bg-[#eaf8f0]"
                          }`}
                        >
                          <span
                            className={`h-1.5 w-1.5 rounded-full ${
                              active ? "bg-white" : "bg-[#039147]"
                            }`}
                          />
                          {country.name}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="group relative min-h-[430px] overflow-hidden rounded-[28px] bg-[#0a2c1a]">
                  <Image
                    src={activeCountry.image}
                    alt={activeCountry.name}
                    fill
                    unoptimized
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />
                  <div className="absolute inset-0 bg-[#039147]/8" />
                  <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.07]" />

                  <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">
                    <h3 className="text-4xl font-black leading-tight tracking-[-0.04em] text-white drop-shadow-[0_12px_34px_rgba(0,0,0,0.48)] md:text-5xl">
                      {activeCountry.name}
                    </h3>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_15%,rgba(3,145,71,0.08),transparent_30%),radial-gradient(circle_at_92%_70%,rgba(3,145,71,0.06),transparent_28%)]" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.025]" />

        <div className="pml-container relative">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Accreditations & Recognitions
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.04em] text-black md:text-5xl">
                Quality credentials that strengthen clinical and laboratory trust
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-black/62 md:mt-6 md:text-base md:leading-8">
                PML’s accreditation and inspection records help demonstrate study readiness,
                laboratory reliability, and regulatory confidence across clinical and analytical
                project delivery.
              </p>
            </div>

            <div className="rounded-[34px] border border-[#039147]/10 bg-[#f4fbf7] p-6 shadow-[0_24px_70px_rgba(3,145,71,0.10)] md:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["4", "Credential areas"],
                  ["GCP / GLP", "Quality framework"],
                  ["Local + regional", "Acceptance signal"],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[24px] border border-black/5 bg-white p-5 shadow-sm">
                    <p className="text-2xl font-black text-[#039147] md:text-3xl">{value}</p>
                    <p className="mt-2 text-xs font-extrabold uppercase leading-5 tracking-[0.12em] text-black/45">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
            {accreditations.map((item, index) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#039147]/20 hover:shadow-[0_26px_80px_rgba(3,145,71,0.14)] md:rounded-[34px] md:p-8"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#eaf8f0] transition duration-500 group-hover:scale-125 group-hover:bg-[#039147]/12" />
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#039147] transition-all duration-500 group-hover:w-full" />

                <div className="relative flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] ring-1 ring-[#039147]/10 transition duration-300 group-hover:bg-[#039147] group-hover:text-white group-hover:shadow-[0_18px_44px_rgba(3,145,71,0.22)]">
                    <AccreditationIcon name={item.icon} />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#f4fbf7] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#039147]">
                        0{index + 1}
                      </span>
                      <span className="rounded-full border border-[#039147]/12 bg-white px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-black/45">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="mt-4 text-xl font-black leading-tight text-black transition group-hover:text-[#039147] md:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-7 text-black/58">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-16 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(3,145,71,0.10),transparent_32%),radial-gradient(circle_at_88%_40%,rgba(3,145,71,0.08),transparent_30%)]" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.035]" />

        <div className="pml-container relative">
          <div className="overflow-hidden rounded-[38px] border border-black/5 bg-[#f4fbf7] shadow-[0_28px_90px_rgba(3,145,71,0.10)] md:rounded-[48px]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
                <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#039147]/15 bg-white px-4 py-2 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#039147]" />
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-[#039147]">
                    Ministry of Health Project
                  </span>
                </div>

                <h2 className="mt-6 max-w-3xl text-3xl font-black leading-tight tracking-[-0.04em] text-black md:text-5xl">
                  Trusted national BA/BE study support for public healthcare development
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                  PML has supported a national BA/BE study project with the Indonesian Ministry of
                  Health, strengthening its position as a credible research partner for clinical,
                  bioanalytical, and regulatory-ready study execution.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    ["National", "Public healthcare project context"],
                    ["BA/BE", "Study conduct and reporting"],
                    ["Trusted", "Government-level collaboration"],
                  ].map(([title, desc]) => (
                    <div key={title} className="rounded-[22px] border border-black/5 bg-white p-4 shadow-sm">
                      <p className="text-lg font-black text-[#039147]">{title}</p>
                      <p className="mt-2 text-xs font-bold leading-5 text-black/55">{desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[440px] overflow-hidden bg-[#039147]">
                <Image
                  src="/images/pml/hero-lab-hexagon.png"
                  alt="PML national BA/BE study support"
                  fill
                  className="object-cover opacity-42"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#039147]/94 via-[#039147]/82 to-[#075e34]/94" />
                <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

                <div className="relative flex h-full min-h-[440px] items-center p-7 md:p-10">
                  <div className="w-full rounded-[32px] border border-white/18 bg-white/14 p-6 text-white shadow-[0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-md md:p-8">
                    <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#039147]">
                      Case Highlight
                    </span>

                    <div className="mt-8">
                      <p className="text-6xl font-black leading-none tracking-[-0.06em] md:text-7xl">
                        BA/BE
                      </p>

                      <p className="mt-4 text-sm font-semibold leading-7 text-white/84 md:text-base md:leading-8">
                        National project support covering study readiness, clinical capability,
                        bioanalytical workflow, and regulatory-oriented documentation.
                      </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-3">
                      <div className="rounded-[22px] border border-white/16 bg-white/14 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-white/58">
                          Scope
                        </p>
                        <p className="mt-2 text-lg font-black text-white">End-to-end</p>
                      </div>

                      <div className="rounded-[22px] border border-white/16 bg-white/14 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-white/58">
                          Output
                        </p>
                        <p className="mt-2 text-lg font-black text-white">Report-ready</p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-[22px] bg-white p-4">
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#039147]">
                        Project Relevance
                      </p>
                      <p className="mt-2 text-sm font-bold leading-6 text-black/62">
                        Supporting credible healthcare product development through reliable
                        study execution and accountable documentation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6faf7] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Company Contact
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Reach Pharma Metric Labs for company, service, and project discussions
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                Use the official company contact information below for catalogue requests,
                project discussions, proposal inquiries, or service clarification.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5"
                >
                  Open Contact Page
                </Link>

                <a
                  href="mailto:info@pharmametriclabs.com"
                  className="inline-flex items-center justify-center rounded-full border border-[#039147]/20 bg-white px-7 py-4 text-sm font-extrabold text-[#039147] transition hover:bg-[#039147] hover:text-[#039147]"
                >
                  Email PML
                </a>
              </div>
            </div>

            <div className="grid gap-3 md:grid-cols-2 md:gap-4">
              {contactItems.map((item) => (
                <div key={item.title} className="rounded-[22px] border border-black/5 bg-white p-5 shadow-sm md:rounded-[26px] md:p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#039147]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm font-bold leading-7 text-black/70">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-[#f4fbf7] px-6 py-14 text-center text-black shadow-[0_28px_90px_rgba(0,0,0,0.12)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/cta-lab-background.png"
              alt=""
              fill
              className="object-cover opacity-42"
            />
            <div className="absolute inset-0 bg-[#039147]/22" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/94 via-white/78 to-[#039147]/16" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/64">
                Company Materials
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Need the latest official company profile or service catalogue?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/68">
                Explore PML catalogue materials or contact the team to request the latest official documents.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/about-us/catalogue"
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
                >
                  View Catalogue
                </Link>

                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-8 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
                >
                  Request Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
