import { ContactPayload } from "../types/api";
import { isDatabaseConnected } from "../config/database";
import { ContactModel } from "../models/contactModel";

interface StoredContact extends ContactPayload {
  id: string;
  createdAt: string;
}

const submittedContacts: StoredContact[] = [];

function toStoredContact(payload: ContactPayload): StoredContact {
  return {
    id: `contact_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...payload,
  };
}

export async function mockSaveContact(payload: ContactPayload): Promise<StoredContact> {
  if (isDatabaseConnected()) {
    try {
      const saved = await ContactModel.create(payload);
      return {
        id: saved._id.toString(),
        createdAt: saved.createdAt.toISOString(),
        name: saved.name,
        email: saved.email,
        phone: saved.phone,
        message: saved.message,
      };
    } catch (error) {
      console.error("[db] Failed to save contact in MongoDB. Falling back to memory.", error);
    }
  }

  const record = toStoredContact(payload);

  // Mock persistence layer: in a real app, this is where DB writes happen.
  submittedContacts.push(record);

  // Mock outbound notification layer.
  console.log(`[mock-email] New contact from ${payload.email}`);

  return record;
}

export async function listSubmittedContacts(): Promise<StoredContact[]> {
  if (isDatabaseConnected()) {
    try {
      const records = await ContactModel.find().sort({ createdAt: -1 }).lean();
      return records.map((record) => ({
        id: String(record._id),
        createdAt: record.createdAt.toISOString(),
        name: record.name,
        email: record.email,
        phone: record.phone,
        message: record.message,
      }));
    } catch (error) {
      console.error("[db] Failed to list contacts from MongoDB. Falling back to memory.", error);
    }
  }

  return submittedContacts;
}
