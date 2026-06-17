"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FacilityItem, facilities } from "@/data/facilities";

type FacilityDetailTemplateProps = {
  data: FacilityItem;
};

export default function FacilityDetailTemplate({ data }: FacilityDetailTemplateProps) {
  const [activeImage, setActiveImage] = useState(0);

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  const otherFacilities = facilities.filter((facility) => facility.key !== data.key);
  const isVrGallery = data.key === "vr-gallery";

  const prevImage = () => {
    setActiveImage((current) => (current === 0 ? data.gallery.length - 1 : current - 1));
  };

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % data.gallery.length);
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src={data.image}
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#039147]/22" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-[#039147]/20" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.075]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/facilities" className="transition hover:text-white">Facilities</Link>
            <span>/</span>
            <span className="text-[#039147]">{data.title}</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/85 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              {data.eyebrow}
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
              {data.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
              {data.summary}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {isVrGallery ? (
                <a
                  href="https://vr-tour-lab.pharmametriclabs.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
                >
                  Open VR Gallery
                </a>
              ) : (
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
                >
                  Request a Proposal
                </button>
              )}

              <a
                href="#facility-detail"
                className="inline-flex items-center justify-center rounded-full border border-[#039147]/20 bg-white/85 px-7 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-white hover:text-white"
              >
                Explore Details
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="facility-detail" className="bg-white py-16 md:py-28">
        <div className="pml-container grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Facility Detail
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              {isVrGallery
                ? "Explore PML facilities through an interactive VR experience"
                : `Capability overview for ${data.title.toLowerCase()}`}
            </h2>

            <p className="mt-6 text-base leading-8 text-black/65">
              {data.summary}
            </p>

            {isVrGallery ? (
              <a
                href="https://vr-tour-lab.pharmametriclabs.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)]"
              >
                Visit VR Tour
              </a>
            ) : (
              <button
                type="button"
                onClick={openProposal}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)]"
              >
                Discuss This Facility
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {data.points.map((point) => (
              <div key={point} className="flex items-start gap-3 rounded-[20px] border border-black/5 bg-white p-4 shadow-sm md:rounded-[22px] md:p-5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-[#039147]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="text-xs font-bold leading-5 text-black/70 md:text-sm md:leading-6">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6faf7] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Facility Gallery
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Real facility visuals from Pharma Metric Labs
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/65">
              Explore selected facility images to better understand PML’s clinical, analytical,
              and operational environment.
            </p>
          </div>

          <div className="mx-auto mt-10 max-w-6xl md:mt-12">
            <div className="relative overflow-hidden rounded-[28px] bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:rounded-[34px] md:p-3">
              <div className="relative overflow-hidden rounded-[26px] bg-black">
                <Image
                  src={data.gallery[activeImage]}
                  alt={`${data.title} gallery ${activeImage + 1}`}
                  width={1200}
                  height={760}
                  className="mx-auto aspect-[4/3] max-h-[560px] w-full object-contain bg-black md:aspect-[16/8.5]"
                />

                <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#039147] backdrop-blur">
                  {String(activeImage + 1).padStart(2, "0")} / {String(data.gallery.length).padStart(2, "0")}
                </div>

                {data.gallery.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-2xl font-light text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
                      aria-label="Previous gallery image"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/35 text-2xl font-light text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
                      aria-label="Next gallery image"
                    >
                      ›
                    </button>
                  </>
                ) : null}
              </div>
            </div>

            <div className="mt-5 overflow-x-auto pb-2">
              <div className="flex min-w-max gap-3">
                {data.gallery.map((image, index) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    className={`group w-[150px] shrink-0 overflow-hidden rounded-[18px] border p-1 text-left transition md:w-[180px] ${
                      activeImage === index
                        ? "border-[#039147] bg-[#eaf8f0] shadow-[0_12px_30px_rgba(3,145,71,0.14)]"
                        : "border-black/5 bg-white hover:border-[#039147]/30"
                    }`}
                    aria-label={`Show gallery image ${index + 1}`}
                  >
                    <Image
                      src={image}
                      alt={`${data.title} thumbnail ${index + 1}`}
                      width={360}
                      height={240}
                      className="aspect-[16/10] w-full rounded-[14px] object-cover transition duration-500 group-hover:scale-105"
                    />

                    <span className={`block px-2 py-2 text-xs font-black ${
                      activeImage === index ? "text-[#039147]" : "text-black/45"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Other Facilities
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Explore related facility capabilities
            </h2>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:mt-12 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {otherFacilities.map((facility) => (
              <Link
                key={facility.key}
                href={facility.href}
                className="group w-[78vw] max-w-[320px] shrink-0 snap-start overflow-hidden rounded-[26px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:w-auto md:max-w-none md:rounded-[30px]"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                <div className="p-6">
                  <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#039147]">
                    {facility.eyebrow}
                  </p>

                  <h3 className="mt-3 text-xl font-black leading-tight text-black">
                    {facility.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/60">
                    {facility.summary}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore other facilities
          </p>
        </div>
      </section>
    </main>
  );
}
