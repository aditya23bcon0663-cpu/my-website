import { Request, Response } from "express";
import { teamMembers } from "../data/team";

export function getTeam(_request: Request, response: Response): void {
  response.status(200).json(teamMembers);
}
