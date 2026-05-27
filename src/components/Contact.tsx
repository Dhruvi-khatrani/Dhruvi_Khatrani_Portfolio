"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { Icon } from "./Icon";
import { useTheme } from "./ThemeProvider";

type ContactFormValues = {
  firstName: string;
  email: string;
  message: string;
};

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const { theme } = useTheme();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: { firstName: "", email: "", message: "" },
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error("Contact form is not configured.");

      const payload = {
        access_key: accessKey,
        name: values.firstName,
        email: values.email,
        message: values.message,
        subject: `New portfolio inquiry from ${values.firstName}`,
        from_name: "Dhruvi Khatrani Portfolio",
        botcheck: "",
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { success: boolean; message?: string };

      if (!data.success) {
        throw new Error(data.message ?? "Failed to send message.");
      }

      toast.success("Message sent! I'll get back to you soon.");
      reset();
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-[var(--spacing-container-max)] px-[var(--spacing-margin-mobile)] py-[var(--spacing-section-gap)] md:px-[var(--spacing-margin-desktop)]"
    >
      <Toaster
        richColors
        closeButton
        theme={theme}
        position="top-right"
        toastOptions={{
          className: "border border-outline-variant/30 bg-surface-container text-on-surface",
        }}
      />

      {/* Section header */}
      <div className="mb-16 text-center">
        <div className="contact-label mb-4 inline-block rounded-full border border-primary/30 px-4 py-1.5 font-mono text-[length:var(--text-label-mono)] tracking-[0.2em] text-primary uppercase">
          Get In Touch
        </div>
        <h2 className="contact-heading mb-4 text-[length:var(--text-headline-lg)] leading-[var(--text-headline-lg--line-height)] font-bold tracking-[var(--text-headline-lg--letter-spacing)]">
          Let&apos;s Build Something{" "}
          <span className="gradient-text-animated">Extraordinary</span>
        </h2>
        <p className="mx-auto max-w-xl text-[length:var(--text-body-lg)] leading-[var(--text-body-lg--line-height)] text-on-surface-variant">
          Ready to transform your vision into a high-performance reality? Reach out for
          collaborations or project inquiries.
        </p>
      </div>

      <div
        id="contact-card"
        className="glass-card glass-card-shine relative overflow-hidden rounded-[40px] p-8 md:p-16"
      >
        {/* Decorative blobs */}
        <div className="blob pointer-events-none absolute top-0 right-0 h-72 w-72 rounded-full bg-primary/10" />
        <div className="blob pointer-events-none absolute bottom-0 left-0 h-48 w-48 rounded-full bg-secondary/8" />

        <div className="relative grid items-start gap-12 md:grid-cols-2 md:gap-16">
          {/* Left — info */}
          <div className="contact-info">
            <h3 className="mb-3 text-2xl font-bold text-on-surface">
              Direct Contact
            </h3>
            <p className="mb-8 text-on-surface-variant">
              Prefer email? Reach me directly — I typically respond within 24 hours.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:dhruvikhatraniup@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4 transition-all hover:border-primary/40 hover:bg-surface-container"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/15 transition-colors group-hover:bg-primary">
                  <Icon name="mail" className="text-primary group-hover:text-black" />
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-0.5">
                    Email
                  </div>
                  <span className="font-semibold text-on-surface break-all">
                    dhruvikhatraniup@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-secondary/15">
                  <Icon name="schedule" className="text-secondary" />
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-0.5">
                    Response Time
                  </div>
                  <span className="font-semibold text-on-surface">Within 24 hours</span>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-low p-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-tertiary/15">
                  <Icon name="work" className="text-tertiary" />
                </div>
                <div>
                  <div className="font-mono text-xs tracking-widest text-on-surface-variant uppercase mb-0.5">
                    Availability
                  </div>
                  <span className="font-semibold text-on-surface">Open to opportunities</span>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="mb-4 font-mono text-xs tracking-widest text-on-surface-variant uppercase">
                Find me on
              </p>
              <div className="flex gap-3">
                {(
                  [
                    { label: "LinkedIn", icon: "business_center", href: "#" },
                    { label: "GitHub", icon: "code", href: "#" },
                    { label: "Twitter / X", icon: "alternate_email", href: "#" },
                  ] as const
                ).map(({ label, icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="glass-card flex h-12 w-12 items-center justify-center rounded-full transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                  >
                    <Icon name={icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <form
            ref={formRef}
            className="contact-form space-y-5"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            {/* Honeypot — hidden from humans, catches bots */}
            <input type="checkbox" name="botcheck" className="hidden" aria-hidden="true" />

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="contact-first-name"
                  className="px-1 font-mono text-[length:var(--text-label-mono)] tracking-[var(--text-label-mono--letter-spacing)] text-on-surface-variant"
                >
                  NAME <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-first-name"
                  type="text"
                  placeholder="Your Name"
                  aria-invalid={errors.firstName ? "true" : "false"}
                  className="contact-input w-full rounded-xl border border-outline-variant/30 bg-surface-container-low px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 transition-all focus:border-primary focus:bg-surface-container focus:ring-0 focus:outline-none disabled:opacity-60"
                  {...register("firstName", {
                    required: "Name is required",
                    minLength: { value: 2, message: "At least 2 characters" },
                    maxLength: { value: 80, message: "Max 80 characters" },
                  })}
                />
                {errors.firstName && (
                  <p className="flex items-center gap-1 px-1 text-sm text-error">
                    <Icon name="error" className="text-sm" /> {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="px-1 font-mono text-[length:var(--text-label-mono)] tracking-[var(--text-label-mono--letter-spacing)] text-on-surface-variant"
                >
                  EMAIL <span className="text-primary">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="email@example.com"
                  aria-invalid={errors.email ? "true" : "false"}
                  className="contact-input w-full rounded-xl border border-outline-variant/30 bg-surface-container-low px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 transition-all focus:border-primary focus:bg-surface-container focus:ring-0 focus:outline-none disabled:opacity-60"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="flex items-center gap-1 px-1 text-sm text-error">
                    <Icon name="error" className="text-sm" /> {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="px-1 font-mono text-[length:var(--text-label-mono)] tracking-[var(--text-label-mono--letter-spacing)] text-on-surface-variant"
              >
                MESSAGE <span className="text-primary">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={6}
                placeholder="Tell me about your project, idea, or just say hello..."
                aria-invalid={errors.message ? "true" : "false"}
                className="contact-input w-full resize-none rounded-xl border border-outline-variant/30 bg-surface-container-low px-4 py-3.5 text-on-surface placeholder:text-on-surface-variant/50 transition-all focus:border-primary focus:bg-surface-container focus:ring-0 focus:outline-none disabled:opacity-60"
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "At least 10 characters" },
                  maxLength: { value: 5000, message: "Message is too long" },
                })}
              />
              {errors.message && (
                <p className="flex items-center gap-1 px-1 text-sm text-error">
                  <Icon name="error" className="text-sm" /> {errors.message.message}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <button
                type="submit"
                disabled={isSubmitting}
                className="magnetic-effect glow-button flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary py-4 font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-on-primary/30 border-t-on-primary" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Icon name="send" className="text-base" />
                    Send Message
                  </>
                )}
              </button>
              <a
                href="mailto:dhruvikhatraniup@gmail.com"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-outline-variant/30 bg-surface-container-low py-4 font-bold text-on-surface transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon name="mail" className="text-base" />
                Open Email
              </a>
            </div>

            <p className="text-center font-mono text-xs text-on-surface-variant/50">
              Your message is sent securely via Web3Forms
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
