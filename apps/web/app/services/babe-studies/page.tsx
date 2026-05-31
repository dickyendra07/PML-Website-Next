"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import OtherServices from "@/components/OtherServices";

const heroSlides = [
  "/images/pml/services/babe-studies-hero.png",
  "/images/pml/services/babe-studies-lab-analysis.png",
  "/images/pml/services/babe-studies-sample-handling.png",
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

const scope = [
  "Bioavailability and bioequivalence study planning support",
  "Clinical conduct coordination for BA/BE study activities",
  "Sample collection, handling, and study operation support",
  "Bioanalytical method support and laboratory analysis",
  "Study documentation and regulatory-ready reporting",
  "Project coordination with sponsors and relevant study stakeholders",
];

const benefits = [
  {
    title: "End-to-end study support",
    text: "Integrated BA/BE support from clinical conduct and bioanalysis to final reporting.",
  },
  {
    title: "Regulatory-ready documentation",
    text: "Study outputs are prepared to support product registration and submission readiness.",
  },
  {
    title: "Experienced bioanalytical capability",
    text: "More than 190 validated bioanalytical methods across a wide range of pharmaceutical compounds.",
  },
  {
    title: "Accepted BE reports",
    text: "PML BE reports have been accepted by global regulatory bodies in multiple countries.",
  },
];

const workflow = [
  "Initial discussion and project requirement review",
  "Study planning, protocol alignment, and operational preparation",
  "Clinical conduct, volunteer coordination, and sample collection",
  "Sample handling, bioanalysis, and method-related laboratory work",
  "Data review, documentation, and regulatory-ready report preparation",
];

const requirements = [
  "Product or molecule information",
  "Study objective and intended market or submission destination",
  "Available protocol, reference product, or study design requirements",
  "Target timeline and expected project scope",
  "Specific regulatory or documentation requirements, if available",
];

const faqs = [
  {
    question: "Who needs BA/BE studies?",
    answer:
      "BA/BE studies are commonly needed by pharmaceutical companies and generic manufacturers to support product registration, equivalence evaluation, and regulatory submission requirements.",
  },
  {
    question: "How many validated bioanalytical methods does PML have?",
    answer:
      "PML has developed and validated more than 190 bioanalytical methods covering a wide range of pharmaceutical compounds. PML can also develop and validate new bioanalytical methods based on sponsor needs and project requirements.",
  },
  {
    question: "Can PML support end-to-end BA/BE studies?",
    answer:
      "Yes. PML supports BA/BE study activities from clinical conduct and sample handling to bioanalysis, documentation, and regulatory-ready reporting.",
  },
  {
    question: "Have PML BE reports been accepted internationally?",
    answer:
      "Yes. PML BE reports have been accepted by regulatory bodies in multiple countries including Cambodia, Hong Kong, Indonesia, Malaysia, Maldives, Mauritius, Mongolia, Myanmar, Nigeria, Philippines, Singapore, Sri Lanka, and Vietnam.",
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

function ShieldIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 3L19 6V11C19 15.8 16 19.2 12 21C8 19.2 5 15.8 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L11 14L15.5 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BabeStudiesPage() {
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
              className={`object-cover transition-opacity duration-1000 ${
                index === activeSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/62 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" />

        <div className="pml-container relative flex min-h-[calc(100vh-80px)] flex-col justify-center py-16 md:py-24">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-white/60" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/#services" className="transition hover:text-white">
              Services
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">BA/BE Studies</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              BA/BE Studies
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[68px]">
              End-to-end bioequivalence study support for reliable regulatory submission
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              PML supports pharmaceutical companies and generic manufacturers with integrated
              BA/BE study services, from clinical conduct and bioanalysis to regulatory-ready
              documentation and reporting.
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
                href="#babe-overview"
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
                className={`h-2.5 rounded-full transition-all ${
                  index === activeSlide ? "w-8 bg-[#039147]" : "w-2.5 bg-white/45"
                }`}
                aria-label={`Go to BA/BE hero slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="babe-overview" className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Service Overview
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Integrated BA/BE study services in one place
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-black/65">
              <p>
                PML provides end-to-end BA/BE study support for pharmaceutical companies and
                generic manufacturers that need reliable study execution and regulatory-ready
                documentation. The service covers key activities from clinical conduct and sample
                handling to bioanalytical support and final reporting.
              </p>

              <p>
                With accepted BE reports across multiple regulatory bodies and more than 190
                validated bioanalytical methods, PML helps sponsors prepare better evidence for
                product registration and market access requirements.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147]">
                  <ShieldIcon />
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-[34px] bg-white p-3 shadow-[0_24px_70px_rgba(0,0,0,0.10)]">
                <Image
                  src="/images/pml/services/babe-studies-lab-analysis.png"
                  alt="Bioanalytical laboratory analysis"
                  width={900}
                  height={675}
                  className="aspect-[4/3] w-full rounded-[26px] object-cover"
                />
              </div>
            </div>

            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Scope of Service
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                From clinical conduct to bioanalytical reporting
              </h2>

              <p className="mt-6 text-base leading-7 text-black/65">
                BA/BE studies require coordinated clinical activity, reliable sample handling,
                robust bioanalysis, and complete documentation. PML supports these stages through
                an integrated CRO workflow.
              </p>

              <div className="mt-8 grid gap-3">
                {scope.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-[#039147]">
                      <CheckIcon />
                    </span>
                    <p className="text-sm font-bold leading-6 text-black/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Target Client
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Built for pharmaceutical sponsors and generic manufacturers
              </h2>

              <p className="mt-6 text-base leading-7 text-black/65">
                BA/BE Studies are most relevant for companies preparing evidence for product
                registration, generic drug development, regulatory submission, or equivalence
                evaluation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <article className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-black">Pharmaceutical companies</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Sponsors that require structured BA/BE study execution, bioanalysis, and
                  documentation support.
                </p>
              </article>

              <article className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm">
                <h3 className="text-xl font-black text-black">Generic manufacturers</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Manufacturers preparing equivalence evidence for generic drug development
                  and registration.
                </p>
              </article>

              <article className="rounded-[28px] border border-black/5 bg-white p-7 shadow-sm md:col-span-2">
                <h3 className="text-xl font-black text-black">Regulatory and product teams</h3>
                <p className="mt-3 text-sm leading-6 text-black/60">
                  Teams that need reliable study outputs, accepted reports, and clear
                  documentation to support submission readiness.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#039147] py-20 text-white md:py-28">
        <Image
          src="/images/pml/services/babe-global-trust-bg.png"
          alt=""
          fill
          className="object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-[#039147]/10 to-black/45" />

        <div className="pml-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
              Proof & Trust Signals
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Accepted BE reports across global regulatory bodies
            </h2>

            <p className="mt-6 text-base leading-8 text-white/75">
              PML’s BE reports have been accepted by regulatory bodies in multiple countries,
              supporting client submissions across regional and international contexts.
            </p>
          </div>

          <div className="mx-auto mt-10 flex max-w-5xl flex-wrap justify-center gap-3">
            {countries.map((country) => (
              <span
                key={country}
                className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-white backdrop-blur"
              >
                {country}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur">
              <p className="text-5xl font-black">190+</p>
              <p className="mt-2 text-sm font-bold leading-6 text-white/75">
                validated bioanalytical methods covering a wide range of pharmaceutical compounds.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/15 bg-white/10 p-7 backdrop-blur">
              <p className="text-5xl font-black">13</p>
              <p className="mt-2 text-sm font-bold leading-6 text-white/75">
                countries listed where PML BE reports have been accepted by regulatory bodies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Process / Workflow
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                A clear workflow from discussion to report completion
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
                src="/images/pml/services/babe-studies-sample-handling.png"
                alt="BA/BE sample handling and laboratory workflow"
                width={900}
                height={675}
                className="aspect-[4/3] w-full rounded-[26px] object-cover"
              />
            </div>
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
                What we need to start the discussion
              </h2>

              <p className="mt-6 text-base leading-7 text-black/65">
                To prepare a better proposal or consultation, sponsors can share available
                product, study, timeline, and regulatory information.
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

      <section id="faq" className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              BA/BE FAQ
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
                <p className="mt-4 text-sm leading-7 text-black/60">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <OtherServices current="babe" variant="three" />

      <section className="bg-white pb-24 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[36px] bg-black px-8 py-16 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-14 md:py-20">
            <Image
              src="/images/pml/facilities-lab-main.png"
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
                Need BA/BE study support?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
                Share your study requirements with our team and we will help identify the right
                service scope, required information, and next steps.
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
                  href="#babe-overview"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
                >
                  Review BA/BE Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
