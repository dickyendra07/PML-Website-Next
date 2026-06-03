"use client";

import Image from "next/image";
import { FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import AdminState from "@/components/admin/AdminState";
import {
  AdminInsightItem,
  PageSeoStatus,
  archiveAdminInsight,
  createAdminInsight,
  getAdminInsights,
  getAdminToken,
  updateAdminInsight,
  uploadAdminInsightCover,
} from "@/lib/admin-api";

type InsightForm = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  coverImage: string;
  tags: string;
  status: PageSeoStatus;
  isFeatured: boolean;
  publishedAt: string;
};

const emptyForm: InsightForm = {
  id: "",
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "articles",
  coverImage: "",
  tags: "",
  status: "DRAFT",
  isFeatured: false,
  publishedAt: "",
};

const insightCategories = [
  { label: "Articles", value: "articles" },
  { label: "News", value: "news" },
  { label: "Publications", value: "publications" },
  { label: "FAQ", value: "faq" },
];

function toDateTimeLocal(value: string | null) {
  if (!value) return "";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "";

  return date.toISOString().slice(0, 16);
}

function toIsoOrNull(value: string) {
  if (!value) return null;

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return null;

  return date.toISOString();
}

function mapInsightToForm(item: AdminInsightItem): InsightForm {
  return {
    id: item.id,
    title: item.title || "",
    slug: item.slug || "",
    excerpt: item.excerpt || "",
    content: item.content || "",
    category: item.category || "articles",
    coverImage: item.coverImage || "",
    tags: item.tags?.join(", ") || "",
    status: item.status,
    isFeatured: item.isFeatured,
    publishedAt: toDateTimeLocal(item.publishedAt),
  };
}

function getAssetUrl(value: string) {
  if (!value) return "";

  if (value.startsWith("http")) return value;

  if (value.startsWith("/uploads")) {
    const apiOrigin =
      process.env.NEXT_PUBLIC_API_URL?.replace(/\/api\/?$/, "") ||
      "http://localhost:4000";

    return `${apiOrigin}${value}`;
  }

  return value;
}

function parseTags(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export default function AdminInsightsPage() {
  const [items, setItems] = useState<AdminInsightItem[]>([]);
  const [form, setForm] = useState<InsightForm>(emptyForm);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [saving, setSaving] = useState(false);
  const [uploadingCover, setUploadingCover] = useState(false);
  const [message, setMessage] = useState("");

  const selectedInsight = useMemo(() => {
    return items.find((item) => item.id === form.id) || null;
  }, [items, form.id]);

  const loadInsights = useCallback(async () => {
    const token = getAdminToken();

    if (!token) {
      setStatus("error");
      setMessage("Admin token not found. Please login again.");
      return;
    }

    try {
      const data = await getAdminInsights(token);
      setItems(data);
      setStatus("success");

      setForm((current) => {
        if (data.length > 0 && !current.id) {
          return mapInsightToForm(data[0]);
        }

        return current;
      });
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Failed to load insights.");
    }
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      void loadInsights();
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [loadInsights]);

  const updateField = <K extends keyof InsightForm>(key: K, value: InsightForm[K]) => {
    setForm((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const resetForm = () => {
    setForm(emptyForm);
    setMessage("");
  };

  const selectInsight = (item: AdminInsightItem) => {
    setForm(mapInsightToForm(item));
    setMessage("");
  };

  const handleCoverUpload = async (file: File | null) => {
    if (!file) return;

    const token = getAdminToken();

    if (!token) {
      setMessage("Admin token not found. Please login again.");
      return;
    }

    setUploadingCover(true);
    setMessage("");

    try {
      const result = await uploadAdminInsightCover(token, file);
      updateField("coverImage", result.url);
      setMessage("Cover image uploaded successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to upload cover image.");
    } finally {
      setUploadingCover(false);
    }
  };

  const handleArchive = async () => {
    if (!form.id) {
      setMessage("Please select an insight first.");
      return;
    }

    const token = getAdminToken();

    if (!token) {
      setMessage("Admin token not found. Please login again.");
      return;
    }

    setSaving(true);
    setMessage("");

    try {
      const archived = await archiveAdminInsight(token, form.id);
      setForm(mapInsightToForm(archived));
      await loadInsights();
      setMessage("Insight archived successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to archive insight.");
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const token = getAdminToken();

    if (!token) {
      setMessage("Admin token not found. Please login again.");
      return;
    }

    setSaving(true);
    setMessage("");

    const payload = {
      title: form.title,
      slug: form.slug || undefined,
      excerpt: form.excerpt || null,
      content: form.content || null,
      category: form.category,
      coverImage: form.coverImage || null,
      tags: parseTags(form.tags),
      status: form.status,
      isFeatured: form.isFeatured,
      publishedAt: toIsoOrNull(form.publishedAt),
    };

    try {
      if (form.id) {
        const updated = await updateAdminInsight(token, form.id, payload);
        setForm(mapInsightToForm(updated));
        setMessage("Insight updated successfully.");
      } else {
        const created = await createAdminInsight(token, payload);
        setForm(mapInsightToForm(created));
        setMessage("Insight created successfully.");
      }

      await loadInsights();
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to save insight.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminShell>
      <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-[#76d69f]">
            Insight CMS
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
            Insights & Resources
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">
            Manage articles, news, publications, FAQ content, cover images, tags, featured status, and publishing workflow.
          </p>
        </div>

        <button
          type="button"
          onClick={resetForm}
          className="w-fit rounded-full bg-[#039147] px-6 py-3 text-sm font-black text-white shadow-[0_18px_50px_rgba(3,145,71,0.22)] transition hover:-translate-y-0.5"
        >
          Create New Insight
        </button>
      </div>

      {status === "loading" ? (
        <AdminState title="Loading insights" description="Please wait while the CMS loads insight data." />
      ) : null}

      {status === "error" ? (
        <AdminState title="Unable to load insights" description={message} tone="error" />
      ) : null}

      {status === "success" ? (
        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.3fr]">
          <section className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur md:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#76d69f]">
                  Insight List
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Existing Insights
                </h2>
              </div>

              <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-black text-white/40">
                {items.length} items
              </span>
            </div>

            <div className="grid gap-3">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => selectInsight(item)}
                  className={`rounded-2xl border p-4 text-left transition ${
                    item.id === form.id
                      ? "border-[#039147] bg-[#039147]/15"
                      : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-black text-white">{item.title}</h3>
                      <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/45">
                        {item.excerpt || "No excerpt"}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-black ${
                        item.status === "PUBLISHED"
                          ? "bg-[#039147]/20 text-[#76d69f]"
                          : "bg-white/10 text-white/45"
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-[10px] font-black uppercase tracking-[0.1em] text-white/35">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span>{item.isFeatured ? "Featured" : "Standard"}</span>
                    <span>•</span>
                    <span>{item.tags.length} tags</span>
                  </div>
                </button>
              ))}

              {items.length === 0 ? (
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm font-bold text-white/45">
                  No insight yet. Create the first article or FAQ.
                </div>
              ) : null}
            </div>
          </section>

          <form
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur md:p-7"
          >
            <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#76d69f]">
                  {selectedInsight ? "Edit Insight" : "Create Insight"}
                </p>
                <h2 className="mt-2 text-2xl font-black text-white">
                  Insight Content
                </h2>
              </div>

              <span className="w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/40">
                {form.category}
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-black text-white">Title</span>
                <input
                  value={form.title}
                  onChange={(event) => updateField("title", event.target.value)}
                  className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                  required
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-white">Slug</span>
                <input
                  value={form.slug}
                  onChange={(event) => updateField("slug", event.target.value)}
                  className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                  placeholder="article-slug"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-white">Category</span>
                <select
                  value={form.category}
                  onChange={(event) => updateField("category", event.target.value)}
                  className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                >
                  {insightCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-black text-white">Excerpt / FAQ Answer Preview</span>
                <textarea
                  rows={4}
                  value={form.excerpt}
                  onChange={(event) => updateField("excerpt", event.target.value)}
                  className="resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold leading-7 text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                />
              </label>

              <label className="grid gap-2 md:col-span-2">
                <span className="text-sm font-black text-white">Content</span>
                <textarea
                  rows={8}
                  value={form.content}
                  onChange={(event) => updateField("content", event.target.value)}
                  className="resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold leading-7 text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                />
              </label>

              <div className="grid gap-4 rounded-[26px] border border-white/10 bg-black/20 p-4 md:col-span-2 md:grid-cols-[0.9fr_1.1fr] md:p-5">
                <div className="overflow-hidden rounded-[22px] border border-white/10 bg-black/30">
                  {form.coverImage ? (
                    <div className="relative h-56 w-full">
                      <Image
                        src={getAssetUrl(form.coverImage)}
                        alt="Insight cover preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 420px"
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ) : (
                    <div className="flex h-56 items-center justify-center px-6 text-center text-sm font-bold text-white/35">
                      Upload cover image to preview insight card.
                    </div>
                  )}
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-black text-white">Cover Image</span>
                  <input
                    type="file"
                    accept="image/png,image/jpeg,image/webp"
                    onChange={(event) => {
                      void handleCoverUpload(event.target.files?.[0] || null);
                      event.target.value = "";
                    }}
                    className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold text-white file:mr-4 file:rounded-full file:border-0 file:bg-[#039147] file:px-4 file:py-2 file:text-xs file:font-black file:text-white"
                  />

                  <input
                    value={form.coverImage}
                    onChange={(event) => updateField("coverImage", event.target.value)}
                    placeholder="/uploads/insights/covers/image.png"
                    className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition placeholder:text-white/20 focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                  />

                  <span className="text-xs font-semibold text-white/35">
                    {uploadingCover ? "Uploading cover..." : "Upload image or paste cover URL manually."}
                  </span>
                </label>
              </div>

              <label className="grid gap-2">
                <span className="text-sm font-black text-white">Tags</span>
                <input
                  value={form.tags}
                  onChange={(event) => updateField("tags", event.target.value)}
                  placeholder="BA/BE, CRO, Regulatory"
                  className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition placeholder:text-white/20 focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-white">Published At</span>
                <input
                  type="datetime-local"
                  value={form.publishedAt}
                  onChange={(event) => updateField("publishedAt", event.target.value)}
                  className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                />
              </label>

              <label className="grid gap-2">
                <span className="text-sm font-black text-white">Status</span>
                <select
                  value={form.status}
                  onChange={(event) => updateField("status", event.target.value as PageSeoStatus)}
                  className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                >
                  <option value="DRAFT">Draft</option>
                  <option value="PUBLISHED">Published</option>
                  <option value="ARCHIVED">Archived</option>
                </select>
              </label>

              <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                <input
                  type="checkbox"
                  checked={form.isFeatured}
                  onChange={(event) => updateField("isFeatured", event.target.checked)}
                  className="h-5 w-5 accent-[#039147]"
                />
                <span className="text-sm font-black text-white">Featured Insight</span>
              </label>
            </div>

            {message ? (
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm font-bold text-white/70">
                {message}
              </div>
            ) : null}

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-end">
              {form.id ? (
                <button
                  type="button"
                  onClick={handleArchive}
                  disabled={saving}
                  className="rounded-full border border-red-400/30 bg-red-500/10 px-8 py-4 text-sm font-black text-red-200 transition hover:bg-red-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Archive
                </button>
              ) : null}

              <button
                type="submit"
                disabled={saving || uploadingCover}
                className="rounded-full bg-[#039147] px-8 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(3,145,71,0.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {saving ? "Saving Insight..." : "Save Insight"}
              </button>
            </div>
          </form>
        </div>
      ) : null}
    </AdminShell>
  );
}
