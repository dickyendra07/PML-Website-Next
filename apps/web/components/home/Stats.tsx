"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "years experience.",
    icon: "/images/pml/stats-icons/icon-clinical-trials.svg",
  },
  {
    value: 1500,
    suffix: "+",
    label: "completed projects.",
    icon: "/images/pml/stats-icons/icon-contract-analysis.svg",
  },
  {
    value: 3500,
    suffix: "+",
    label: "healthy volunteers database.",
    icon: "/images/pml/stats-icons/icon-volunteer-database.svg",
  },
  {
    value: 190,
    suffix: "+",
    label: "validated bioanalytical methods.",
    icon: "/images/pml/stats-icons/icon-babe-studies.svg",
  },
];

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

function CountUpNumber({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element || hasAnimated) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setHasAnimated(true);

        const duration = 1400;
        const startTime = performance.now();

        const animate = (currentTime: number) => {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(easedProgress * target);

          setCount(currentValue);

          if (progress < 1) {
            requestAnimationFrame(animate);
          } else {
            setCount(target);
          }
        };

        requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated, target]);

  return (
    <div
      ref={ref}
      className="mt-6 text-4xl font-black tracking-tight text-[#039147] md:text-5xl"
    >
      {formatNumber(count)}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="relative z-20 -mt-10 px-4 md:-mt-14">
      <div className="pml-container">
        <div className="rounded-[32px] border border-black/5 bg-white px-6 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.10)] md:rounded-[40px] md:px-12 md:py-14">
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-10">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-[160px] flex-col items-center justify-center text-center md:min-h-[180px]"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-[#039147]/10 bg-[#eaf8f0] text-[#039147] md:h-16 md:w-16">
                  <span
                    className="block h-8 w-8 bg-[#039147]"
                    style={{
                      WebkitMaskImage: `url("${stat.icon}")`,
                      maskImage: `url("${stat.icon}")`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                    aria-hidden="true"
                  />
                </div>

                <CountUpNumber target={stat.value} suffix={stat.suffix} />

                <p className="mt-3 max-w-[190px] text-xs font-bold leading-5 text-[#039147] md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
