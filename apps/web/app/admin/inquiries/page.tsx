"use client";

import { useEffect, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import AdminState from "@/components/admin/AdminState";
import InquiryTable from "@/components/admin/InquiryTable";
import { getAdminProposals, getAdminToken, ProposalSubmission } from "@/lib/admin-api";

export default function AdminInquiriesPage() {
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
        setMessage(error instanceof Error ? error.message : "Failed to load inquiries.");
      });
  }, []);

  return (
    <AdminShell>
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#76d69f]">
          Inquiry Management
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
          Website Inquiries
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/50">
          View proposal requests, contact form submissions, and catalogue requests submitted from the website.
        </p>
      </div>

      {status === "loading" ? (
        <AdminState title="Loading inquiries" description="Please wait while the CMS loads website submissions." />
      ) : null}

      {status === "error" ? (
        <AdminState title="Unable to load inquiries" description={message} tone="error" />
      ) : null}

      {status === "success" && items.length === 0 ? (
        <AdminState title="No inquiries found" description="There are no website inquiries yet." />
      ) : null}

      {status === "success" && items.length > 0 ? (
        <InquiryTable items={items} />
      ) : null}
    </AdminShell>
  );
}
