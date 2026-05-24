import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  title: "Pharma Metric Labs | CRO Services",
  description:
    "Pharma Metric Labs provides integrated CRO services for bioequivalence studies, clinical trials, contract analysis, and regulatory consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
