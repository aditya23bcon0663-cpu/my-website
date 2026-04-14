import { Router } from "express";
import { getJobs } from "../controllers/jobsController";

const jobsRoutes = Router();

jobsRoutes.get("/jobs", getJobs);

export default jobsRoutes;
