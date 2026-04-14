export interface AssistantRequestPayload {
  prompt: string;
}

export type AssistantAudience = "developer" | "business" | "candidate" | "general";

export type AssistantLeadType = "pricing_or_project" | "recruitment" | "none";

export interface AssistantMetadata {
  audience: AssistantAudience;
  leadType: AssistantLeadType;
  statusConstraintApplied: boolean;
}

export interface AssistantResponsePayload {
  reply: string;
  metadata: AssistantMetadata;
  suggestions: string[];
}
