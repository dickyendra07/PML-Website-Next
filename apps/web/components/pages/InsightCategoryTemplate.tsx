"use client";

import Image from "next/image";
import Link from "next/link";
import InsightCard from "@/components/pages/InsightCard";
import {
  InsightCategory,
  getInsightsByCategory,
  insightCategories,
  insightFaqs,
} from "@/data/insights";

type InsightCategoryTemplateProps = {
  category: InsightCategory;
};

const categoryHero: Record<InsightCategory, { title: string; eyebrow: string; description: string; image: string }> = {
  articles: {
    eyebrow: "Articles",
    title: "Educational articles for CRO and pharmaceutical project readiness",
    description:
      "Read practical content about BA/BE studies, clinical trial support, contract analysis, regulatory preparation, and pharmaceutical development.",
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
  const items = getInsightsByCategory(category);

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src={hero.image}
          alt=""
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/66 to-black/24" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/54 via-transparent to-black/20" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" />

        <div className="pml-container relative py-24 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-white/60">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/insight" className="transition hover:text-white">Insight</Link>
            <span>/</span>
            <span className="text-white">{hero.eyebrow}</span>
          </nav>

          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              {hero.eyebrow}
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[68px]">
              {hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              {hero.description}
            </p>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-30 border-b border-black/5 bg-[#eaf8f0]/95 py-4 backdrop-blur">
        <div className="pml-container flex gap-3 overflow-x-auto">
          <Link
            href="/insight"
            className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-extrabold text-black/60 transition hover:text-[#039147]"
          >
            All Resources
          </Link>

          {insightCategories.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-full px-5 py-3 text-sm font-extrabold transition ${
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
        <section className="bg-white py-20 md:py-28">
          <div className="pml-container grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                FAQ Center
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Answers to common sponsor questions
              </h2>

              <p className="mt-6 text-base leading-8 text-black/65">
                Use this section as a quick guide before contacting PML. More detailed answers can be discussed directly with the team.
              </p>
            </div>

            <div className="space-y-4">
              {insightFaqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[26px] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-black text-black">
                    {faq.question}
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-xl text-[#039147] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-black/60">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="bg-white py-20 md:py-28">
          <div className="pml-container">
            <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                  {hero.eyebrow} Collection
                </p>

                <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-black md:text-5xl">
                  Latest {hero.eyebrow.toLowerCase()} from Pharma Metric Labs
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-7 text-black/55">
                This section is prepared as a CMS-ready resource collection for future PML content updates.
              </p>
            </div>

            {items.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <InsightCard key={item.slug} item={item} />
                ))}
              </div>
            ) : (
              <div className="mx-auto max-w-3xl rounded-[34px] border border-black/5 bg-white p-10 text-center shadow-sm">
                <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                  Coming Soon
                </p>
                <h2 className="mt-4 text-3xl font-black leading-tight text-black">
                  More resources will be available soon
                </h2>
                <p className="mt-5 text-base leading-8 text-black/60">
                  This section is ready for future content updates, including CMS-managed articles,
                  news, and publications.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="bg-[#f6faf7] pb-24 pt-4 md:pb-32">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[36px] bg-black px-8 py-16 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:px-14 md:py-20">
            <Image
              src="/images/pml/cta-lab-background.png"
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-[#039147]/35" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
                Start a Project
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Need support for your next project?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
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
