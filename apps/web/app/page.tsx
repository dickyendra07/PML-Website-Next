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
    </main>
  );
}
