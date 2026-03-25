import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Sample designs for small businesses — cafes, gyms, landscapers, boutiques, and more. Request a free custom mockup.",
};

export default function PortfolioPage() {
  return (
    <>
      {/* ━━ Hero ━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_-10%,rgba(108,92,231,0.06),transparent)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <p className="anim-fade-up text-sm font-semibold uppercase tracking-widest text-primary">
            Sample designs
          </p>
          <h1 className="anim-fade-up mt-5 max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            What your site<br />
            <span className="gradient-text">could look like.</span>
          </h1>
          <p className="anim-fade-up mt-7 max-w-lg text-xl leading-relaxed text-text-secondary" style={{ animationDelay: "0.2s" }}>
            These are the types of sites we design — tailored to each industry. Want to see one built for your business? Request a free mockup.
          </p>
        </div>
      </section>

      {/* ━━ Process strip ━━ */}
      <section className="border-y border-border-subtle bg-surface-raised py-10">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            {[
              { num: "1", text: "Tell us about your business" },
              { num: "2", text: "We design a free mockup" },
              { num: "3", text: "You decide — no obligation" },
            ].map((step, i) => (
              <div key={step.num} className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                    {step.num}
                  </span>
                  <span className="text-[15px] font-medium text-text-primary">{step.text}</span>
                </div>
                {i < 2 && (
                  <ArrowRight size={14} className="hidden shrink-0 text-text-muted/40 sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Browser frame mockup ━━ */}
      <section className="py-28 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Free mockup preview</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
              This is what you&apos;d get — for free.
            </h2>
            <p className="mt-4 text-lg text-text-secondary">
              A full homepage design, customized for your business. Yours to review before you pay anything.
            </p>
          </div>

          {/* Browser chrome frame */}
          <div className="overflow-hidden rounded-2xl border border-border-subtle bg-white shadow-xl shadow-black/8">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-border-subtle bg-surface-raised px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-400/60" />
                <span className="h-3 w-3 rounded-full bg-amber-400/60" />
                <span className="h-3 w-3 rounded-full bg-green-400/60" />
              </div>
              <div className="ml-4 flex-1 rounded-md bg-surface-hover px-4 py-1.5 text-xs text-text-muted">
                yourbusiness.com
              </div>
            </div>
            {/* Mockup content */}
            <div className="relative aspect-[16/9]">
              <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1200&q=85"
                alt="Sample mockup — a cafe website homepage design"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
                <span className="mb-3 inline-block rounded-full bg-white/90 px-4 py-1.5 text-xs font-semibold text-text-primary backdrop-blur-sm">
                  Sample mockup — yours would be customized
                </span>
                <h3 className="max-w-md text-2xl font-bold text-white sm:text-3xl">
                  Your Business Name
                </h3>
                <p className="mt-2 max-w-sm text-[15px] text-white/80">
                  A custom homepage designed around your brand, your photos, and your customers.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="btn-hover inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
            >
              Get yours free <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ━━ Design concepts grid — with tech + deliverables ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Sites by industry</h2>
            <p className="mt-3 text-lg text-text-secondary">Each card shows what you&apos;d get — the tech, the features, and the deliverables.</p>
          </div>

          {/* Row 1 — 2 unequal columns */}
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4 lg:col-span-3">
              <div className="card-img-wrap relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
                  alt="Modern gym interior with equipment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="p-8">
                <p className="inline-flex w-fit rounded-full bg-accent/8 px-3 py-1 text-xs font-semibold text-accent">
                  Fitness &amp; Wellness
                </p>
                <h3 className="mt-3 text-2xl font-bold">Bookings, schedules, memberships</h3>
                <div className="mt-4 space-y-2">
                  {["5 custom pages", "Class schedule integration", "Online booking form", "Mobile-responsive", "SEO setup"].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-[14px] text-text-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Cal.com"].map((t) => (
                    <span key={t} className="rounded-md border border-border-subtle bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4 lg:col-span-2">
              <div className="card-img-wrap relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80"
                  alt="Beautiful landscaped garden with green lawn"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="p-8">
                <p className="inline-flex w-fit rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                  Home Services
                </p>
                <h3 className="mt-3 text-xl font-bold">Quotes, galleries, trust</h3>
                <div className="mt-4 space-y-2">
                  {["Photo gallery", "Instant quote form", "Service area map", "Google reviews embed"].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-[14px] text-text-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Formspree"].map((t) => (
                    <span key={t} className="rounded-md border border-border-subtle bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Row 2 — 3 columns */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4">
              <div className="card-img-wrap relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80"
                  alt="Stylish boutique interior with clothing racks"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-7">
                <p className="inline-flex w-fit rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                  E-commerce
                </p>
                <h3 className="mt-3 text-xl font-bold">Online store</h3>
                <div className="mt-3 space-y-2">
                  {["Product pages", "Cart & checkout", "Inventory management", "Payment processing"].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-[14px] text-text-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "Stripe", "Shopify"].map((t) => (
                    <span key={t} className="rounded-md border border-border-subtle bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4">
              <div className="card-img-wrap relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80"
                  alt="Beautifully plated food on rustic table"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-7">
                <p className="inline-flex w-fit rounded-full bg-accent/8 px-3 py-1 text-xs font-semibold text-accent">
                  Food &amp; Beverage
                </p>
                <h3 className="mt-3 text-xl font-bold">Menus &amp; delivery</h3>
                <div className="mt-3 space-y-2">
                  {["Visual menu pages", "Online ordering", "Location & hours", "Catering request form"].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-[14px] text-text-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Square"].map((t) => (
                    <span key={t} className="rounded-md border border-border-subtle bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4">
              <div className="card-img-wrap relative h-52">
                <Image
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                  alt="Laptop with code on screen in minimal workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-7">
                <p className="inline-flex w-fit rounded-full bg-primary/8 px-3 py-1 text-xs font-semibold text-primary">
                  Landing Page
                </p>
                <h3 className="mt-3 text-xl font-bold">One page, one goal</h3>
                <div className="mt-3 space-y-2">
                  {["Single-page design", "Lead capture form", "Analytics setup", "Speed optimized"].map((d) => (
                    <div key={d} className="flex items-center gap-2 text-[14px] text-text-secondary">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {d}
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Next.js", "Tailwind CSS", "Vercel"].map((t) => (
                    <span key={t} className="rounded-md border border-border-subtle bg-surface-raised px-2.5 py-1 text-[11px] font-semibold text-text-muted">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Guarantee banner ━━ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.03] p-8 text-center sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Zero risk</p>
            <h3 className="mt-3 text-2xl font-bold">Don&apos;t like the mockup? Walk away.</h3>
            <p className="mx-auto mt-3 max-w-lg text-[15px] leading-relaxed text-text-secondary">
              We design a free homepage mockup for your business before you pay anything. If it&apos;s not what you wanted, no hard feelings. You owe us nothing.
            </p>
          </div>
        </div>
      </section>

      {/* ━━ CTA ━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(108,92,231,0.05),transparent)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-36 text-center lg:py-40">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Want to see yours?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-xl text-text-secondary">
            Tell us about your business and we&apos;ll design a free homepage mockup. No commitment, no payment — just a preview of what&apos;s possible.
          </p>
          <Link
            href="/contact"
            className="btn-hover mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
          >
            Request a free mockup <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
