import InsightCategoryTemplate from "@/components/pages/InsightCategoryTemplate";

export const metadata = {
  title: "News | Pharma Metric Labs",
  description: "Company updates and service-related activities from Pharma Metric Labs.",
};

export default function NewsPage() {
  return <InsightCategoryTemplate category="news" />;
}
