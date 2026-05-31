import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Services() {
  return (
    <section id="services" className="bg-[#eaf8f0] py-16 md:py-28">
      <div className="pml-container">
        <SectionHeader
          align="center"
          eyebrow="Services"
          title="Integrated CRO Services for Pharmaceutical Development"
          description="From BA/BE studies and clinical trials to contract analysis and regulatory consultation, PML provides integrated CRO support for pharmaceutical, biotechnology, healthcare, food, beverage, cosmetic, and medical device companies."
        />

        <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:mt-14 md:grid md:overflow-visible md:px-0 md:pb-0 md:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {services.map((service) => (
            <article
              key={service.key}
              className="group flex h-full min-w-[82%] snap-start flex-col rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] sm:min-w-[48%] md:min-w-0 md:rounded-[34px] md:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8f0] transition group-hover:bg-[#039147] md:h-16 md:w-16">
                <Image src={service.icon} alt="" width={32} height={32} />
              </div>

              <h3 className="mt-6 text-xl font-black leading-tight text-black md:mt-7 md:text-2xl">
                {service.title}
              </h3>

              <p className="mt-3 line-clamp-4 text-sm leading-7 text-black/65 md:mt-4">
                {service.summary}
              </p>

              <Link
                href={service.href}
                className="mt-auto inline-flex items-center pt-6 text-sm font-extrabold text-[#039147] md:pt-7"
              >
                Learn more
                <span className="ml-2 transition group-hover:translate-x-1">→</span>
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-2 text-center text-xs font-bold text-black/40 md:hidden">
          Swipe to explore services
        </p>
      </div>
    </section>
  );
}
