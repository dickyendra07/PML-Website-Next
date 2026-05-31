"use client";

import Image from "next/image";
import Link from "next/link";
import OtherServices from "@/components/OtherServices";

const heroSlides = [
  "/images/pml/services/babe-studies-hero.png",
  "/images/pml/services/babe-studies-lab-analysis.png",
  "/images/pml/services/babe-studies-sample-handling.png",
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

const scope = [
  "Bioavailability and bioequivalence study planning support",
  "Clinical conduct coordination for BA/BE study activities",
  "Sample collection, handling, and study operation support",
  "Bioanalytical method support and laboratory analysis",
  "Study documentation and regulatory-ready reporting",
  "Project coordination with sponsors and relevant study stakeholders",
];

const clients = [
  {
    title: "Pharmaceutical companies",
    text: "Sponsors that require structured BA/BE study execution, bioanalysis, and documentation support.",
  },
  {
    title: "Generic manufacturers",
    text: "Manufacturers preparing equivalence evidence for generic drug development and registration.",
  },
  {
    title: "Regulatory and product teams",
    text: "Teams that need reliable study outputs, accepted reports, and clear documentation to support submission readiness.",
  },
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

function openProposal() {
  window.dispatchEvent(new CustomEvent("open-proposal-modal"));
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
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
  return (
    <main>
      <section className="relative min-h-[560px] overflow-hidden bg-black text-white md:min-h-[calc(100vh-80px)]">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <Image
              key={slide}
              src={slide}
              alt=""
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-1000 ${
                index === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/62" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/62 to-black/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" aria-hidden="true" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" aria-hidden="true" />

        <div className="pml-container relative flex min-h-[560px] flex-col justify-center py-14 md:min-h-[calc(100vh-80px)] md:py-24">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs font-bold text-white/60 md:mb-10 md:text-sm">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">BA/BE Studies</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur md:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              BA/BE Studies
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-white md:mt-6 md:text-6xl lg:text-[68px]">
              End-to-end bioequivalence study support for reliable regulatory submission
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 md:mt-6 md:text-lg md:leading-8">
              PML supports pharmaceutical companies and generic manufacturers with integrated BA/BE
              study services, from clinical conduct and bioanalysis to regulatory-ready documentation
              and reporting.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row md:mt-8">
              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#039147] shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 md:py-4"
              >
                Request a Proposal
              </button>

              <a
                href="#babe-overview"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147] md:py-4"
              >
                Explore Service
              </a>
            </div>
          </div>

          <div className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {heroSlides.map((slide, index) => (
              <span
                key={slide}
                className={`h-2.5 rounded-full ${
                  index === 0 ? "w-8 bg-[#039147]" : "w-2.5 bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="babe-overview" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Service Overview
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Integrated BA/BE study services in one place
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-7 text-black/65 md:space-y-5 md:text-base md:leading-8">
              <p>
                PML provides end-to-end BA/BE study support for pharmaceutical companies and generic
                manufacturers that need reliable study execution and regulatory-ready documentation.
              </p>

              <p>
                With accepted BE reports across multiple regulatory bodies and more than 190 validated
                bioanalytical methods, PML helps sponsors prepare better evidence for product registration
                and market access requirements.
              </p>
            </div>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="w-[78vw] max-w-[320px] shrink-0 snap-start rounded-[26px] border border-black/5 bg-white p-5 shadow-[0_18px_50px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:shadow-xl md:w-auto md:max-w-none md:rounded-[28px] md:p-6"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] md:mb-5 md:h-12 md:w-12">
                  <ShieldIcon />
                </div>
                <h3 className="text-base font-black leading-tight text-black md:text-lg">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-black/60">{benefit.text}</p>
              </article>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore key benefits
          </p>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[30px] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.10)] md:rounded-[34px] md:p-3">
                <Image
                  src="/images/pml/services/babe-studies-lab-analysis.png"
                  alt="Bioanalytical laboratory analysis"
                  width={900}
                  height={700}
                  className="aspect-[4/3] w-full rounded-[24px] object-cover md:rounded-[26px]"
                />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Scope of Service
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                From clinical conduct to bioanalytical reporting
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base">
                BA/BE studies require coordinated clinical activity, reliable sample handling,
                robust bioanalysis, and complete documentation.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3 md:gap-4">
                {scope.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm md:p-5"
                  >
                    <span className="mb-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#eaf8f0] text-[#039147]">
                      <CheckIcon />
                    </span>
                    <p className="text-xs font-bold leading-5 text-black/70 md:text-sm md:leading-6">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Target Client
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Built for pharmaceutical sponsors and generic manufacturers
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base">
                BA/BE Studies are most relevant for companies preparing evidence for product registration,
                generic drug development, regulatory submission, or equivalence evaluation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              {clients.map((client, index) => (
                <article
                  key={client.title}
                  className={`rounded-[26px] border border-black/5 bg-white p-6 shadow-sm md:rounded-[28px] md:p-7 ${
                    index === 2 ? "md:col-span-2" : ""
                  }`}
                >
                  <h3 className="text-lg font-black text-black md:text-xl">{client.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">{client.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#039147] py-16 text-white md:py-28">
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
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70 md:text-sm">
              Proof & Trust Signals
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Accepted BE reports across global regulatory bodies
            </h2>

            <p className="mt-5 text-sm leading-7 text-white/75 md:mt-6 md:text-base md:leading-8">
              PML’s BE reports have been accepted by regulatory bodies in multiple countries, supporting
              client submissions across regional and international contexts.
            </p>
          </div>

          <div className="-mx-4 mt-9 flex snap-x gap-2.5 overflow-x-auto px-4 pb-4 md:mx-auto md:mt-10 md:flex-wrap md:justify-center md:overflow-visible md:px-0 md:pb-0">
            {countries.map((country) => (
              <span
                key={country}
                className="shrink-0 snap-start rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-extrabold text-white backdrop-blur"
              >
                {country}
              </span>
            ))}
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:mt-12 md:gap-5">
            <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur md:rounded-[30px] md:p-7">
              <p className="text-4xl font-black md:text-5xl">190+</p>
              <p className="mt-2 text-xs font-bold leading-5 text-white/75 md:text-sm md:leading-6">
                validated bioanalytical methods.
              </p>
            </div>

            <div className="rounded-[24px] border border-white/15 bg-white/10 p-5 backdrop-blur md:rounded-[30px] md:p-7">
              <p className="text-4xl font-black md:text-5xl">13</p>
              <p className="mt-2 text-xs font-bold leading-5 text-white/75 md:text-sm md:leading-6">
                countries with accepted reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Process / Workflow
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                A clear workflow from discussion to report completion
              </h2>

              <div className="mt-8 space-y-3 md:space-y-4">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-3 rounded-[22px] border border-black/5 bg-white p-4 shadow-sm md:gap-4 md:rounded-[24px] md:p-5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-[#039147] text-xs font-black text-white md:h-10 md:w-10 md:text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1 text-sm font-bold leading-6 text-black/70 md:pt-2">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.10)] md:rounded-[34px] md:p-3">
              <Image
                src="/images/pml/services/babe-studies-sample-handling.png"
                alt="BA/BE sample handling and laboratory workflow"
                width={900}
                height={700}
                className="aspect-[4/3] w-full rounded-[24px] object-cover md:rounded-[26px]"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Required Information
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                What we need to start the discussion
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base">
                To prepare a better proposal or consultation, sponsors can share available product,
                study, timeline, and regulatory information.
              </p>

              <button
                type="button"
                onClick={openProposal}
                className="mt-7 inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-3.5 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)] md:mt-8 md:py-4"
              >
                Discuss This Service
              </button>
            </div>

            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {requirements.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[20px] border border-black/5 bg-white p-4 shadow-sm md:rounded-[22px] md:p-5"
                >
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

      <section id="faq" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              BA/BE FAQ
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="mx-auto mt-9 max-w-4xl space-y-3 md:mt-10 md:space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[22px] border border-black/5 bg-white p-5 shadow-sm md:rounded-[24px] md:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-black text-black md:text-lg">
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

      <OtherServices current="babe" />

      <section className="bg-white pb-20 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
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
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/90 shadow-lg backdrop-blur md:mb-7 md:h-16 md:w-16">
                <Image
                  src="/images/LOGO-PML.png"
                  alt="PML"
                  width={100}
                  height={48}
                  className="h-7 w-auto md:h-8"
                />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70 md:text-sm">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Need BA/BE study support?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Share your study requirements with our team and we will help identify the right service
                scope, required information, and next steps.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5 md:py-4"
                >
                  Request a Proposal
                </button>

                <a
                  href="#babe-overview"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147] md:py-4"
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
