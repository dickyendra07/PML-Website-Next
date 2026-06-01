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
  status: string;
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
