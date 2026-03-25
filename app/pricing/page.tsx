import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Straightforward pricing for custom small business websites. One-time fee, no subscriptions, no surprises.",
};

export default function PricingPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-10%,rgba(108,92,231,0.06),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="anim-fade-up text-sm font-semibold uppercase tracking-widest text-primary">
              Pricing
            </p>
            <h1 className="anim-fade-up mt-5 text-5xl font-extrabold tracking-tight sm:text-6xl" style={{ animationDelay: "0.1s" }}>
              One price. No fees.<br />
              <span className="gradient-text">No gotchas.</span>
            </h1>
            <p className="anim-fade-up mt-7 text-xl leading-relaxed text-text-secondary" style={{ animationDelay: "0.2s" }}>
              You pay once, you own your site forever. Simple.
            </p>
          </div>
        </div>
      </section>

      {/* ━━ Pricing tiers ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">

            {/* ── Starter ── */}
            <div className="card-lift flex flex-col rounded-2xl bg-white p-10 shadow-sm shadow-black/4">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Starter</p>
                <h2 className="mt-3 text-xl font-bold">The basics, done right</h2>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold tracking-tight text-text-primary">$499</span>
                <span className="ml-2 text-[15px] text-text-muted">one-time</span>
              </div>
              <div className="mb-8 flex-1 space-y-3.5">
                {[
                  "Up to 5 pages",
                  "Clean, mobile-responsive design",
                  "Basic SEO setup",
                  "Contact form",
                  "Social media links",
                  "1 round of revisions",
                  "Delivered in ~2 days",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted/40" />
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-hover block rounded-full border border-border-strong py-3.5 text-center text-[15px] font-semibold text-text-primary hover:border-primary/30"
              >
                Get started
              </Link>
            </div>

            {/* ── Growth (highlighted) ── */}
            <div className="relative flex flex-col rounded-2xl border-2 border-primary/30 bg-white p-10 shadow-xl shadow-primary/8 lg:-my-4">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary/20">
                Most popular
              </div>
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">Growth</p>
                <h2 className="mt-3 text-xl font-bold">Look and perform like the big guys</h2>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold tracking-tight text-text-primary">$999</span>
                <span className="ml-2 text-[15px] text-text-muted">one-time</span>
              </div>
              <div className="mb-8 flex-1 space-y-3.5">
                {[
                  "Up to 10 pages",
                  "Fully custom design & branding",
                  "Advanced SEO optimization",
                  "Blog or news section",
                  "Google Analytics setup",
                  "Lead capture forms",
                  "3 rounds of revisions",
                  "Delivered in ~4 days",
                  "30 days of free support",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-hover block rounded-full bg-primary py-3.5 text-center text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
              >
                Let&apos;s build it <ArrowRight size={14} className="ml-1 inline" />
              </Link>
            </div>

            {/* ── Premium ── */}
            <div className="card-lift flex flex-col rounded-2xl bg-white p-10 shadow-sm shadow-black/4">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Premium</p>
                <h2 className="mt-3 text-xl font-bold">When &ldquo;good enough&rdquo; isn&apos;t</h2>
              </div>
              <div className="mb-8">
                <span className="text-5xl font-extrabold tracking-tight text-text-primary">$1,999</span>
                <span className="ml-2 text-[15px] text-text-muted">one-time</span>
              </div>
              <div className="mb-8 flex-1 space-y-3.5">
                {[
                  "Unlimited pages",
                  "Completely bespoke design",
                  "E-commerce / online store",
                  "Custom animations & interactions",
                  "CMS so you can edit content",
                  "Performance optimization",
                  "Priority SEO strategy",
                  "Unlimited revisions",
                  "Delivered in ~1 week",
                  "90 days free support",
                  "Monthly maintenance included",
                ].map((f) => (
                  <div key={f} className="flex items-start gap-3 text-[15px] text-text-secondary">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-text-muted/40" />
                    {f}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-hover block rounded-full border border-border-strong py-3.5 text-center text-[15px] font-semibold text-text-primary hover:border-primary/30"
              >
                Go premium
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ FAQ ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">Common questions</h2>
          </div>

          <div className="mt-14 space-y-8">
            {[
              {
                q: "What if I don't like the design?",
                a: "We offer a free homepage mockup before you pay anything. If the direction isn't right, we revise it. Every plan includes revision rounds, and the Growth plan includes 3 rounds. We don't stop until you're happy.",
              },
              {
                q: "Do I actually own the website?",
                a: "Yes — 100%. The code, the design, the domain, all of it. There's no lock-in, no proprietary platform. You can host it anywhere and hire anyone to maintain it.",
              },
              {
                q: "What about hosting?",
                a: "We'll help you set up hosting. Most of our sites run on Vercel or Netlify, which are free for small sites. If you need something more robust, we'll recommend the best option for your traffic level.",
              },
              {
                q: "Can I update the site myself?",
                a: "Depends on the plan. The Growth and Premium tiers include a CMS (content management system) so you can update text, images, and blog posts yourself without touching code.",
              },
              {
                q: "How fast is the turnaround?",
                a: "Starter sites ship in about 2 days. Growth sites in about 4 days. Premium in about a week. These are working days — we move fast because we've done this many times.",
              },
              {
                q: "Are there any monthly fees?",
                a: "Not from us. You pay once and that's it. The only ongoing cost is hosting (often free) and your domain name (~$12/year). No subscriptions, no surprise invoices.",
              },
              {
                q: "What if I need changes after launch?",
                a: "Every plan includes a support window (30 days for Growth, 90 days for Premium). After that, we offer affordable maintenance plans or you can make one-off requests.",
              },
            ].map((faq) => (
              <div key={faq.q} className="border-b border-border-subtle pb-8">
                <h3 className="text-lg font-bold">{faq.q}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
