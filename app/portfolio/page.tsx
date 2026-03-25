import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

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
            Selected work
          </p>
          <h1 className="anim-fade-up mt-5 max-w-3xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: "0.1s" }}>
            Real sites.<br />
            <span className="gradient-text">Real results.</span>
          </h1>
          <p className="anim-fade-up mt-7 max-w-lg text-xl leading-relaxed text-text-secondary" style={{ animationDelay: "0.2s" }}>
            Every project started with a conversation. Here&apos;s what came out of it.
          </p>
        </div>
      </section>

      {/* ━━ Featured project — full-width with real image ━━ */}
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
                Featured project
              </p>
              <h2 className="mt-6 text-3xl font-bold tracking-tight lg:text-4xl">
                The Daily Grind Coffee
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Marcus had a Wix template from 2019. We built a custom site with online ordering and a menu he updates himself. Online orders jumped 65% the first month.
              </p>
              <div className="mt-8 flex flex-wrap gap-8">
                <div>
                  <p className="text-3xl font-bold gradient-text">+65%</p>
                  <p className="text-sm text-text-muted">online orders</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">2x</p>
                  <p className="text-sm text-text-muted">foot traffic</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">10k</p>
                  <p className="text-sm text-text-muted">monthly visitors</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Projects grid with real images ━━ */}
      <section className="py-28 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16 max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">More of our work</h2>
            <p className="mt-3 text-lg text-text-secondary">Different industries, different vibes — same attention to detail.</p>
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
                  Service-Based
                </p>
                <h3 className="mt-3 text-2xl font-bold">Peak Performance Fitness</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  Sarah was paying for three separate tools. We consolidated bookings, memberships, and content into one site. Bookings went up 80%.
                </p>
                <div className="mt-5 flex gap-6 text-sm text-text-muted">
                  <span>+80% bookings</span>
                  <span>150 new members</span>
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
                  Service-Based
                </p>
                <h3 className="mt-3 text-xl font-bold">GreenScape Landscaping</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                  Image-heavy site with a quote form and gallery. Quote requests went up 120%.
                </p>
                <div className="mt-5 text-sm text-text-muted">+120% quote requests</div>
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
                <h3 className="mt-3 text-xl font-bold">Luxe Threads Boutique</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  Product filtering, wishlist, and checkout that feels effortless. Revenue up 40%.
                </p>
                <div className="mt-4 text-sm text-text-muted">+40% revenue</div>
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
                  E-commerce
                </p>
                <h3 className="mt-3 text-xl font-bold">Local Bites Marketplace</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  Multi-vendor food marketplace with vendor profiles and smooth checkout.
                </p>
                <div className="mt-4 text-sm text-text-muted">200+ vendors &middot; 3k users</div>
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
                <h3 className="mt-3 text-xl font-bold">SaaS Launch Pro</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-text-secondary">
                  High-converting launch page with 12% conversion rate on day one.
                </p>
                <div className="mt-4 text-sm text-text-muted">12% CVR &middot; 2k sign-ups</div>
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
            Your business could be next.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-xl text-text-secondary">
            We&apos;d love to add your project to this page. Tell us what you need.
          </p>
          <Link
            href="/contact"
            className="btn-hover mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
          >
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
