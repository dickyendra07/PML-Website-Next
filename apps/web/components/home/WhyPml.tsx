import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  [
    "Quality, integrity, and compliance",
    "High commitment to quality, integrity, and regulatory compliance across every project.",
  ],
  [
    "Multidisciplinary expertise",
    "Experienced professionals across clinical, laboratory, regulatory, and project workflows.",
  ],
  [
    "Responsive project management",
    "Customer-oriented support with responsive coordination and clear communication.",
  ],
  [
    "Accredited facilities",
    "Updated and accredited facilities for reliable study and laboratory services.",
  ],
  [
    "Strong local network",
    "Partnerships with hospitals, investigators, and industry networks across Indonesia.",
  ],
];

export default function WhyPml() {
  return (
    <section id="about" className="bg-white py-16 md:py-28">
      <div className="pml-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-12">
        <div>
          <SectionHeader
            eyebrow="Why PML"
            title="Built for Quality, Compliance, and Reliable Collaboration"
            description="PML combines scientific discipline, regulatory awareness, multidisciplinary expertise, and responsive project support to help sponsors move from planning to reliable study execution and documentation."
          />

          <div className="mt-7 rounded-[28px] bg-[#039147] p-6 text-white shadow-[0_24px_70px_rgba(3,145,71,0.22)] md:mt-8 md:rounded-[32px] md:p-8">
            <p className="text-xl font-black leading-tight md:text-2xl">
              Innovation, powered by scientific excellence.
            </p>
            <p className="mt-4 text-base leading-8 text-white/78 md:text-lg">
              A renewed digital direction that reflects PML’s commitment to credible, compliant, and customer-oriented CRO support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-5">
          {points.map(([title, desc], index) => (
            <article
              key={title}
              className={`group rounded-[22px] border border-black/5 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-xl md:rounded-[28px] md:p-6 ${
                index === 4 ? "col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-[#eaf8f0] text-sm font-black text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white md:h-12 md:w-12">
                ✓
              </div>

              <h3 className="text-xl font-black leading-tight tracking-[-0.02em] text-black md:text-2xl">
                {title}
              </h3>

              <p className="mt-3 text-base leading-7 text-black/62 md:leading-8">
                {desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
