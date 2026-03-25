import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Quote } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ━━ Hero ━━ oversized headline, real imagery, asymmetric */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_70%_-5%,rgba(108,92,231,0.07),transparent)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-36 pb-24 lg:grid-cols-12 lg:items-center lg:gap-10 lg:px-8 lg:pt-48 lg:pb-40">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <p className="anim-fade-up mb-5 text-sm font-semibold uppercase tracking-widest text-primary">
              Web design for small business
            </p>
            <h1 className="anim-fade-up text-[clamp(2.8rem,6vw,5.5rem)] font-extrabold leading-[1.05] tracking-tight text-text-primary" style={{ animationDelay: "0.1s" }}>
              Your business<br className="hidden sm:block" />
              deserves a site that<br className="hidden sm:block" />
              <span className="gradient-text">actually works.</span>
            </h1>
            <p className="anim-fade-up mt-8 max-w-md text-xl leading-relaxed text-text-secondary" style={{ animationDelay: "0.22s" }}>
              We build websites for coffee shops, gyms, and every small business in between. No templates. No page builders.
            </p>
            <div className="anim-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: "0.34s" }}>
              <Link
                href="/contact"
                className="btn-hover inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
              >
                Start your site <ArrowRight size={16} />
              </Link>
              <Link
                href="/portfolio"
                className="btn-hover inline-flex items-center gap-2 rounded-full border border-border-strong px-8 py-4 text-[15px] font-semibold text-text-primary hover:border-primary/30"
              >
                See examples
              </Link>
            </div>
          </div>

          {/* Right — hero image with floating stats */}
          <div className="relative lg:col-span-5">
            <div className="anim-fade-up relative" style={{ animationDelay: "0.3s" }}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-black/10">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80"
                  alt="Warm interior of a small business cafe with natural light"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
              </div>
              {/* Floating stat — bottom left */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-5 shadow-xl shadow-black/8 sm:-left-8">
                <p className="text-3xl font-extrabold tracking-tight text-text-primary">200+</p>
                <p className="text-sm text-text-muted">sites launched</p>
              </div>
              {/* Floating stat — top right */}
              <div className="absolute -top-3 -right-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/8 sm:-right-6">
                <div className="flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="mt-1 text-sm font-medium text-text-primary">4.9 avg rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Trust bar ━━ */}
      <section className="border-y border-border-subtle bg-surface-raised py-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-muted">
            We&apos;ve built sites for businesses like
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4">
            {["Bloom Floral Co.", "Peak Fitness", "GreenScape Lawns", "The Daily Grind", "Luxe Threads"].map((name) => (
              <span key={name} className="text-[15px] font-semibold tracking-wide text-text-muted/60 transition-colors hover:text-text-primary">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ What we do — image left, text right ━━ */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Image */}
            <div className="relative">
              <div className="relative aspect-[5/4] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
                  alt="Modern workspace with laptop showing website design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-white p-6 shadow-xl shadow-black/6 sm:-right-8">
                <p className="text-4xl font-extrabold gradient-text">98%</p>
                <p className="mt-1 text-sm text-text-muted">first-round approval</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we do</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                One thing,<br />done <span className="gradient-text">really well.</span>
              </h2>
              <p className="mt-6 text-xl leading-relaxed text-text-secondary">
                Small business websites. That&apos;s our entire focus.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                We&apos;re not a massive agency. We don&apos;t do apps, branding, or social media. We just make local businesses look incredible online.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <div>
                    <h3 className="text-lg font-bold">Custom design, every time</h3>
                    <p className="mt-1 text-text-secondary">Your cafe shouldn&apos;t look like a law firm.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <div>
                    <h3 className="text-lg font-bold">Mobile-first always</h3>
                    <p className="mt-1 text-text-secondary">60% of visitors are on their phone. We design for that.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-light" />
                  <div>
                    <h3 className="text-lg font-bold">SEO baked in</h3>
                    <p className="mt-1 text-text-secondary">Fast load times, clean code, proper structure.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Process — clean steps with image ━━ */}
      <section className="relative overflow-hidden border-y border-border-subtle bg-surface-raised py-32 lg:py-40">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/[0.03] blur-[120px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">How it works</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Three conversations.<br />One great website.
            </h2>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell us what you need",
                body: "A quick call or form. Share your business, your goals, your vibe. We ask the right questions.",
                accent: "border-t-primary",
              },
              {
                step: "02",
                title: "We design, you react",
                body: "Within a week, a full mockup — not a wireframe. An actual design of your site. You tell us what to tweak.",
                accent: "border-t-accent",
              },
              {
                step: "03",
                title: "Launch day",
                body: "We handle hosting, domain, speed. You get the keys and a quick walkthrough. Done.",
                accent: "border-t-primary-light",
              },
            ].map((s) => (
              <div key={s.step} className={`border-t-4 ${s.accent} rounded-2xl bg-white p-10 shadow-sm shadow-black/4`}>
                <span className="text-6xl font-black text-text-muted/15">{s.step}</span>
                <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━ Portfolio preview — two real projects ━━ */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">Selected work</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                Real sites, real results.
              </h2>
            </div>
            <Link href="/portfolio" className="btn-hover inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary-dark">
              View all projects <ArrowRight size={15} />
            </Link>
          </div>

          {/* Project 1 — wide image left, text right */}
          <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[3/2] overflow-hidden rounded-2xl shadow-lg shadow-black/6">
              <Image
                src="https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=900&q=80"
                alt="Cozy coffee shop interior with wooden counter and warm lighting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Small Business</p>
              <h3 className="mt-3 text-3xl font-bold">The Daily Grind Coffee</h3>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Marcus ran a popular Portland cafe with a Wix template from 2019. We built a custom site with online ordering and a menu he updates himself.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-3xl font-bold gradient-text">+65%</p>
                  <p className="mt-1 text-sm text-text-muted">online orders</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">10k</p>
                  <p className="mt-1 text-sm text-text-muted">monthly visitors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 — text left, image right (reversed) */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Service-Based</p>
              <h3 className="mt-3 text-3xl font-bold">Peak Performance Fitness</h3>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Sarah was paying for three separate tools. We consolidated bookings, memberships, and content into one fast, beautiful site.
              </p>
              <div className="mt-8 flex gap-8">
                <div>
                  <p className="text-3xl font-bold gradient-text">+80%</p>
                  <p className="mt-1 text-sm text-text-muted">bookings</p>
                </div>
                <div>
                  <p className="text-3xl font-bold gradient-text">150</p>
                  <p className="mt-1 text-sm text-text-muted">new members</p>
                </div>
              </div>
            </div>
            <div className="relative order-1 aspect-[3/2] overflow-hidden rounded-2xl shadow-lg shadow-black/6 lg:order-2">
              <Image
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80"
                alt="Modern gym interior with exercise equipment and natural light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Testimonials — featured + stacked ━━ */}
      <section className="border-y border-border-subtle bg-surface-raised py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Kind words</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
              Our clients talk too.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-5">
            {/* Featured testimonial — 3 cols */}
            <div className="flex flex-col justify-between rounded-2xl bg-white p-10 shadow-sm shadow-black/4 lg:col-span-3">
              <div>
                <Quote size={36} className="mb-5 text-primary/20" />
                <p className="text-2xl font-medium leading-relaxed text-text-primary">
                  I was paying $150/month for a Wix site that looked like everyone else&apos;s. Mirage built me something custom for less than a year of that subscription.
                </p>
                <p className="mt-4 text-lg text-text-secondary">
                  People actually compliment my website now. That never happened before.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-4 border-t border-border-subtle pt-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                    alt="Marcus Thompson"
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <p className="text-[15px] font-semibold">Marcus Thompson</p>
                  <p className="text-sm text-text-muted">The Daily Grind Coffee, Portland</p>
                </div>
              </div>
            </div>

            {/* Stacked smaller testimonials — 2 cols */}
            <div className="flex flex-col gap-8 lg:col-span-2">
              <div className="flex-1 rounded-2xl bg-white p-8 shadow-sm shadow-black/4">
                <div className="mb-3 flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[15px] leading-relaxed text-text-secondary">
                  &ldquo;They redesigned our site in 10 days and bookings went up almost immediately. Didn&apos;t expect that big of a difference.&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-[15px] font-semibold">Sarah Chen</p>
                  <p className="text-sm text-text-muted">Peak Performance Fitness, Austin</p>
                </div>
              </div>

              <div className="flex-1 rounded-2xl bg-white p-8 shadow-sm shadow-black/4">
                <div className="mb-3 flex gap-0.5 text-amber-400">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-[15px] leading-relaxed text-text-secondary">
                  &ldquo;Not tech-savvy at all and they made the process painless. Showed me how to update things myself.&rdquo;
                </p>
                <div className="mt-6">
                  <p className="text-[15px] font-semibold">David Park</p>
                  <p className="text-sm text-text-muted">GreenScape Landscaping, Denver</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Final CTA — clean, with background image ━━ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_110%,rgba(108,92,231,0.06),transparent)]" />

        <div className="relative mx-auto max-w-3xl px-6 py-36 text-center lg:py-44">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Ready to stop<br />blending in?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-xl text-text-secondary">
            Tell us about your business. We&apos;ll put together a free homepage mockup. No commitment, no pitch.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="btn-hover inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-primary/15"
            >
              Get a free mockup <ArrowRight size={16} />
            </Link>
            <Link
              href="/pricing"
              className="btn-hover text-[15px] font-semibold text-text-secondary transition-colors hover:text-primary"
            >
              or check pricing first &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
