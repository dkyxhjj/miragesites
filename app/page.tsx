import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

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
              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-6 py-5 shadow-xl shadow-black/8 sm:-left-8">
                <p className="text-lg font-bold tracking-tight text-text-primary">Custom design</p>
                <p className="text-sm text-text-muted">no templates, ever</p>
              </div>
              {/* Floating badge — top right */}
              <div className="absolute -top-3 -right-3 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/8 sm:-right-6">
                <p className="text-lg font-bold text-text-primary">Fast delivery</p>
                <p className="mt-0.5 text-sm text-text-muted">under 2 weeks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━ Trust bar ━━ */}
      <section className="border-y border-border-subtle bg-surface-raised py-10">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-text-muted">
            Built for small businesses
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {["Cafes & Restaurants", "Fitness Studios", "Landscapers", "Boutiques", "Local Services"].map((name) => (
              <span key={name} className="text-[15px] font-semibold tracking-wide text-text-muted/60">
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
                <p className="text-lg font-bold text-text-primary">From $499</p>
                <p className="mt-1 text-sm text-text-muted">one-time, no subscriptions</p>
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

      {/* ━━ What we build — honest showcase ━━ */}
      <section className="py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">What we build</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
                Sites that fit<br /><span className="gradient-text">your business.</span>
              </h2>
            </div>
            <Link href="/portfolio" className="btn-hover inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary-dark">
              See sample designs <ArrowRight size={15} />
            </Link>
          </div>

          {/* Example 1 — cafe/restaurant */}
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
              <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Cafe & Restaurant</p>
              <h3 className="mt-3 text-3xl font-bold">Menu, online ordering, location</h3>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Your cafe deserves more than a Wix template. We design sites with menus customers can actually read, online ordering that works, and a vibe that matches your space.
              </p>
              <Link
                href="/contact"
                className="btn-hover mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary-dark"
              >
                Get a free mockup for your cafe <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Example 2 — fitness/services */}
          <div className="mt-24 grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">Fitness & Services</p>
              <h3 className="mt-3 text-3xl font-bold">Bookings, schedules, memberships</h3>
              <p className="mt-4 text-lg leading-relaxed text-text-secondary">
                Stop paying for three separate tools. We build sites that handle bookings, class schedules, and membership info — all in one place that looks great on every device.
              </p>
              <Link
                href="/contact"
                className="btn-hover mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-primary hover:text-primary-dark"
              >
                Get a free mockup for your studio <ArrowRight size={14} />
              </Link>
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

      {/* ━━ Our promise — honest trust section ━━ */}
      <section className="border-y border-border-subtle bg-surface-raised py-32 lg:py-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">Our promise</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight lg:text-5xl">
              No risk. Just a better site.
            </h2>
            <p className="mt-6 text-xl leading-relaxed text-text-secondary">
              We&apos;re a new studio offering launch pricing — which means you get agency-quality work at a fraction of the cost.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-10 shadow-sm shadow-black/4">
              <p className="text-4xl font-black gradient-text">01</p>
              <h3 className="mt-4 text-xl font-bold">Free mockup first</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                We&apos;ll design a sample homepage for your business before you pay a cent. If you don&apos;t love it, walk away. No hard feelings.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-10 shadow-sm shadow-black/4">
              <p className="text-4xl font-black gradient-text">02</p>
              <h3 className="mt-4 text-xl font-bold">You own everything</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                Code, design, domain — it&apos;s all yours. No monthly fees, no lock-in. Pay once and your site is yours forever.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-10 shadow-sm shadow-black/4">
              <p className="text-4xl font-black gradient-text">03</p>
              <h3 className="mt-4 text-xl font-bold">Real human support</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-text-secondary">
                You talk directly to the person building your site. Questions after launch? We&apos;re an email away. No chatbots, no ticket queues.
              </p>
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
