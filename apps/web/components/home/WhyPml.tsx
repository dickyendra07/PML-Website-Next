import SectionHeader from "@/components/ui/SectionHeader";

const points = [
  ["Scientific discipline", "Study execution and laboratory support are handled with structured scientific workflows."],
  ["Integrated support", "Clinical, analytical, regulatory, and documentation needs can be coordinated within one partner ecosystem."],
  ["Regulatory-ready output", "Reports, documents, and workflows are prepared with compliance and submission readiness in mind."],
  ["Responsive collaboration", "The team supports sponsors with clear communication from discussion to project completion."],
];

export default function WhyPml() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="pml-container grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeader
          eyebrow="Why PML"
          title="Built for sponsors that need reliable execution"
          description="PML combines scientific capability, multidisciplinary coordination, and practical project support to help sponsors move from planning to regulatory-ready outcomes."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {points.map(([title, desc]) => (
            <div
              key={title}
              className="rounded-[30px] border border-black/5 bg-white p-7 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-xl font-black text-[#039147]">
                ✓
              </div>
              <h3 className="mt-6 text-xl font-black text-black">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-black/60">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
