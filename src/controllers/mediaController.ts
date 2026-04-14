import { Request, Response } from "express";
import { promises as fs } from "fs";
import path from "path";
import { v2 as cloudinary } from "cloudinary";
import { env } from "../config/env";
import { isCloudinaryConfigured } from "../config/cloudinary";

export async function uploadMedia(request: Request, response: Response): Promise<void> {
  const localFilePath = request.file?.path;

  try {
    if (!request.file || !localFilePath) {
      response.status(400).json({ success: false, error: "No file uploaded. Use form-data key 'file'." });
      return;
    }

    if (!isCloudinaryConfigured()) {
      await fs.unlink(localFilePath).catch(() => undefined);
      response.status(503).json({
        success: false,
        error: "Cloudinary is not configured. Set CLOUDINARY_* variables on backend.",
      });
      return;
    }

    const uploadResult = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: `${env.cloudinary.folder}/website-media`,
      use_filename: true,
      unique_filename: true,
      filename_override: path.parse(request.file.originalname || "file").name,
    });

    await fs.unlink(localFilePath).catch(() => undefined);

    response.status(201).json({
      success: true,
      data: {
        url: uploadResult.secure_url,
        publicId: uploadResult.public_id,
        resourceType: uploadResult.resource_type,
        format: uploadResult.format,
        bytes: uploadResult.bytes,
      },
    });
  } catch (error) {
    if (localFilePath) {
      await fs.unlink(localFilePath).catch(() => undefined);
    }

    console.error("Cloudinary media upload failed:", error);
    response.status(502).json({ success: false, error: "Media upload failed." });
  }
}