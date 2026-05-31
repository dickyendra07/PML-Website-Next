import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://pharmametriclabs.com"),
  title: {
    default: "Pharma Metric Labs | Contract Research Organization in Indonesia",
    template: "%s | Pharma Metric Labs",
  },
  description:
    "Pharma Metric Labs is an Indonesia-based Contract Research Organization supporting BA/BE studies, clinical trial services, contract analysis, and regulatory consultation.",
  applicationName: "Pharma Metric Labs",
  authors: [{ name: "Pharma Metric Labs" }],
  creator: "Pharma Metric Labs",
  publisher: "Pharma Metric Labs",
  keywords: [
    "Pharma Metric Labs",
    "PML",
    "Contract Research Organization",
    "CRO Indonesia",
    "BA/BE Studies",
    "Bioequivalence Study",
    "Clinical Trial Services",
    "Contract Analysis",
    "Regulatory Consultation",
    "BPOM Registration",
    "Pharmaceutical Development",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pharmametriclabs.com",
    siteName: "Pharma Metric Labs",
    title: "Pharma Metric Labs | Contract Research Organization in Indonesia",
    description:
      "Integrated CRO services for pharmaceutical development, including BA/BE studies, clinical trial services, contract analysis, and regulatory consultation.",
    images: [
      {
        url: "/images/pml/hero-lab-hexagon.png",
        width: 1200,
        height: 630,
        alt: "Pharma Metric Labs laboratory and CRO services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pharma Metric Labs | Contract Research Organization in Indonesia",
    description:
      "Integrated CRO services for pharmaceutical development, including BA/BE studies, clinical trial services, contract analysis, and regulatory consultation.",
    images: ["/images/pml/hero-lab-hexagon.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
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
