import Image from "next/image";
import Link from "next/link";
import { getOtherServices, ServiceKey } from "@/data/services";

type OtherServicesProps = {
  current?: ServiceKey | null;
  variant?: "three" | "four";
};

export default function OtherServices({ current = null, variant = "three" }: OtherServicesProps) {
  const items = current ? getOtherServices(current) : getOtherServices(null);
  const visibleItems = variant === "four" ? items : items.slice(0, 3);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="pml-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#039147]">
              Other Services
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-black md:text-5xl">
              Explore related CRO services
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/60">
              Continue exploring PML’s integrated services across clinical research, analytical testing,
              bioequivalence studies, and regulatory consultation.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#039147]/25 px-6 text-sm font-black text-[#039147] transition hover:bg-[#039147] hover:text-white"
          >
            View all services →
          </Link>
        </div>

        <div className={`mt-12 grid gap-6 ${variant === "four" ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}>
          {visibleItems.map((service) => (
            <Link
              key={service.key}
              href={service.href}
              className="group overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)]"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                <div className="absolute bottom-5 left-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#039147]">
                  <Image src={service.icon} alt="" width={24} height={24} />
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-2xl font-black text-black">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">{service.summary}</p>
                <span className="mt-6 inline-flex text-sm font-black text-[#039147]">
                  Learn more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
