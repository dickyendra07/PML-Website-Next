import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Careers | Pharma Metric Labs",
  description:
    "Explore career opportunities at Pharma Metric Labs and learn how to apply by sending your CV to the PML recruitment team.",
};

const values = [
  {
    title: "Scientific Environment",
    desc: "Work in a professional clinical and laboratory environment that supports scientific accuracy, documentation, and quality-driven project delivery.",
    icon: "science",
  },
  {
    title: "Collaborative Culture",
    desc: "Grow with multidisciplinary teams across clinical, analytical, regulatory, laboratory, and operational functions.",
    icon: "team",
  },
  {
    title: "Quality Mindset",
    desc: "Contribute to regulated project workflows where compliance, reliability, and traceability matter.",
    icon: "quality",
  },
  {
    title: "Career Growth",
    desc: "Build practical experience through real project exposure, structured coordination, and continuous professional learning.",
    icon: "growth",
  },
];

const openRoleFields = [
  "Role Title",
  "Department",
  "Job Requirements",
  "Job Description",
];

function CareerIcon({ name }: { name: string }) {
  if (name === "science") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M9 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 3V8L5.8 17.2C5.1 18.8 6.2 20.5 8 20.5H16C17.8 20.5 18.9 18.8 18.2 17.2L14 8V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 16H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "team") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="2" />
        <circle cx="17" cy="10" r="2.5" stroke="currentColor" strokeWidth="2" />
        <path d="M4 20C4.7 16.8 6.6 15 9 15C11.4 15 13.3 16.8 14 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14.5 16C16.9 16.2 18.5 17.6 20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "quality") {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M12 3L19 6V11C19 15.8 16 19.2 12 21C8 19.2 5 15.8 5 11V6L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
      <path d="M4 19L9 14L12 17L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 9H20V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function CareersPage() {
  return (
    <main className="bg-white text-black">
      <section className="relative overflow-hidden bg-[#f4fbf7] px-4 py-20 md:py-28">
        <Image
          src="/images/pml/about/pml-experts-team-meeting-hero.jpeg"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.42]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f4fbf7]/92 via-[#f4fbf7]/72 to-[#eaf8f0]/38" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(3,145,71,0.08),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(3,145,71,0.07),transparent_32%)]" />
        <div className="pml-hex-pattern absolute inset-0 opacity-[0.04]" />

        <svg
          className="absolute right-[-130px] top-[-110px] h-[420px] w-[420px] text-[#039147]/10"
          viewBox="0 0 400 400"
          fill="none"
          aria-hidden="true"
        >
          <path d="M200 20L356 110V290L200 380L44 290V110L200 20Z" stroke="currentColor" strokeWidth="4" />
        </svg>

        <div className="pml-container relative">
          <nav className="mb-10 flex flex-wrap items-center gap-2 text-sm font-bold text-black/58" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-[#039147]">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-[#039147]">Careers</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.82fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-[#039147]/12 bg-white/88 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#039147] shadow-sm">
                Careers at PML
              </p>

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-black md:text-7xl">
                Build your career in a trusted clinical and laboratory environment
              </h1>

              <p className="mt-7 max-w-3xl text-base font-medium leading-8 text-black/64 md:text-lg">
                Join Pharma Metric Labs and contribute to clinical research, analytical testing,
                regulatory support, and scientific project delivery for sponsors across regulated industries.
              </p>
            </div>

            <div className="rounded-[34px] border border-[#039147]/12 bg-white/90 p-6 shadow-[0_30px_90px_rgba(3,145,71,0.12)] backdrop-blur md:p-8">
              <p className="text-xs font-black uppercase tracking-[0.16em] text-[#039147]">
                How to apply
              </p>
              <h2 className="mt-3 text-2xl font-black leading-tight text-black">
                Send your CV to PML Recruitment
              </h2>
              <p className="mt-4 text-sm font-semibold leading-7 text-black/60">
                Candidates may send their CV and relevant supporting documents to the recruitment email below.
              </p>
              <a
                href="mailto:recruitment@pharmametriclabs.com"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#039147] px-6 py-4 text-sm font-black text-white shadow-[0_18px_44px_rgba(3,145,71,0.24)] transition hover:-translate-y-0.5 hover:bg-[#027a3d]"
              >
                recruitment@pharmametriclabs.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="pml-container">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
              Why Work at PML
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
              A workplace for scientific growth and meaningful collaboration
            </h2>
            <p className="mt-6 text-base leading-8 text-black/62">
              PML provides a professional environment where teams can work across clinical,
              laboratory, regulatory, and documentation-focused projects.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[32px] border border-black/5 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#039147]/20 hover:shadow-[0_26px_80px_rgba(3,145,71,0.13)]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#eaf8f0] transition duration-500 group-hover:scale-125" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#eaf8f0] text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white">
                  <CareerIcon name={item.icon} />
                </div>
                <h3 className="relative mt-6 text-xl font-black leading-tight text-black">
                  {item.title}
                </h3>
                <p className="relative mt-4 text-sm font-medium leading-7 text-black/60">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] px-4 py-16 md:py-24">
        <div className="pml-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Open Roles
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-black md:text-5xl">
                Career opportunities at PML
              </h2>
              <p className="mt-6 text-base leading-8 text-black/62">
                Available roles may vary based on departmental needs. Candidates can submit their
                CV for recruitment consideration and include relevant experience, requirements,
                or position interest when applying.
              </p>
            </div>

            <div className="rounded-[38px] border border-[#039147]/10 bg-white p-6 shadow-[0_30px_90px_rgba(3,145,71,0.10)] md:p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {openRoleFields.map((field, index) => (
                  <div key={field} className="rounded-[24px] border border-black/5 bg-[#f8fbf9] p-5">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#039147]">
                      0{index + 1}
                    </p>
                    <h3 className="mt-3 text-lg font-black text-black">{field}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-black/58">
                      To be provided based on the active recruitment needs.
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[26px] bg-[#039147] p-6 text-white">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white/72">
                  Application process
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  Send your CV and supporting documents by email
                </h3>
                <p className="mt-4 text-sm font-semibold leading-7 text-white/78">
                  The recruitment team will review submitted applications based on role availability,
                  department requirements, and candidate qualifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 md:py-24">
        <div className="pml-container">
          <div className="relative overflow-hidden rounded-[42px] border border-[#039147]/12 bg-[#f4fbf7] p-8 text-black shadow-[0_34px_110px_rgba(3,145,71,0.13)] md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(3,145,71,0.13),transparent_34%),radial-gradient(circle_at_88%_20%,rgba(3,145,71,0.10),transparent_34%)]" />
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-white/70 blur-2xl" />
            <div className="absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-[#039147]/10 blur-2xl" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="inline-flex rounded-full border border-[#039147]/12 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#039147] shadow-sm">
                  HR Contact
                </p>
                <h2 className="mt-5 max-w-3xl text-3xl font-black leading-tight text-black md:text-5xl">
                  Interested in joining PML?
                </h2>
                <p className="mt-5 max-w-2xl text-sm font-semibold leading-7 text-black/62 md:text-base">
                  Submit your CV to the official recruitment email and include your intended role,
                  department interest, and supporting documents if available.
                </p>
              </div>

              <a
                href="mailto:recruitment@pharmametriclabs.com"
                className="inline-flex items-center justify-center rounded-full bg-[#039147] px-7 py-4 text-sm font-black text-white shadow-[0_18px_44px_rgba(3,145,71,0.24)] transition hover:-translate-y-0.5 hover:bg-[#027a3d]"
              >
                Email Recruitment
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
