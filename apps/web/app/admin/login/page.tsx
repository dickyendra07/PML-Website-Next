"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminToken, loginAdmin, setAdminToken } from "@/lib/admin-api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@pharmametriclabs.com");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (getAdminToken()) {
      router.replace("/admin");
    }
  }, [router]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setStatus("loading");
    setMessage("");

    try {
      const result = await loginAdmin(email, password);
      setAdminToken(result.accessToken);
      router.replace("/admin");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Login failed. Please try again.");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06140d] text-white">
      <Image
        src="/images/pml/cta-lab-background.png"
        alt=""
        fill
        priority
        className="object-cover opacity-28"
      />
      <div className="absolute inset-0 bg-black/72" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(3,145,71,0.32),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(239,49,36,0.14),transparent_32%)]" />
      <div className="pml-hex-pattern-light absolute inset-0 opacity-[0.07]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-[1fr_470px]">
        <section>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#039147]" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-white/65">
              Secure CMS Access
            </span>
          </div>

          <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            Pharma Metric Labs Admin
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/60">
            Manage website inquiries, proposal requests, catalogue requests, popup announcements,
            global settings, and CMS content through a secure PML-branded admin area.
          </p>
        </section>

        <section className="rounded-[34px] border border-white/10 bg-white/[0.08] p-6 shadow-2xl backdrop-blur-xl md:p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
              <Image src="/images/LOGO-PML.png" alt="PML" width={74} height={44} className="h-8 w-auto" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#76d69f]">
                PML CMS
              </p>
              <h2 className="text-2xl font-black text-white">Admin Login</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-black text-white/72">Email Address</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition placeholder:text-white/25 focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="admin@pharmametriclabs.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-white/72">Password</span>
              <input
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-14 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition placeholder:text-white/25 focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="Enter admin password"
              />
            </label>

            {message ? (
              <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-sm font-bold text-red-100">
                {message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-[#039147] px-7 text-sm font-black text-white shadow-[0_18px_40px_rgba(3,145,71,0.28)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
