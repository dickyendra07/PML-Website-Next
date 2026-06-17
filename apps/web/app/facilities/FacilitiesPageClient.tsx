"use client";

import Image from "next/image";
import Link from "next/link";
import FacilityCardGrid from "@/components/pages/FacilityCardGrid";

export default function FacilitiesPage() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/pml/hero-lab-hexagon.png"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#039147]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-[#039147]/20" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.075]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58">
            <Link href="/" className="transition hover:text-[#039147]">Home</Link>
            <span>/</span>
            <span className="text-[#039147]">Facilities</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/20 bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Facilities & Capability
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
              Facilities designed to support clinical, analytical, and operational needs
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
              PML provides integrated facilities to support reliable CRO project delivery,
              including clinical facilities, analytical instruments, supporting infrastructure,
              and facility experience access through VR Gallery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#facilities-list"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
              >
                Explore Facilities
              </a>

              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full border border-[#039147]/20 bg-white/85 px-7 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      <div id="facilities-list">
        <FacilityCardGrid />
      </div>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Facility Trust
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Built for reliable study execution and laboratory support
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
              PML facilities are designed to support clinical conduct, sample handling,
              analytical work, study documentation, and project coordination. This gives sponsors
              a clearer operational foundation from early discussion to final reporting.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-2 md:gap-4">
            {[
              "Clinical facility and volunteer coordination",
              "Analytical laboratory capability",
              "Drug storage and archive support",
              "Sample handling workflow",
              "Regulatory-ready documentation",
              "VR Gallery facility experience",
            ].map((item) => (
              <div key={item} className="rounded-[20px] border border-black/5 bg-white p-4 shadow-sm md:rounded-[24px] md:p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                  ✓
                </span>
                <p className="mt-3 text-xs font-bold leading-5 text-black/65 md:mt-4 md:text-sm md:leading-6">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-black shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/cta-lab-background.png"
              alt=""
              fill
              className="object-cover opacity-52"
            />
            <div className="absolute inset-0 bg-white/38" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/46 to-[#039147]/10" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Facility Discussion
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl text-black">
                Need to understand PML facility capability?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/72">
                Share your study, testing, or facility-related questions with our team and we will
                help identify the right support and next steps.
              </p>

              <button
                type="button"
                onClick={openProposal}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
