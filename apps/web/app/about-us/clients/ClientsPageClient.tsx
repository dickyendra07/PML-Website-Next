"use client";

import Image from "next/image";
import Link from "next/link";

const clientLogos = [
  {
    name: "Client Partner",
    image: "/images/pml/clients/all/04-Logo11-929842ffe52e9f9acefa4d9b7d299b2c.png",
  },
  {
    name: "Client Partner",
    image: "/images/pml/clients/all/05-Logo23-9f1c4cebb16627a1c8863f0217589ff1.png",
  },
  {
    name: "Client Partner",
    image: "/images/pml/clients/all/06-Logo48-50c461fc9ee60d8979787ca5b6f2d069.png",
  },
  {
    name: "Client Partner",
    image: "/images/pml/clients/all/07-Logo101-a4c1e7f5d80057508f3a0c8b6044fb5d.png",
  },
  {
    name: "Client Partner",
    image: "/images/pml/clients/all/08-Logo102-21e882f6bea598ffb0b9850bd0d1be94.png",
  },
  {
    name: "Client Partner",
    image: "/images/pml/clients/all/09-Logo103-040273d3342defd193fcd90856ea4ec1.png",
  },
  {
    name: "BRIN",
    image: "/images/pml/clients/all/10-LogoBrin-ce0b45219c32eb5f45bf40280107e319.png",
  },
  {
    name: "Danone",
    image: "/images/pml/clients/all/11-LogoDanone-2e319fffe365090c3d87c9b0ccb495c2.png",
  },
  {
    name: "Novotech",
    image: "/images/pml/clients/all/12-novotech-393598700a2884f3470db0f718de44e7.jpeg",
  },
];

const clientSegments = [
  "Pharmaceutical companies",
  "Biotechnology companies",
  "Medical device companies",
  "Food & beverage companies",
  "Cosmetic companies",
  "Traditional medicine companies",
  "Research institutions",
  "Clinical research partners",
];

const collaborationValues = [
  {
    title: "Responsive coordination",
    desc: "Clear communication and project support from inquiry to study or testing execution.",
  },
  {
    title: "Scientific reliability",
    desc: "Clinical, analytical, and regulatory workflows supported by experienced teams and facility capability.",
  },
  {
    title: "Local and international readiness",
    desc: "PML supports sponsors and partners that need Indonesian CRO capability with global-facing standards.",
  },
  {
    title: "Regulatory-oriented documentation",
    desc: "Project outputs are prepared with documentation needs and submission readiness in mind.",
  },
];

export default function ClientsPage() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/pml/clients/all/03-banner_clients.png"
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#039147]/24" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/62 to-[#039147]/20" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.075]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58">
            <Link href="/" className="transition hover:text-[#039147]">Home</Link>
            <span>/</span>
            <Link href="/about-us" className="transition hover:text-[#039147]">About Us</Link>
            <span>/</span>
            <span className="text-white">Our Clients</span>
          </nav>

          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/15 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Clients & Network
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
              Trusted by clients and partners across research-driven industries
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
              PML works closely with local and international sponsors, institutions, and research
              partners that require clinical, analytical, regulatory, and documentation support.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#client-network"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
              >
                Explore Network
              </a>

              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-[#039147] hover:text-white"
              >
                Start Collaboration
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="client-network" className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Client Network
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                More than 400 clients globally have worked with PML
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML supports a broad client network across pharmaceutical, healthcare, research,
                and regulated product industries. The collaboration experience includes clinical
                research, BA/BE study, contract analysis, regulatory management, and project
                documentation support.
              </p>
            </div>

            <div className="rounded-[28px] border border-black/5 bg-[#f6faf7] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:rounded-[34px] md:p-7">
              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {clientLogos.map((client, index) => (
                  <div
                    key={`${client.image}-${index}`}
                    className="flex h-24 items-center justify-center rounded-[18px] border border-black/5 bg-white p-4 shadow-sm md:h-28 md:rounded-[22px] md:p-5"
                  >
                    <Image
                      src={client.image}
                      alt={client.name}
                      width={220}
                      height={110}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>

            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">
            {clientSegments.map((segment) => (
              <div key={segment} className="rounded-[20px] border border-black/5 bg-[#f6faf7] p-4 shadow-sm md:rounded-[24px] md:p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                  ✓
                </span>
                <p className="mt-3 text-xs font-bold leading-5 text-black/65 md:mt-4 md:text-sm md:leading-6">
                  {segment}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Client Logo Wall
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Collaboration across industry, research, and clinical development
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
              Selected client and partner logos are shown as visual references for PML’s broader
              collaboration network.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5 lg:grid-cols-5">
            {clientLogos.map((client, index) => (
              <article
                key={`${client.name}-${index}`}
                className="group flex min-h-[120px] items-center justify-center rounded-[24px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:min-h-[150px] md:rounded-[28px]"
              >
                <Image
                  src={client.image}
                  alt={client.name}
                  width={240}
                  height={120}
                  className="max-h-20 w-auto object-contain transition duration-300 group-hover:scale-105"
                />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Why Clients Work With PML
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                A reliable partner for scientific, clinical, analytical, and regulatory needs
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML combines project coordination, facility capability, scientific discipline,
                and documentation-oriented workflows to help sponsors move with confidence.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {collaborationValues.map((item) => (
                <div key={item.title} className="rounded-[20px] border border-black/5 bg-[#f6faf7] p-4 shadow-sm md:rounded-[24px] md:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                    ✓
                  </span>
                  <h3 className="mt-3 text-sm font-black leading-tight text-black md:mt-4 md:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-black/55 md:text-sm md:leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#039147] py-16 text-white md:py-28">
        <Image
          src="/images/pml/facilities-gallery/clinical-main.jpg"
          alt=""
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#039147]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/46 to-[#039147]/24" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

        <div className="pml-container relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-black/64 md:text-sm">
              Client Testimonial
            </p>

            <blockquote className="mt-5 text-2xl font-black leading-tight md:text-4xl">
              “PML provides responsive support and reliable coordination for study-related projects,
              helping sponsors move from planning to execution with clearer communication.”
            </blockquote>

            <div className="mx-auto mt-8 h-px w-20 bg-white/30" />

            <p className="mt-6 text-base font-extrabold text-white">
              Vitania Rebecca
            </p>
            <p className="mt-2 text-sm font-bold text-black/62">
              PT Kalbe Farma
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/cta-lab-background.png"
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-[#039147]/22" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/82 via-white/46 to-[#039147]/24" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-black/64">
                Business Opportunity
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Looking for a reliable CRO partner in Indonesia?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/68">
                Contact PML to discuss BA/BE study, clinical trial support, contract analysis,
                regulatory management, or other collaboration opportunities.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
                >
                  Request Proposal
                </button>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-[#039147] hover:text-white"
                >
                  Contact PML
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
