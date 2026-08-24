"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { validateContact, type ContactPayload } from "@/lib/validation";
import { projectTypes } from "@/data/technologies";

const emptyForm: ContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  building: "",
  projectType: "",
  budget: "",
  timeline: "",
  details: "",
};

const inputClasses =
  "w-full rounded-xl border border-border bg-bg-elevated px-4 py-3 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors duration-200 focus:border-ink";

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { valid, errors: validationErrors } = validateContact(form);
    setErrors(validationErrors);
    if (!valid) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setForm(emptyForm);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-border bg-bg-elevated p-10 text-center md:p-16"
      >
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent text-2xl text-white">
          ✓
        </span>
        <h2 className="mt-6 text-2xl font-semibold tracking-tight">Enquiry sent.</h2>
        <p className="mx-auto mt-3 max-w-sm text-ink-muted">
          Thanks for telling us what you&apos;re building. We&apos;ll be in touch shortly to talk
          through the details.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4"
        >
          Send another enquiry
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name}>
          <input
            className={inputClasses}
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Company">
          <input
            className={inputClasses}
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Company name"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            className={inputClasses}
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="jane@company.com"
          />
        </Field>
        <Field label="Phone">
          <input
            className={inputClasses}
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+1 000 000 0000"
          />
        </Field>
      </div>

      <Field label="What are you building?" error={errors.building}>
        <textarea
          className={cn(inputClasses, "min-h-28 resize-y")}
          value={form.building}
          onChange={(e) => update("building", e.target.value)}
          placeholder="Tell us about the project."
        />
      </Field>

      <Field label="Project type" error={errors.projectType}>
        <div className="flex flex-wrap gap-2">
          {projectTypes.map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => update("projectType", type)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-200",
                form.projectType === type
                  ? "border-ink bg-ink text-bg"
                  : "border-border text-ink-muted hover:border-border-strong"
              )}
            >
              {type}
            </button>
          ))}
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Estimated budget">
          <input
            className={inputClasses}
            value={form.budget}
            onChange={(e) => update("budget", e.target.value)}
            placeholder="e.g. $10k – $25k"
          />
        </Field>
        <Field label="Timeline">
          <input
            className={inputClasses}
            value={form.timeline}
            onChange={(e) => update("timeline", e.target.value)}
            placeholder="e.g. 8–12 weeks"
          />
        </Field>
      </div>

      <Field label="Additional details">
        <textarea
          className={cn(inputClasses, "min-h-24 resize-y")}
          value={form.details}
          onChange={(e) => update("details", e.target.value)}
          placeholder="Anything else we should know?"
        />
      </Field>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-600"
          >
            Something went wrong. Please try again.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bg transition-colors duration-300 hover:bg-accent disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Project Enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-600">{error}</span>}
    </label>
  );
}
