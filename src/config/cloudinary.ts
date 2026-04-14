import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { env } from "./env";

const hasCloudinaryConfig = Boolean(
  env.cloudinary.cloudName && env.cloudinary.apiKey && env.cloudinary.apiSecret,
);

if (hasCloudinaryConfig) {
  cloudinary.config({
    cloud_name: env.cloudinary.cloudName,
    api_key: env.cloudinary.apiKey,
    api_secret: env.cloudinary.apiSecret,
  });
}

export function isCloudinaryConfigured(): boolean {
  return hasCloudinaryConfig;
}

export async function uploadResumeToCloudinary(filePath: string, originalName?: string): Promise<string> {
  const uploadResult = await cloudinary.uploader.upload(filePath, {
    resource_type: "raw",
    folder: env.cloudinary.folder,
    use_filename: true,
    unique_filename: true,
    filename_override: originalName ? path.parse(originalName).name : undefined,
  });

  return uploadResult.secure_url;
}
