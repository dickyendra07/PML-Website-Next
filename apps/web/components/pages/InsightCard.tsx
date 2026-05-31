import Image from "next/image";
import Link from "next/link";
import { InsightItem } from "@/data/insights";

type InsightCardProps = {
  item: InsightItem;
  featured?: boolean;
};

const categoryLabel: Record<string, string> = {
  articles: "Article",
  news: "News",
  publications: "Publication",
  faq: "FAQ",
};

export default function InsightCard({ item, featured = false }: InsightCardProps) {
  return (
    <article
      className={`group overflow-hidden border border-black/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(0,0,0,0.12)] ${
        featured
          ? "rounded-[30px] md:rounded-[38px]"
          : "w-[82vw] max-w-[340px] shrink-0 snap-start rounded-[28px] md:w-auto md:max-w-none md:rounded-[32px]"
      }`}
    >
      <div className={`relative overflow-hidden bg-black ${featured ? "aspect-[16/10] md:aspect-[16/8.5]" : "aspect-[16/10]"}`}>
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover opacity-90 transition duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />

        <div className="absolute left-5 top-5 rounded-full border border-white/15 bg-white/12 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-white backdrop-blur">
          {categoryLabel[item.category]}
        </div>

        <div className="absolute bottom-5 left-5 right-5 flex flex-wrap gap-2">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#039147] backdrop-blur"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className={featured ? "p-6 md:p-10" : "p-6 md:p-7"}>
        <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.12em] text-black/40">
          <span>{item.date}</span>
          <span className="h-1 w-1 rounded-full bg-black/20" />
          <span>{item.readTime}</span>
        </div>

        <h3 className={`${featured ? "mt-4 text-2xl md:mt-5 md:text-4xl" : "mt-4 text-xl md:text-2xl"} font-black leading-tight text-black transition group-hover:text-[#039147]`}>
          {item.title}
        </h3>

        <p className={`${featured ? "mt-4 text-sm leading-7 md:mt-5 md:text-base md:leading-8" : "mt-3 text-sm leading-6 md:mt-4 md:leading-7"} text-black/60`}>
          {item.excerpt}
        </p>

        <Link
          href={`/insight/${item.category}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#eaf8f0] px-5 py-3 text-sm font-extrabold text-[#039147] transition group-hover:bg-[#039147] group-hover:text-white"
        >
          Read more
          <span className="transition group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}
