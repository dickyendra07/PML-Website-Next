"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
  {
    name: "Cambodia",
    landmark: "",
    image: "https://images.unsplash.com/photo-1548625361-58a9b86aa83b?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Hong Kong",
    landmark: "",
    image: "https://images.unsplash.com/photo-1536599018102-9f803c140fc1?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Indonesia",
    landmark: "",
    image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Malaysia",
    landmark: "",
    image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Maldives",
    landmark: "",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Mauritius",
    landmark: "",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Mongolia",
    landmark: "",
    image: "https://images.unsplash.com/photo-1585482161107-1a653f1d67f4?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Myanmar",
    landmark: "",
    image: "https://images.unsplash.com/photo-1540611025311-01df3cef54b5?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Nigeria",
    landmark: "",
    image: "https://images.unsplash.com/photo-1576487248805-cf45a6f9d42f?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Philippines",
    landmark: "",
    image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Singapore",
    landmark: "",
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Sri Lanka",
    landmark: "",
    image: "https://images.unsplash.com/photo-1588259492576-4b63350baf47?auto=format&fit=crop&w=1400&q=80",
  },
  {
    name: "Vietnam",
    landmark: "",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=80",
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
    question: "Who needs BA/BE study?",
    answer:
      "BA/BE study are commonly needed by pharmaceutical companies and generic manufacturers to support product registration, equivalence evaluation, and regulatory submission requirements.",
  },
  {
    question: "How many validated bioanalytical methods does PML have?",
    answer:
      "PML has developed and validated more than 190 bioanalytical methods covering a wide range of pharmaceutical compounds. PML can also develop and validate new bioanalytical methods based on sponsor needs and project requirements.",
  },
  {
    question: "Can PML support end-to-end BA/BE study?",
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
  const [activeCountry, setActiveCountry] = useState(countries[0]);
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

        <div className="absolute inset-0 bg-[#039147]/22" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-[#039147]/20" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" aria-hidden="true" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.075]" aria-hidden="true" />

        <div className="pml-container relative flex min-h-[560px] flex-col justify-center py-14 md:min-h-[calc(100vh-80px)] md:py-24">
          <nav className="mb-7 flex flex-wrap items-center gap-2 text-xs font-bold text-black/58 md:mb-10 md:text-sm">
            <Link href="/" className="transition hover:text-[#039147]">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition hover:text-[#039147]">
              Services
            </Link>
            <span>/</span>
            <span className="text-[#039147]">BA/BE Study</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/20 bg-white/95 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#039147] shadow-sm backdrop-blur md:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              BA/BE Study
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-[1.02] tracking-tight text-black md:mt-6 md:text-6xl lg:text-[68px]">
              End-to-end bioequivalence study support for reliable regulatory submission
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-black/70 md:mt-6 md:text-lg md:leading-8">
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
                className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-7 py-3.5 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white md:py-4"
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
                  index === 0 ? "w-8 bg-[#039147]" : "w-2.5 bg-black/25"
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
                BA/BE study require coordinated clinical activity, reliable sample handling,
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
                BA/BE study is most relevant for companies preparing evidence for product registration,
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

      <section className="relative overflow-hidden bg-[#f4fbf7] px-4 py-20 text-black md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(3,145,71,0.14),transparent_34%),radial-gradient(circle_at_16%_72%,rgba(255,40,0,0.045),transparent_26%)]" aria-hidden="true" />

        <svg
          className="absolute right-[-140px] top-[-80px] h-[420px] w-[420px] text-[#039147]/10"
          viewBox="0 0 420 420"
          fill="none"
          aria-hidden="true"
        >
          <path d="M210 20L374 115V305L210 400L46 305V115L210 20Z" stroke="currentColor" strokeWidth="4" />
        </svg>

        <svg
          className="absolute left-[-120px] bottom-[-140px] h-[320px] w-[320px] text-[#FF2800]/8"
          viewBox="0 0 320 320"
          fill="none"
          aria-hidden="true"
        >
          <path d="M160 18L284 89V231L160 302L36 231V89L160 18Z" stroke="currentColor" strokeWidth="3" />
        </svg>

        <div className="relative mx-auto w-[min(100%-24px,1280px)]">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#039147]/15 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-[#039147] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Proof & Trust Signals
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] text-black md:text-5xl lg:text-6xl">
              Accepted BE reports across global regulatory bodies
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-black/64 md:text-base md:leading-8">
              PML’s BE reports have supported client submissions across regional and international contexts,
              helping sponsors move forward with credible, regulatory-ready documentation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div>
              <div className="flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
                {countries.map((country) => {
                  const isActive = activeCountry.name === country.name;

                  return (
                    <button
                      key={country.name}
                      type="button"
                      onMouseEnter={() => setActiveCountry(country)}
                      onFocus={() => setActiveCountry(country)}
                      onClick={() => setActiveCountry(country)}
                      className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-extrabold shadow-sm transition duration-300 hover:-translate-y-1 ${
                        isActive
                          ? "border-[#039147] bg-[#039147] text-white"
                          : "border-black/8 bg-white text-black/62 hover:border-[#039147]/30 hover:text-[#039147]"
                      }`}
                    >
                      <span
                        className={`h-1.5 w-1.5 rounded-full transition ${
                          isActive ? "bg-white" : "bg-[#039147]/55 group-hover:bg-[#039147]"
                        }`}
                      />
                      {country.name}
                    </button>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  {
                    value: "190+",
                    label: "Validated methods",
                    desc: "Bioanalytical method capability",
                  },
                  {
                    value: "13",
                    label: "Accepted countries",
                    desc: "Regional and international contexts",
                  },
                  {
                    value: "End-to-end",
                    label: "BA/BE support",
                    desc: "Clinical conduct to reporting",
                  },
                ].map((item) => (
                  <article
                    key={item.label}
                    className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_18px_55px_rgba(0,0,0,0.07)] transition duration-300 hover:-translate-y-2 hover:border-[#039147]/20 hover:shadow-[0_26px_70px_rgba(3,145,71,0.12)]"
                  >
                    <p className="text-3xl font-black tracking-[-0.06em] text-[#039147] md:text-4xl">
                      {item.value}
                    </p>
                    <h3 className="mt-3 text-xs font-extrabold uppercase tracking-[0.13em] text-black/78">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-xs leading-6 text-black/55">
                      {item.desc}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="group overflow-hidden rounded-[34px] border border-black/5 bg-white p-4 shadow-[0_28px_85px_rgba(0,0,0,0.09)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_34px_100px_rgba(3,145,71,0.13)]">
              <div
                className="relative h-[300px] overflow-hidden rounded-[26px] bg-cover bg-center transition duration-700 group-hover:scale-[1.01]"
                style={{ backgroundImage: `url(${activeCountry.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-black/64">
                    
                  </p>
                  <h3 className="mt-2 text-3xl font-black tracking-[-0.04em] text-white">
                    {activeCountry.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-white/72">
                    
                  </p>
                </div>
              </div>

              <div className="p-3 pt-5">
                <p className="text-sm leading-7 text-black/62">
                  BE report acceptance experience in {activeCountry.name} supports PML’s positioning as a
                  CRO partner with regional and international regulatory readiness.
                </p>

                <div className="mt-5 flex items-center justify-between rounded-2xl border border-[#039147]/12 bg-[#f4fbf7] px-4 py-3">
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-black/45">
                    Submission context
                  </span>
                  <span className="rounded-full bg-[#039147] px-3 py-1 text-xs font-extrabold text-white">
                    Accepted report
                  </span>
                </div>
              </div>
            </aside>
          </div>

          <div className="mx-auto mt-9 max-w-4xl rounded-[26px] border border-[#039147]/10 bg-white/80 px-6 py-5 text-center text-sm leading-7 text-black/58 shadow-sm backdrop-blur">
            These trust signals are presented to strengthen confidence in PML’s BA/BE study capability,
            reporting experience, and regulatory submission support.
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

            <div className="absolute inset-0 bg-[#039147]/22" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/46 to-[#039147]/24" />
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

              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/64 md:text-sm">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Need BA/BE study support?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/68 md:text-base md:leading-8">
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
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-[#039147] hover:text-white md:py-4"
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
