"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import AdminShell from "@/components/admin/AdminShell";
import AdminState from "@/components/admin/AdminState";
import {
  getAdminSettings,
  getAdminToken,
  SiteSetting,
  updateAdminSettings,
} from "@/lib/admin-api";

const groupLabels: Record<string, string> = {
  company: "Company",
  contact: "Contact",
  social: "Social Media",
  footer: "Footer",
  proposal: "Proposal",
  seo: "SEO Defaults",
  general: "General",
};

function stringifyValue(value: SiteSetting["value"]) {
  if (typeof value === "string") return value;
  if (value === null || value === undefined) return "";
  return JSON.stringify(value, null, 2);
}

export default function AdminSettingsPage() {
  const [items, setItems] = useState<SiteSetting[]>([]);
  const [formValues, setFormValues] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = getAdminToken();

    if (!token) {
      Promise.resolve().then(() => {
        setStatus("error");
        setMessage("Admin token not found. Please login again.");
      });
      return;
    }

    getAdminSettings(token)
      .then((data) => {
        setItems(data);
        setFormValues(
          data.reduce<Record<string, string>>((result, item) => {
            result[item.key] = stringifyValue(item.value);
            return result;
          }, {})
        );
        setStatus("success");
      })
      .catch((error) => {
        setStatus("error");
        setMessage(error instanceof Error ? error.message : "Failed to load settings.");
      });
  }, []);

  const groupedSettings = useMemo(() => {
    return items.reduce<Record<string, SiteSetting[]>>((result, item) => {
      if (!result[item.group]) result[item.group] = [];
      result[item.group].push(item);
      return result;
    }, {});
  }, [items]);

  const updateField = (key: string, value: string) => {
    setFormValues((current) => ({
      ...current,
      [key]: value,
    }));
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

    try {
      const payload = items.map((item) => ({
        key: item.key,
        value: formValues[item.key] || "",
      }));

      const updated = await updateAdminSettings(token, payload);

      setItems((current) =>
        current.map((item) => {
          const found = updated.find((setting) => setting.key === item.key);
          return found || item;
        })
      );

      setMessage("Website settings saved successfully.");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Failed to save settings.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <AdminShell>
      <div className="mb-8">
        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#76d69f]">
          Global Settings CMS
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-white md:text-5xl">
          Website Settings
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">
          Manage company profile, contact information, social links, footer text, proposal recipient,
          and default SEO settings from one CMS page.
        </p>
      </div>

      {status === "loading" ? (
        <AdminState title="Loading settings" description="Please wait while the CMS loads website settings." />
      ) : null}

      {status === "error" ? (
        <AdminState title="Unable to load settings" description={message} tone="error" />
      ) : null}

      {status === "success" ? (
        <form onSubmit={handleSubmit} className="grid gap-6">
          {Object.entries(groupedSettings).map(([group, settings]) => (
            <section
              key={group}
              className="rounded-[30px] border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur md:p-7"
            >
              <div className="mb-6 flex flex-col justify-between gap-2 md:flex-row md:items-end">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#76d69f]">
                    {groupLabels[group] || group}
                  </p>
                  <h2 className="mt-2 text-2xl font-black text-white">
                    {groupLabels[group] || group} Settings
                  </h2>
                </div>

                <span className="w-fit rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white/40">
                  {settings.length} fields
                </span>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {settings.map((setting) => {
                  const isLong =
                    setting.key.includes("description") ||
                    setting.key.includes("address") ||
                    setting.key.includes("defaultDescription");

                  return (
                    <label
                      key={setting.key}
                      className={isLong ? "grid gap-2 md:col-span-2" : "grid gap-2"}
                    >
                      <span className="text-sm font-black text-white">
                        {setting.label}
                      </span>

                      <span className="text-xs font-semibold leading-5 text-white/35">
                        {setting.description || setting.key}
                      </span>

                      {isLong ? (
                        <textarea
                          rows={4}
                          value={formValues[setting.key] || ""}
                          onChange={(event) => updateField(setting.key, event.target.value)}
                          className="resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm font-bold leading-7 text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                        />
                      ) : (
                        <input
                          value={formValues[setting.key] || ""}
                          onChange={(event) => updateField(setting.key, event.target.value)}
                          className="h-13 rounded-2xl border border-white/10 bg-black/25 px-4 text-sm font-bold text-white outline-none transition focus:border-[#039147] focus:ring-4 focus:ring-[#039147]/10"
                        />
                      )}

                      <span className="font-mono text-[11px] text-white/25">
                        {setting.key} {setting.isPublic ? "· public" : "· admin only"}
                      </span>
                    </label>
                  );
                })}
              </div>
            </section>
          ))}

          {message ? (
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-sm font-bold text-white/70">
              {message}
            </div>
          ) : null}

          <div className="sticky bottom-4 z-20 flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="rounded-full bg-[#039147] px-8 py-4 text-sm font-black text-white shadow-[0_18px_50px_rgba(3,145,71,0.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving Settings..." : "Save Website Settings"}
            </button>
          </div>
        </form>
      ) : null}
    </AdminShell>
  );
}
