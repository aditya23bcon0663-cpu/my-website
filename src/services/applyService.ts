import { ApplyPayload, StoredApplication } from "../types/apply";
import { isDatabaseConnected } from "../config/database";
import { ApplicationModel } from "../models/applicationModel";

const applications: StoredApplication[] = [];

function toStoredApplication(payload: ApplyPayload): StoredApplication {
  return {
    id: `application_${Date.now()}`,
    createdAt: new Date().toISOString(),
    ...payload,
  };
}

export async function mockSaveApplication(payload: ApplyPayload): Promise<StoredApplication> {
  if (isDatabaseConnected()) {
    try {
      const saved = await ApplicationModel.create(payload);
      return {
        id: saved._id.toString(),
        createdAt: saved.createdAt.toISOString(),
        name: saved.name,
        email: saved.email,
        mobile: saved.mobile,
        position: saved.position,
        cover: saved.cover,
        resumePath: saved.resumePath,
      };
    } catch (error) {
      console.error("[db] Failed to save application in MongoDB. Falling back to memory.", error);
    }
  }

  const record = toStoredApplication(payload);

  applications.push(record);
  console.log(`[mock-apply] New application from ${payload.email}`);

  return record;
}

export async function listApplications(): Promise<StoredApplication[]> {
  if (isDatabaseConnected()) {
    try {
      const records = await ApplicationModel.find().sort({ createdAt: -1 }).lean();
      return records.map((record) => ({
        id: String(record._id),
        createdAt: record.createdAt.toISOString(),
        name: record.name,
        email: record.email,
        mobile: record.mobile,
        position: record.position,
        cover: record.cover,
        resumePath: record.resumePath,
      }));
    } catch (error) {
      console.error("[db] Failed to list applications from MongoDB. Falling back to memory.", error);
    }
  }

  return applications;
}

export async function getApplicationById(id: string): Promise<StoredApplication | null> {
  if (isDatabaseConnected()) {
    try {
      const record = (await ApplicationModel.findOne({ _id: id }).lean()) as
        | {
            _id: unknown;
            createdAt: Date;
            name: string;
            email: string;
            mobile: string;
            position: string;
            cover: string;
            resumePath?: string;
          }
        | null;
      if (!record) return null;

      return {
        id: String(record._id),
        createdAt: record.createdAt.toISOString(),
        name: record.name,
        email: record.email,
        mobile: record.mobile,
        position: record.position,
        cover: record.cover,
        resumePath: record.resumePath,
      };
    } catch (error) {
      console.error("[db] Failed to fetch application by id from MongoDB. Falling back to memory.", error);
    }
  }

  return applications.find((record) => record.id === id) ?? null;
}
