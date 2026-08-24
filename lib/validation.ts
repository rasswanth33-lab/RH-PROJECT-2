export interface ContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  building: string;
  projectType: string;
  budget: string;
  timeline: string;
  details: string;
}

export interface ValidationResult {
  valid: boolean;
  errors: Partial<Record<keyof ContactPayload, string>>;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(payload: ContactPayload): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!payload.name?.trim()) errors.name = "Name is required.";
  if (!payload.email?.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_RE.test(payload.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!payload.building?.trim()) {
    errors.building = "Tell us what you're building.";
  }
  if (!payload.projectType?.trim()) {
    errors.projectType = "Select a project type.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
