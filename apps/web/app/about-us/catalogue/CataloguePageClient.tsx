"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { CatalogueItem, getCatalogues, submitCatalogueRequest } from "@/lib/api";


function getAssetUrl(value: string | null) {
  if (!value) return "/images/pml/cta-lab-background.png";

  if (value.startsWith("http")) return value;

  if (value.startsWith("/uploads")) {
    const apiOrigin =
      process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, "") ||
      "http://localhost:4000";

    return `${apiOrigin}${value}`;
  }

  return value;
}

function getCatalogueMessage(catalogue: CatalogueItem) {
  return `Please send the latest official ${catalogue.title}.`;
}

export default function CataloguePage() {
  const [catalogues, setCatalogues] = useState<CatalogueItem[]>([]);
  const [selectedCatalogueId, setSelectedCatalogueId] = useState("");
  const [requestName, setRequestName] = useState("");
  const [requestCompany, setRequestCompany] = useState("");
  const [requestEmail, setRequestEmail] = useState("");
  const [requestPhone, setRequestPhone] = useState("");
  const [requestStatus, setRequestStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [requestMessage, setRequestMessage] = useState("");
  const [catalogueStatus, setCatalogueStatus] = useState<"loading" | "success" | "error">("loading");

  const openProposal = () => {
    window.dispatchEvent(new CustomEvent("open-proposal-modal"));
  };

  useEffect(() => {
    let isMounted = true;

    async function loadCatalogues() {
      try {
        const data = await getCatalogues();

        if (!isMounted) return;

        setCatalogues(data);
        setCatalogueStatus("success");
      } catch {
        if (!isMounted) return;

        setCatalogueStatus("error");
      }
    }

    void loadCatalogues();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleCatalogueRequest = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const selectedCatalogue = catalogues.find((item) => item.id === selectedCatalogueId);

    if (!selectedCatalogue) {
      setRequestStatus("error");
      setRequestMessage("Please select a catalogue first.");
      return;
    }

    setRequestStatus("loading");
    setRequestMessage("");

    try {
      await submitCatalogueRequest({
        catalogueId: selectedCatalogue.id,
        name: requestName || "Catalogue Request",
        company: requestCompany || undefined,
        email: requestEmail,
        phone: requestPhone || undefined,
        message: getCatalogueMessage(selectedCatalogue),
      });

      setRequestStatus("success");
      setRequestMessage("Catalogue request submitted successfully. PML team will follow up soon.");
      setSelectedCatalogueId("");
      setRequestName("");
      setRequestCompany("");
      setRequestEmail("");
      setRequestPhone("");
    } catch (error) {
      setRequestStatus("error");
      setRequestMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-black text-white">
        <Image
          src="/images/pml/cta-lab-background.png"
          alt=""
          fill
          priority
          className="object-cover opacity-85"
        />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/62 to-black/20" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-white/60">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/about-us" className="transition hover:text-white">About Us</Link>
            <span>/</span>
            <span className="text-white">Catalogue</span>
          </nav>

          <div className="max-w-5xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Catalogue
            </p>

            <h1 className="mt-6 max-w-5xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[68px]">
              PML service catalogue and business materials
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Access or request PML catalogue materials for Contract Analysis, BA/BE Study, Clinical Trial,
              and Regulatory Management capability.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#catalogue-list"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
              >
                Explore Catalogue
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
        </div>
      </section>

      <section id="catalogue-list" className="bg-[#eaf8f0] py-16 md:py-28">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Catalogue Library
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Select the catalogue material you need
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
              These catalogue items are prepared for sponsors and partners who want to understand
              PML capability before starting a project discussion.
            </p>
          </div>

          <div className="-mx-4 mt-10 flex snap-x gap-4 overflow-x-auto px-4 pb-5 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
            {catalogueStatus === "loading" ? (
              <div className="col-span-full rounded-[30px] border border-black/5 bg-white p-8 text-center text-sm font-bold text-black/45">
                Loading catalogue data from CMS...
              </div>
            ) : null}

            {catalogueStatus === "error" ? (
              <div className="col-span-full rounded-[30px] border border-red-100 bg-red-50 p-8 text-center text-sm font-bold text-red-700">
                Unable to load catalogue data. Please try again later.
              </div>
            ) : null}

            {catalogueStatus === "success" && catalogues.length === 0 ? (
              <div className="col-span-full rounded-[30px] border border-black/5 bg-white p-8 text-center text-sm font-bold text-black/45">
                No catalogue available yet.
              </div>
            ) : null}

            {catalogues.map((catalogue) => (
              <article key={catalogue.id} className="group w-[82vw] max-w-[350px] shrink-0 snap-start overflow-hidden rounded-[30px] border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.12)] md:w-auto md:max-w-none md:rounded-[34px]">
                <div className="relative h-48 overflow-hidden bg-black md:h-56">
                  <Image
                    src={getAssetUrl(catalogue.coverImage)}
                    alt={catalogue.title}
                    unoptimized={Boolean(catalogue.coverImage?.startsWith("/uploads"))}
                    fill
                    className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.14em] text-[#039147] backdrop-blur">
                    {catalogue.serviceType || "Catalogue"}
                  </div>
                </div>

                <div className="flex min-h-[300px] flex-col p-6 md:p-7">
                  <h3 className="text-2xl font-black leading-tight text-black">
                    {catalogue.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-black/60">
                    {catalogue.description}
                  </p>

                  <div className="mt-auto grid gap-3 pt-7">
                    {catalogue.downloadMode === "PUBLIC_DOWNLOAD" && catalogue.fileUrl ? (
                      <a
                        href={getAssetUrl(catalogue.fileUrl)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-[#039147] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(3,145,71,0.20)] transition hover:-translate-y-0.5"
                      >
                        Download PDF
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedCatalogueId(catalogue.id);
                          document.getElementById("catalogue-request-form")?.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                          });
                        }}
                        className="inline-flex items-center justify-center rounded-full bg-[#039147] px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(3,145,71,0.20)] transition hover:-translate-y-0.5"
                      >
                        Request PDF
                      </button>
                    )}

                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-full border border-[#039147]/20 bg-white px-6 py-3.5 text-sm font-extrabold text-[#039147] transition hover:bg-[#039147] hover:text-white"
                    >
                      Contact PML
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-1 text-center text-xs font-bold text-black/40 md:hidden">
            Swipe to explore catalogue
          </p>

          <form
            id="catalogue-request-form"
            onSubmit={handleCatalogueRequest}
            className="mx-auto mt-10 grid max-w-4xl gap-4 rounded-[30px] border border-black/5 bg-white p-5 shadow-sm md:mt-12 md:grid-cols-2 md:items-end md:rounded-[34px] md:p-6"
          >
            <label className="grid gap-2">
              <span className="text-sm font-black text-black">Catalogue Type</span>
              <select
                required
                value={selectedCatalogueId}
                onChange={(event) => setSelectedCatalogueId(event.target.value)}
                className="h-13 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
              >
                <option value="">Choose catalogue</option>
                {catalogues.map((catalogue) => (
                  <option key={catalogue.id} value={catalogue.id}>
                    {catalogue.title}
                  </option>
                ))}
              </select>

              {catalogueStatus === "loading" ? (
                <span className="text-xs font-bold text-black/40">
                  Loading catalogue data from CMS...
                </span>
              ) : null}

              {catalogueStatus === "error" ? (
                <span className="text-xs font-bold text-red-600">
                  Unable to load catalogue data. Please try again later.
                </span>
              ) : null}

              {catalogueStatus === "success" && catalogues.length === 0 ? (
                <span className="text-xs font-bold text-black/40">
                  No catalogue available yet.
                </span>
              ) : null}
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-black">Full Name</span>
              <input
                required
                value={requestName}
                onChange={(event) => setRequestName(event.target.value)}
                className="h-13 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="Your name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-black">Company</span>
              <input
                value={requestCompany}
                onChange={(event) => setRequestCompany(event.target.value)}
                className="h-13 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="Company name"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-black">Email Address</span>
              <input
                required
                type="email"
                value={requestEmail}
                onChange={(event) => setRequestEmail(event.target.value)}
                className="h-13 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="you@company.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-black">Phone Number</span>
              <input
                value={requestPhone}
                onChange={(event) => setRequestPhone(event.target.value)}
                className="h-13 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="+62..."
              />
            </label>

            <button
              type="submit"
              disabled={requestStatus === "loading"}
              className="inline-flex h-13 items-center justify-center rounded-full bg-[#039147] px-7 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(3,145,71,0.20)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
            >
              {requestStatus === "loading" ? "Sending..." : "Submit"}
            </button>

            {requestMessage ? (
              <div
                className={`rounded-2xl p-4 text-sm font-bold md:col-span-2 ${
                  requestStatus === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {requestMessage}
              </div>
            ) : null}
          </form>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/facilities-gallery/analytical-lab-1.jpg"
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-[#039147]/35" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
                Updated Catalogue Request
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Need the latest official catalogue from PML?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
                Contact the PML team to request the latest catalogue, discuss project needs,
                or prepare a proposal discussion.
              </p>

              <button
                type="button"
                onClick={openProposal}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
              >
                Request Proposal
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
