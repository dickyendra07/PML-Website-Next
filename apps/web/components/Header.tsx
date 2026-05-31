"use client";

import Image from "next/image";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { usePathname } from "next/navigation";

type HeaderProps = {
  onOpenProposal: () => void;
};

type MegaItem = {
  label: string;
  href: string;
  desc: string;
  icon: IconType;
};

type IconType =
  | "team"
  | "company"
  | "network"
  | "catalogue"
  | "babe"
  | "clinical"
  | "analysis"
  | "regulatory"
  | "bed"
  | "lab"
  | "document"
  | "gallery"
  | "article"
  | "news"
  | "publication"
  | "faq"
  | "building"
  | "shield";

const aboutItems: MegaItem[] = [
  {
    label: "Experts & Team",
    href: "/about-us",
    desc: "Multidisciplinary professionals across clinical, laboratory, regulatory, and project workflows.",
    icon: "team",
  },
  {
    label: "Company Profile",
    href: "/about-us",
    desc: "Learn about PML’s capability, experience, quality standards, and CRO service focus.",
    icon: "company",
  },
  {
    label: "Clients & Network",
    href: "/about-us",
    desc: "Serving local and international clients with hospital, investigator, and industry networks.",
    icon: "network",
  },
  {
    label: "Catalogue",
    href: "/about-us",
    desc: "Access company materials, service information, and downloadable references.",
    icon: "catalogue",
  },
];

const serviceItems: MegaItem[] = [
  {
    label: "BA/BE Studies",
    href: "/services/babe-studies",
    desc: "End-to-end BA/BE support from clinical conduct and bioanalysis to regulatory-ready reporting.",
    icon: "babe",
  },
  {
    label: "Clinical Trial Services",
    href: "/services/clinical-trial",
    desc: "Clinical trial support with local expertise, hospital partnerships, and global study experience.",
    icon: "clinical",
  },
  {
    label: "Contract Analysis",
    href: "/services/contract-analysis",
    desc: "Analytical testing for pharma, cosmetic, food, beverage, and medical device industries.",
    icon: "analysis",
  },
  {
    label: "Regulatory Consultation",
    href: "/services/regulatory-consultation",
    desc: "Registration, compliance, documentation, and local submission requirement support.",
    icon: "regulatory",
  },
];

const facilityItems: MegaItem[] = [
  {
    label: "Clinical Facilities",
    href: "/facilities/clinical-facilities",
    desc: "70-bed clinical facility with ambulance support for controlled study activities.",
    icon: "bed",
  },
  {
    label: "Analytical Facilities",
    href: "/facilities/analytical-facilities",
    desc: "LC-MS/MS, GC-FID, GC-MS, ICP-OES, HPLC, and related instruments.",
    icon: "lab",
  },
  {
    label: "Supporting Facilities",
    href: "/facilities/supporting-facilities",
    desc: "Drug storage room, archive room, ambulance support, and study operations infrastructure.",
    icon: "document",
  },
  {
    label: "VR Gallery",
    href: "/facilities/vr-gallery",
    desc: "Explore facility visuals and approved gallery materials.",
    icon: "gallery",
  },
];

const insightItems: MegaItem[] = [
  {
    label: "Articles",
    href: "/insight/articles",
    desc: "Educational content about CRO, BA/BE, clinical trials, and pharma topics.",
    icon: "article",
  },
  {
    label: "News",
    href: "/insight/news",
    desc: "Updates from Pharma Metric Labs and service-related activities.",
    icon: "news",
  },
  {
    label: "Publications",
    href: "/insight/publications",
    desc: "Scientific, regulatory, and documentation-related references.",
    icon: "publication",
  },
  {
    label: "FAQ",
    href: "/insight/faq",
    desc: "Common questions about PML services and inquiry preparation.",
    icon: "faq",
  },
];

function Icon({ type }: { type: IconType }) {
  if (type === "team") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 19C4.8 16.5 6.6 15 9 15C11.4 15 13.2 16.5 14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.5 18.5C15.2 16.8 16.4 16 18 16C19.6 16 20.8 16.9 21.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "company" || type === "shield") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L19 6V11C19 15.8 16 19.2 12 21C8 19.2 5 15.8 5 11V6L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "network") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M7 7.5L9.5 10M16.5 10L18 7.5M16.5 14L18 16.5M7 16.5L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "babe") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="13" width="10" height="6" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M9 13V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="8" r="3.5" stroke="currentColor" strokeWidth="2" />
        <circle cx="8" cy="7" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 8L14 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "clinical") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M10 9H14M10 13H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M15 15L17 17L21 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "analysis" || type === "lab") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 3V8L5.8 17.2C5.1 18.8 6.2 20.5 8 20.5H16C17.8 20.5 18.9 18.8 18.2 17.2L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "building") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 20V7L12 4L18 7V20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 10H10.5M13.5 10H15M9 14H10.5M13.5 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "bed") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 7V19M20 12V19M4 13H20M4 19H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 10H10.5C12 10 13 11 13 12.5V13H6V10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "gallery") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M4 6H20V18H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 10L12 12L9 14V10Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M15 9H17M15 12H17M15 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "article" || type === "publication" || type === "catalogue" || type === "document" || type === "regulatory") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M7 3H14L18 7V21H7V3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M14 3V7H18" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M10 12H15M10 16H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "news") {
    return (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M5 7H19M5 12H15M5 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M9.8 9.5C10.2 8.5 11 8 12.1 8C13.4 8 14.3 8.8 14.3 9.9C14.3 11.3 13.1 11.7 12.4 12.5C12.1 12.8 12 13.1 12 13.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 16.5H12.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function MegaPanel({
  label,
  width = "1080",
  items,
  sideTitle,
  sideDesc,
  sideHref,
  sideCta,
  sideIcon = "shield",
  grid = "grid-cols-2",
}: {
  label: string;
  width?: "1080" | "1180";
  items: MegaItem[];
  sideTitle: string;
  sideDesc: string;
  sideHref: string;
  sideCta: string;
  sideIcon?: IconType;
  grid?: string;
}) {
  return (
    <div className={`invisible fixed left-1/2 top-[70px] z-50 w-[min(${width}px,calc(100vw-48px))] -translate-x-1/2 pt-8 opacity-0 transition duration-200 group-hover/menu:visible group-hover/menu:opacity-100`}>
      <div className="absolute left-0 right-0 top-0 h-8" aria-hidden="true" />

      <div className="overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-[0_28px_90px_rgba(0,0,0,0.14)]">
        <div className="grid grid-cols-[1.2fr_0.8fr]">
          <div className="p-7">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              {label}
            </p>

            <div className={`mt-5 grid ${grid} gap-4`}>
              {items.map((item) => (
                <Link key={`${label}-${item.label}`} href={item.href} className="group/item flex min-h-[132px] gap-4 rounded-[24px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:bg-[#eaf8f0] hover:shadow-xl">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] transition group-hover/item:bg-[#039147] group-hover/item:text-white">
                    <Icon type={item.icon} />
                  </span>

                  <span>
                    <span className="block text-sm font-black leading-tight text-black">
                      {item.label}
                    </span>
                    <span className="mt-2 block text-xs leading-5 text-black/55">
                      {item.desc}
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#eaf8f0] p-7">
            <div className="pml-hex-pattern absolute inset-0 opacity-[0.10]" aria-hidden="true" />

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#039147] shadow-sm">
                <Icon type={sideIcon} />
              </div>

              <h3 className="text-xl font-black leading-tight text-black">
                {sideTitle}
              </h3>

              <p className="mt-3 text-sm leading-6 text-black/60">
                {sideDesc}
              </p>

              <Link href={sideHref} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#039147] px-5 py-3 text-xs font-extrabold text-white shadow-[0_14px_32px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5">
                {sideCta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavMega({
  children,
  href,
  panel,
  className,
}: {
  children: ReactNode;
  href: string;
  panel: ReactNode;
  className: string;
}) {
  return (
    <div className="group/menu relative">
      <Link href={href} className={className}>
        {children}
        <svg className="h-3.5 w-3.5 transition group-hover/menu:rotate-180" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {panel}
    </div>
  );
}

function MobileAccordion({
  title,
  href,
  items,
  defaultOpen = false,
  onNavigate,
  isActiveHref,
}: {
  title: string;
  href: string;
  items: MegaItem[];
  defaultOpen?: boolean;
  onNavigate: () => void;
  isActiveHref: (href: string) => boolean;
}) {
  const isParentActive = isActiveHref(href) || items.some((item) => isActiveHref(item.href));
  const [open, setOpen] = useState(defaultOpen || isParentActive);

  return (
    <div className={`overflow-hidden rounded-2xl border transition ${
      isParentActive
        ? "border-[#039147]/25 bg-[#dff5e9] shadow-[0_10px_30px_rgba(3,145,71,0.10)]"
        : "border-transparent bg-[#eaf8f0]"
    }`}>
      <div className="flex items-center">
        <Link
          href={href}
          onClick={onNavigate}
          className={`flex-1 px-5 py-4 text-lg font-black ${
            isParentActive ? "text-[#039147]" : "text-black"
          }`}
        >
          {title}
        </Link>

        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="mr-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#039147] shadow-sm transition"
          aria-label={`${open ? "Close" : "Open"} ${title} menu`}
          aria-expanded={open}
        >
          <span className={`text-xl font-black leading-none transition ${open ? "rotate-45" : ""}`}>
            +
          </span>
        </button>
      </div>

      {open ? (
        <div className="grid gap-3 px-4 pb-4">
          {items.map((item) => (
            <Link
              key={`${title}-${item.label}`}
              href={item.href}
              onClick={onNavigate}
              className={`flex gap-3 rounded-2xl p-4 text-left shadow-sm transition active:scale-[0.99] ${
                isActiveHref(item.href)
                  ? "bg-[#039147] text-white"
                  : "bg-white text-black"
              }`}
            >
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                isActiveHref(item.href)
                  ? "bg-white/15 text-white"
                  : "bg-[#eaf8f0] text-[#039147]"
              }`}>
                <Icon type={item.icon} />
              </span>

              <span>
                <span className={`block text-sm font-black leading-tight ${
                  isActiveHref(item.href) ? "text-white" : "text-black"
                }`}>
                  {item.label}
                </span>
                <span className={`mt-1 block text-xs font-semibold leading-5 ${
                  isActiveHref(item.href) ? "text-white/70" : "text-black/50"
                }`}>
                  {item.desc}
                </span>
              </span>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function Header({ onOpenProposal }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const normalizeHref = (href: string) => href.split("#")[0] || "/";
  const isActiveHref = (href: string) => {
    const cleanHref = normalizeHref(href);

    if (cleanHref === "/") {
      return pathname === "/";
    }

    if (cleanHref === "/services") {
      return pathname === "/services" || pathname.startsWith("/services/");
    }

    return pathname === cleanHref || pathname.startsWith(`${cleanHref}/`);
  };

  const navClass = (href: string) =>
    `header-link rounded-full px-4 py-3 transition ${
      isActiveHref(href)
        ? "bg-[#eaf8f0] text-[#039147]"
        : "hover:bg-black/5 hover:text-black"
    }`;

  const navMegaClass = (href: string, items: MegaItem[]) =>
    `header-link inline-flex items-center gap-2 rounded-full px-4 py-3 transition ${
      isActiveHref(href) || items.some((item) => isActiveHref(item.href))
        ? "bg-[#eaf8f0] text-[#039147]"
        : "hover:bg-black/5 hover:text-black"
    }`;

  const mobileLinkClass = (href: string) =>
    `rounded-2xl border px-5 py-4 transition ${
      isActiveHref(href)
        ? "border-[#039147]/25 bg-[#dff5e9] text-[#039147] shadow-[0_10px_30px_rgba(3,145,71,0.10)]"
        : "border-transparent bg-[#eaf8f0] text-black"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur-xl">
      <div className="pml-container flex h-[72px] items-center justify-between md:h-20">
        <Link href="/" aria-label="Pharma Metric Labs Home" className="flex items-center">
          <Image
            src="/images/LOGO-PML.png"
            alt="Pharma Metric Labs"
            width={170}
            height={90}
            className="h-12 w-auto scale-[1.18] origin-left md:h-20 md:scale-[1.35]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 text-sm font-bold text-black/70 lg:flex">
          <Link className={navClass("/")} href="/">
            Home
          </Link>

          <NavMega
            href="/about-us"
            className={navMegaClass("/about-us", aboutItems)}
            panel={
              <MegaPanel
                label="About PML"
                items={aboutItems}
                sideTitle="Independent CRO support with scientific integrity"
                sideDesc="PML combines quality, compliance, multidisciplinary expertise, and responsive project support for reliable study delivery."
                sideHref="/about-us"
                sideCta="Learn about PML"
                sideIcon="building"
              />
            }
          >
            About Us
          </NavMega>

          <NavMega
            href="/services"
            className={navMegaClass("/services", serviceItems)}
            panel={
              <MegaPanel
                label="CRO Services"
                width="1080"
                items={serviceItems}
                sideTitle="Integrated CRO support for regulated projects"
                sideDesc="Explore PML services across BA/BE studies, clinical trials, contract analysis, and regulatory consultation."
                sideHref="/services"
                sideCta="View all services"
                sideIcon="shield"
                grid="grid-cols-2"
              />
            }
          >
            Services
          </NavMega>

          <NavMega
            href="/facilities"
            className={navMegaClass("/facilities", facilityItems)}
            panel={
              <MegaPanel
                label="Facilities & Capability"
                items={facilityItems}
                sideTitle="Facilities for reliable study execution"
                sideDesc="PML supports clinical, analytical, and operational needs through integrated facilities and documentation workflows."
                sideHref="/facilities"
                sideCta="Explore facilities"
                sideIcon="building"
              />
            }
          >
            Facilities
          </NavMega>

          <Link className={navClass("/contact")} href="/contact">
            Contact
          </Link>

          <NavMega
            href="/insight"
            className={navMegaClass("/insight", insightItems)}
            panel={
              <MegaPanel
                label="Latest Insight"
                items={insightItems}
                sideTitle="Educational resources for better project readiness"
                sideDesc="Explore articles, news, publications, and FAQ content to better understand PML services."
                sideHref="/insight"
                sideCta="View insight"
                sideIcon="catalogue"
              />
            }
          >
            Insight
          </NavMega>
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
          className="relative z-[70] inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black shadow-sm lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
        >
          <span className="relative h-3.5 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current" />
            <span className="absolute left-0 bottom-0 h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="fixed inset-0 z-[999] lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={closeMobile}
            aria-label="Close menu overlay"
          />

          <aside className="absolute right-0 top-0 h-[100dvh] w-[min(92vw,430px)] overflow-y-auto border-l border-black/5 bg-white p-5 shadow-2xl sm:p-6">
            <div className="flex items-center justify-between">
              <Image
                src="/images/LOGO-PML.png"
                alt="Pharma Metric Labs"
                width={150}
                height={80}
                className="h-13 w-auto scale-[1.12] origin-left sm:h-16 sm:scale-[1.2]"
              />

              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-[#f6faf7] text-black shadow-sm"
                onClick={closeMobile}
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            <div className="mt-7 grid gap-2.5 text-base font-black text-black sm:mt-9 sm:gap-3 sm:text-lg">
              <Link onClick={closeMobile} className={mobileLinkClass("/")} href="/">
                Home
              </Link>

              <MobileAccordion
                title="About Us"
                href="/about-us"
                items={aboutItems}
                onNavigate={closeMobile}
                isActiveHref={isActiveHref}
              />

              <MobileAccordion
                title="Services"
                href="/services"
                items={serviceItems}
                onNavigate={closeMobile}
                isActiveHref={isActiveHref}
              />

              <MobileAccordion
                title="Facilities"
                href="/facilities"
                items={facilityItems}
                onNavigate={closeMobile}
                isActiveHref={isActiveHref}
              />

              <Link onClick={closeMobile} className={mobileLinkClass("/contact")} href="/contact">
                Contact
              </Link>

              <MobileAccordion
                title="Insight"
                href="/insight"
                items={insightItems}
                onNavigate={closeMobile}
                isActiveHref={isActiveHref}
              />
            </div>

            <button
              type="button"
              onClick={() => {
                closeMobile();
                onOpenProposal();
              }}
              className="sticky bottom-4 mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#039147] px-6 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.28)] transition active:scale-[0.99]"
            >
              Request a Proposal
            </button>
          </aside>
        </div>
      ) : null}
    </header>
  );
}
