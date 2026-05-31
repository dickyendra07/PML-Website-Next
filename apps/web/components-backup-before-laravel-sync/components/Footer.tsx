import Image from "next/image";
import Link from "next/link";

const pages = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Facilities", href: "/facilities" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "BA/BE Studies", href: "/services/babe-studies" },
  { label: "Clinical Trial Services", href: "/services/clinical-trial" },
  { label: "Contract Analysis", href: "/services/contract-analysis" },
  { label: "Regulatory Consultation", href: "/services/regulatory-consultation" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f6faf7] px-4 pb-8 pt-14">
      <div className="pml-container rounded-[36px] bg-white p-8 shadow-[0_18px_70px_rgba(0,0,0,0.08)] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.85fr]">
          <div>
            <Image
              src="/images/LOGO-PML.png"
              alt="Pharma Metric Labs"
              width={160}
              height={85}
              className="h-16 w-auto"
            />

            <p className="mt-5 max-w-md text-sm leading-7 text-black/60">
              Pharma Metric Labs supports pharmaceutical development through integrated CRO,
              clinical, analytical, and regulatory services.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-black">Pages</h3>
            <div className="mt-5 grid gap-3 text-sm font-bold text-black/60">
              {pages.map((page) => (
                <Link key={page.href} href={page.href} className="transition hover:text-[#039147]">
                  {page.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-black">Services</h3>
            <div className="mt-5 grid gap-3 text-sm font-bold text-black/60">
              {services.map((service) => (
                <Link key={service.href} href={service.href} className="transition hover:text-[#039147]">
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.14em] text-black">Contact</h3>
            <div className="mt-5 grid gap-3 text-sm font-bold leading-7 text-black/60">
              <p>Pharma Metric Labs</p>
              <p>Indonesia-based Contract Research Organization</p>
              <Link href="/contact" className="text-[#039147]">
                Contact our team →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-black/10 pt-6 text-sm font-bold text-black/45">
          © {new Date().getFullYear()} Pharma Metric Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
