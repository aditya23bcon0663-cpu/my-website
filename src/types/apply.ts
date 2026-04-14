export interface ApplyPayload {
  name: string;
  email: string;
  mobile: string;
  position?: string;
  cover?: string;
  resumePath?: string;
}

export interface StoredApplication extends ApplyPayload {
  id: string;
  createdAt: string;
}
