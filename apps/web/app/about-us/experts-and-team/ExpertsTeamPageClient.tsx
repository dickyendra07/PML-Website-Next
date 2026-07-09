"use client";

import Image from "next/image";
import Link from "next/link";

const regulatoryTeam = [
  {
    name: "Anton Hidayat",
    role: "President Director",
    image: "/images/pml/team/anton-hidayat.jpg",
    description:
      "As PML’s President Director, he leads the company’s strategic direction and business growth, leveraging more than 20 years of experience in regulatory and government affairs, as well as market access within Indonesia’s pharmaceutical industry. He provides strategic oversight of the company’s integrated service portfolio, enabling pharmaceutical and healthcare companies to successfully bring their products to market through tailored regulatory, product development, and market entry strategies. By fostering strong partnerships with regulatory authorities, government institutions, and industry stakeholders, he helps clients navigate Indonesia’s evolving regulatory landscape, facilitate timely market access, and achieve sustainable business growth.",
  },
  {
    name: "Fathi",
    role: "Senior Regulatory Affairs Professional",
    image: "/images/pml/team/fathi.jpg",
    description:
      "Senior Regulatory Affairs professional with 13+ years of experience in Indonesia's pharmaceutical industry, leading regulatory strategies, end-to-end product registrations, lifecycle management, and compliance across diverse product portfolios. Proven expertise in driving complex regulatory submissions and leading technical discussions and negotiations with regulatory authorities to support successful product approvals and business objectives.",
  },
  {
    name: "Rini Hayati Amril",
    role: "Senior Regulatory Affairs Professional",
    image: "/images/pml/team/rini-hayati.jpg",
    description:
      "Senior Regulatory Affairs professional with over 20 years of experience in Indonesia's pharmaceutical industry. Experienced in developing regulatory strategies, leading product registrations, managing lifecycle activities, and ensuring compliance with Indonesian regulatory requirements.",
  },
  {
    name: "Hikmahwati Syafrie",
    role: "Regulatory Affairs Professional",
    image: "/images/pml/team/hikmah.jpg",
    description:
      "Regulatory Affairs professional in Indonesia with 9+ years of experience in the registration of pharmaceuticals, medical devices, advanced therapy products, operational licensing and certification and building strong relationships with regulatory authorities.",
  },
  {
    name: "Jessica Seanjaya",
    role: "Regulatory Affairs Professional",
    image: "/images/pml/team/jessica.jpg",
    description:
      "Regulatory Affairs professional with 5+ years of experience in the registration of pharmaceutical products in Indonesia, including novel biological products, biosimilars, generic medicines (chemical), and traditional medicines. Experienced in preparing regulatory submissions, coordinating with regulatory authorities, and supporting product registrations in compliance with applicable regulations.",
  },
  {
    name: "Annisa Patima Az-Zahra",
    role: "Regulatory Affairs Pharmacist",
    image: "/images/pml/team/annisa-patimah.jpg",
    description:
      "Regulatory Affairs Pharmacist with experience in pharmaceutical, biological, and medical device regulatory affairs in Indonesia. Experienced in product registration and lifecycle management, including new registrations, variations, renewals, site transfers, and notifications for pharmaceutical and biological products. Skilled in CTD dossier preparation, regulatory document review, and submissions to the Indonesian health authority.",
  },
  {
    name: "Kristin Theresia",
    role: "Regulatory Affairs Pharmacist",
    image: "/images/pml/team/kristin-theresia.jpg",
    description:
      "Regulatory Affairs Pharmacist with experience in the registration of medical devices, traditional medicines, pharmaceuticals, and biologics. Experienced in preparing regulatory submissions, supporting product registrations, importation processes, and certification (GMP, Medical Device Good Manufacturing Practice, and Medical Device Good Distribution Practice) in compliance with applicable regulations.",
  },
  {
    name: "Gabriella Rosalina",
    role: "Regulatory Affairs Pharmacist",
    image: "/images/pml/team/gabriella.jpg",
    description:
      "Regulatory Affairs Pharmacist with experience in the registration of biological products. Experienced in preparing regulatory submissions, coordinating with regulatory authorities, supporting product registrations, and managing manufacturing site certification processes. Also serves as a Certified Halal Supervisor, supporting halal certification activities.",
  },
  {
    name: "Silviana Rezki Umami",
    role: "Regulatory Affairs Pharmacist",
    image: "/images/pml/team/silviana.jpg",
    description:
      "Regulatory Affairs Pharmacist with experience in the registration and regulatory compliance of pharmaceutical and biological products in Indonesia. Experienced in managing product registrations, post-approval changes, regulatory documentation, and health authority submissions to support product approval and lifecycle maintenance.",
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
    title: "Regulatory coordination",
    desc: "Supporting regulatory-oriented preparation, documentation flow, and communication across project stakeholders.",
  },
  {
    title: "Project documentation",
    desc: "Helping maintain organized study records, submission-related materials, and project documentation readiness.",
  },
  {
    title: "Sponsor communication",
    desc: "Supporting clearer coordination between sponsors, internal teams, and related project functions.",
  },
  {
    title: "Integrated project support",
    desc: "Working alongside clinical, analytical, and operational teams to support reliable CRO project delivery.",
  },
];

export default function ExpertsAndTeamPage() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-white text-black">
        <Image
          src="/images/pml/team/ra-team-pml.png"
          alt="PML Regulatory Affairs Team"
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/78 to-white/22" />
        <div className="absolute inset-0 bg-[#039147]/10" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.06]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58">
            <Link href="/" className="transition hover:text-[#039147]">
              Home
            </Link>
            <span>/</span>
            <Link href="/about-us" className="transition hover:text-[#039147]">
              About Us
            </Link>
            <span>/</span>
            <span className="text-[#039147]">Experts & Team</span>
          </nav>

          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#039147]/20 bg-white/95 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147] shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Experts & Team
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
              Regulatory affairs team supporting reliable CRO project delivery
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
              PML is supported by professionals across regulatory affairs, project coordination,
              documentation, and sponsor communication to support smoother research and service
              delivery.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#regulatory-team"
                className="inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-xl shadow-[#039147]/20 transition hover:-translate-y-0.5 hover:bg-[#027a3c]"
              >
                Meet the Team
              </a>

              <button
                type="button"
                onClick={openProposal}
                className="inline-flex items-center justify-center rounded-full border border-[#039147]/25 bg-white/88 px-7 py-4 text-sm font-extrabold text-[#039147] shadow-sm backdrop-blur transition hover:bg-[#039147] hover:text-white"
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

              <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-[52px]">
                Experienced support for regulatory, documentation, and project workflows
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65 md:mt-6 md:text-lg md:leading-9">
                PML’s team structure supports the complete project journey, from study discussion,
                planning, documentation, regulatory-oriented preparation, coordination, and reporting.
                This multidisciplinary capability helps sponsors work with clearer direction and
                stronger operational support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {expertiseAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-[20px] border border-black/5 bg-[#f6faf7] p-4 shadow-sm md:rounded-[24px] md:p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                    ✓
                  </span>
                  <p className="mt-3 text-base font-bold leading-7 text-black/65 md:mt-4 md:text-base md:leading-7">
                    {area}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="regulatory-team" className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Regulatory Affairs Team
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-[52px]">
              Meet PML’s regulatory affairs team
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-black/65 md:mt-6 md:text-lg md:leading-9">
              Selected team members supporting regulatory affairs, project coordination, and
              documentation readiness. Detailed team narratives will be updated after final client
              review.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
            {regulatoryTeam.map((member) => (
              <article
                key={member.name}
                className="group w-[82vw] max-w-[350px] shrink-0 snap-start overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:w-auto md:max-w-none md:rounded-[34px]"
              >
                <div className="relative aspect-[4/4.35] overflow-hidden bg-[#f6faf7]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-black/4 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5">
                    <p className="rounded-full bg-white/92 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#039147] backdrop-blur">
                      {member.role}
                    </p>
                  </div>
                </div>

                <div className="p-6 md:p-7">
                  <h3 className="text-2xl font-black leading-tight text-black">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/60 md:text-[15px] md:leading-7">
                    {member.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore team members
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

              <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-[52px]">
                Built to support sponsors from planning to documentation
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65 md:mt-6 md:text-lg md:leading-9">
                PML’s team capability is designed to support project clarity, operational reliability,
                communication flow, and documentation readiness.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {teamStrengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[20px] border border-black/5 bg-[#f6faf7] p-4 shadow-sm md:rounded-[24px] md:p-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                    ✓
                  </span>
                  <h3 className="mt-3 text-base font-black leading-tight text-black md:mt-4 md:text-lg">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-black/58 md:text-base md:leading-7">
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

            <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-[52px]">
              Need clinical, analytical, regulatory, or project support?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/68 md:mt-6 md:text-lg md:leading-9">
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
