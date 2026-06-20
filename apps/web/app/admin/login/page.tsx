"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminToken, loginAdmin, setAdminToken } from "@/lib/admin-api";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
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
        className="object-cover opacity-36"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/78 to-[#039147]/18" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(3,145,71,0.12),transparent_28%),radial-gradient(circle_at_88%_78%,rgba(3,145,71,0.10),transparent_32%)]" />
      <div className="pml-hex-pattern absolute inset-0 opacity-[0.045]" />

      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-[1fr_500px] lg:px-10">
        <section className="max-w-2xl">
          <div className="inline-flex items-center gap-3 rounded-full border border-[#039147]/18 bg-white/92 px-5 py-3 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#039147]" />
            <span className="text-xs font-black uppercase tracking-[0.18em] text-[#039147]">
              Secure CMS Access
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black leading-[1.02] tracking-tight text-black md:text-7xl">
            PML Admin
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-black/64">
            Manage website inquiries, proposal requests, catalogue requests, popup announcements,
            global settings, and CMS content through a secure PML-branded admin area.
          </p>

          <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
            {["Website CMS", "Inquiry Review", "Content Control"].map((item) => (
              <div
                key={item}
                className="rounded-[20px] border border-black/5 bg-white/86 p-4 shadow-sm backdrop-blur"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#eaf8f0] text-sm font-black text-[#039147]">
                  ✓
                </span>
                <p className="mt-3 text-xs font-black uppercase leading-5 tracking-[0.10em] text-black/58">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[34px] border border-black/5 bg-white/92 p-6 shadow-[0_30px_100px_rgba(0,0,0,0.12)] backdrop-blur-xl md:p-8">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_16px_40px_rgba(0,0,0,0.10)] ring-1 ring-black/5">
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
                className="h-14 rounded-2xl border border-black/8 bg-[#f6faf7] px-4 text-sm font-bold text-black outline-none transition placeholder:text-black/35 focus:border-[#039147] focus:bg-white focus:ring-4 focus:ring-[#039147]/10"
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
                className="h-14 rounded-2xl border border-black/8 bg-[#f6faf7] px-4 text-sm font-bold text-black outline-none transition placeholder:text-black/35 focus:border-[#039147] focus:bg-white focus:ring-4 focus:ring-[#039147]/10"
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
              className="mt-2 inline-flex h-14 items-center justify-center rounded-full bg-[#039147] px-7 text-sm font-black text-white shadow-[0_18px_44px_rgba(3,145,71,0.28)] transition hover:-translate-y-0.5 hover:bg-[#027a3c] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs font-semibold leading-5 text-black/42">
            Restricted access for authorized Pharma Metric Labs CMS administrators.
          </p>
        </section>
      </div>
    </main>
  );
}
