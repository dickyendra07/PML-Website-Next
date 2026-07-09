import Link from "next/link";

export const metadata = {
  title: "Cookie Policy | Pharma Metric Labs",
  description:
    "Cookie Policy for Pharma Metric Labs website, including how cookies and similar technologies may be used.",
};

const sections = [
  {
    title: "1. What are cookies?",
    body: "Cookies are small text files that may be stored on your device when you visit a website. Cookies help websites remember certain information about your visit and support website functionality, performance, and user experience.",
  },
  {
    title: "2. Why do we use cookies?",
    body: "Pharma Metric Labs may use cookies to support essential website functions, improve browsing experience, understand website performance, and evaluate how visitors interact with our website pages and content.",
  },
  {
    title: "3. Types of cookies that may be used",
    body: "Our website may use essential cookies, preference cookies, analytics cookies, and third-party technologies such as Google Tag Manager or Google Analytics if enabled by the website administrator or related corporate teams.",
  },
  {
    title: "4. Essential cookies",
    body: "Essential cookies are required for the website to operate properly. These cookies may support navigation, security, form submission, and basic website functionality.",
  },
  {
    title: "5. Analytics and third-party cookies",
    body: "Analytics or third-party cookies may be used to help us understand website traffic, content performance, and visitor interactions. These technologies may be provided by third-party platforms and are subject to their own policies.",
  },
  {
    title: "6. Managing your cookie preference",
    body: "You may accept or reject non-essential cookies through the cookie consent popup. Your preference is stored in your browser. If you clear your browser cookies or local storage, the popup may appear again.",
  },
  {
    title: "7. Updates to this Cookie Policy",
    body: "We may update this Cookie Policy from time to time to reflect changes in website functionality, regulatory requirements, or corporate data protection practices.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-[#f4fbf7] px-4 py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(3,145,71,0.10),transparent_30%),radial-gradient(circle_at_86%_16%,rgba(3,145,71,0.08),transparent_34%)]" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.04]" />

        <div className="pml-container relative">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-[#039147]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#039147]">Cookie Policy</span>
          </nav>

          <p className="inline-flex rounded-full border border-[#039147]/12 bg-white/88 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#039147] shadow-sm">
            Website Policy
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.06] tracking-[-0.018em] text-black md:text-7xl md:leading-[1.04]">
            Cookie Policy
          </h1>

          <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-black/64 md:text-lg">
            This Cookie Policy explains how Pharma Metric Labs may use cookies and similar technologies on this website.
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
                Related Policy
              </h2>
              <p className="mt-3 text-base font-medium leading-8 text-black/62">
                For information about how personal data may be collected and processed, please read our Privacy Policy.
              </p>
              <Link
                href="/privacy-policy"
                className="mt-5 inline-flex rounded-full bg-[#039147] px-6 py-3 text-sm font-black text-white"
              >
                View Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
