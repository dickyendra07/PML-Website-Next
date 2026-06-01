export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export type AdminLoginResult = {
  accessToken: string;
  user: AdminUser;
};

export type InquiryStatus =
  | "NEW"
  | "IN_REVIEW"
  | "CONTACTED"
  | "CLOSED"
  | "SPAM";

export type ProposalSubmission = {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string | null;
  country: string | null;
  serviceType: string;
  projectNeeds: string;
  sourcePage: string | null;
  status: InquiryStatus;
  internalNote: string | null;
  createdAt: string;
  updatedAt: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000/api";

const TOKEN_KEY = "pml_admin_token";

export function getAdminToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function setAdminToken(token: string) {
  window.localStorage.setItem(TOKEN_KEY, token);
}

export function clearAdminToken() {
  window.localStorage.removeItem(TOKEN_KEY);
}

async function parseJsonResponse<T>(response: Response): Promise<T> {
  const result = await response.json().catch(() => null);

  if (!response.ok) {
    const message =
      result && typeof result === "object" && "message" in result
        ? String(result.message)
        : "Request failed. Please try again.";

    throw new Error(message);
  }

  return result as T;
}

export async function loginAdmin(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/admin/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return parseJsonResponse<AdminLoginResult>(response);
}

export async function getCurrentAdmin(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return parseJsonResponse<AdminUser>(response);
}

export async function logoutAdmin(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/auth/logout`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return parseJsonResponse<{ success: boolean; message: string }>(response);
}

export async function getAdminProposals(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/proposals`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return parseJsonResponse<ProposalSubmission[]>(response);
}

export async function getAdminProposalDetail(token: string, id: string) {
  const response = await fetch(`${API_BASE_URL}/admin/proposals/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return parseJsonResponse<ProposalSubmission>(response);
}

export async function updateAdminProposalStatus(
  token: string,
  id: string,
  status: InquiryStatus
) {
  const response = await fetch(`${API_BASE_URL}/admin/proposals/${id}/status`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  });

  return parseJsonResponse<ProposalSubmission>(response);
}

export async function updateAdminProposalNote(
  token: string,
  id: string,
  internalNote: string
) {
  const response = await fetch(`${API_BASE_URL}/admin/proposals/${id}/internal-note`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ internalNote }),
  });

  return parseJsonResponse<ProposalSubmission>(response);
}

export async function markAdminProposalAsSpam(token: string, id: string) {
  const response = await fetch(`${API_BASE_URL}/admin/proposals/${id}/spam`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return parseJsonResponse<ProposalSubmission>(response);
}

export type SiteSetting = {
  id: string;
  key: string;
  label: string;
  value: string | number | boolean | null | Record<string, unknown> | unknown[];
  group: string;
  description: string | null;
  isPublic: boolean;
  createdAt: string;
  updatedAt: string;
};

export async function getAdminSettings(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/settings`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return parseJsonResponse<SiteSetting[]>(response);
}

export async function updateAdminSettings(
  token: string,
  items: Array<{ key: string; value: SiteSetting["value"] }>
) {
  const response = await fetch(`${API_BASE_URL}/admin/settings`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items }),
  });

  return parseJsonResponse<SiteSetting[]>(response);
}


export type PageSeoStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type PageSeoItem = {
  id: string;
  path: string;
  label: string;
  title: string;
  description: string;
  ogTitle: string | null;
  ogDescription: string | null;
  ogImage: string | null;
  canonicalUrl: string | null;
  status: PageSeoStatus;
  createdAt: string;
  updatedAt: string;
};

export async function getAdminPageSeoItems(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/page-seo`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return parseJsonResponse<PageSeoItem[]>(response);
}

export async function updateAdminPageSeo(
  token: string,
  id: string,
  payload: Partial<
    Pick<
      PageSeoItem,
      | "label"
      | "title"
      | "description"
      | "ogTitle"
      | "ogDescription"
      | "ogImage"
      | "canonicalUrl"
      | "status"
    >
  >
) {
  const response = await fetch(`${API_BASE_URL}/admin/page-seo/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<PageSeoItem>(response);
}

export async function seedAdminPageSeoDefaults(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/page-seo/seed-defaults`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return parseJsonResponse<PageSeoItem[]>(response);
}

export type PopupType = "ANNOUNCEMENT" | "PROMOTION" | "ALERT" | "INFORMATION";

export type PopupItem = {
  id: string;
  title: string;
  description: string | null;
  buttonLabel: string | null;
  buttonUrl: string | null;
  imageUrl: string | null;
  type: PopupType;
  status: PageSeoStatus;
  placementPages: string[];
  frequency: string;
  startsAt: string | null;
  endsAt: string | null;
  priority: number;
  createdAt: string;
  updatedAt: string;
};

export type PopupPayload = {
  title: string;
  description?: string | null;
  buttonLabel?: string | null;
  buttonUrl?: string | null;
  imageUrl?: string | null;
  type?: PopupType;
  status?: PageSeoStatus;
  placementPages?: string[];
  frequency?: string;
  startsAt?: string | null;
  endsAt?: string | null;
  priority?: number;
};

export async function getAdminPopups(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/popups`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  return parseJsonResponse<PopupItem[]>(response);
}

export async function createAdminPopup(token: string, payload: PopupPayload) {
  const response = await fetch(`${API_BASE_URL}/admin/popups`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<PopupItem>(response);
}

export async function updateAdminPopup(
  token: string,
  id: string,
  payload: PopupPayload
) {
  const response = await fetch(`${API_BASE_URL}/admin/popups/${id}`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  return parseJsonResponse<PopupItem>(response);
}

export async function archiveAdminPopup(token: string, id: string) {
  const response = await fetch(`${API_BASE_URL}/admin/popups/${id}/archive`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return parseJsonResponse<PopupItem>(response);
}
