import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";
import { getSeoDefaults } from "@/lib/server-settings";

export async function generateMetadata(): Promise<Metadata> {
  const seo = await getSeoDefaults();

  return {
    metadataBase: new URL("https://pharmametriclabs.com"),
    title: {
      default: seo.title,
      template: `%s | ${seo.companyName}`,
    },
    description: seo.description,
    applicationName: seo.companyName,
    authors: [{ name: seo.companyName }],
    creator: seo.companyName,
    publisher: seo.companyName,
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
      siteName: seo.companyName,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: "/images/pml/hero-lab-hexagon.png",
          width: 1200,
          height: 630,
          alt: `${seo.companyName} laboratory and CRO services`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
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
}

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
