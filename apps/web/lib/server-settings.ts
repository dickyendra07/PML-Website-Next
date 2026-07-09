import {
  fallbackPublicSettings,
  getSettingValue,
  PublicSettings,
} from "@/lib/public-settings";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  (process.env.NODE_ENV === "development" ? "http://localhost:4000/api" : "");

export async function getServerPublicSettings(): Promise<PublicSettings> {
  try {
    const response = await fetch(`${API_BASE_URL}/settings/public`, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      return fallbackPublicSettings;
    }

    const data = (await response.json()) as PublicSettings;

    return {
      ...fallbackPublicSettings,
      ...data,
    };
  } catch {
    return fallbackPublicSettings;
  }
}

export async function getSeoDefaults() {
  const settings = await getServerPublicSettings();

  return {
    title: getSettingValue(
      settings,
      "seo.defaultTitle",
      "Pharma Metric Labs | Contract Research Organization in Indonesia"
    ),
    description: getSettingValue(
      settings,
      "seo.defaultDescription",
      "Integrated CRO services for pharmaceutical development, including BA/BE study, clinical trial, contract analysis, and regulatory management."
    ),
    companyName: getSettingValue(settings, "company.name", "Pharma Metric Labs"),
  };
}
