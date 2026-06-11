"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import OtherServices from "@/components/OtherServices";

const heroImage = "/images/pml/services/clinical-trial-cta.png";
const companyImage = "/images/pml/services/contract-analysis-cta.png";

const timeline = [
  {
    year: "2005",
    title: "PML established",
    text: "Pharma Metric Labs was established with a clear purpose: to become a reliable scientific partner for pharmaceutical development in Indonesia. From the beginning, PML focused on building a disciplined CRO foundation supported by clinical, analytical, and documentation capabilities.",
  },
  {
    year: "2007",
    title: "First 15 local BE projects completed",
    text: "PML completed its first 15 bioequivalence projects for local sponsors, marking an important early achievement in the company’s CRO journey. This milestone strengthened PML’s experience in supporting local pharmaceutical companies with study execution, bioanalysis, and regulatory-ready reporting.",
  },
  {
    year: "2010",
    title: "First international sponsor project",
    text: "PML expanded its project experience by supporting its first international sponsor. This milestone reflected growing trust from overseas partners and positioned PML as an Indonesia-based CRO capable of supporting both local and international pharmaceutical development needs.",
  },
  {
    year: "2013",
    title: "Foreign BE Centre accreditation from NPRA Malaysia",
    text: "PML received Foreign Bioequivalence Centre accreditation from the National Pharmaceutical Regulatory Agency Malaysia. This accreditation became an important trust signal for international sponsors and demonstrated PML’s commitment to accepted standards, reliable study conduct, and credible bioequivalence reporting.",
  },
  {
    year: "2020",
    title: "Analytical and bioanalytical laboratory expansion",
    text: "PML strengthened its analytical and bioanalytical laboratory operations through a clearer facility separation. Analytical laboratory activities were expanded to KBIC East Jakarta, creating a more focused structure for laboratory testing, bioanalysis workflows, and broader testing capacity.",
  },
  {
    year: "2024",
    title: "Plenary accreditation from the Ministry of Health",
    text: "PML received Plenary Accreditation from the Ministry of Health of the Republic of Indonesia. This recognition strengthened PML’s credibility as a clinical and laboratory service provider and reinforced the company’s commitment to quality standards, accountable processes, and reliable study operations.",
  },
  {
    year: "2026",
    title: "New facility and expanded BA/BE clinical capacity",
    text: "PML relocated to a new facility and expanded its BA/BE clinical site capacity from 40 beds to 70 beds. This milestone strengthens PML's ability to support larger studies, improve clinical operation flow, and deliver more efficient study execution.",
  },
];

const values = [
  {
    title: "Scientific excellence",
    text: "Delivering services through strong experience, scientific discipline, and continuous innovation.",
    icon: "science",
  },
  {
    title: "Quality and compliance",
    text: "Maintaining rigorous standards to support reliable outcomes and accountable documentation.",
    icon: "shield",
  },
  {
    title: "Customer-oriented collaboration",
    text: "Working closely with sponsors to understand goals, timelines, and project requirements.",
    icon: "network",
  },
  {
    title: "Global readiness",
    text: "Supporting local and international clients with credible CRO services and accepted study outputs.",
    icon: "global",
  },
];

const certifications = [
  {
    title: "SNI ISO/IEC 17025:2017",
    image: "/images/pml/certificates/iso-17025.png",
  },
  {
    title: "Plenary Accreditation from the Ministry of Health of the Republic of Indonesia",
    image: "/images/pml/certificates/akreditasi-paripurna.png",
  },
  {
    title: "Foreign Bioequivalence Centre Accreditation from the National Pharmaceutical Regulatory Agency Malaysia",
    image: "/images/pml/certificates/npra.jpeg",
  },
];

const facts = [
  { number: 20, suffix: "+", label: "years experience" },
  { number: 1500, suffix: "+", label: "completed projects" },
  { number: 3500, suffix: "+", label: "healthy volunteers database" },
  { number: 190, suffix: "+", label: "validated bioanalytical methods" },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasAnimated(true);

        const duration = 1400;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easedProgress * target);

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <p ref={ref} className="text-3xl font-black text-[#039147] md:text-5xl">
      {formatNumber(count)}
      {suffix}
    </p>
  );
}

function Icon({ name }: { name: string }) {
  if (name === "science") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 3V8L5.8 17.2C5.1 18.8 6.2 20.5 8 20.5H16C17.8 20.5 18.9 18.8 18.2 17.2L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M4 12H20M12 4C14 6.2 15 8.8 15 12C15 15.2 14 17.8 12 20M12 4C10 6.2 9 8.8 9 12C9 15.2 10 17.8 12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CertIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M12 3L19 6V11C19 15.8 16 19.2 12 21C8 19.2 5 15.8 5 11V6L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroButton({
  children,
  onClick,
  href,
  variant = "white",
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "white" | "outline";
}) {
  const className =
    variant === "white"
      ? "inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-[0_18px_40px_rgba(0,0,0,0.22)]"
      : "inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-[#039147] hover:text-white";

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default function AboutUsPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  const goTimeline = (nextIndex: number) => {
    setActiveTimeline((nextIndex + timeline.length) % timeline.length);
  };

  const activeItem = timeline[activeTimeline];

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image src={heroImage} alt="" fill priority className="object-cover opacity-90" />
        <div className="absolute inset-0 bg-[#039147]/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/60 to-[#039147]/18" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.075]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-[#039147]">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#039147]">About Us</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/20 bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              About Pharma Metric Labs
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
              Indonesia-based CRO partner built for scientific excellence
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
              Pharma Metric Labs supports pharmaceutical and healthcare companies with BA/BE study,
              clinical trial, contract analysis, and regulatory management.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <HeroButton href="#about-overview">Learn About PML</HeroButton>
              <HeroButton onClick={openProposal} variant="outline">
                Request a Proposal
              </HeroButton>
            </div>
          </div>
        </div>
      </section>

      <section id="company-profile" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div className="overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.10)] md:rounded-[34px] md:p-3">
              <Image
                src={companyImage}
                alt="Pharma Metric Labs scientific team and laboratory"
                width={900}
                height={675}
                className="aspect-[4/3] w-full rounded-[26px] object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Company Overview
              </p>

              <h2 className="mt-4 text-2xl font-black leading-tight text-black md:text-5xl">
                Scientific CRO support for reliable pharmaceutical development
              </h2>

              <div className="mt-5 space-y-4 text-sm leading-7 text-black/65 md:mt-6 md:space-y-5 md:text-base md:leading-8">
                <p>
                  Pharma Metric Labs is an Indonesia-based Contract Research Organization
                  supporting sponsors through integrated clinical, analytical, and regulatory
                  services. PML helps companies move from study planning to reliable execution,
                  accountable documentation, and regulatory-ready outcomes.
                </p>

                <p>
                  With experience across bioequivalence studies, clinical trial,
                  contract analysis, and regulatory management, PML combines scientific
                  discipline, quality standards, multidisciplinary expertise, and responsive
                  project collaboration.
                </p>
              </div>

              <div className="mt-7 rounded-[24px] bg-[#039147] p-6 text-white shadow-[0_24px_60px_rgba(3,145,71,0.22)] md:mt-8 md:rounded-[28px] md:p-7">
                <h3 className="text-2xl font-black">
                  Innovation, powered by scientific excellence.
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/68">
                  The brand essence behind Pharma Metric Labs’ renewed identity and digital direction.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-5">
            {facts.map((fact) => (
              <div key={fact.label} className="rounded-[22px] border border-black/5 bg-white p-4 text-center shadow-sm md:rounded-[28px] md:p-7">
                <CountUpNumber target={fact.number} suffix={fact.suffix} />
                <p className="mt-2 text-sm font-extrabold leading-6 text-[#039147]">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="experts-team" className="bg-[#f6faf7] py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Experts & Team
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Multidisciplinary expertise across clinical, laboratory, regulatory, and project workflows
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML is supported by professionals with experience across clinical study operations,
                bioanalysis, laboratory testing, regulatory affairs, documentation, and project
                coordination. This multidisciplinary structure helps sponsors move from inquiry to
                execution with clearer communication and stronger technical support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                "Clinical operations team",
                "Bioanalytical laboratory team",
                "Regulatory affairs support",
                "Project coordination team",
                "Quality and documentation workflow",
                "Sponsor communication support",
              ].map((item) => (
                <div key={item} className="rounded-[20px] border border-black/5 bg-white p-4 shadow-sm md:rounded-[24px] md:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                    ✓
                  </span>
                  <p className="mt-3 text-xs font-bold leading-5 text-black/65 md:mt-4 md:text-sm md:leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              History / Milestones
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              A growing CRO journey built through experience and accreditation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-black/65">
              From early bioequivalence projects to expanded facilities and national accreditation,
              PML continues to strengthen its capability for local and international sponsors.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-6xl md:mt-14">
            <div className="relative">
              <div className="absolute left-0 right-0 top-[35px] hidden h-px bg-black/10 lg:block" />

              <div className="grid auto-cols-[150px] grid-flow-col gap-4 overflow-x-auto pb-4 md:auto-cols-[170px] lg:auto-cols-fr lg:grid-flow-row lg:grid-cols-7 lg:overflow-visible lg:pb-0">
                {timeline.map((item, index) => {
                  const active = index === activeTimeline;

                  return (
                    <button
                      key={item.year}
                      type="button"
                      onClick={() => setActiveTimeline(index)}
                      className={`group relative flex min-h-[118px] flex-col items-center justify-center rounded-[22px] border px-4 py-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                        active
                          ? "border-[#039147]/25 bg-[#eaf8f0]"
                          : "border-black/5 bg-white"
                      }`}
                      aria-label={`Show milestone ${item.year}`}
                    >
                      <span
                        className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#eaf8f0] transition ${
                          active
                            ? "bg-[#039147] shadow-[0_0_0_8px_rgba(3,145,71,0.10)]"
                            : "bg-black/15"
                        }`}
                      />

                      <span
                        className={`mt-4 text-lg font-black transition ${
                          active ? "text-[#039147]" : "text-black/45"
                        }`}
                      >
                        {item.year}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:mt-12 lg:grid-cols-[1fr_0.75fr] lg:items-center lg:gap-10">
              <div className="relative">
                <article>
                  <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm md:rounded-[34px] md:p-10">
                    <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                      {activeItem.year}
                    </p>

                    <h3 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                      {activeItem.title}
                    </h3>

                    <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                      {activeItem.text}
                    </p>
                  </div>
                </article>
              </div>

              <div className="relative overflow-hidden rounded-[28px] bg-white p-6 text-center shadow-sm md:rounded-[34px] md:p-12">
                <div className="pml-hex-pattern absolute inset-0 opacity-[0.06]" />

                <div className="relative">
                  <p className="text-[58px] font-black leading-none text-[#039147] md:text-[110px]">
                    {activeItem.year}
                  </p>

                  <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.18em] text-black/40">
                    PML Milestone
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center gap-3">
              <button
                type="button"
                onClick={() => goTimeline(activeTimeline - 1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-lg font-black text-black/45 transition hover:border-[#039147] hover:text-[#039147]"
                aria-label="Previous milestone"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => goTimeline(activeTimeline + 1)}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-lg font-black text-[#039147] transition hover:bg-[#039147] hover:text-[#039147]"
                aria-label="Next milestone"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-[28px] border border-black/5 bg-white p-6 shadow-sm md:rounded-[34px] md:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Vision
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black">
                To become a world-class Contract Research Organization
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65">
                PML aims to be recognized by local and international customers as a reliable
                CRO partner for pharmaceutical and healthcare development.
              </p>
            </article>

            <article className="rounded-[28px] border border-black/5 bg-[#039147] p-6 text-white shadow-[0_24px_70px_rgba(3,145,71,0.20)] md:rounded-[34px] md:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/64">
                Mission
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight">
                To ensure good quality healthcare products for the community
              </h2>

              <p className="mt-5 text-base leading-8 text-black/68">
                PML supports this mission through scientific services, reliable data,
                quality-focused workflows, and collaborative project execution.
              </p>
            </article>
          </div>

          <div className="mt-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Core Values
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Built on quality, collaboration, and scientific rigor
              </h2>
            </div>

            <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
              {values.map((value) => (
                <article key={value.title} className="group w-[78vw] max-w-[320px] shrink-0 snap-start rounded-[26px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:w-auto md:max-w-none md:rounded-[28px] md:p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#039147]/10 bg-[#eaf8f0] text-[#039147] transition group-hover:scale-105">
                    <Icon name={value.icon} />
                  </div>

                  <h3 className="text-lg font-black leading-tight text-black">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {value.text}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
              Swipe to explore values
            </p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f4fbf7] px-4 py-20 text-black md:py-28">
        <Image
          src="/images/pml/services/contract-analysis-proof.png"
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
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Certifications / Compliance
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Accredited support for reliable study and laboratory services
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/68">
              PML’s certification and accreditation records strengthen trust in its scientific,
              clinical, and laboratory service delivery.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-6xl gap-5 md:grid-cols-3">
            {certifications.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[30px] border border-black/5 bg-white/92 p-5 shadow-[0_18px_55px_rgba(0,0,0,0.07)] backdrop-blur transition hover:-translate-y-1 hover:border-[#039147]/20 hover:shadow-[0_26px_70px_rgba(3,145,71,0.12)] md:p-6"
              >
                <div className="overflow-hidden rounded-[22px] bg-[#f4fbf7]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={700}
                    height={460}
                    className="aspect-[4/3] w-full object-contain p-4 transition duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex h-10 w-10 items-center justify-center rounded-2xl border border-[#039147]/10 bg-[#eaf8f0] text-[#039147]">
                  <Icon name="shield" />
                </div>

                <h3 className="mt-4 text-lg font-black leading-tight text-black md:text-xl">
                  {item.title}
                </h3>

              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="clients-network" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Clients & Network
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Supporting local and international sponsors through reliable collaboration
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML supports pharmaceutical companies, healthcare organizations, research partners,
                hospitals, investigators, and overseas sponsors that require clinical, analytical,
                regulatory, and documentation support in Indonesia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                "Local pharmaceutical companies",
                "International sponsors",
                "Hospital and investigator network",
                "Healthcare and research partners",
                "Regulatory and documentation teams",
                "Clinical and laboratory collaborators",
              ].map((item) => (
                <div key={item} className="rounded-[20px] border border-black/5 bg-[#f6faf7] p-4 shadow-sm md:rounded-[24px] md:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                    ✓
                  </span>
                  <p className="mt-3 text-xs font-bold leading-5 text-black/65 md:mt-4 md:text-sm md:leading-6">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="catalogue" className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:rounded-[36px] md:p-10">
            <div className="pml-hex-pattern absolute inset-0 opacity-[0.05]" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                  Catalogue
                </p>

                <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                  Company materials and service references
                </h2>

                <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                  This section is prepared for future company profile, service catalogue,
                  certificates, and downloadable business materials. For now, visitors can contact
                  PML directly to request the latest official documents.
                </p>

                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5"
                >
                  Request Catalogue
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {[
                  "Company Profile",
                  "Service Catalogue",
                  "Certificates",
                  "Facility Overview",
                ].map((item) => (
                  <div key={item} className="rounded-[22px] border border-black/5 bg-[#f6faf7] p-5 text-center shadow-sm md:rounded-[26px] md:p-6">
                    <p className="text-sm font-black leading-tight text-black">{item}</p>
                    <p className="mt-2 text-xs font-bold text-black/45">Available by request</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <OtherServices current={null} variant="four" />

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
                Work with PML
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Ready to discuss your next project?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/68">
                Share your study, testing, or regulatory needs with our team and we will help
                identify the right service scope, required information, and next steps.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-[#039147] px-8 py-4 text-sm font-extrabold text-white shadow-[0_18px_44px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5 hover:bg-[#027a3c]"
                >
                  Request a Proposal
                </button>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-8 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
