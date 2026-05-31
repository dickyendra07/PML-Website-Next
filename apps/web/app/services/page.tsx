"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "BA/BE Studies",
    desc: "End-to-end bioequivalence study support from clinical conduct and bioanalysis to regulatory-ready reporting.",
    href: "/services/babe-studies",
    image: "/images/pml/services/babe-studies-hero.png",
    icon: "babe",
  },
  {
    title: "Clinical Trial Services",
    desc: "Clinical research support across study planning, regulatory coordination, site management, monitoring, and medical writing.",
    href: "/services/clinical-trial",
    image: "/images/pml/services/clinical-trial-hero.png",
    icon: "clinical",
  },
  {
    title: "Contract Analysis",
    desc: "Reliable analytical testing support for product quality, safety, compliance, and documentation needs.",
    href: "/services/contract-analysis",
    image: "/images/pml/services/contract-analysis-hero.png",
    icon: "analysis",
  },
  {
    title: "Regulatory Consultation",
    desc: "Regulatory affairs support for BPOM registration, ACTD documents, compliance, and submission readiness.",
    href: "/services/regulatory-consultation",
    image: "/images/pml/services/clinical-trial-regulatory.png",
    icon: "regulatory",
  },
];

export default function ServicesPage() {
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
          className="object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/22 to-black/48" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" />

        <div className="pml-container relative py-24 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center justify-center gap-2 text-sm font-bold text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Services</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              CRO Services
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[68px]">
              Integrated CRO services for pharmaceutical development
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Explore PML services across bioequivalence studies, clinical research support,
              analytical testing, and regulatory consultation.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                Explore Services
              </a>

              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Service Overview
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Choose the service that fits your project needs
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black/65">
              PML combines clinical, analytical, and regulatory capabilities to support study
              planning, reliable execution, laboratory analysis, and submission readiness.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-[34px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#eaf8f0]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  <div className="absolute bottom-5 left-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 text-[#039147] shadow-lg backdrop-blur transition group-hover:bg-[#039147] group-hover:text-white">
                    <ServiceIcon type={service.icon} />
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-black leading-tight text-black transition group-hover:text-[#039147]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60">
                    {service.desc}
                  </p>

                  <span className="mt-7 inline-flex items-center text-sm font-extrabold text-[#039147]">
                    Learn more
                    <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[36px] bg-black px-8 py-16 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-14 md:py-20">
            <Image
              src="/images/pml/services/contract-analysis-cta.png"
              alt=""
              fill
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-black/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-[#039147]/35" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/90 shadow-lg backdrop-blur">
                <Image
                  src="/images/LOGO-PML.png"
                  alt="PML"
                  width={64}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>

              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Need support for your next project?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
                Share your project needs with our team and we will help identify the right
                service scope, required information, and next steps.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
                >
                  Request a Proposal
                </button>

                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
                >
                  Contact PML
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ServiceIcon({ type }: { type: string }) {
  if (type === "babe") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="16" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M9.5 8.5L11 14M14.5 8.5L13 14M10 16H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "clinical") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9H14M10 13H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 15L17 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "analysis") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 3V8L5.8 17.2C5.1 18.8 6.2 20.5 8 20.5H16C17.8 20.5 18.9 18.8 18.2 17.2L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M7 3H14L18 7V21H7V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 3V7H18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M10 12H15M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
