import InsightCategoryTemplate from "@/components/pages/InsightCategoryTemplate";

export const metadata = {
  title: "Articles",
  description: "Educational articles about CRO services, BA/BE studies, clinical trials, and pharmaceutical development.",
};

export default function ArticlesPage() {
  return <InsightCategoryTemplate category="articles" />;
}
