"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xnjoqpbj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const json = await res.json();
        setError(json?.errors?.[0]?.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border-subtle bg-surface-raised px-4 py-3.5 text-[15px] text-text-primary placeholder-text-muted outline-none transition-all focus:border-primary/40 focus:shadow-[0_0_0_3px_rgba(108,92,231,0.08)]";

  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_70%_-10%,rgba(108,92,231,0.06),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-36 lg:px-8">
          <p className="anim-fade-up text-sm font-semibold uppercase tracking-widest text-primary">
            Start a project
          </p>
          <h1
            className="anim-fade-up mt-5 max-w-2xl text-5xl font-extrabold tracking-tight sm:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Tell us about<br />your business.
          </h1>
          <p
            className="anim-fade-up mt-7 max-w-lg text-xl leading-relaxed text-text-secondary"
            style={{ animationDelay: "0.2s" }}
          >
            Fill out the form, shoot us an email, or request a free mockup. We respond within a day — usually much faster.
          </p>
        </div>
      </section>

      {/* ━━ Form + sidebar ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            {/* Form — 7 cols */}
            <div className="lg:col-span-7">
              {submitted ? (
                <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-16 text-center shadow-sm shadow-black/4">
                  <div className="mb-6 inline-flex rounded-full bg-primary/8 p-5 text-primary">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">
                    Got it — we&apos;ll be in touch soon.
                  </h3>
                  <p className="mb-8 max-w-md text-lg text-text-secondary">
                    We usually respond within a few hours during business days.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-hover rounded-full bg-primary px-6 py-3 text-[15px] font-semibold text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="rounded-2xl bg-white p-8 shadow-sm shadow-black/4 sm:p-10 lg:p-12"
                >
                  <h2 className="mb-1 text-2xl font-bold">
                    What are you looking for?
                  </h2>
                  <p className="mb-8 text-[15px] text-text-muted">
                    A few sentences is plenty. Don&apos;t overthink it.
                  </p>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-1.5 block text-[15px] font-medium text-text-secondary"
                      >
                        Your name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Sarah Chen"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-1.5 block text-[15px] font-medium text-text-secondary"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="sarah@peakfitness.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-[15px] font-medium text-text-secondary"
                    >
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="(555) 123-4567"
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="business"
                      className="mb-1.5 block text-[15px] font-medium text-text-secondary"
                    >
                      Business name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      placeholder="Peak Performance Fitness"
                      className={inputClass}
                    />
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="service"
                      className="mb-1.5 block text-[15px] font-medium text-text-secondary"
                    >
                      What do you need?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={inputClass}
                    >
                      <option value="">Pick whichever fits best</option>
                      <option value="design">New website from scratch</option>
                      <option value="redesign">Redesign my existing site</option>
                      <option value="landing">Landing page</option>
                      <option value="ecommerce">Online store</option>
                      <option value="maintenance">Ongoing maintenance</option>
                      <option value="mockup">Just a free mockup for now</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>

                  <div className="mt-5">
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-[15px] font-medium text-text-secondary"
                    >
                      Tell us a bit more
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="What does your business do? What's working (or not working) with your current site?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {error && (
                    <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-600">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-hover mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : <>Send it over <ArrowRight size={15} /></>}
                  </button>
                  <p className="mt-4 text-center text-sm text-text-muted">
                    No spam, no mailing list. Just a reply from a real person.
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar — 5 cols */}
            <div className="space-y-6 lg:col-span-5 lg:pt-4">
              <div className="rounded-2xl bg-white p-8 shadow-sm shadow-black/4">
                <div className="mb-4 inline-flex rounded-xl bg-primary/8 p-2.5 text-primary">
                  <Mail size={18} />
                </div>
                <h3 className="mb-2 text-lg font-bold">Prefer email?</h3>
                <p className="text-[15px] text-text-secondary">
                  Drop us a line at{" "}
                  <a
                    href="mailto:richardli1@g.ucla.edu"
                    className="font-medium text-primary hover:underline"
                  >
                    richardli1@g.ucla.edu
                  </a>
                </p>
                <p className="mt-3 text-sm text-text-muted">
                  Los Angeles, CA — serving clients everywhere
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm shadow-black/4">
                <div className="mb-4 inline-flex rounded-xl bg-primary/8 p-2.5 text-primary">
                  <Sparkles size={18} />
                </div>
                <h3 className="mb-2 text-lg font-bold">Free mockup offer</h3>
                <p className="text-[15px] leading-relaxed text-text-secondary">
                  Not ready to commit? Select &ldquo;Just a free mockup&rdquo;
                  and we&apos;ll design a sample homepage. No payment, no obligation.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm shadow-black/4">
                <div className="mb-4 inline-flex rounded-xl bg-accent/8 p-2.5 text-accent">
                  <Clock size={18} />
                </div>
                <h3 className="mb-2 text-lg font-bold">Response time</h3>
                <p className="text-[15px] leading-relaxed text-text-secondary">
                  Within 24 hours, usually a few hours on weekdays. You&apos;ll hear from a real person.
                </p>
              </div>

              
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Bottom band ━━ */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <p className="text-lg text-text-secondary">
            Not sure what you need yet?{" "}
            <Link
              href="/services"
              className="font-semibold text-primary hover:underline"
            >
              Browse services
            </Link>{" "}
            or{" "}
            <Link
              href="/pricing"
              className="font-semibold text-primary hover:underline"
            >
              check pricing
            </Link>{" "}
            first.
          </p>
        </div>
      </section>
    </>
  );
}
