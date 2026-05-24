"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <section className="relative overflow-hidden bg-black">
      <Image
        src="/images/pml/hero-lab-hexagon.png"
        alt=""
        fill
        className="object-cover opacity-75"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/72 to-[#039147]/35" />
      <div className="pml-hex-pattern absolute inset-0 opacity-[0.12]" />

      <div className="pml-container relative z-10 grid min-h-[760px] items-center py-24">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#039147]" />
            Contract Research Organization
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-white md:text-7xl xl:text-8xl">
            Integrated CRO services for pharmaceutical development
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-white/72 md:text-lg">
            Pharma Metric Labs supports sponsors through integrated clinical, analytical,
            and regulatory services, from study planning to reliable execution and
            regulatory-ready documentation.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openProposal}
              className="inline-flex h-13 items-center justify-center rounded-full bg-white px-7 text-sm font-black text-[#039147] transition hover:-translate-y-0.5"
            >
              Request a Proposal
            </button>

            <Link
              href="/services"
              className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-black text-white transition hover:-translate-y-0.5"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
