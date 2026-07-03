import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Careers | Pharma Metric Labs",
  description:
    "Explore career opportunities at Pharma Metric Labs across clinical, analytical, regulatory, and project support departments.",
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

const careerDepartments = [
  {
    department: "Clinical Operations",
    roles: [
      {
        title: "Clinical Research Coordinator",
        type: "Open Opportunity",
        description:
          "Supports clinical study preparation, subject coordination, documentation flow, and communication with internal study teams.",
        requirements: [
          "Background in health sciences, pharmacy, nursing, medicine, or related fields.",
          "Strong documentation, coordination, and communication skills.",
          "Able to work with structured clinical research workflows.",
        ],
      },
      {
        title: "Clinical Research Assistant",
        type: "Open Opportunity",
        description:
          "Assists clinical project execution, data collection support, study administration, and operational preparation.",
        requirements: [
          "Detail-oriented and comfortable working with study documents.",
          "Able to coordinate with multidisciplinary teams.",
          "Interest in clinical research and regulated project environments.",
        ],
      },
    ],
  },
  {
    department: "Analytical Laboratory",
    roles: [
      {
        title: "Laboratory Analyst",
        type: "Open Opportunity",
        description:
          "Supports analytical testing activities, sample handling, laboratory documentation, and method-related workflows.",
        requirements: [
          "Background in chemistry, pharmacy, biotechnology, or related laboratory fields.",
          "Understanding of laboratory procedures and documentation practices.",
          "Careful, organized, and quality-oriented.",
        ],
      },
    ],
  },
  {
    department: "Regulatory Affairs",
    roles: [
      {
        title: "Regulatory Affairs Staff",
        type: "Open Opportunity",
        description:
          "Supports regulatory document preparation, submission-oriented coordination, and project documentation readiness.",
        requirements: [
          "Background in pharmacy, life sciences, public health, or related fields.",
          "Familiarity with regulatory documentation is preferred.",
          "Strong written communication and document control skills.",
        ],
      },
    ],
  },
  {
    department: "Project & Documentation",
    roles: [
      {
        title: "Project Administration Staff",
        type: "Open Opportunity",
        description:
          "Supports project administration, internal coordination, document tracking, and communication between teams.",
        requirements: [
          "Strong administrative and organizational skills.",
          "Comfortable working with timelines, records, and project documentation.",
          "Able to communicate clearly with internal and external stakeholders.",
        ],
      },
    ],
  },
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

              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.06] tracking-[-0.018em] text-black md:text-7xl md:leading-[1.04]">
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
              <h2 className="mt-3 text-[26px] font-black leading-tight tracking-[-0.015em] text-black">
                Recruitment information
              </h2>
              <p className="mt-4 text-base font-semibold leading-8 text-black/62">
                Candidates can review available opportunities and prepare their CV, supporting
                documents, department interest, and relevant qualifications.
              </p>
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
            <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-[52px]">
              A workplace for scientific growth and meaningful collaboration
            </h2>
            <p className="mt-6 text-[17px] leading-8 text-black/66 md:text-[19px] md:leading-9">
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
                <p className="relative mt-4 text-base font-medium leading-8 text-black/60">
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eaf8f0] px-4 py-16 md:py-24">
        <div className="pml-container">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-[#039147]">
                Open Roles
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight text-black md:text-[52px]">
                Career opportunities by department
              </h2>
              <p className="mt-6 text-[17px] leading-8 text-black/66 md:text-[19px] md:leading-9">
                Explore available opportunities based on department. Select a role to view the job
                description, expected requirements, and relevant qualification details.
              </p>
            </div>

            <div className="rounded-[38px] border border-[#039147]/10 bg-white p-5 shadow-[0_30px_90px_rgba(3,145,71,0.10)] md:p-8">
              <div className="grid gap-5">
                {careerDepartments.map((department) => (
                  <div
                    key={department.department}
                    className="rounded-[28px] border border-black/5 bg-[#f8fbf9] p-5 md:p-6"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#039147]">
                      Department
                    </p>
                    <h3 className="mt-2 text-2xl font-black leading-tight text-black">
                      {department.department}
                    </h3>

                    <div className="mt-5 grid gap-3">
                      {department.roles.map((role) => (
                        <details
                          key={role.title}
                          className="group overflow-hidden rounded-[22px] border border-black/5 bg-white shadow-sm transition open:border-[#039147]/18 open:shadow-[0_18px_50px_rgba(3,145,71,0.10)]"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
                            <span>
                              <span className="block text-xs font-black uppercase tracking-[0.14em] text-[#039147]">
                                {role.type}
                              </span>
                              <span className="mt-2 block text-xl font-black leading-tight text-black">
                                {role.title}
                              </span>
                            </span>

                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf8f0] text-xl font-black text-[#039147] transition group-open:rotate-45 group-open:bg-[#039147] group-open:text-white">
                              +
                            </span>
                          </summary>

                          <div className="border-t border-black/5 px-5 pb-5 pt-4">
                            <p className="text-sm font-black uppercase tracking-[0.14em] text-black/45">
                              Job Description
                            </p>
                            <p className="mt-2 text-base font-medium leading-8 text-black/64">
                              {role.description}
                            </p>

                            <p className="mt-5 text-sm font-black uppercase tracking-[0.14em] text-black/45">
                              Requirements
                            </p>
                            <ul className="mt-3 grid gap-2">
                              {role.requirements.map((item) => (
                                <li
                                  key={item}
                                  className="flex gap-3 text-base font-medium leading-7 text-black/64"
                                >
                                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#039147]" />
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
