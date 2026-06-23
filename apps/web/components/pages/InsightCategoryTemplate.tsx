"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import InsightCard from "@/components/pages/InsightCard";
import { InsightCategory, insightCategories } from "@/data/insights";
import { getInsights, InsightItem } from "@/lib/api";

type InsightCategoryTemplateProps = {
  category: InsightCategory;
};

const categoryHero: Record<
  InsightCategory,
  { title: string; eyebrow: string; description: string; image: string }
> = {
  articles: {
    eyebrow: "Articles",
    title: "Educational articles for CRO and pharmaceutical project readiness",
    description:
      "Read practical content about BA/BE study, clinical trial support, contract analysis, regulatory preparation, and pharmaceutical development.",
    image: "/images/pml/services/babe-studies-hero.png",
  },
  news: {
    eyebrow: "News",
    title: "Company updates and service-related activities from PML",
    description:
      "Follow updates from Pharma Metric Labs, including facility capability, service activities, and company announcements.",
    image: "/images/pml/facilities-gallery/clinical-main.jpg",
  },
  publications: {
    eyebrow: "Publications",
    title: "Scientific and regulatory references for sponsors and partners",
    description:
      "Explore selected technical, regulatory, and documentation-oriented references to support better project discussions.",
    image: "/images/pml/services/clinical-trial-regulatory.png",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions about Pharma Metric Labs",
    description:
      "Find answers to common questions about PML services, inquiry preparation, regulatory support, and facility access.",
    image: "/images/pml/cta-lab-background.png",
  },
};

export default function InsightCategoryTemplate({ category }: InsightCategoryTemplateProps) {
  const hero = categoryHero[category];
  const [items, setItems] = useState<InsightItem[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  useEffect(() => {
    let isMounted = true;

    async function loadCategoryInsights() {
      try {
        const data = await getInsights(category);

        if (!isMounted) return;

        setItems(data);
        setStatus("success");
      } catch {
        if (!isMounted) return;

        setStatus("error");
      }
    }

    void loadCategoryInsights();

    return () => {
      isMounted = false;
    };
  }, [category]);

  return (
    <main>
      <section className="relative overflow-hidden bg-white text-black">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          className="object-cover opacity-64"
        />
        <div className="absolute inset-0 bg-white/52" />
        <div className="absolute inset-0 bg-white/18" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/58 to-[#039147]/16" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-transparent to-black/20" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.045]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58">
            <Link href="/" className="transition hover:text-black">Home</Link>
            <span>/</span>
            <Link href="/insight" className="transition hover:text-black">Insight</Link>
            <span>/</span>
            <span className="text-[#039147]">{hero.eyebrow}</span>
          </nav>

          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#039147] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-black md:text-6xl lg:text-[68px]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-black/68 md:text-lg">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-[72px] z-30 border-b border-black/5 bg-[#eaf8f0]/95 py-3 backdrop-blur md:top-20 md:py-4">
        <div className="pml-container flex gap-2 overflow-x-auto md:gap-3">
          <Link
            href="/insight"
            className="shrink-0 rounded-full bg-white px-4 py-2.5 text-xs font-extrabold text-black/60 transition hover:text-[#039147] md:px-5 md:py-3 md:text-sm"
          >
            All Resources
          </Link>

          {insightCategories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-extrabold transition md:px-5 md:py-3 md:text-sm ${
                item.category === category
                  ? "bg-[#039147] text-white shadow-[0_12px_30px_rgba(3,145,71,0.20)]"
                  : "bg-white text-black/60 hover:text-[#039147]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {category === "faq" ? (
        <section className="bg-white py-16 md:py-28">
          <div className="pml-container grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                FAQ Center
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-[52px]">
                Answers to common sponsor questions
              </h2>

              <p className="mt-5 text-base leading-8 text-black/65 md:mt-6 md:text-lg md:leading-9">
                Use this section as a quick guide before contacting PML. More detailed answers can be discussed directly with the team.
              </p>
            </div>

            <div className="space-y-3 md:space-y-4">
              {status === "loading" ? (
                <div className="rounded-[26px] border border-black/5 bg-[#f6faf7] p-6 text-base font-bold text-black/48">
                  Loading FAQ from CMS...
                </div>
              ) : null}

              {status === "error" ? (
                <div className="rounded-[26px] border border-red-100 bg-red-50 p-6 text-base font-bold text-red-700">
                  Unable to load FAQ. Please try again later.
                </div>
              ) : null}

              {status === "success" && items.length === 0 ? (
                <div className="rounded-[26px] border border-black/5 bg-[#f6faf7] p-6 text-base font-bold text-black/48">
                  No FAQ available yet.
                </div>
              ) : null}

              {items.map((faq) => (
                <details
                  key={faq.id}
                  className="group rounded-[22px] border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl md:rounded-[26px] md:p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-black text-black md:gap-6 md:text-lg">
                    {faq.title}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-xl text-[#039147] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-base leading-8 text-black/60">
                    {faq.excerpt || faq.content || "Answer will be available soon."}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-16 md:py-28">
          <div className="pml-container">
            <div className="mb-9 flex flex-col justify-between gap-5 md:mb-12 md:flex-row md:items-end md:gap-6">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                  {hero.eyebrow} Collection
                </p>

                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-black md:text-[52px]">
                  Latest {hero.eyebrow.toLowerCase()} from Pharma Metric Labs
                </h2>
              </div>

              <p className="max-w-xl text-base leading-8 text-black/55">
                This section is connected to the CMS and can be updated from the admin panel.
              </p>
            </div>

            {status === "loading" ? (
              <div className="mx-auto max-w-3xl rounded-[34px] border border-black/5 bg-[#f6faf7] p-10 text-center shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                  Loading
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-black">
                  Loading {hero.eyebrow.toLowerCase()} from CMS...
                </h2>
              </div>
            ) : null}

            {status === "error" ? (
              <div className="mx-auto max-w-3xl rounded-[34px] border border-red-100 bg-red-50 p-10 text-center shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-red-600">
                  Error
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-red-700">
                  Unable to load content
                </h2>
                <p className="mt-5 text-base leading-8 text-red-600">
                  Please try again later.
                </p>
              </div>
            ) : null}

            {status === "success" && items.length > 0 ? (
              <>
                <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
                  {items.map((item) => (
                    <InsightCard key={item.slug} item={item} />
                  ))}
                </div>

                <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
                  Swipe to explore resources
                </p>
              </>
            ) : null}

            {status === "success" && items.length === 0 ? (
              <div className="mx-auto max-w-3xl rounded-[34px] border border-black/5 bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                  Coming Soon
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-black">
                  More resources will be available soon
                </h2>
                <p className="mt-5 text-base leading-8 text-black/60">
                  This section is ready for future CMS-managed content updates.
                </p>
              </div>
            ) : null}
          </div>
        </section>
      )}

      <section className="bg-[#f6faf7] pb-20 pt-4 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-black shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/cta-lab-background.png"
              alt=""
              fill
              className="object-cover opacity-48"
            />
            <div className="absolute inset-0 bg-white/34" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/78 via-white/48 to-[#039147]/12" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Start a Project
              </p>

              <h2 className="mt-4 text-4xl font-black leading-tight md:text-[52px] text-black">
                Need support for your next project?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-black/72">
                Share your study, testing, or regulatory needs with our team and we will help
                identify the right service scope, required information, and next steps.
              </p>

              <button
                type="button"
                onClick={openProposal}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
              >
                Request a Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
