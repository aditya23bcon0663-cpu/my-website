export interface TeamMember {
  name: string;
  role: string;
  imagePath: string;
}

export interface JobRole {
  title: string;
  type: string;
  techStack: string;
  description: string;
}

export interface NetworkStatus {
  state: string;
  updatedAt?: string;
  checkedAt?: string;
}

export type AssistantAudience = "developer" | "business" | "candidate" | "general";

export type AssistantLeadType = "pricing_or_project" | "recruitment" | "none";

export interface AssistantMetadata {
  audience: AssistantAudience;
  leadType: AssistantLeadType;
  statusConstraintApplied: boolean;
}

export interface AssistantResponse {
  reply: string;
  metadata: AssistantMetadata;
  suggestions: string[];
}

export interface ApplyResponse {
  success: boolean;
  message?: string;
  error?: string;
}

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ApplyPayload {
  name: string;
  email: string;
  mobile: string;
  position?: string;
  cover?: string;
  resumeFile?: File | null;
}

const envVars = (import.meta as { env?: { VITE_API_URL?: string; DEV?: boolean } }).env;
const configuredApiUrl = envVars?.VITE_API_URL?.trim();

export const API_BASE_URL = configuredApiUrl
  ? configuredApiUrl.replace(/\/+$/, "")
  : envVars?.DEV
    ? "http://localhost:4000"
    : "";

async function parseResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;

    if (response.status === 502) {
      message = "Backend service is unavailable right now (502). Please ensure backend is running on port 4000.";
    }

    try {
      const errorBody = (await response.json()) as { message?: string };
      if (errorBody?.message) {
        message = errorBody.message;
      }
    } catch {
      // Keep fallback message when non-JSON response is returned.
    }
    throw new Error(message);
  }

  return (await response.json()) as T;
}

export async function submitContact(payload: ContactPayload): Promise<void> {
  try {
    await parseResponse(
      await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }),
    );
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error: unable to reach backend. Please start backend on http://localhost:4000.");
    }
    throw error;
  }
}

export async function fetchJobs(): Promise<JobRole[]> {
  return parseResponse<JobRole[]>(await fetch(`${API_BASE_URL}/api/jobs`));
}

export async function fetchStatus(): Promise<NetworkStatus> {
  return parseResponse<NetworkStatus>(await fetch(`${API_BASE_URL}/api/status`));
}

export async function fetchTeam(): Promise<TeamMember[]> {
  return parseResponse<TeamMember[]>(await fetch(`${API_BASE_URL}/api/team`));
}

export async function submitApplication(payload: ApplyPayload): Promise<ApplyResponse> {
  const form = new FormData();
  form.append("name", payload.name);
  form.append("email", payload.email);
  form.append("mobile", payload.mobile);
  form.append("position", payload.position || "");
  form.append("cover", payload.cover || "");
  if (payload.resumeFile) {
    form.append("resume", payload.resumeFile);
  }

  try {
    return await parseResponse<ApplyResponse>(
      await fetch(`${API_BASE_URL}/api/apply`, {
        method: "POST",
        body: form,
      }),
    );
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error("Network error: unable to reach backend. Please start backend on http://localhost:4000.");
    }
    throw error;
  }
}

export async function askAssistant(prompt: string): Promise<AssistantResponse> {
  return parseResponse<AssistantResponse>(
    await fetch(`${API_BASE_URL}/api/assistant`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    }),
  );
}
