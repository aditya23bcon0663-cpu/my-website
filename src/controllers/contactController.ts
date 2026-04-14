import { Request, Response } from "express";
import { listSubmittedContacts, mockSaveContact } from "../services/contactService";
import { ContactPayload } from "../types/api";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[(]?[0-9\s-]{7,20}$/;

function validateContactPayload(payload: Partial<ContactPayload>): string[] {
  const errors: string[] = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.push("Email must be valid.");
  }

  if (!payload.phone || !phoneRegex.test(payload.phone.trim())) {
    errors.push("Phone must be valid and contain at least 7 digits.");
  }

  if (!payload.message || payload.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters.");
  }

  return errors;
}

export async function createContact(request: Request, response: Response): Promise<void> {
  try {
    const payload = (request.body ?? {}) as Partial<ContactPayload>;
    const validationErrors = validateContactPayload(payload);

    if (validationErrors.length > 0) {
      response.status(400).json({
        message: "Validation failed",
        errors: validationErrors,
      });
      return;
    }

    const saved = await mockSaveContact({
      name: payload.name!.trim(),
      email: payload.email!.trim(),
      phone: payload.phone!.trim(),
      message: payload.message!.trim(),
    });

    response.status(201).json({
      message: "Contact message received successfully.",
      data: saved,
    });
  } catch (error) {
    console.error("Failed to create contact:", error);
    response.status(500).json({
      message: "Could not submit contact message right now.",
    });
  }
}

export async function getSubmittedContacts(_request: Request, response: Response): Promise<void> {
  try {
    const records = await listSubmittedContacts();
    response.status(200).json({
      total: records.length,
      data: records,
    });
  } catch (error) {
    console.error("Failed to fetch contacts:", error);
    response.status(500).json({
      message: "Could not load contacts right now.",
      data: [],
      total: 0,
    });
  }
}
