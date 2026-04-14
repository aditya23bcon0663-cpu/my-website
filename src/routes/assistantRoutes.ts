import { Router } from "express";
import { askAssistant } from "../controllers/assistantController";

const assistantRoutes = Router();

assistantRoutes.post("/assistant", askAssistant);

export default assistantRoutes;
