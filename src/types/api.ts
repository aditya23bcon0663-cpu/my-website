export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface JobRole {
  title: string;
  type: "Full-time" | "Part-time" | "Contract" | "Internship";
  techStack: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imagePath: string;
}
