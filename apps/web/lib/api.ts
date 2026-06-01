export type ProposalPayload = {
  name: string;
  company: string;
  email: string;
  phone?: string;
  country?: string;
  serviceType: string;
  projectNeeds: string;
  sourcePage?: string;
};

export type ApiSubmitResult = {
  success: boolean;
  message: string;
  id?: string;
};

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:4000/api";

export async function submitProposal(payload: ProposalPayload): Promise<ApiSubmitResult> {
  const response = await fetch(`${API_BASE_URL}/proposals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as Partial<ApiSubmitResult>;

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to submit request. Please try again.");
  }

  return {
    success: true,
    message: result.message || "Request submitted successfully.",
    id: result.id,
  };
}
