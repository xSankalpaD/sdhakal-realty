"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    if (siteConfig.formspreeEndpoint) {
      try {
        setStatus("sending");

        const response = await fetch(siteConfig.formspreeEndpoint, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Form submission failed");
        }

        form.reset();
        setStatus("success");
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const goal = String(data.get("goal") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = encodeURIComponent(
      `Website inquiry from ${name || "a prospective client"}`,
    );

    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nGoal: ${goal}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  if (status === "success") {
    return (
      <div className="grid min-h-[440px] place-items-center rounded-3xl bg-white p-8 text-center shadow-2xl shadow-slate-950/10">
        <div>
          <CheckCircle2 className="mx-auto size-12 text-[#003da5]" />

          <h3 className="mt-5 text-2xl font-black text-slate-950">
            Message received
          </h3>

          <p className="mt-2 max-w-sm text-slate-600">
            Thanks for reaching out. Suresh will follow up as soon as possible.
          </p>

          <button
            type="button"
            className="mt-6 text-sm font-bold text-slate-950 underline"
            onClick={() => setStatus("idle")}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl bg-white p-6 text-slate-950 shadow-2xl shadow-slate-950/10 sm:p-8"
    >
      <div>
        <p className="text-sm font-black uppercase tracking-[0.18em] text-[#e11b22]">
          Send an inquiry
        </p>

        <h3 className="mt-2 text-3xl font-black tracking-tight">
          Get a clear next step.
        </h3>
      </div>

      {/* Formspree email subject */}
      <input
        type="hidden"
        name="_subject"
        value="New real estate inquiry from Suresh Dhakal website"
      />

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <label className="field">
          <span>Name</span>
          <input name="name" required placeholder="Your name" />
        </label>

        <label className="field">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
          />
        </label>

        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" placeholder="(647) 000-0000" />
        </label>

        <label className="field">
          <span>I&apos;m looking to</span>
          <select name="goal" defaultValue="Buy a home">
            <option>Buy a home</option>
            <option>Sell a home</option>
            <option>Get a home evaluation</option>
            <option>Invest in real estate</option>
            <option>Ask a question</option>
          </select>
        </label>
      </div>

      <label className="field mt-5">
        <span>How can Suresh help?</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us what you are looking for..."
        />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e11b22] px-6 py-4 font-black text-white transition hover:bg-[#c8101a] disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Sending..." : "Send my message"}
        <ArrowRight className="size-4" />
      </button>

      {status === "error" && (
        <p className="mt-4 text-sm font-medium text-red-600">
          Something went wrong. Please call or email directly.
        </p>
      )}

      <p className="mt-4 text-center text-xs leading-5 text-slate-500">
        No spam. Your information is only used to respond to this inquiry.
      </p>
    </form>
  );
}