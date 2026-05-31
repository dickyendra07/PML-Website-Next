"use client";

import Image from "next/image";

export default function CTACard() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white px-4 py-16 md:py-20">
      <div className="pml-container">
        <div className="relative overflow-hidden rounded-[36px] bg-[#039147] px-6 py-16 text-center text-white shadow-[0_28px_90px_rgba(3,145,71,0.20)] md:rounded-[44px] md:px-10 md:py-20">
          <Image
            src="/images/pml/cta-lab-background.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/62 to-black/34" aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-black/18" aria-hidden="true" />
          <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" aria-hidden="true" />

          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-black/20 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/25 bg-white/90 shadow-lg backdrop-blur">
            <Image
              src="/images/LOGO-PML.png"
              alt="PML"
              width={64}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          <p className="relative mt-8 text-sm font-extrabold uppercase tracking-[0.18em] text-white/80">
            Start a Project
          </p>

          <h2 className="relative mx-auto mt-4 max-w-4xl text-3xl font-black leading-tight md:text-5xl">
            We are ready to support you
          </h2>

          <p className="relative mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/78 md:text-base">
            Share your project needs with our team and we will help you identify the right service, required information, and next steps.
          </p>

          <div className="relative mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openProposal}
              className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#039147] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              Request a Proposal
            </button>

            <a
              href="#footer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/35 px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#039147] sm:w-auto"
            >
              Discuss Your Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
