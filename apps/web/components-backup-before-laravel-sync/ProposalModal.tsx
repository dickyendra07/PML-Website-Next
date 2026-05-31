"use client";

import { FormEvent, useState } from "react";

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
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  if (!open) return null;

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
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

      const response = await fetch(`${apiUrl}/proposals`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          sourcePage: typeof window !== "undefined" ? window.location.pathname : "unknown",
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Failed to submit proposal request.");
      }

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
