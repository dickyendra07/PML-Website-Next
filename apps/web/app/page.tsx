import HomepagePopup from "@/components/popups/HomepagePopup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pharma Metric Labs | Contract Research Organization in Indonesia",
  description: "Pharma Metric Labs provides integrated CRO services in Indonesia, including BA/BE studies, clinical trial services, contract analysis, and regulatory consultation.",
};

import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import WhyPml from "@/components/home/WhyPml";
import Facilities from "@/components/home/Facilities";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";
import CTACard from "@/components/ui/CTACard";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <WhyPml />
      <Facilities />
      <Testimonials />
      <Faq />
      <CTACard />
          <HomepagePopup />
    </main>
  );
}
