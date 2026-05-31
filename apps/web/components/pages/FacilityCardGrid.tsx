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

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {facilities.map((facility) => (
            <Link
              key={facility.key}
              href={facility.href}
              className="group overflow-hidden rounded-[34px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
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

              <div className="p-8">
                <h3 className="text-2xl font-black leading-tight text-black transition group-hover:text-[#039147]">
                  {facility.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/60">
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
      </div>
    </section>
  );
}
