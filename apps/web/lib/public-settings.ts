export type PublicSettings = Record<string, string | number | boolean | null>;

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000/api";

export const fallbackPublicSettings: PublicSettings = {
  "company.name": "Pharma Metric Labs",
  "company.description":
    "Pharma Metric Labs supports pharmaceutical and biotechnology companies with scientific CRO services for BA/BE studies, clinical trials, contract analysis, and regulatory consultation.",
  "contact.address": "Gedung Indra Sentral Unit R & T, Jakarta Pusat, Indonesia",
  "contact.email": "info@pharmametriclabs.com",
  "contact.secondaryEmail": "novida.aristyowati@pharmametriclabs.com",
  "contact.phone": "(021) 426 5310",
  "footer.copyright": "Pharma Metric Labs. All rights reserved.",
  "proposal.recipientEmail": "info@pharmametriclabs.com",
  "social.instagram": "https://www.instagram.com",
  "social.linkedin": "https://www.linkedin.com",
};

export function getSettingValue(
  settings: PublicSettings,
  key: string,
  fallback = ""
) {
  const value = settings[key];

  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);

  return fallback;
}

export async function getPublicSettings() {
  const response = await fetch(`${API_BASE_URL}/settings/public`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load public settings.");
  }

  return (await response.json()) as PublicSettings;
}
