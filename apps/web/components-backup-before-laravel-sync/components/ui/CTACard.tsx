"use client";

import Image from "next/image";

export default function CTACard() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <section id="proposal" className="bg-white px-4 py-20 md:py-28">
      <div className="pml-container">
        <div className="relative overflow-hidden rounded-[34px] bg-black px-6 py-20 text-center shadow-[0_24px_90px_rgba(3,145,71,0.18)] md:px-12 md:py-24">
          <Image
            src="/images/pml/cta-lab-background.png"
            alt=""
            fill
            className="object-cover opacity-70"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/70 to-[#039147]/55" />
          <div className="pml-hex-pattern absolute inset-0 opacity-[0.12]" />

          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/95 shadow-xl">
              <Image src="/images/LOGO-PML.png" alt="" width={56} height={36} className="h-auto w-11" />
            </div>

            <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-white/70">
              Start a Project
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-6xl">
              We are ready to support your next project
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/72">
              Share your study, testing, or regulatory needs with our team and we will help identify
              the right service, required information, and next steps.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openProposal}
                className="inline-flex h-13 items-center justify-center rounded-full bg-white px-7 text-sm font-black text-[#039147] transition hover:-translate-y-0.5"
              >
                Request a Proposal
              </button>

              <a
                href="/services"
                className="inline-flex h-13 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-black text-white transition hover:-translate-y-0.5"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
