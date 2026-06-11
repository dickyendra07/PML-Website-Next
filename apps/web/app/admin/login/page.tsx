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
    <main className="relative min-h-screen overflow-hidden bg-[#f6faf7] text-black">
      <Image
        src="/images/pml/cta-lab-background.png"
        alt=""
        fill
        priority
        className="object-cover opacity-38"
      />
      <div className="absolute inset-0 bg-white/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/82 to-[#039147]/12" />
      <div className="pml-hex-pattern absolute inset-0 opacity-[0.05]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-[1fr_470px]">
        <section>
          <div className="inline-flex items-center gap-3 rounded-full border border-[#039147]/15 bg-white/85 px-4 py-2 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#039147]" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#039147]">
              Secure CMS Access
            </span>
          </div>

          <h1 className="mt-7 max-w-2xl text-5xl font-black leading-[1.02] tracking-tight text-black md:text-7xl">
            PML Admin
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-black/62">
            Manage website inquiries, proposal requests, catalogue requests, popup announcements,
            global settings, and CMS content through a secure PML-branded admin area.
          </p>
        </section>

        <section className="rounded-[34px] border border-black/5 bg-white/90 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-xl">
              <Image src="/images/LOGO-PML.png" alt="PML" width={74} height={44} className="h-8 w-auto" />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#039147]">
                PML CMS
              </p>
              <h2 className="text-2xl font-black text-black">Admin Login</h2>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-black text-black/68">Email Address</span>
              <input
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="h-14 rounded-2xl border border-black/8 bg-[#f6faf7] px-4 text-sm font-bold text-black outline-none transition placeholder:text-black/30 focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="admin@pharmametriclabs.com"
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-black/68">Password</span>
              <input
                required
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="h-14 rounded-2xl border border-black/8 bg-[#f6faf7] px-4 text-sm font-bold text-black outline-none transition placeholder:text-black/30 focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                placeholder="Enter admin password"
              />
            </label>

            {message ? (
              <div className="rounded-2xl border border-red-500/20 bg-red-50 p-4 text-sm font-bold text-red-700">
                {message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-[#039147] px-7 text-sm font-black text-white shadow-[0_18px_40px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5 hover:bg-[#027a3c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
