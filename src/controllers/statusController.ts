import { Request, Response } from "express";
import { networkStatus } from "../data/status";

export function getStatus(_request: Request, response: Response): void {
  response.status(200).json({
    ...networkStatus,
    checkedAt: new Date().toISOString(),
  });
}
