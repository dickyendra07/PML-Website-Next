import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Services() {
  return (
    <section id="services" className="bg-[#eaf8f0] py-20 md:py-28">
      <div className="pml-container">
        <SectionHeader
          align="center"
          eyebrow="Services"
          title="Integrated CRO services for pharmaceutical development"
          description="From BA/BE studies and clinical trials to contract analysis and regulatory consultation, PML provides integrated CRO support for pharmaceutical, biotechnology, healthcare, food, beverage, cosmetic, and medical device companies."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.key}
              className="group flex h-full flex-col rounded-[34px] border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#eaf8f0] transition group-hover:bg-[#039147]">
                <Image src={service.icon} alt="" width={32} height={32} />
              </div>

              <h3 className="mt-7 text-2xl font-black leading-tight text-black">
                {service.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-black/65">
                {service.summary}
              </p>

              <Link
                href={service.href}
                className="mt-auto inline-flex items-center pt-7 text-sm font-extrabold text-[#039147]"
              >
                Learn more
                <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
