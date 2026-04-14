import { Schema, model, models } from "mongoose";

interface ApplicationDocument {
  name: string;
  email: string;
  mobile: string;
  position: string;
  cover: string;
  resumePath?: string;
  createdAt: Date;
  updatedAt: Date;
}

const applicationSchema = new Schema<ApplicationDocument>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, index: true },
    mobile: { type: String, required: true, trim: true },
    position: { type: String, default: "", trim: true },
    cover: { type: String, default: "", trim: true },
    resumePath: { type: String, required: false, trim: true },
  },
  {
    timestamps: true,
  },
);

export const ApplicationModel = models.Application || model<ApplicationDocument>("Application", applicationSchema);
