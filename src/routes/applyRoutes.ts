import { Router } from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import { createApplication, getApplicationResumeById, getSubmittedApplications } from "../controllers/applyController";

const applyRoutes = Router();

const uploadsDir = path.resolve(__dirname, "..", "..", "uploads");
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_request, _file, callback) => {
    callback(null, uploadsDir);
  },
  filename: (_request, file, callback) => {
    const ext = path.extname(file.originalname || "");
    const safeExt = ext || ".bin";
    const unique = `${Date.now()}_${Math.round(Math.random() * 1e9)}${safeExt}`;
    callback(null, unique);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
});

applyRoutes.get("/apply/submissions", getSubmittedApplications);
applyRoutes.get("/apply/resume/:id", getApplicationResumeById);
applyRoutes.post("/apply", upload.single("resume"), createApplication);

export default applyRoutes;
