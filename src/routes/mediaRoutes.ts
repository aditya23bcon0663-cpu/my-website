import { Router } from "express";
import fs from "fs";
import multer from "multer";
import path from "path";
import { uploadMedia } from "../controllers/mediaController";

const mediaRoutes = Router();

const uploadsDir = path.resolve(__dirname, "..", "..", "uploads");
fs.mkdirSync(uploadsDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (_request, _file, callback) => callback(null, uploadsDir),
  filename: (_request, file, callback) => {
    const ext = path.extname(file.originalname || "") || ".bin";
    const unique = `${Date.now()}_${Math.round(Math.random() * 1e9)}${ext}`;
    callback(null, unique);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 },
});

mediaRoutes.post("/media/upload", upload.single("file"), uploadMedia);

export default mediaRoutes;