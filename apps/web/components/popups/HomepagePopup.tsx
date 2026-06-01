"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type PopupItem = {
  id: string;
  title: string;
  description: string | null;
  buttonLabel: string | null;
  buttonUrl: string | null;
  imageUrl: string | null;
  frequency: string;
};

type PopupResponse = {
  popup: PopupItem | null;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000/api";

function getStorageKey(popupId: string) {
  return `pml_popup_closed_${popupId}`;
}

export default function HomepagePopup() {
  const [popup, setPopup] = useState<PopupItem | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadPopup() {
      try {
        const response = await fetch(`${API_BASE_URL}/popups/active?path=/`, {
          cache: "no-store",
        });

        if (!response.ok) return;

        const result = (await response.json()) as PopupResponse;

        if (!isMounted || !result.popup) return;

        const storageKey = getStorageKey(result.popup.id);
        const alreadyClosed = window.sessionStorage.getItem(storageKey);

        if (result.popup.frequency === "ONCE_PER_SESSION" && alreadyClosed) {
          return;
        }

        setPopup(result.popup);

        window.setTimeout(() => {
          if (isMounted) setIsVisible(true);
        }, 700);
      } catch {
        // Silent fail. Popup should never break the homepage.
      }
    }

    loadPopup();

    return () => {
      isMounted = false;
    };
  }, []);

  const closePopup = () => {
    if (popup) {
      window.sessionStorage.setItem(getStorageKey(popup.id), "true");
    }

    setIsVisible(false);

    window.setTimeout(() => {
      setPopup(null);
    }, 250);
  };

  if (!popup) return null;

  return (
    <div
      className={`fixed inset-0 z-[90] flex items-end justify-center bg-black/45 px-4 pb-4 backdrop-blur-sm transition-opacity duration-300 md:items-center md:pb-0 ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label={popup.title}
    >
      <div
        className={`relative w-full max-w-[920px] overflow-hidden rounded-[28px] border border-white/15 bg-white shadow-[0_32px_120px_rgba(0,0,0,0.35)] transition-all duration-300 md:rounded-[36px] ${
          isVisible ? "translate-y-0 scale-100" : "translate-y-8 scale-[0.98]"
        }`}
      >
        <button
          type="button"
          onClick={closePopup}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/90 text-xl font-black text-black shadow-lg transition hover:bg-black hover:text-white"
          aria-label="Close popup"
        >
          ×
        </button>

        <div className="grid md:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[190px] overflow-hidden bg-black md:min-h-[420px]">
            {popup.imageUrl ? (
              <Image
                src={popup.imageUrl}
                alt=""
                fill
                priority={false}
                className="object-cover opacity-90"
              />
            ) : null}

            <div className="absolute inset-0 bg-gradient-to-br from-black/35 via-black/25 to-[#039147]/55" />
            <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.12]" />

            <div className="absolute bottom-5 left-5 right-5 rounded-[24px] border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-white/65">
                Pharma Metric Labs
              </p>
              <p className="mt-2 text-lg font-black leading-tight">
                Integrated CRO Services
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 lg:p-12">
            <p className="inline-flex rounded-full bg-[#eaf8f0] px-4 py-2 text-[11px] font-black uppercase tracking-[0.16em] text-[#039147]">
              Announcement
            </p>

            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">
              {popup.title}
            </h2>

            {popup.description ? (
              <p className="mt-5 text-sm font-medium leading-7 text-black/60 md:text-base md:leading-8">
                {popup.description}
              </p>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {popup.buttonLabel && popup.buttonUrl ? (
                <Link
                  href={popup.buttonUrl}
                  onClick={closePopup}
                  className="inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-black text-white shadow-[0_18px_45px_rgba(3,145,71,0.25)] transition hover:-translate-y-0.5 hover:bg-[#02783b]"
                >
                  {popup.buttonLabel}
                </Link>
              ) : null}

              <button
                type="button"
                onClick={closePopup}
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-black/[0.03] px-7 py-4 text-sm font-black text-black/70 transition hover:bg-black hover:text-white"
              >
                Maybe Later
              </button>
            </div>

            <p className="mt-5 text-xs font-semibold leading-5 text-black/35">
              This popup appears once per browser session and can be managed from the admin CMS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
