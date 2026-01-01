"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/button";
import { cn } from "@/lib/utils";

type FormState = "idle" | "submitting" | "success" | "error";

type Errors = {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
};

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerMessage(null);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const projectType = String(formData.get("projectType") || "").trim();
    const budget = String(formData.get("budget") || "").trim();
    const message = String(formData.get("message") || "").trim();

    // Honeypot (muss leer bleiben)
    const website = String(formData.get("website") || "").trim();

    const newErrors: Errors = {};
    if (!name) newErrors.name = "Bitte gib deinen Namen an.";
    if (!email || !email.includes("@")) {
      newErrors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
    }
    if (!projectType) {
      newErrors.projectType = "Bitte wähle einen Projekttyp aus.";
    }
    if (!message || message.length < 20) {
      newErrors.message =
        "Bitte beschreibe dein Projekt kurz mit mindestens ein paar Sätzen.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          projectType,
          budget,
          message,
          website, // <-- Honeypot mitsenden
        }),
      });

      const payload = await response.json();

      if (!response.ok) {
        setState("error");
        setServerMessage(
          payload?.message ||
            "Etwas ist schiefgelaufen. Bitte versuche es später erneut."
        );
        return;
      }

      setState("success");
      setServerMessage(
        "Danke für deine Anfrage. Wir melden uns in der Regel innerhalb von 24–48 Stunden."
      );
      event.currentTarget.reset();
    } catch {
      setState("error");
      setServerMessage(
        "Es konnte keine Verbindung zum Server hergestellt werden. Bitte versuche es später erneut."
      );
    } finally {
      setTimeout(() => {
        setState("idle");
      }, 4000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      aria-describedby={serverMessage ? "form-status-message" : undefined}
    >
      {/* Honeypot: unsichtbares Feld – echte Nutzer füllen das nicht aus */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="block text-xs font-medium text-slate-200"
          >
            Name
            <span className="text-rose-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={cn("input-base mt-1", errors.name && "border-rose-500/70")}
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1 text-xs text-rose-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-xs font-medium text-slate-200"
          >
            E-Mail
            <span className="text-rose-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className={cn(
              "input-base mt-1",
              errors.email && "border-rose-500/70"
            )}
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-xs text-rose-300">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-medium text-slate-200"
          >
            Unternehmen oder Organisation
            <span className="text-slate-500"> (optional)</span>
          </label>
          <input id="company" name="company" type="text" className="input-base mt-1" />
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="block text-xs font-medium text-slate-200"
          >
            Art des Projekts
            <span className="text-rose-400">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            className={cn(
              "input-base mt-1",
              errors.projectType && "border-rose-500/70"
            )}
            aria-invalid={errors.projectType ? "true" : "false"}
            aria-describedby={errors.projectType ? "projectType-error" : undefined}
            defaultValue=""
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            <option value="landingpage">Landingpage oder One Pager</option>
            <option value="webapp">Web App / Tool / MVP</option>
            <option value="relaunch">Relaunch oder Optimierung bestehender Website</option>
            <option value="unsicher">Ich bin mir noch nicht sicher</option>
          </select>
          {errors.projectType && (
            <p id="projectType-error" className="mt-1 text-xs text-rose-300">
              {errors.projectType}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="budget"
          className="block text-xs font-medium text-slate-200"
        >
          Grober Budgetrahmen
          <span className="text-slate-500"> (optional)</span>
        </label>
        <select id="budget" name="budget" className="input-base mt-1" defaultValue="">
          <option value="" disabled>
            Bitte auswählen
          </option>
          <option value="bis-1000">Bis ca. 1.000 EUR</option>
          <option value="1000-3000">Ca. 1.000–3.000 EUR</option>
          <option value="3000-6000">Ca. 3.000–6.000 EUR</option>
          <option value="offen">Hängt vom Vorschlag ab</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-xs font-medium text-slate-200"
        >
          Kurzbeschreibung des Projekts
          <span className="text-rose-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={cn(
            "input-base mt-1 resize-none align-top",
            errors.message && "border-rose-500/70"
          )}
          aria-invalid={errors.message ? "true" : "false"}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Was möchtest du umsetzen? Gibt es bereits eine Website, ein Logo oder bestehende Inhalte?"
        />
        {errors.message && (
          <p id="message-error" className="mt-1 text-xs text-rose-300">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="primary" className="min-w-[180px]">
          {state === "submitting" ? "Wird gesendet …" : "Anfrage senden"}
        </Button>

        <p className="text-xs text-slate-400 sm:text-sm">
          In der Regel erhältst du innerhalb von 24–48 Stunden eine Antwort. Falls es
          besonders dringend ist, erwähne das bitte in der Nachricht.
        </p>
      </div>

      {serverMessage && (
        <p
          id="form-status-message"
          className={cn(
            "mt-2 text-xs sm:text-sm",
            state === "success" ? "text-emerald-300" : "text-rose-300"
          )}
        >
          {serverMessage}
        </p>
      )}
    </form>
  );
}
