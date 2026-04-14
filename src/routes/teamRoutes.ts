import { Router } from "express";
import { getTeam } from "../controllers/teamController";

const teamRoutes = Router();

teamRoutes.get("/team", getTeam);

export default teamRoutes;
