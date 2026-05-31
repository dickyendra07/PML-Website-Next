import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";

const capabilities = [
  "Clinical study site and volunteer coordination",
  "Bioanalytical laboratory support",
  "Contract analysis and sample handling",
  "Regulatory documentation support",
];

export default function Facilities() {
  return (
    <section className="bg-[#f6faf7] py-20 md:py-28">
      <div className="pml-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[34px] bg-black shadow-[0_24px_70px_rgba(0,0,0,0.14)]">
          <Image
            src="/images/pml/facilities-lab-main.png"
            alt="PML laboratory facility"
            width={900}
            height={700}
            className="h-[520px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
        </div>

        <div>
          <SectionHeader
            eyebrow="Facilities & Capability"
            title="Facility support for clinical and analytical work"
            description="PML supports sponsors with facility, laboratory, clinical site, and documentation capabilities designed for reliable study and testing execution."
          />

          <div className="mt-8 grid gap-4">
            {capabilities.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-sm font-black text-[#039147]">
                  ✓
                </span>
                <p className="text-sm font-bold leading-7 text-black/65">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
