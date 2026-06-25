"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin");
  }, [router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f6faf7] px-6 text-black">
      <div className="rounded-[28px] border border-black/5 bg-white px-8 py-6 text-center shadow-xl">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#039147]">
          PML CMS Preview
        </p>
        <h1 className="mt-3 text-2xl font-black text-black">
          Redirecting to CMS preview...
        </h1>
        <p className="mt-3 text-sm font-semibold leading-6 text-black/55">
          Login is temporarily disabled until the production API authentication is ready.
        </p>
      </div>
    </main>
  );
}
