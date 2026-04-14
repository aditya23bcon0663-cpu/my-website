import { Router } from "express";
import { createContact, getSubmittedContacts } from "../controllers/contactController";

const contactRoutes = Router();

contactRoutes.get("/contact/submissions", getSubmittedContacts);
contactRoutes.post("/contact", createContact);

export default contactRoutes;
