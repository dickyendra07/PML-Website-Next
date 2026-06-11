"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const slides = [
  {
    eyebrow: "CRO Services",
    title: "Your Partner for End-to-End Clinical Research Success",
    description:
      "Pharma Metric Labs supports pharmaceutical, biotechnology, medical device, food, beverage, and healthcare companies with integrated CRO services, from contract analysis, BA/BE study, and clinical trial to regulatory management.",
    primary: "Request a Proposal",
    secondary: "Explore Our Services",
    secondaryHref: "#services",
    image: "/images/pml/hero-lab-hexagon.png",
  },
  {
    eyebrow: "BA/BE Study",
    title: "End-to-End BA/BE Study Support You Can Rely On",
    description:
      "PML supports end-to-end bioavailability and bioequivalence study from clinical conduct and bioanalysis to regulatory-ready reporting, helping sponsors move forward with quality, compliance, and confidence.",
    primary: "Request a Proposal",
    secondary: "Explore BA/BE Study",
    secondaryHref: "#services",
    image: "/images/pml/hero/hero-babe-studies.png",
  },
  {
    eyebrow: "Clinical Trial",
    title: "Clinical Trial Support Across the Entire Study Journey",
    description:
      "From study planning and site coordination to monitoring, data management, and regulatory support, PML helps sponsors execute clinical research with reliable local expertise.",
    primary: "Request a Proposal",
    secondary: "Explore Clinical Trial",
    secondaryHref: "#services",
    image: "/images/pml/hero/hero-clinical-trials.png",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSlide = useMemo(() => slides[activeIndex], [activeIndex]);

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  const goToSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-black">
      <div className="relative min-h-[calc(100vh-80px)]">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <article
              key={slide.title}
              className={`absolute inset-0 min-h-[calc(100vh-80px)] transition-opacity duration-700 ${
                isActive ? "z-10 opacity-100" : "z-0 opacity-0"
              }`}
              aria-hidden={!isActive}
            >
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt=""
                  fill
                  priority={index === 0}
                  className={`object-cover opacity-60 transition-transform duration-[6500ms] ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/58 to-black/18" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
                <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.075]" />
              </div>

              <div className="pml-container relative flex min-h-[calc(100vh-80px)] items-center py-20">
                <div
                  className={`max-w-4xl transition duration-700 ${
                    isActive ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                  }`}
                >
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    <span className="h-2 w-2 rounded-full bg-[#039147]" />
                    {slide.eyebrow}
                  </div>

                  <h1 className="max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-5xl lg:text-[54px] xl:text-[60px]">
                    {slide.title}
                  </h1>

                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 md:text-lg">
                    {slide.description}
                  </p>

                  <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={openProposal}
                      className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-extrabold text-[#039147] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                    >
                      {slide.primary}
                    </button>

                    <Link
                      href={slide.secondaryHref}
                      className="inline-flex items-center justify-center rounded-full border border-white/40 px-7 py-3.5 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#039147]"
                    >
                      {slide.secondary}
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}

        <button
          type="button"
          onClick={() => goToSlide(activeIndex - 1)}
          className="absolute left-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl font-light text-white backdrop-blur transition hover:bg-white hover:text-[#039147] md:flex"
          aria-label="Previous hero slide"
        >
          ‹
        </button>

        <button
          type="button"
          onClick={() => goToSlide(activeIndex + 1)}
          className="absolute right-5 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-white/10 text-2xl font-light text-white backdrop-blur transition hover:bg-white hover:text-[#039147] md:flex"
          aria-label="Next hero slide"
        >
          ›
        </button>

        <div className="absolute bottom-9 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex ? "w-8 bg-[#039147]" : "w-2.5 bg-white/50"
              }`}
              aria-label={`Go to hero slide ${index + 1}`}
              aria-current={index === activeIndex}
            />
          ))}
        </div>
      </div>

      <span className="sr-only">{activeSlide.title}</span>
    </section>
  );
}
