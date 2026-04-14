import { Request, Response } from "express";
import { generateAssistantResponse } from "../services/assistantService";
import { AssistantRequestPayload, AssistantResponsePayload } from "../types/assistant";

export function askAssistant(request: Request, response: Response): void {
  const payload = (request.body ?? {}) as Partial<AssistantRequestPayload>;

  if (!payload.prompt || payload.prompt.trim().length < 2) {
    response.status(400).json({ message: "Prompt is required and must be at least 2 characters." });
    return;
  }

  const result: AssistantResponsePayload = generateAssistantResponse(payload.prompt);
  response.status(200).json(result);
}
