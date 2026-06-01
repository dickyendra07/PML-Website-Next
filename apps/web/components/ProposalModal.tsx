"use client";

import { FormEvent, useEffect, useState } from "react";
import { submitProposal } from "@/lib/api";
import {
  fallbackPublicSettings,
  getPublicSettings,
  getSettingValue,
  PublicSettings,
} from "@/lib/public-settings";

type ProposalModalProps = {
  open: boolean;
  onClose: () => void;
};

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  serviceType: "",
  projectNeeds: "",
};

export default function ProposalModal({ open, onClose }: ProposalModalProps) {
  const [settings, setSettings] = useState<PublicSettings>(fallbackPublicSettings);
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!open) return;

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
  }, [open]);

  if (!open) return null;

  const primaryEmail = getSettingValue(settings, "contact.email", "info@pharmametriclabs.com");
  const secondaryEmail = getSettingValue(
    settings,
    "contact.secondaryEmail",
    "novida.aristyowati@pharmametriclabs.com"
  );
  const phoneNumber = getSettingValue(settings, "contact.phone", "(+6221) 426 5310 / (+6221) 426 9475");
  const proposalRecipient = getSettingValue(settings, "proposal.recipientEmail", primaryEmail);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const resetForm = () => {
    setForm(initialForm);
    setStatus("idle");
    setMessage("");
  };

  const closeModal = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      await submitProposal({
        ...form,
        sourcePage: typeof window !== "undefined" ? window.location.pathname : "unknown",
      });

      setStatus("success");
      setMessage("Your proposal request has been submitted successfully.");
      setForm(initialForm);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
        aria-label="Close proposal modal"
      />

      <div className="relative z-10 max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[34px] bg-white p-7 shadow-2xl md:p-9">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#039147]">
              Request Proposal
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-black md:text-4xl">
              Tell us about your project
            </h2>
            <p className="mt-3 text-sm leading-7 text-black/60">
              Share your study, testing, or regulatory needs and the PML team will help identify the right next steps.
            </p>

            <div className="mt-4 grid gap-3 rounded-2xl border border-[#039147]/10 bg-[#eaf8f0] p-4 text-xs font-bold leading-6 text-black/60">
              <div>
                <p className="font-black uppercase tracking-[0.14em] text-[#039147]">
                  Proposal routed to
                </p>
                <a
                  className="mt-1 inline-flex break-all text-sm font-black text-black underline decoration-[#039147]/30 underline-offset-4 transition hover:text-[#039147]"
                  href={`mailto:${proposalRecipient}`}
                >
                  {proposalRecipient}
                </a>
              </div>

              <div className="grid gap-1 border-t border-[#039147]/10 pt-3">
                <p className="font-black uppercase tracking-[0.14em] text-[#039147]">
                  Direct assistance
                </p>
                <a
                  className="break-all text-black/70 underline decoration-black/20 underline-offset-4 transition hover:text-[#039147]"
                  href={`mailto:${primaryEmail}`}
                >
                  {primaryEmail}
                </a>
                {secondaryEmail ? (
                  <a
                    className="break-all text-black/50 underline decoration-black/10 underline-offset-4 transition hover:text-[#039147]"
                    href={`mailto:${secondaryEmail}`}
                  >
                    {secondaryEmail}
                  </a>
                ) : null}
                <a
                  className="text-black/70 transition hover:text-[#039147]"
                  href={`tel:${phoneNumber.replace(/[^0-9+]/g, "")}`}
                >
                  {phoneNumber}
                </a>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={closeModal}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 text-black"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form className="mt-7 grid gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-[#039147]"
              placeholder="Name"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              required
            />
            <input
              className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-[#039147]"
              placeholder="Company"
              value={form.company}
              onChange={(event) => updateField("company", event.target.value)}
              required
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-[#039147]"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              required
            />
            <input
              className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-[#039147]"
              placeholder="Phone"
              value={form.phone}
              onChange={(event) => updateField("phone", event.target.value)}
            />
          </div>

          <input
            className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-[#039147]"
            placeholder="Country"
            value={form.country}
            onChange={(event) => updateField("country", event.target.value)}
          />

          <select
            className="h-12 rounded-2xl border border-black/10 px-4 text-sm outline-none focus:border-[#039147]"
            value={form.serviceType}
            onChange={(event) => updateField("serviceType", event.target.value)}
            required
          >
            <option value="">Choose service</option>
            <option value="BA/BE Studies">BA/BE Studies</option>
            <option value="Clinical Trial Services">Clinical Trial Services</option>
            <option value="Contract Analysis">Contract Analysis</option>
            <option value="Regulatory Consultation">Regulatory Consultation</option>
          </select>

          <textarea
            className="min-h-32 rounded-2xl border border-black/10 px-4 py-3 text-sm outline-none focus:border-[#039147]"
            placeholder="Project needs"
            value={form.projectNeeds}
            onChange={(event) => updateField("projectNeeds", event.target.value)}
            required
          />

          {message ? (
            <div
              className={`rounded-2xl p-4 text-sm font-bold ${
                status === "success"
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {message}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-2 inline-flex h-13 items-center justify-center rounded-full bg-[#039147] px-7 text-sm font-black text-white transition hover:bg-[#026834] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "loading" ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </div>
  );
}
