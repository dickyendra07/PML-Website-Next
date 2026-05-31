const items = [
  {
    title: "Quality, integrity, and compliance",
    text: "High commitment to quality, integrity, and regulatory compliance across every project.",
    icon: "shield",
    featured: true,
  },
  {
    title: "Multidisciplinary expertise",
    text: "Experienced professionals across clinical, laboratory, regulatory, and project workflows.",
    icon: "team",
    featured: false,
  },
  {
    title: "Responsive project management",
    text: "Customer-oriented support with responsive coordination and effective project communication.",
    icon: "support",
    featured: false,
  },
  {
    title: "Accredited facilities",
    text: "Updated and accredited facilities for reliable study and laboratory services.",
    icon: "facility",
    featured: false,
  },
  {
    title: "Strong local network",
    text: "Partnerships with hospitals, investigators, and industry networks across Indonesia.",
    icon: "network",
    featured: true,
  },
];

function Icon({ name }: { name: string }) {
  if (name === "shield") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L19 6V11C19 15.8 16 19.2 12 21C8 19.2 5 15.8 5 11V6L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "team") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 19C4.8 16.5 6.6 15 9 15C11.4 15 13.2 16.5 14 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.5 18.5C15.2 16.8 16.4 16 18 16C19.6 16 20.8 16.9 21.5 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "support") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M5 12C5 8.1 8.1 5 12 5C15.9 5 19 8.1 19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M5 12V15C5 16.1 5.9 17 7 17H8V12H5Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M19 12V15C19 16.1 18.1 17 17 17H16V12H19Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M13 19H15C17.2 19 19 17.2 19 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "facility") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 20H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 20V7L12 4L18 7V20" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 10H10.5M13.5 10H15M9 14H10.5M13.5 14H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="2" />
      <path d="M7 7.5L9.5 10M16.5 10L18 7.5M16.5 14L18 16.5M7 16.5L9.5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function WhyPml() {
  return (
    <section className="bg-white pb-24 pt-28 md:pb-32 md:pt-36" id="about">
      <div className="pml-container">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Why PML
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              Built for Quality, Compliance, and Reliable Collaboration
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-black/65">
              PML combines scientific discipline, regulatory awareness, multidisciplinary expertise,
              and responsive project support to help sponsors move from planning to reliable study
              execution and documentation.
            </p>

            <div className="mt-8 rounded-[32px] bg-[#039147] p-8 text-white shadow-[0_24px_70px_rgba(3,145,71,0.22)]">
              <p className="text-2xl font-black leading-tight">
                Innovation, powered by scientific excellence.
              </p>
              <p className="mt-4 text-sm leading-6 text-white/75">
                A renewed digital direction that reflects PML’s commitment to credible, compliant,
                and customer-oriented CRO support.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {items.map((item) => (
              <article
                key={item.title}
                className={`group rounded-[28px] border border-black/5 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                  item.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white">
                  <Icon name={item.icon} />
                </div>

                <h3 className="text-lg font-black leading-tight text-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-black/60">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="h-16 md:h-24" aria-hidden="true" />
    </section>
  );
}
