import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Pharma Metric Labs",
  description:
    "Privacy Policy for Pharma Metric Labs website, including how website visitor information may be collected and used.",
};

const sections = [
  {
    title: "1. Introduction",
    body: "This Privacy Policy explains how Pharma Metric Labs may collect, use, store, and protect information submitted through this website, including contact forms, proposal requests, catalogue requests, and other website interactions.",
  },
  {
    title: "2. Information we may collect",
    body: "We may collect information such as name, company, email address, phone number, country, service interest, project needs, messages, and other information voluntarily submitted through website forms.",
  },
  {
    title: "3. How we use information",
    body: "Information submitted through this website may be used to respond to inquiries, process proposal requests, provide catalogue access, coordinate service discussions, improve website experience, and support internal business communication.",
  },
  {
    title: "4. Cookies and website analytics",
    body: "Our website may use cookies or similar technologies to support website functionality and understand website performance. Please refer to our Cookie Policy for more information.",
  },
  {
    title: "5. Data sharing",
    body: "We do not sell personal information. Information may be shared internally or with authorized service providers when necessary to operate the website, respond to inquiries, or support legitimate business processes.",
  },
  {
    title: "6. Data protection",
    body: "We take reasonable measures to protect submitted information from unauthorized access, misuse, disclosure, alteration, or loss. However, no digital transmission or storage system can be guaranteed to be completely secure.",
  },
  {
    title: "7. Data retention",
    body: "Submitted information may be retained for as long as necessary to fulfill the purpose for which it was collected, support communication records, comply with applicable requirements, or maintain business documentation.",
  },
  {
    title: "8. Contact",
    body: "For questions regarding this Privacy Policy or website data handling, visitors may contact Pharma Metric Labs through the contact page available on this website.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-[#f4fbf7] px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(3,145,71,0.10),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(3,145,71,0.08),transparent_34%)]" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.04]" />

        <div className="pml-container relative">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-[#039147]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#039147]">Privacy Policy</span>
          </nav>

          <p className="inline-flex rounded-full border border-[#039147]/12 bg-white/88 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#039147] shadow-sm">
            Website Policy
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.06] tracking-[-0.018em] text-black md:text-7xl md:leading-[1.04]">
            Privacy Policy
          </h1>

          <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-black/64 md:text-lg">
            This Privacy Policy explains how information submitted through the Pharma Metric Labs website may be handled.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="pml-container">
          <div className="mx-auto max-w-4xl rounded-[36px] border border-black/5 bg-white p-6 shadow-[0_28px_90px_rgba(3,145,71,0.10)] md:p-10">
            <p className="text-sm font-bold leading-7 text-black/50">
              Last updated: July 2026
            </p>

            <div className="mt-8 grid gap-7">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-2xl font-black leading-tight text-black">
                    {section.title}
                  </h2>
                  <p className="mt-3 text-base font-medium leading-8 text-black/64">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>

            <div className="mt-10 rounded-[26px] bg-[#eaf8f0] p-6">
              <h2 className="text-xl font-black text-black">
                Cookie Information
              </h2>
              <p className="mt-3 text-base font-medium leading-8 text-black/62">
                For information about cookies and similar technologies, please read our Cookie Policy.
              </p>
              <Link
                href="/cookie-policy"
                className="mt-5 inline-flex rounded-full bg-[#039147] px-6 py-3 text-sm font-black text-white"
              >
                View Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
