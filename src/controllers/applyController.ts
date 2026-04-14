import { Request, Response } from "express";
import { promises as fs } from "fs";
import { env } from "../config/env";
import path from "path";
import { getApplicationById, listApplications, mockSaveApplication } from "../services/applyService";
import { ApplyPayload } from "../types/apply";
import { isCloudinaryConfigured, uploadResumeToCloudinary } from "../config/cloudinary";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[(]?[0-9\s-]{7,20}$/;
const LOCAL_UPLOADS_PATH = "/api/uploads";
const APPLY_RESUME_PROXY_PATH = "/api/apply/resume";
const uploadsDir = path.resolve(__dirname, "..", "..", "uploads");

function getPublicBaseUrl(request: Request): string {
  if (env.publicBaseUrl) {
    return env.publicBaseUrl;
  }

  const forwardedProto = request.header("x-forwarded-proto")?.split(",")[0]?.trim();
  const forwardedHost = request.header("x-forwarded-host")?.split(",")[0]?.trim();
  const protocol = forwardedProto || request.protocol;
  const host = forwardedHost || request.get("host") || "localhost:4000";
  return `${protocol}://${host}`;
}

function toPublicResumeUrl(request: Request, resumePath?: string): string | undefined {
  if (!resumePath) return undefined;

  if (/^https?:\/\//i.test(resumePath)) {
    try {
      const parsed = new URL(resumePath);
      const isLocalHost = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(parsed.hostname);
      const normalizedPath = parsed.pathname.replace(/^\/uploads(?=\/|$)/i, LOCAL_UPLOADS_PATH);

      // For local-file links, return relative API path so it works on any domain/cluster.
      if (isLocalHost || /^\/api\/uploads\//i.test(normalizedPath)) {
        return `${normalizedPath}${parsed.search}${parsed.hash}`;
      }

      if (env.publicBaseUrl && /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(parsed.hostname)) {
        const publicBase = new URL(env.publicBaseUrl);
        return `${publicBase.origin}${normalizedPath}${parsed.search}${parsed.hash}`;
      }

      parsed.pathname = normalizedPath;
      return parsed.toString();
    } catch {
      return resumePath;
    }
  }

  if (resumePath.startsWith("/")) {
    return resumePath.replace(/^\/uploads(?=\/|$)/i, LOCAL_UPLOADS_PATH);
  }

  // Legacy records can contain only file names.
  return `${LOCAL_UPLOADS_PATH}/${resumePath.replace(/^\/+/, "")}`;
}

function toResumeAccessUrl(request: Request, applicationId: string, resumePath?: string): string | undefined {
  if (!resumePath) return undefined;
  if (/^https?:\/\//i.test(resumePath)) {
    try {
      const parsed = new URL(resumePath);
      const isLocalHost = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(parsed.hostname);
      if (!isLocalHost) {
        return parsed.toString();
      }
    } catch {
      return resumePath;
    }
  }

  return `${getPublicBaseUrl(request)}${APPLY_RESUME_PROXY_PATH}/${encodeURIComponent(applicationId)}`;
}

function extractLocalResumeFilename(resumePath: string): string | undefined {
  const normalized = resumePath.trim();
  if (!normalized) return undefined;

  if (/^https?:\/\//i.test(normalized)) {
    try {
      const parsed = new URL(normalized);
      const isLocalHost = /^(localhost|127\.0\.0\.1|0\.0\.0\.0)$/i.test(parsed.hostname);
      if (!isLocalHost) return undefined;
      return path.basename(parsed.pathname);
    } catch {
      return undefined;
    }
  }

  const withoutQuery = normalized.split("?")[0].split("#")[0];
  if (!withoutQuery) return undefined;
  return path.basename(withoutQuery);
}

function validateApplyPayload(payload: Partial<ApplyPayload>): string[] {
  const errors: string[] = [];

  if (!payload.name || payload.name.trim().length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  if (!payload.email || !emailRegex.test(payload.email.trim())) {
    errors.push("Email must be valid.");
  }

  if (!payload.mobile || !phoneRegex.test(payload.mobile.trim())) {
    errors.push("Mobile number must be valid and contain at least 7 digits.");
  }

  return errors;
}

export async function createApplication(request: Request, response: Response): Promise<void> {
  try {
    const payload = (request.body ?? {}) as Partial<ApplyPayload>;
    const errors = validateApplyPayload(payload);

    if (errors.length > 0) {
      response.status(400).json({
        success: false,
        error: "Validation failed",
        errors,
      });
      return;
    }

    let resumePath: string | undefined;
    if (request.file) {
      if (!isCloudinaryConfigured()) {
        await fs.unlink(request.file.path).catch(() => undefined);
        response.status(503).json({
          success: false,
          error: "Cloudinary is not configured. Resume upload is disabled until CLOUDINARY_* env vars are set.",
        });
        return;
      }

      try {
        resumePath = await uploadResumeToCloudinary(request.file.path, request.file.originalname);
        await fs.unlink(request.file.path).catch(() => undefined);
      } catch (uploadError) {
        await fs.unlink(request.file.path).catch(() => undefined);
        console.error("Cloudinary upload failed.", uploadError);
        response.status(502).json({
          success: false,
          error: "Cloudinary upload failed. Please try again.",
        });
        return;
      }
    }

    const saved = await mockSaveApplication({
      name: payload.name!.trim(),
      email: payload.email!.trim(),
      mobile: payload.mobile!.trim(),
      position: payload.position?.trim() || "",
      cover: payload.cover?.trim() || "",
      resumePath,
    });

    response.status(201).json({
      success: true,
      message: "Application submitted successfully.",
      data: {
        ...saved,
        resumePath: toResumeAccessUrl(request, saved.id, saved.resumePath),
      },
    });
  } catch (error) {
    console.error("Failed to create application:", error);
    response.status(500).json({
      success: false,
      error: "Could not submit application right now.",
    });
  }
}

export async function getSubmittedApplications(_request: Request, response: Response): Promise<void> {
  try {
    const records = await listApplications();
    const normalizedRecords = records.map((record) => ({
      ...record,
      resumePath: toResumeAccessUrl(_request, record.id, record.resumePath),
    }));
    response.status(200).json({
      total: normalizedRecords.length,
      data: normalizedRecords,
    });
  } catch (error) {
    console.error("Failed to fetch applications:", error);
    response.status(500).json({
      message: "Could not load applications right now.",
      data: [],
      total: 0,
    });
  }
}

export async function getApplicationResumeById(request: Request, response: Response): Promise<void> {
  try {
    const id = request.params.id?.trim();
    if (!id) {
      response.status(400).json({ message: "Application id is required." });
      return;
    }

    const application = await getApplicationById(id);
    if (!application || !application.resumePath) {
      response.status(404).json({ message: "Resume not found for this application." });
      return;
    }

    const normalizedResumePath = toPublicResumeUrl(request, application.resumePath) ?? application.resumePath;

    if (/^https?:\/\//i.test(normalizedResumePath)) {
      response.redirect(302, normalizedResumePath);
      return;
    }

    const filename = extractLocalResumeFilename(normalizedResumePath);
    if (!filename) {
      response.status(404).json({ message: "Resume file path is invalid." });
      return;
    }

    const safeFilename = path.basename(filename);
    const absoluteFilePath = path.join(uploadsDir, safeFilename);

    await fs.access(absoluteFilePath);
    response.setHeader("Content-Disposition", `inline; filename=\"${safeFilename}\"`);
    response.sendFile(absoluteFilePath);
  } catch (error) {
    console.error("Failed to serve application resume:", error);
    response.status(404).json({ message: "Resume could not be opened." });
  }
}
