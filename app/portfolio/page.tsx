import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Real websites we've built for real small businesses — coffee shops, gyms, landscapers, boutiques, and more.",
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

      {/* ━━ Featured concept — cafe site ━━ */}
      <section className="border-t border-border-subtle bg-surface-raised py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-white shadow-sm shadow-black/4 lg:flex">
            <div className="relative flex-1">
              <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=80"
                  alt="Warm coffee shop interior with wooden counter"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col justify-center p-10 lg:p-14">
              <p className="inline-flex w-fit rounded-full bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                Cafe &amp; Restaurant
              </p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight lg:text-4xl">
                Menu, ordering, ambiance
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                A custom site that shows off your menu, lets customers order online, and captures the feeling of walking through your door — all on mobile-first design.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Online menu", "Mobile ordering", "Location & hours", "Custom photography"].map((tag) => (
                  <span key={tag} className="rounded-full bg-surface-raised px-4 py-1.5 text-xs font-medium text-text-muted">{tag}</span>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-hover mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary-dark"
              >
                Get a free mockup <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Design concepts grid ━━ */}
      <section className="py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">Sites by industry</h2>
            <p className="mt-3 text-lg text-text-secondary">Different businesses need different things. Here&apos;s what we design for each.</p>
          </div>

          {/* Row 1 — 2 unequal columns */}
          <div className="grid gap-8 lg:grid-cols-5">
            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4 lg:col-span-3">
              <div className="relative h-64">
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
                  Fitness & Wellness
                </p>
                <h3 className="mt-3 text-2xl font-bold">Bookings, schedules, memberships</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  Class schedules, trainer profiles, online booking, and membership tiers — all in one fast, mobile-friendly site.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {["Class booking", "Trainer bios", "Membership tiers"].map((tag) => (
                    <span key={tag} className="rounded-full bg-surface-raised px-3 py-1 text-xs font-medium text-text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4 lg:col-span-2">
              <div className="relative h-64">
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
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  Photo galleries of past work, instant quote forms, and service areas — designed to turn browsers into callers.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 — 3 columns */}
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4">
              <div className="relative h-52">
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
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  Product pages, filtering, cart, and checkout. Designed to make buying feel easy and look beautiful.
                </p>
              </div>
            </div>

            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4">
              <div className="relative h-52">
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
                  Food & Beverage
                </p>
                <h3 className="mt-3 text-xl font-bold">Menus & delivery</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  Visual menus, delivery integration, catering pages, and location maps for restaurants and food businesses.
                </p>
              </div>
            </div>

            <div className="card-lift overflow-hidden rounded-2xl bg-white shadow-sm shadow-black/4">
              <div className="relative h-52">
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
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  Single-page sites built to convert — for launches, promos, or businesses that want to keep it simple.
                </p>
              </div>
            </div>
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
