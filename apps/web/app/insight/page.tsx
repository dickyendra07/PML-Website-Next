"use client";

import Image from "next/image";
import Link from "next/link";
import InsightCard from "@/components/pages/InsightCard";
import { insightCategories, insights, insightFaqs } from "@/data/insights";

const categoryIcons: Record<string, string> = {
  Articles: "01",
  News: "02",
  Publications: "03",
  FAQ: "04",
};

export default function InsightPage() {
  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  const featured = insights[0];
  const latest = insights.slice(1, 4);

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/pml/facilities-gallery/analytical-main.jpg"
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
            <span className="text-white">Insight</span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#039147]" />
                Insight & Resources
              </p>

              <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[72px]">
                Educational resources for better project readiness
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Explore articles, news, publications, and frequently asked questions about PML services,
                CRO support, pharmaceutical development, and regulatory preparation.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#insight-content"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
                >
                  Explore Resources
                </a>

                <button
                  type="button"
                  onClick={openProposal}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
                >
                  Request a Proposal
                </button>
              </div>
            </div>

            <div className="rounded-[34px] border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/60">
                Resource Focus
              </p>

              <div className="mt-6 grid gap-4">
                {[
                  ["CRO Service Education", "Understand PML’s BA/BE, clinical, analytical, and regulatory support."],
                  ["Sponsor Preparation", "Prepare better inquiries, documents, timelines, and project requirements."],
                  ["Facility & Company Updates", "Follow PML facility capability and service-related updates."],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-[24px] border border-white/10 bg-white/10 p-5">
                    <h3 className="text-base font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/62">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="insight-content" className="bg-[#eaf8f0] py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Resource Categories
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Choose the resource type you need
              </h2>
            </div>

            <p className="max-w-3xl text-base leading-8 text-black/65 lg:justify-self-end">
              PML resources are organized to help sponsors understand services, prepare inquiries,
              follow company updates, and review technical or regulatory references.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {insightCategories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group relative overflow-hidden rounded-[32px] border border-black/5 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#039147]/10 transition group-hover:scale-125" />

                <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8f0] text-sm font-black text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white">
                  {categoryIcons[category.label]}
                </div>

                <h3 className="relative text-2xl font-black leading-tight text-black">
                  {category.label}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-black/60">
                  {category.description}
                </p>

                <span className="relative mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#039147]">
                  View {category.label}
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="pml-container">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Featured Insight
              </p>

              <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-black md:text-5xl">
                Practical content for sponsors and project teams
              </h2>
            </div>

            <Link
              href="/insight/articles"
              className="inline-flex w-fit items-center justify-center rounded-full border border-[#039147]/20 px-6 py-3 text-sm font-extrabold text-[#039147] transition hover:bg-[#039147] hover:text-white"
            >
              View Articles
            </Link>
          </div>

          <InsightCard item={featured} featured />

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latest.map((item) => (
              <InsightCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f6faf7] py-20 md:py-28">
        <div className="pml-container">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                FAQ Preview
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Common questions before starting with PML
              </h2>

              <p className="mt-6 text-base leading-8 text-black/65">
                Quick answers about services, project preparation, regulatory support, and facility access.
              </p>

              <Link
                href="/insight/faq"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)]"
              >
                View All FAQ
              </Link>
            </div>

            <div className="space-y-4">
              {insightFaqs.slice(0, 4).map((faq) => (
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
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
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
                Need scientific, clinical, analytical, or regulatory support?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
                Share your project needs with PML and our team will help identify the right service scope,
                required information, and next steps.
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
