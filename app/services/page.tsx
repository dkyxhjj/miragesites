import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom website design, redesign, landing pages, e-commerce, and ongoing maintenance for small businesses.",
};

export default function ServicesPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_-10%,rgba(108,92,231,0.06),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <p className="anim-fade-up text-sm font-semibold uppercase tracking-widest text-primary">
            What we offer
          </p>
          <h1 className="anim-fade-up mt-5 max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Five services.<br />
            <span className="gradient-text">Zero fluff.</span>
          </h1>
          <p className="anim-fade-up mt-7 max-w-lg text-xl leading-relaxed text-text-secondary" style={{ animationDelay: "0.2s" }}>
            We kept the menu short. Every service is something we&apos;ve done hundreds of times.
          </p>
        </div>
      </section>

      {/* ━━ Service 1 — Website Design with real image ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-32 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Our bread &amp; butter
              </p>
              <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
                Website Design
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-text-secondary">
                You tell us about your business. We design a site from scratch. Not a template with your logo on it.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Completely custom layout and style",
                  "Mobile-first, always",
                  "SEO baked into the structure",
                  "Delivered in under 2 weeks",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-hover mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
              >
                Start with a design <ArrowRight size={15} />
              </Link>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-black/6">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80"
                alt="Designer working on website mockup at clean desk"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Service 2 & 3 — Redesign + Landing Pages ━━ */}
      <section className="py-32 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Redesign — 3 cols */}
            <div className="card-lift flex flex-col rounded-2xl bg-white p-10 shadow-sm shadow-black/4 lg:col-span-3">
              <p className="inline-flex w-fit rounded-full bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Fresh start
              </p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight">Website Redesign</h2>
              <p className="mt-4 flex-1 text-lg leading-relaxed text-text-secondary">
                Your site looks like 2017 and it&apos;s embarrassing to share. A redesign keeps what works — content, domain, SEO — and wraps it in something modern. Most clients see a bump in leads immediately.
              </p>
              <div className="mt-8 flex items-center gap-8 border-t border-border-subtle pt-6">
                <div>
                  <p className="text-3xl font-bold gradient-text">3x</p>
                  <p className="text-sm text-text-muted">avg. engagement lift</p>
                </div>
                <div className="h-10 w-px bg-border-subtle" />
                <div>
                  <p className="text-3xl font-bold gradient-text">10 days</p>
                  <p className="text-sm text-text-muted">typical turnaround</p>
                </div>
              </div>
            </div>

            {/* Landing Pages — 2 cols */}
            <div className="card-lift flex flex-col rounded-2xl bg-white p-10 shadow-sm shadow-black/4 lg:col-span-2">
              <p className="inline-flex w-fit rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                One page, one goal
              </p>
              <h2 className="mt-6 text-2xl font-bold tracking-tight">Landing Pages</h2>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-text-secondary">
                Running a promo? Launching something? A landing page does one thing well. We design single-page experiences that convert — usually at 2-3x the rate of a regular homepage.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary transition-colors hover:text-primary-dark"
              >
                Tell us about your campaign <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Service 4 — E-commerce with image ━━ */}
      <section className="border-y border-border-subtle bg-surface-raised py-32 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image — left */}
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-lg shadow-black/6 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=80"
                alt="Clean retail shop interior with products on display"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Text — right */}
            <div className="order-1 lg:order-2">
              <p className="inline-flex rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Sell online
              </p>
              <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
                E-commerce
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-text-secondary">
                Candles, clothes, coffee beans — we build stores that make buying easy and look beautiful doing it.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Secure checkout (Stripe, PayPal)",
                  "Product management you can handle yourself",
                  "Mobile shopping that feels smooth",
                  "Inventory and order tracking",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-hover mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
              >
                Let&apos;s build your store <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Service 5 — Maintenance ━━ */}
      <section className="py-32 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-black/4 lg:flex">
            <div className="flex-1 p-10 lg:p-14">
              <p className="inline-flex rounded-full bg-accent/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                Ongoing
              </p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight lg:text-4xl">
                Maintenance &amp; Updates
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-text-secondary">
                Websites aren&apos;t &ldquo;set and forget.&rdquo; Things break, content gets stale, Google changes the rules. We handle it.
              </p>
              <Link
                href="/contact"
                className="btn-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
              >
                Ask about plans <ArrowRight size={15} />
              </Link>
            </div>
            <div className="flex-1 border-t border-border-subtle bg-surface-raised p-10 lg:border-l lg:border-t-0 lg:p-14">
              <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-text-muted">What&apos;s included</p>
              <div className="grid gap-5 sm:grid-cols-2">
                {[
                  "Security updates & patches",
                  "Content changes on request",
                  "Performance monitoring",
                  "Monthly health reports",
                  "Priority support",
                  "Uptime monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="relative overflow-hidden border-t border-border-subtle">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(108,92,231,0.05),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-36 text-center lg:py-40">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Not sure which fits?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-xl text-text-secondary">
            Most people aren&apos;t. Tell us what you need and we&apos;ll point you the right way. Free, no strings.
          </p>
          <Link
            href="/contact"
            className="btn-hover mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
          >
            Get a free consultation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
