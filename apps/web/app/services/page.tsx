import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";
import CTACard from "@/components/ui/CTACard";

export const metadata = {
  title: "Services | Pharma Metric Labs",
  description:
    "Explore Pharma Metric Labs CRO services including BA/BE studies, clinical trial services, contract analysis, and regulatory consultation.",
};

export default function ServicesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black py-28 md:py-36">
        <Image
          src="/images/pml/hero-lab-hexagon.png"
          alt=""
          fill
          priority
          className="object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-[#039147]/35" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.12]" />

        <div className="pml-container relative z-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/75">
              CRO Services
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.05em] text-white md:text-7xl">
              Integrated CRO services for pharmaceutical development
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70">
              Explore PML services across bioequivalence studies, clinical research support,
              analytical testing, and regulatory consultation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-20 md:py-28">
        <div className="pml-container">
          <SectionHeader
            align="center"
            eyebrow="Service Overview"
            title="Choose the support that fits your project"
            description="Each service page provides scope, workflow, proof points, required information, and related FAQ to help sponsors understand the next steps."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className="group overflow-hidden rounded-[34px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
              >
                <div className="relative h-56">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white">
                    <Image src={service.icon} alt="" width={24} height={24} />
                  </div>
                </div>

                <div className="p-7">
                  <h2 className="text-2xl font-black text-black">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-black/60">
                    {service.summary}
                  </p>
                  <span className="mt-6 inline-flex text-sm font-black text-[#039147]">
                    Learn more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTACard />
    </main>
  );
}
