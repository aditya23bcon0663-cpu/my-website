import mongoose from "mongoose";
import { env } from "./env";

export async function connectToDatabase(): Promise<boolean> {
  if (!env.mongoUri) {
    console.warn("[db] MONGO_URI is not set. Falling back to in-memory storage.");
    return false;
  }

  try {
    await mongoose.connect(env.mongoUri, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("[db] Connected to MongoDB");
    return true;
  } catch (error) {
    console.error("[db] MongoDB connection failed. Falling back to in-memory storage.", error);
    return false;
  }
}

export function isDatabaseConnected(): boolean {
  return mongoose.connection.readyState === 1;
}
