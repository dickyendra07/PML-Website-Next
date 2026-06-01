"use client";

import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesPageClient() {
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
          className="object-cover opacity-80"
        />

        <div className="absolute inset-0 bg-black/45" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/45 to-black/70 md:bg-gradient-to-r md:from-black/90 md:via-black/58 md:to-black/20" aria-hidden="true" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" aria-hidden="true" />

        <div className="pml-container relative flex min-h-[520px] flex-col justify-center py-14 md:min-h-[620px] md:py-32">
          <nav className="mb-7 flex flex-wrap items-center justify-center gap-2 text-xs font-bold text-white/60 md:mb-10 md:text-sm" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">Services</span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white shadow-sm backdrop-blur md:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              CRO Services
            </p>

            <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight text-white md:mt-6 md:text-6xl lg:text-[68px]">
              Integrated CRO services for pharmaceutical development
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 md:mt-6 md:text-lg md:leading-8">
              Explore PML services across bioequivalence studies, clinical research support,
              analytical testing, and regulatory consultation.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row md:mt-8">
              <a
                href="#services-list"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#039147] shadow-[0_18px_40px_rgba(0,0,0,0.22)] transition hover:-translate-y-0.5 md:py-4"
              >
                Explore Services
              </a>

              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147] md:py-4"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="services-list" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Service Overview
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Choose the service that fits your project needs
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-black/65 md:mt-6 md:text-base">
              PML combines clinical, analytical, and regulatory capabilities to support study
              planning, reliable execution, laboratory analysis, and submission readiness.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {services.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="group flex w-[82vw] max-w-[360px] shrink-0 snap-start flex-col overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:w-auto md:max-w-none md:rounded-[34px]"
              >
                <div className="relative h-52 overflow-hidden bg-[#eaf8f0] md:aspect-[16/9] md:h-auto">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                  <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 text-[#039147] shadow-lg backdrop-blur transition group-hover:bg-[#039147] group-hover:text-white md:bottom-5 md:left-5 md:h-14 md:w-14">
                    <Image src={service.icon} alt="" width={24} height={24} />
                  </div>

                  <div className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#039147] backdrop-blur md:hidden">
                    Service
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  <h3 className="text-xl font-black leading-tight text-black transition group-hover:text-[#039147] md:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60 md:mt-4 md:leading-7">
                    {service.summary}
                  </p>

                  <span className="mt-auto inline-flex items-center pt-6 text-sm font-extrabold text-[#039147] md:pt-7">
                    Learn more
                    <span className="ml-2 transition group-hover:translate-x-1" aria-hidden="true">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore all services
          </p>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/services/contract-analysis-cta.png"
              alt=""
              fill
              className="object-cover opacity-80"
            />

            <div className="absolute inset-0 bg-black/62" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-[#039147]/35" aria-hidden="true" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" aria-hidden="true" />

            <div className="relative mx-auto max-w-3xl">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/90 shadow-lg backdrop-blur md:mb-7 md:h-16 md:w-16">
                <Image
                  src="/images/LOGO-PML.png"
                  alt="PML"
                  width={90}
                  height={48}
                  className="h-7 w-auto md:h-8"
                />
              </div>

              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/70 md:text-sm">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Need support for your next project?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 md:text-base md:leading-8">
                Share your project needs with our team and we will help identify the right
                service scope, required information, and next steps.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5 md:py-4"
                >
                  Request a Proposal
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147] md:py-4"
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
