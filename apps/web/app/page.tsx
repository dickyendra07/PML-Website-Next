import HomepagePopup from "@/components/popups/HomepagePopup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharma Metric Labs | Contract Research Organization in Indonesia",
  description: "PML provides integrated CRO services in Indonesia, including BA/BE study, clinical trial, contract analysis, and regulatory management.",
};

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyPml from "@/components/home/WhyPml";
import CTACard from "@/components/ui/CTACard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyPml />
      <CTACard />
      <HomepagePopup />
    </main>
  );
}
