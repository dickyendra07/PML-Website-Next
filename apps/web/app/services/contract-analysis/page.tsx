"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import OtherServices from "@/components/OtherServices";

const heroSlides = [
  "/images/pml/services/contract-analysis-hero.png",
  "/images/pml/services/contract-analysis-lab.png",
  "/images/pml/services/contract-analysis-sample.png",
];

const scopeGroups = [
  {
    title: "Analytical Testing",
    icon: "lab",
    items: [
      "Product quality testing",
      "Assay and content analysis",
      "Impurity and related substance testing",
      "Method-based laboratory analysis",
      "Stability and release testing support",
    ],
  },
  {
    title: "Microbiology Support",
    icon: "microbiology",
    items: [
      "Microbiological testing support",
      "Product safety-related laboratory testing",
      "Environmental or sample-related microbiology checks when applicable",
      "Documentation support for microbiology results",
    ],
  },
  {
    title: "Multi-industry Product Testing",
    icon: "industry",
    items: [
      "Pharmaceutical product testing",
      "Biotechnology product support",
      "Food and beverage product analysis",
      "Cosmetic product testing support",
      "Testing support for selected UMKM products",
    ],
  },
  {
    title: "Sample Handling",
    icon: "sample",
    items: [
      "Sample receiving and registration",
      "Sample requirement review",
      "Selected sample pick-up coordination",
      "Sample preparation and laboratory workflow coordination",
    ],
  },
  {
    title: "Compliance Documentation",
    icon: "document",
    items: [
      "Laboratory result documentation",
      "Testing report preparation",
      "Traceable analysis workflow",
      "Documentation support for quality and regulatory needs",
    ],
  },
  {
    title: "Urgent Analysis Support",
    icon: "clock",
    items: [
      "Urgent analysis review for selected parameters",
      "Timeline discussion based on lab capacity",
      "Project-specific availability confirmation",
      "Fast-track coordination when eligible",
    ],
  },
];

const clients = [
  "Pharmaceutical companies",
  "Biotechnology companies",
  "Food and beverage companies, including selected UMKM products",
  "Cosmetic companies",
];

const benefits = [
  {
    title: "Reliable product quality support",
    text: "Analytical testing services help sponsors evaluate product quality, safety, and compliance needs.",
    icon: "shield",
  },
  {
    title: "Multi-industry testing capability",
    text: "PML supports testing needs across pharmaceutical, biotechnology, food and beverage, and cosmetic products.",
    icon: "industry",
  },
  {
    title: "Clear laboratory documentation",
    text: "Testing activities are supported by structured documentation and laboratory result reporting.",
    icon: "document",
  },
  {
    title: "Flexible project coordination",
    text: "Selected projects may be supported with sample pick-up and urgent analysis coordination based on eligibility.",
    icon: "network",
  },
];

const workflow = [
  "Initial inquiry and testing requirement review",
  "Sample type, parameter, method, and timeline confirmation",
  "Quotation, sample submission, and laboratory scheduling",
  "Sample receiving, preparation, and analytical testing",
  "Result review, documentation, and report delivery",
];

const requirements = [
  "Product or sample type",
  "Testing parameter or analysis objective",
  "Sample quantity and sample condition",
  "Preferred timeline or urgency level",
  "Required method, standard, or regulatory context, if available",
  "Pick-up location if sample collection support is requested",
];

const faqs = [
  {
    question: "Does PML provide sample pick-up services?",
    answer:
      "Yes. PML provides sample pick-up services, and selected locations may be eligible for complimentary pick-up. Please contact the team to check eligibility and arrange the collection schedule.",
  },
  {
    question: "Is urgent analysis service available?",
    answer:
      "Yes. PML provides urgent analysis services for selected testing parameters and projects, depending on laboratory capacity and sample requirements. Please contact the team for further discussion regarding timeline and availability.",
  },
  {
    question: "Who can use Contract Analysis services?",
    answer:
      "Contract Analysis services are relevant for pharmaceutical companies, biotechnology companies, food and beverage companies including selected UMKM products, and cosmetic companies that need product quality, safety, or compliance-related testing support.",
  },
  {
    question: "What information should be prepared before requesting analysis?",
    answer:
      "Clients should prepare the product or sample type, testing parameters, sample quantity, expected timeline, required method or standard if available, and any specific documentation requirements.",
  },
];

function CheckIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name }: { name: string }) {
  if (name === "lab") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 3V8L5.8 17.2C5.1 18.8 6.2 20.5 8 20.5H16C17.8 20.5 18.9 18.8 18.2 17.2L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "microbiology") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="15" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M12 12L14 14M6 15L5 19M18 5L19 9M5 5L7 7M17 17L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "industry") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V9L9 12V9L14 12V7H20V20H4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 16H9.5M12 16H13.5M16 16H17.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "sample") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="4" width="10" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9H14M10 13H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "clock") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 8V12L15 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "document") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M7 3H14L18 7V21H7V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 3V7H18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 12H15M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
    return <Icon name="lab" />;
  }

  if (index === 2) {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M6 20V10L12 6L18 10V20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 14H15M9 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M7 4H17L19 9C19 12.9 15.9 16 12 16C8.1 16 5 12.9 5 9L7 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 20H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 16V20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function ContractAnalysisPage() {
  const [activeSlide, setActiveSlide] = useState(0);

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
      <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black text-white">
        <div className="absolute inset-0">
          {heroSlides.map((slideImage, index) => (
            <Image
              key={slideImage}
              src={slideImage}
              alt=""
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${index === activeSlide ? "opacity-100" : "opacity-0"}`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/62 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" />

        <div className="pml-container relative flex min-h-[calc(100vh-80px)] flex-col justify-center py-16 md:py-24">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services" className="transition hover:text-white">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Contract Analysis</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Contract Analysis
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[68px]">
              Reliable analytical testing for product quality and compliance
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              PML supports pharmaceutical, biotechnology, food and beverage, and cosmetic companies
              with contract analysis services for product quality, safety, and regulatory compliance needs.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
              >
                Request a Proposal
              </button>

              <a
                href="#contract-overview"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
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
                className={`h-2.5 rounded-full transition-all ${index === activeSlide ? "w-8 bg-[#039147]" : "w-2.5 bg-white/45"}`}
                aria-label={`Go to Contract Analysis hero slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contract-overview" className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Service Overview
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Laboratory analysis support for multiple product categories
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-black/65">
              <p>
                PML provides contract analysis services for companies that need reliable
                laboratory testing support for product quality, safety, and compliance needs.
                The service is designed for pharmaceutical, biotechnology, food and beverage,
                and cosmetic product requirements.
              </p>

              <p>
                From sample receiving and testing requirement review to analytical execution
                and report documentation, PML helps clients move from testing inquiry to
                clear laboratory results with structured project coordination.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article key={benefit.title} className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147]">
                  <Icon name={benefit.icon} />
                </div>
                <h3 className="text-lg font-black leading-tight text-black">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-20 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Scope of Service
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Contract analysis services for quality, safety, and documentation
            </h2>

            <p className="mt-6 text-base leading-7 text-black/65">
              PML supports selected analytical, microbiology, sample handling, documentation,
              and urgent analysis needs through a structured laboratory workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {scopeGroups.map((group) => (
              <article key={group.title} className="rounded-[30px] border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147]">
                  <Icon name={group.icon} />
                </div>

                <h3 className="text-xl font-black leading-tight text-black">{group.title}</h3>

                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-bold leading-6 text-black/65">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#039147]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="max-w-4xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Target Client
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Built for companies that need reliable product testing support
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black/65">
              Contract Analysis services are relevant for companies that need product quality,
              safety, compliance, or laboratory testing support across multiple product categories.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {clients.map((client, index) => (
              <article key={client} className="group rounded-[28px] border border-black/5 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white">
                  <ClientIcon index={index} />
                </div>
                <h3 className="text-base font-black leading-tight text-black">{client}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Process / Workflow
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                From sample inquiry to laboratory report
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
                src="/images/pml/services/contract-analysis-sample.png"
                alt="Contract analysis sample handling"
                width={900}
                height={675}
                className="aspect-[4/3] w-full rounded-[26px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#039147] py-20 text-white md:py-28">
        <Image
          src="/images/pml/services/contract-analysis-proof.png"
          alt=""
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-[#039147]/35" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

        <div className="pml-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Proof & Trust Signals
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Analytical support backed by laboratory capability and structured reporting
            </h2>

            <p className="mt-6 text-base leading-8 text-white/75">
              PML supports clients with analytical testing workflows designed to help evaluate
              product quality, safety, documentation, and compliance-related requirements.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              ["Multi-industry", "Support for pharmaceutical, biotech, food and beverage, and cosmetic products."],
              ["Sample support", "Selected locations may be eligible for sample pick-up coordination."],
              ["Urgent option", "Urgent analysis may be available for selected parameters and projects."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur">
                <p className="text-4xl font-black">{title}</p>
                <p className="mt-3 text-sm font-bold leading-6 text-white/75">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Required Information
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                What we need to start analysis discussion
              </h2>

              <p className="mt-6 text-base leading-7 text-black/65">
                To prepare accurate testing support, clients can share sample, parameter,
                timeline, and method-related information before requesting a proposal.
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

      <section id="contract-faq" className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Contract Analysis FAQ
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto mt-10 max-w-4xl space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-[24px] border border-black/5 bg-white p-6 shadow-sm">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black text-black">
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

      <OtherServices current="contract-analysis" variant="three" />

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
                <Image src="/images/LOGO-PML.png" alt="PML" width={64} height={40} className="h-8 w-auto" />
              </div>

              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Need contract analysis support?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
                Share your sample and testing requirements with our team and we will help identify
                the right service scope, required information, and next steps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
                >
                  Request a Proposal
                </button>

                <a
                  href="#contract-overview"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
                >
                  Review Contract Analysis
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
