import { Router } from "express";
import { getStatus } from "../controllers/statusController";

const statusRoutes = Router();

statusRoutes.get("/status", getStatus);

export default statusRoutes;
