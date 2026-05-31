import SectionHeader from "@/components/ui/SectionHeader";

const testimonials = [
  [
    "PML provides responsive support and clear communication throughout the study process, helping our team move from planning to reporting with confidence.",
    "Pharmaceutical Sponsor",
    "BA/BE Project Partner",
  ],
  [
    "The team understands clinical and regulatory requirements, making coordination smoother across study preparation, execution, and documentation.",
    "Clinical Research Partner",
    "Clinical Trial Collaboration",
  ],
  [
    "PML combines laboratory capability with practical project support, which is valuable for analytical testing and submission-related activities.",
    "Regulatory & Analysis Client",
    "Contract Analysis Project",
  ],
];

export default function Testimonials() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="pml-container">
        <SectionHeader
          align="center"
          eyebrow="Testimonials"
          title="Trusted by sponsors and partners"
          description="PML supports local and international pharmaceutical partners through responsive project coordination, reliable study execution, and regulatory-ready documentation."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map(([quote, name, role]) => (
            <article
              key={name}
              className="flex h-full flex-col rounded-[32px] border border-black/5 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="mb-6 flex text-[#039147]">
                {"★★★★★".split("").map((star, index) => (
                  <span key={index}>{star}</span>
                ))}
              </div>

              <p className="flex-1 text-base leading-8 text-black/65">“{quote}”</p>

              <div className="mt-auto flex items-center gap-4 pt-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                  PML
                </div>

                <div>
                  <h3 className="text-sm font-black leading-tight text-black">{name}</h3>
                  <p className="mt-1 text-xs font-bold leading-tight text-black/45">{role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
