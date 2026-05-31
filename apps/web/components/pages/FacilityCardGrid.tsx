import Image from "next/image";
import Link from "next/link";
import { facilities } from "@/data/facilities";

export default function FacilityCardGrid() {
  return (
    <section className="bg-[#eaf8f0] py-20 md:py-28">
      <div className="pml-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
            Facilities Overview
          </p>

          <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
            Integrated facilities for clinical, analytical, and operational needs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/65">
            PML supports reliable CRO delivery through clinical facilities, analytical laboratory
            capability, supporting infrastructure, and facility experience access through VR Gallery.
          </p>
        </div>

        <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {facilities.map((facility) => (
            <Link
              key={facility.key}
              href={facility.href}
              className="group w-[82vw] max-w-[340px] shrink-0 snap-start overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:w-auto md:max-w-none md:rounded-[34px]"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-black">
                <Image
                  src={facility.image}
                  alt={facility.title}
                  fill
                  className="object-cover opacity-85 transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#039147] backdrop-blur">
                  {facility.eyebrow}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-xl font-black leading-tight text-black transition group-hover:text-[#039147] md:text-2xl">
                  {facility.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60 md:mt-4 md:leading-7">
                  {facility.summary}
                </p>

                <span className="mt-7 inline-flex items-center text-sm font-extrabold text-[#039147]">
                  Explore facility
                  <span className="ml-2 transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
          Swipe to explore facilities
        </p>
      </div>
    </section>
  );
}
