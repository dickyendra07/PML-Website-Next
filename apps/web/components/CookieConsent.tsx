"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const CONSENT_KEY = "pml_cookie_consent_v1";

type ConsentValue = "accepted" | "rejected";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = window.localStorage.getItem(CONSENT_KEY);

    if (!savedConsent) {
      const timer = window.setTimeout(() => {
        setIsVisible(true);
      }, 700);

      return () => window.clearTimeout(timer);
    }

    return undefined;
  }, []);

  const saveConsent = (value: ConsentValue) => {
    window.localStorage.setItem(CONSENT_KEY, value);
    window.localStorage.setItem(`${CONSENT_KEY}_date`, new Date().toISOString());
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/42 px-4 py-8 backdrop-blur-[6px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="relative w-full max-w-[560px] overflow-hidden rounded-[30px] border border-white/40 bg-white p-6 shadow-[0_30px_120px_rgba(0,0,0,0.24)] md:p-8">
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#eaf8f0]" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-[#f4fbf7]" />

        <div className="relative">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-sm font-black text-[#039147] shadow-sm">
                PML
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#039147]">
                  Pharma Metric Labs
                </p>
                <p className="mt-1 text-sm font-bold text-black/48">
                  Cookie Preference
                </p>
              </div>
            </div>
          </div>

          <h2
            id="cookie-consent-title"
            className="text-3xl font-black leading-tight tracking-[-0.02em] text-black md:text-[34px]"
          >
            Cookie Consent
          </h2>

          <p className="mt-4 text-base font-medium leading-8 text-black/62">
            We use cookies and similar technologies to improve website functionality,
            understand website performance, and provide a better browsing experience.
            Some cookies are essential, while analytics or third-party cookies may be used
            when enabled.
          </p>

          <p className="mt-4 text-sm font-semibold leading-7 text-black/52">
            By selecting “Accept & Continue”, you agree to the use of cookies as described
            in our{" "}
            <Link href="/cookie-policy" className="font-black text-[#039147] underline-offset-4 hover:underline">
              Cookie Policy
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="font-black text-[#039147] underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="rounded-full border border-red-400/30 bg-red-500/10 px-6 py-3 text-sm font-black text-red-500 transition hover:bg-red-500 hover:text-white"
            >
              Reject
            </button>

            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="rounded-full bg-[#039147] px-6 py-3 text-sm font-black text-white shadow-[0_18px_50px_rgba(3,145,71,0.24)] transition hover:-translate-y-0.5"
            >
              Accept & Continue
            </button>
          </div>

          <p className="mt-5 text-xs font-semibold leading-6 text-black/38">
            Your choice will be stored in this browser and the popup will not appear again
            unless your browser storage is cleared.
          </p>
        </div>
      </div>
    </div>
  );
}
