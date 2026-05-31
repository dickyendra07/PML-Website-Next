import Image from "next/image";
import Link from "next/link";

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M6.5 9.5V18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M6.5 6.2V6.3" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M11 18V9.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M11 13.2C11 11.1 12.3 9.3 14.6 9.3C16.8 9.3 18 10.8 18 13.3V18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="5" y="5" width="14" height="14" rx="4" stroke="currentColor" strokeWidth="2.2" />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2.2" />
      <path d="M16.4 7.8H16.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2.2" />
      <path d="M5.5 8L12 13L18.5 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-sm font-black text-black/70 transition hover:border-[#039147] hover:bg-[#039147] hover:text-white"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-[#f7f8f7] px-4 py-16">
      <div className="absolute inset-x-0 bottom-0 z-0 overflow-hidden text-center" aria-hidden="true">
        <div className="select-none text-[180px] font-black leading-none tracking-[-0.08em] text-[#039147]/[0.035] md:text-[280px] lg:text-[360px]">
          Pharma
        </div>
      </div>

      <div className="relative z-10 mx-auto w-[min(100%-48px,1600px)]">
        <div className="rounded-[44px] border border-black/5 bg-white px-6 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.07)] md:px-10 md:py-12 lg:px-14">
          <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.8fr_0.8fr]">
            <div>
              <Link href="/" className="inline-flex items-center" aria-label="Pharma Metric Labs Home">
                <Image
                  src="/images/LOGO-PML.png"
                  alt="Pharma Metric Labs"
                  width={160}
                  height={85}
                  className="h-16 w-auto"
                />
              </Link>

              <p className="mt-6 max-w-md text-sm leading-7 text-black/55">
                Pharma Metric Labs supports pharmaceutical and biotechnology companies with
                scientific CRO services for BA/BE studies, clinical trials, contract analysis,
                and regulatory consultation.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <SocialLink href="#" label="LinkedIn">
                  <LinkedInIcon />
                </SocialLink>

                <SocialLink href="#" label="Instagram">
                  <InstagramIcon />
                </SocialLink>

                <SocialLink href="mailto:info@pharmametriclabs.com" label="Email">
                  <EmailIcon />
                </SocialLink>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-black">Pages</h3>
              <div className="mt-5 grid gap-4 text-sm font-semibold text-black/50">
                <Link href="/" className="transition hover:text-[#039147]">
                  Home
                </Link>
                <Link href="#about" className="transition hover:text-[#039147]">
                  About Us
                </Link>
                <Link href="#services" className="transition hover:text-[#039147]">
                  Services
                </Link>
                <Link href="#facilities" className="transition hover:text-[#039147]">
                  Facilities
                </Link>
                <Link href="#resources" className="transition hover:text-[#039147]">
                  Insight
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-black">Services</h3>
              <div className="mt-5 grid gap-4 text-sm font-semibold text-black/50">
                <Link href="#services" className="transition hover:text-[#039147]">
                  BA/BE Studies
                </Link>
                <Link href="#services" className="transition hover:text-[#039147]">
                  Clinical Trials
                </Link>
                <Link href="#services" className="transition hover:text-[#039147]">
                  Contract Analysis
                </Link>
                <Link href="#services" className="transition hover:text-[#039147]">
                  Regulatory Consultation
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-black text-black">Contact</h3>
              <div className="mt-5 grid gap-4 text-sm font-semibold leading-7 text-black/50">
                <a
                  href="mailto:info@pharmametriclabs.com"
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#039147] hover:decoration-[#039147]"
                >
                  info@pharmametriclabs.com
                </a>

                <a href="tel:+62214265310" className="transition hover:text-[#039147]">
                  (021) 426 5310
                </a>

                <p>Gedung Indra Sentral Unit R &amp; T, Jakarta Pusat, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-black/10 pt-7">
            <div className="flex flex-col justify-between gap-5 text-xs font-semibold text-black/40 md:flex-row md:items-center">
              <p>© {new Date().getFullYear()} Pharma Metric Labs. All rights reserved.</p>

              <div className="flex flex-wrap gap-6">
                <a
                  href="#"
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#039147] hover:decoration-[#039147]"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#039147] hover:decoration-[#039147]"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="underline decoration-black/20 underline-offset-4 transition hover:text-[#039147] hover:decoration-[#039147]"
                >
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
