import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AccordionFaq from "../components/AccordionFaq";
import CostComparison from "../components/CostComparison";

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

      

      {/* ━━ Pricing — flat rate ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Single price card */}
          <div className="mx-auto max-w-2xl">
            <div className="relative rounded-3xl border-2 border-primary/30 bg-white p-12 text-center shadow-xl shadow-primary/8">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-xs font-semibold text-white shadow-lg shadow-primary/20">
                Simple pricing
              </div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">Every service</p>
              <div className="mt-6">
                <span className="text-6xl font-extrabold tracking-tight text-text-primary">$299</span>
                <span className="ml-2 text-lg text-text-muted">one-time</span>
              </div>
              <p className="mt-4 text-lg text-text-secondary">
                One flat price per service. No tiers, no upsells.
              </p>
              <Link
                href="/contact"
                className="btn-hover mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
              >
                Get started <ArrowRight size={15} />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ━━ Cost comparison ━━ */}
      <section className="border-t border-border-subtle py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Why pay monthly forever?</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
              The real cost of &ldquo;cheap&rdquo; website builders
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              Monthly fees add up fast. See what you&apos;d actually spend.
            </p>
          </div>
          <CostComparison />
        </div>
      </section>

      {/* ━━ FAQ ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">Common questions</h2>
          </div>
          <AccordionFaq />
        </div>
      </section>

    </>
  );
}
