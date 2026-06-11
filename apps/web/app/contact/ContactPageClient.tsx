"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { submitProposal } from "@/lib/api";
import {
  fallbackPublicSettings,
  getPublicSettings,
  getSettingValue,
  PublicSettings,
} from "@/lib/public-settings";

function ContactIcon({ type }: { type: string }) {
  if (type === "phone") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8.5 5.5L10.4 9.6L8.7 11.1C9.7 13.2 11.3 14.8 13.4 15.8L14.9 14.1L19 16L18.2 19.5C18 20.3 17.3 20.9 16.5 20.8C9.3 20.2 3.8 14.7 3.2 7.5C3.1 6.7 3.7 6 4.5 5.8L8.5 5.5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "email") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M5.5 8L12 13L18.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M12 21C12 21 19 15.8 19 9.8C19 5.9 15.9 3 12 3C8.1 3 5 5.9 5 9.8C5 15.8 12 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function ContactPageClient() {
  const [settings, setSettings] = useState<PublicSettings>(fallbackPublicSettings);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("General Inquiry");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  useEffect(() => {
    getPublicSettings()
      .then((data) => {
        setSettings({
          ...fallbackPublicSettings,
          ...data,
        });
      })
      .catch(() => {
        setSettings(fallbackPublicSettings);
      });
  }, []);

  const officeAddress = getSettingValue(
    settings,
    "contact.address",
    "Gedung Indra Sentral Unit R & T, Jl. Let. Jend. Suprapto No. 60, Cempaka Putih, Jakarta Pusat 10520, Indonesia"
  );

  const phoneNumber = getSettingValue(
    settings,
    "contact.phone",
    "(+6221) 426 5310 / (+6221) 426 9475"
  );

  const primaryEmail = getSettingValue(
    settings,
    "contact.email",
    "info@pharmametriclabs.com"
  );

  const secondaryEmail = getSettingValue(
    settings,
    "contact.secondaryEmail",
    "Novida.aristyowati@pharmametriclabs.com"
  );

  const mapsQuery = encodeURIComponent(officeAddress);
  const phoneHref = `tel:${phoneNumber.replace(/[^0-9+]/g, "")}`;

  const contactCards = [
    {
      title: "Office Address",
      value: officeAddress,
      icon: "address",
    },
    {
      title: "Phone Number",
      value: phoneNumber,
      icon: "phone",
    },
    {
      title: "Email Address",
      value: primaryEmail,
      secondValue: secondaryEmail,
      icon: "email",
    },
  ];

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSubmitStatus("loading");
    setSubmitMessage("");

    try {
      await submitProposal({
        name,
        company: company || "-",
        email,
        serviceType: service,
        projectNeeds: message,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "/contact",
      });

      setSubmitStatus("success");
      setSubmitMessage("Your inquiry has been submitted successfully. PML team will follow up soon.");
      setName("");
      setCompany("");
      setEmail("");
      setService("General Inquiry");
      setMessage("");
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
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
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/58" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/62 to-black/20" />
        <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.08]" />

        <div className="pml-container relative py-20 md:py-32">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-white/60">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Contact Us</span>
          </nav>

          <div className="max-w-4xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#039147]" />
              Contact Us
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-[1.04] tracking-tight text-white md:text-6xl lg:text-[68px]">
              We are here for you, reach us for any enquiries
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Let’s talk about your project. Share your inquiry and the PML team will help identify the right service, required information, and next steps.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-extrabold text-[#039147] shadow-xl"
              >
                Send an Inquiry
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-7 py-4 text-sm font-extrabold text-white backdrop-blur transition hover:bg-white hover:text-[#039147]"
              >
                Call PML
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="bg-[#f6faf7] py-16 md:py-28">
        <div className="pml-container grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-10">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
              Get in Touch
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Complete the details below and our team will follow up
            </h2>

            <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
              Please share your name, contact details, service interest, and message. Your inquiry will be submitted directly to the PML backend system.
            </p>

            <div className="mt-8 grid gap-3 md:gap-4">
              {contactCards.map((card) => (
                <div key={card.title} className="flex gap-3 rounded-[22px] border border-black/5 bg-white p-4 shadow-sm md:gap-4 md:rounded-[26px] md:p-5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] md:h-12 md:w-12">
                    <ContactIcon type={card.icon} />
                  </div>

                  <div>
                    <h3 className="text-sm font-black uppercase tracking-[0.12em] text-black/45">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm font-bold leading-6 text-black/70 md:leading-7">
                      {card.value}
                    </p>
                    {card.secondValue ? (
                      <p className="mt-1 text-sm font-bold leading-6 text-black/70 md:leading-7">
                        {card.secondValue}
                      </p>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:rounded-[36px] md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2 md:gap-5">
              <label className="grid gap-2">
                <span className="text-sm font-black text-black">Your Name*</span>
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="h-14 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                  placeholder="Your full name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-black">Email Address*</span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-14 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                  placeholder="you@company.com"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-black">Company</span>
                <input
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  className="h-14 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                  placeholder="Company name"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-black">Service Interest</span>
                <select
                  value={service}
                  onChange={(event) => setService(event.target.value)}
                  className="h-14 rounded-2xl border border-black/10 bg-white px-4 text-sm font-bold text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                >
                  <option>General Inquiry</option>
                  <option>Contract Analysis</option>
                  <option>BA/BE Study</option>
                  <option>Clinical Trial</option>
                  <option>Regulatory Management</option>
                  <option>Facilities Inquiry</option>
                </select>
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-black text-black">Your Message*</span>
                <textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={6}
                  className="resize-none rounded-2xl border border-black/10 bg-white px-4 py-4 text-sm font-bold leading-7 text-black outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                  placeholder="Tell us about your inquiry, project needs, timeline, or questions..."
                />
              </label>
            </div>

            {submitMessage ? (
              <div
                className={`mt-6 rounded-2xl p-4 text-sm font-bold ${
                  submitStatus === "success"
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                {submitMessage}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#039147] px-8 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
              {submitStatus === "loading" ? "Sending..." : "Send Inquiry"}
            </button>

            <p className="mt-5 text-xs font-semibold leading-6 text-black/45">
              This form is connected to the PML NestJS backend and stored securely for follow-up.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch lg:gap-10">
            <div className="rounded-[30px] border border-black/5 bg-[#f6faf7] p-6 shadow-sm md:rounded-[36px] md:p-8">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#039147] md:text-sm">
                Location Map
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Visit Pharma Metric Labs office
              </h2>

              <p className="mt-5 text-sm leading-7 text-black/65 md:mt-6 md:text-base md:leading-8">
                PML is located at the address listed in the contact information. Use the map to find the office location and plan your visit.
              </p>

              <div className="mt-7 grid gap-3">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5"
                >
                  Open in Google Maps
                </a>

                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center rounded-full border border-[#039147]/20 bg-white px-7 py-4 text-sm font-extrabold text-[#039147] transition hover:bg-[#039147] hover:text-white"
                >
                  Call Before Visit
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[30px] border border-black/5 bg-white p-2 shadow-[0_24px_70px_rgba(0,0,0,0.10)] md:rounded-[36px] md:p-3">
              <iframe
                title="Pharma Metric Labs Location Map"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                className="h-[320px] w-full rounded-[24px] border-0 md:h-full md:min-h-[470px] md:rounded-[28px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-28">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[30px] bg-black px-6 py-14 text-center text-white shadow-[0_28px_90px_rgba(0,0,0,0.18)] md:rounded-[36px] md:px-14 md:py-20">
            <Image
              src="/images/pml/facilities-gallery/analytical-main.jpg"
              alt=""
              fill
              className="object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-black/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-[#039147]/35" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.10]" />

            <div className="relative mx-auto max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/70">
                Business Opportunity
              </p>

              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Looking for business opportunity?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/75">
                Contact PML to discuss study collaboration, laboratory testing, regulatory needs, or other project opportunities.
              </p>

              <a
                href={`mailto:${primaryEmail}`}
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-extrabold text-[#039147] shadow-xl transition hover:-translate-y-0.5"
              >
                Email PML
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
