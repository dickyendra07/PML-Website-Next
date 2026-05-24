import Image from "next/image";
import OtherServices from "@/components/OtherServices";
import SectionHeader from "@/components/ui/SectionHeader";
import CTACard from "@/components/ui/CTACard";

export const metadata = {
  title: "About Us | Pharma Metric Labs",
  description:
    "Learn about Pharma Metric Labs, an Indonesia-based Contract Research Organization supporting clinical, analytical, and regulatory services.",
};

const milestones = [
  ["2005", "Establishment", "PML began its journey as a Contract Research Organization supporting pharmaceutical development needs in Indonesia."],
  ["2007", "First 15 BA/BE projects", "PML completed its first 15 bioequivalence projects for local sponsors, building early trust in clinical and analytical execution."],
  ["2010", "International sponsor project", "PML supported its first international sponsor project, expanding collaboration beyond local pharmaceutical companies."],
  ["2013", "NPRA Malaysia accreditation", "PML received Foreign Bioequivalence Centre Accreditation from Malaysia’s National Pharmaceutical Regulatory Agency."],
  ["2024", "Plenary accreditation", "PML received plenary accreditation from the Ministry of Health of the Republic of Indonesia."],
  ["2026", "New facility relocation", "PML relocated to a new facility to expand BA/BE clinical site capacity and support larger study operations."],
];

const facts = [
  ["20+", "years experience"],
  ["1,500+", "completed projects"],
  ["3,500+", "healthy volunteers database"],
  ["190+", "validated bioanalytical methods"],
];

export default function AboutUsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-black py-28 md:py-36">
        <Image
          src="/images/pml/facilities-lab-main.png"
          alt=""
          fill
          priority
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/72 to-[#039147]/35" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.12]" />

        <div className="pml-container relative z-10">
          <div className="max-w-5xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-white/75">
              About PML
            </p>

            <h1 className="mt-5 text-5xl font-black leading-tight tracking-[-0.05em] text-white md:text-7xl">
              Scientific CRO support for reliable pharmaceutical development
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70">
              Pharma Metric Labs is an Indonesia-based Contract Research Organization supporting sponsors
              through integrated clinical, analytical, and regulatory services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="pml-container grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[34px] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
            <Image
              src="/images/pml/facilities-lab-main.png"
              alt="PML laboratory"
              width={900}
              height={700}
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div>
            <SectionHeader
              eyebrow="Company Overview"
              title="Innovation, powered by scientific excellence"
              description="PML helps companies move from study planning to reliable execution, accountable documentation, and regulatory-ready outcomes. With experience across BA/BE studies, clinical trial services, contract analysis, and regulatory consultation, PML combines scientific discipline, quality standards, multidisciplinary expertise, and responsive project collaboration."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {facts.map(([value, label]) => (
                <div key={label} className="rounded-[24px] border border-black/5 bg-[#f6faf7] p-6 text-center">
                  <div className="text-4xl font-black tracking-[-0.04em] text-[#039147]">{value}</div>
                  <div className="mt-2 text-xs font-black uppercase tracking-[0.12em] text-black/45">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f6faf7] py-20 md:py-28">
        <div className="pml-container">
          <SectionHeader
            align="center"
            eyebrow="Milestones"
            title="A growing CRO journey"
            description="Key milestones that represent PML’s development, accreditation, facility growth, and expanding support for sponsors."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {milestones.map(([year, title, desc]) => (
              <div key={year} className="rounded-[30px] border border-black/5 bg-white p-7 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#039147]">{year}</p>
                <h3 className="mt-4 text-2xl font-black leading-tight text-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-black/60">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="pml-container grid gap-6 md:grid-cols-3">
          {[
            ["Vision", "To become a world-class Contract Research Organization recognized by local and international customers."],
            ["Mission", "To ensure good quality of healthcare products for the community through reliable scientific services."],
            ["Core Values", "Credibility, innovation, global reach, rigorous work, collaboration, scientific discipline, and continuous improvement."],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-[30px] border border-black/5 bg-[#f6faf7] p-8 shadow-sm">
              <h2 className="text-3xl font-black text-black">{title}</h2>
              <p className="mt-5 text-base leading-8 text-black/60">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <OtherServices current={null} variant="four" />
      <CTACard />
    </main>
  );
}
