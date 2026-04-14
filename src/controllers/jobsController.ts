import { Request, Response } from "express";
import { openJobs } from "../data/jobs";

export function getJobs(_request: Request, response: Response): void {
  response.status(200).json(openJobs);
}
