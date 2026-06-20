"use client";

import Image from "next/image";
import Link from "next/link";

const experts = [
  {
    name: "Arini Setiawati",
    role: "Principal Investigator",
    image: "/images/pml/experts/all/04-tim_arini.jpg",
    focus: "Clinical research leadership, study supervision, and scientific direction.",
  },
  {
    name: "Fransciscus D. Suyatna",
    role: "Principal Investigator",
    image: "/images/pml/experts/all/05-tim_franciscus.jpg",
    focus: "Clinical study expertise, investigator guidance, and research quality support.",
  },
  {
    name: "Hedi R. Suwoto",
    role: "Principal Investigator",
    image: "/images/pml/experts/all/06-tim_hedi.jpg",
    focus: "Study oversight, medical research capability, and investigator-level support.",
  },
  {
    name: "Metta Sinta Sari Wiria",
    role: "Principal Investigator",
    image: "/images/pml/experts/all/07-tim_metta.jpg",
    focus: "Clinical study execution, medical supervision, and scientific collaboration.",
  },
  {
    name: "Suharti K. Suherman",
    role: "Principal Investigator",
    image: "/images/pml/experts/all/08-tim_suharti.jpg",
    focus: "Clinical research leadership, study conduct, and quality-focused oversight.",
  },
  {
    name: "Seriyati Naibaho",
    role: "Analytical Manager",
    image: "/images/pml/experts/all/10-tim_seriyati.jpg",
    focus: "Analytical laboratory management, testing workflow, and data reliability.",
  },
];

const expertiseAreas = [
  "Regulatory affairs",
  "Project management",
  "Data management",
  "Quality assurance",
  "Clinical operations",
  "Analytical laboratory management",
  "Study documentation",
  "Sponsor communication",
];

const teamStrengths = [
  {
    title: "Multidisciplinary expertise",
    desc: "PML combines clinical, analytical, regulatory, project, and documentation capability in one integrated team.",
  },
  {
    title: "Investigator-led research support",
    desc: "Principal investigators support study supervision, medical oversight, and scientific quality.",
  },
  {
    title: "Responsive project coordination",
    desc: "Teams are structured to help sponsors move from inquiry to execution with clear communication.",
  },
  {
    title: "Quality-focused delivery",
    desc: "Clinical and analytical work is supported by quality, documentation, and compliance-oriented workflows.",
  },
];

export default function ExpertsAndTeamPage() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/pml/about/pml-experts-team-meeting-hero.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-85"
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
            <span className="text-[#039147]">Experts & Team</span>
          </nav>

          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/20 bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Experts & Team
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
              Multidisciplinary experts supporting reliable CRO project delivery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
              PML is supported by professionals across clinical research, analytical laboratory,
              regulatory affairs, project management, data management, and quality assurance.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#experts-list"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
              >
                Meet the Experts
              </a>

              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-7 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Team Capability
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Experienced team for clinical, analytical, regulatory, and project workflows
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML’s team structure supports the complete project journey, from study discussion,
                planning, clinical execution, analysis, documentation, reporting, and regulatory-oriented
                preparation. This multidisciplinary capability helps sponsors work with clearer direction
                and stronger technical support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {expertiseAreas.map((area) => (
                <div key={area} className="rounded-[20px] border border-black/5 bg-[#f6faf7] p-4 shadow-sm md:rounded-[24px] md:p-5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                    ✓
                  </span>
                  <p className="mt-3 text-xs font-bold leading-5 text-black/65 md:mt-4 md:text-sm md:leading-6">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experts-list" className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Our Experts
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Principal investigators and operational leaders
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
              Meet selected experts and team leaders supporting PML’s clinical, analytical,
              and research service capability.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {experts.map((expert) => (
              <article
                key={expert.name}
                className="group w-[82vw] max-w-[350px] shrink-0 snap-start overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:w-auto md:max-w-none md:rounded-[34px]"
              >
                <div className="relative aspect-[4/4.4] overflow-hidden bg-[#f6faf7]">
                  <Image
                    src={expert.image}
                    alt={expert.name}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#039147] backdrop-blur">
                      {expert.role}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-2xl font-black leading-tight text-black">
                    {expert.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60">
                    {expert.focus}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore experts
          </p>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Team Strength
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Built to support sponsors from planning to reporting
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML’s team capability is designed to support project clarity, operational reliability,
                scientific credibility, and documentation readiness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {teamStrengths.map((item) => (
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

      <section className="relative overflow-hidden bg-white py-16 text-black md:py-28">
        <Image
          src="/images/pml/services/clinical-trial-proof.png"
          alt=""
          fill
          className="object-cover opacity-34"
        />
        <div className="absolute inset-0 bg-white/68" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/82 to-[#039147]/16" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.045]" />

        <div className="pml-container relative">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Work With PML Experts
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Need clinical, analytical, regulatory, or project support?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-black/68 md:mt-6 md:text-base md:leading-8">
              Share your project needs with PML and our team will help identify the right service
              scope, required information, and next steps.
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
                className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/85 px-8 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
              >
                Contact PML
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
