"use client";

import Image from "next/image";
import Link from "next/link";

const corporateStats = [
  {
    value: "2005",
    label: "Established",
    desc: "Delivering research solutions since 2005.",
  },
  {
    value: "1,500+",
    label: "Completed Projects",
    desc: "Completed projects across clinical, analytical, and regulatory service areas.",
  },
  {
    value: "150",
    label: "Ongoing Projects",
    desc: "Current project pipeline supported by PML teams.",
  },
  {
    value: "20+",
    label: "Years Experience",
    desc: "Long-term CRO experience for local and international sponsors.",
  },
];

const industries = [
  "Pharmaceuticals",
  "Biotechnology",
  "Medical Devices",
  "Food & Beverage",
  "Cosmetics",
  "Traditional Medicines",
];

const countries = [
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

const serviceEcosystem = [
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
    title: "Contract Analysis",
    desc: "Laboratory analysis support for product quality, safety, compliance, and documentation needs.",
    href: "/services/contract-analysis",
  },
  {
    title: "Regulatory Affairs Consultation",
    desc: "Regulatory strategy, submission preparation, product review, and post-market compliance support.",
    href: "/services/regulatory-consultation",
  },
];

const accreditations = [
  {
    title: "SNI ISO/IEC 17025:2017",
    desc: "Good Laboratory Practice testing laboratory accreditation for trusted data and laboratory quality.",
  },
  {
    title: "BPOM Inspection",
    desc: "Inspection by BPOM for GCP/GLP implementation for specific products and activities.",
  },
  {
    title: "Malaysian NPRA Inspection",
    desc: "Foreign Bioequivalence Centre accreditation history with NPRA Malaysia.",
  },
  {
    title: "GCP - Indonesian Ministry of Health",
    desc: "Clinical site accreditation from the Ministry of Health to support clinical activity readiness.",
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

export default function CompanyProfilePage() {
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
            <span className="text-white">Company Profile</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/15 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
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
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-[#039147] hover:text-white"
                >
                  Request a Proposal
                </button>
              </div>
            </div>

            <div className="rounded-[30px] border border-[#039147]/15 bg-white/80 p-5 backdrop-blur-xl md:rounded-[34px] md:p-6">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/58">
                Corporate Snapshot
              </p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {corporateStats.map((stat) => (
                  <div key={stat.label} className="rounded-[22px] border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.12em] text-white/50">
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
                  PML has completed more than 1,500 projects and continues to manage an active project
                  pipeline with clients worldwide. Its expertise spans pharmaceuticals, biotechnology,
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

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Industries Served
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Supporting diverse sectors with CRO and laboratory capability
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML supports companies that need research, testing, regulatory, and documentation
                support across regulated and science-driven product categories.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
              {industries.map((industry) => (
                <div key={industry} className="rounded-[20px] border border-black/5 bg-white p-4 shadow-sm md:rounded-[24px] md:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                    ✓
                  </span>
                  <p className="mt-3 text-xs font-bold leading-5 text-black/65 md:mt-4 md:text-sm md:leading-6">
                    {industry}
                  </p>
                </div>
              ))}
            </div>
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
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-sm font-black text-[#039147] transition group-hover:bg-[#039147] group-hover:text-[#039147]">
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

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Regulatory Acceptance
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Study reports accepted by regulatory bodies across multiple countries
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML’s study reports have supported submissions across multiple global regulatory
                bodies, strengthening its position as a trusted CRO partner for local and international sponsors.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 md:gap-3">
              {countries.map((country) => (
                <span
                  key={country}
                  className="rounded-full border border-[#039147]/15 bg-white px-4 py-2 text-xs font-extrabold text-[#039147] shadow-sm md:px-5 md:py-2.5 md:text-sm"
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Accreditations & Recognitions
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Quality-focused credentials for clinical and laboratory readiness
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2">
            {accreditations.map((item) => (
              <article key={item.title} className="rounded-[24px] border border-black/5 bg-white p-5 shadow-sm md:rounded-[28px] md:p-7">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147]">
                  ✓
                </div>

                <h3 className="text-xl font-black leading-tight text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-black/60">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#039147] py-16 text-white md:py-28">
        <Image
          src="/images/pml/services/babe-global-trust-bg.png"
          alt=""
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#039147]/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/46 to-[#039147]/24" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

        <div className="pml-container relative">
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/64 md:text-sm">
                Ministry of Health Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Reliable partner for Indonesian Ministry of Health BA/BE project
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/68 md:mt-6 md:text-base md:leading-8">
                PML has been trusted to perform a national BA/BE study project with the Indonesian
                Ministry of Health, reinforcing its role as a credible research and clinical service partner.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#039147]/15 bg-white/80 p-5 backdrop-blur">
              <p className="text-4xl font-black md:text-5xl">BA/BE</p>
              <p className="mt-3 text-sm font-bold leading-7 text-black/68">
                National project support, study readiness, clinical capability, and regulatory-oriented reporting.
              </p>
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
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/cta-lab-background.png"
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[#039147]/22" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/46 to-[#039147]/24" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/64">
                Company Materials
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
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
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-[#039147] hover:text-white"
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
