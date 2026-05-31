"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  onOpenProposal: () => void;
};

const serviceLinks = [
  { label: "BA/BE Studies", href: "/services/babe-studies" },
  { label: "Clinical Trial Services", href: "/services/clinical-trial" },
  { label: "Contract Analysis", href: "/services/contract-analysis" },
  { label: "Regulatory Consultation", href: "/services/regulatory-consultation" },
];

export default function Header({ onOpenProposal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="pml-container flex h-20 items-center justify-between">
        <Link href="/" aria-label="Pharma Metric Labs Home" className="flex items-center">
          <Image
            src="/images/LOGO-PML.png"
            alt="Pharma Metric Labs"
            width={150}
            height={80}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-bold text-black/70 lg:flex">
          <Link className="rounded-full px-4 py-3 transition hover:bg-black/5 hover:text-black" href="/">
            Home
          </Link>

          <Link className="rounded-full px-4 py-3 transition hover:bg-black/5 hover:text-black" href="/about-us">
            About Us
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              className="inline-flex items-center gap-2 rounded-full px-4 py-3 transition hover:bg-black/5 hover:text-black"
              href="/services"
            >
              Services
              <span className="text-xs">⌄</span>
            </Link>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full w-[760px] -translate-x-1/2 pt-4">
                <div className="grid grid-cols-2 gap-3 rounded-[30px] border border-black/5 bg-white p-5 shadow-[0_24px_80px_rgba(0,0,0,0.14)]">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="rounded-2xl border border-black/5 p-4 transition hover:-translate-y-0.5 hover:bg-[#eaf8f0]"
                    >
                      <span className="block text-base font-black text-black">{service.label}</span>
                      <span className="mt-2 block text-sm leading-6 text-black/55">
                        Explore service scope, process, proof points, and FAQ.
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link className="rounded-full px-4 py-3 transition hover:bg-black/5 hover:text-black" href="/facilities">
            Facilities
          </Link>

          <Link className="rounded-full px-4 py-3 transition hover:bg-black/5 hover:text-black" href="/contact">
            Contact
          </Link>

          <Link className="rounded-full px-4 py-3 transition hover:bg-black/5 hover:text-black" href="/insight">
            Insight
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={onOpenProposal}
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#039147] px-7 text-sm font-black text-[#039147] transition hover:bg-[#039147] hover:text-white"
          >
            Request Proposal
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          />

          <aside className="absolute right-0 top-0 h-full w-[min(88vw,390px)] overflow-y-auto bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <Image src="/images/LOGO-PML.png" alt="Pharma Metric Labs" width={140} height={70} className="h-14 w-auto" />
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-8 grid gap-2 text-base font-black">
              <Link onClick={() => setMobileOpen(false)} className="rounded-2xl bg-black/[0.03] px-4 py-4" href="/">
                Home
              </Link>
              <Link onClick={() => setMobileOpen(false)} className="rounded-2xl bg-black/[0.03] px-4 py-4" href="/about-us">
                About Us
              </Link>
              <Link onClick={() => setMobileOpen(false)} className="rounded-2xl bg-black/[0.03] px-4 py-4" href="/services">
                Services
              </Link>

              <div className="rounded-2xl bg-black/[0.03] p-4">
                <p className="text-sm uppercase tracking-[0.14em] text-[#039147]">Sub Services</p>
                <div className="mt-3 grid gap-2 text-sm font-bold text-black/70">
                  {serviceLinks.map((service) => (
                    <Link key={service.href} onClick={() => setMobileOpen(false)} href={service.href}>
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link onClick={() => setMobileOpen(false)} className="rounded-2xl bg-black/[0.03] px-4 py-4" href="/facilities">
                Facilities
              </Link>
              <Link onClick={() => setMobileOpen(false)} className="rounded-2xl bg-black/[0.03] px-4 py-4" href="/contact">
                Contact
              </Link>
              <Link onClick={() => setMobileOpen(false)} className="rounded-2xl bg-black/[0.03] px-4 py-4" href="/insight">
                Insight
              </Link>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onOpenProposal();
              }}
              className="mt-6 flex h-12 w-full items-center justify-center rounded-full bg-[#039147] text-sm font-black text-white"
            >
              Request Proposal
            </button>
          </aside>
        </div>
      )}
    </header>
  );
}
