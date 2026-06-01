"use client";

import { useEffect, useMemo, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import AdminState from "@/components/admin/AdminState";
import InquiryTable from "@/components/admin/InquiryTable";
import { getAdminProposals, getAdminToken, ProposalSubmission } from "@/lib/admin-api";

export default function AdminDashboardPage() {
  const [items, setItems] = useState<ProposalSubmission[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = getAdminToken();

    if (!token) return;

    getAdminProposals(token)
      .then((data) => {
        setItems(data);
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        setMessage(error instanceof Error ? error.message : "Failed to load dashboard data.");
      });
  }, []);

  const summary = useMemo(() => {
    const total = items.length;
    const newItems = items.filter((item) => item.status === "NEW").length;
    const catalogue = items.filter((item) => item.name === "Catalogue Request").length;
    const proposal = items.filter((item) => item.name !== "Catalogue Request").length;

    return [
      { label: "Total Inquiries", value: total },
      { label: "New Requests", value: newItems },
      { label: "Catalogue Requests", value: catalogue },
      { label: "Proposal / Contact", value: proposal },
    ];
  }, [items]);

  return (
    <AdminShell>
      <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#76d69f]">
            Dashboard Overview
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            PML CMS Dashboard
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
            Monitor website proposal requests, contact inquiries, and catalogue requests from the PML website.
          </p>
        </div>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-4">
        {summary.map((item) => (
          <article key={item.label} className="rounded-[26px] border border-white/10 bg-white/[0.06] p-6 shadow-xl backdrop-blur">
            <p className="text-sm font-bold text-white/45">{item.label}</p>
            <p className="mt-3 text-4xl font-black text-white">{item.value}</p>
          </article>
        ))}
      </div>

      {status === "loading" ? (
        <AdminState title="Loading inquiries" description="Please wait while the CMS loads the latest website requests." />
      ) : null}

      {status === "error" ? (
        <AdminState title="Unable to load dashboard" description={message} tone="error" />
      ) : null}

      {status === "success" && items.length === 0 ? (
        <AdminState title="No inquiries yet" description="Website inquiries will appear here after visitors submit the forms." />
      ) : null}

      {status === "success" && items.length > 0 ? (
        <InquiryTable items={items.slice(0, 8)} />
      ) : null}
    </AdminShell>
  );
}
