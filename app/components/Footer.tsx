import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface-raised">
      {/* Main footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand — wide */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-flex items-center gap-1.5 text-xl font-bold tracking-tight">
              <span className="gradient-text">mirage</span>
              <span className="font-light text-text-primary">sites</span>
            </Link>
            <p className="max-w-xs text-[15px] leading-relaxed text-text-secondary">
              Custom websites for small businesses — built fast, priced fair, designed to actually bring in customers.
            </p>
            <p className="text-sm text-text-muted">
              <a href="mailto:hello@miragesites.com" className="transition-colors hover:text-primary">
                hello@miragesites.com
              </a>
            </p>
            <p className="text-sm text-text-muted">Los Angeles, LA — working with clients everywhere</p>
          </div>

          {/* Nav links */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">Navigate</p>
              <ul className="space-y-3">
                {[
                  { href: "/", label: "Home" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/pricing", label: "Pricing" },
                  { href: "/contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-[15px] text-text-secondary transition-colors hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">Services</p>
              <ul className="space-y-3">
                {[
                  "Website Design",
                  "Website Redesign",
                  "Landing Pages",
                  "E-commerce",
                  "Maintenance",
                ].map((s) => (
                  <li key={s}>
                    <Link href="/contact" className="text-[15px] text-text-secondary transition-colors hover:text-primary">
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-muted">Resources</p>
              <ul className="space-y-3">
                {[
                  { label: "See examples", href: "/portfolio" },
                  { label: "Get a free mockup", href: "/contact" },
                  { label: "Check pricing", href: "/pricing" },
                ].map((t) => (
                  <li key={t.label}>
                    <Link href={t.href} className="text-[15px] text-text-secondary transition-colors hover:text-primary">
                      {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border-subtle">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-text-muted sm:flex-row lg:px-8">
          <p>&copy; {new Date().getFullYear()} Mirage Sites. All rights reserved.</p>
          <p className="text-sm">Los Angeles, CA</p>
        </div>
      </div>
    </footer>
  );
}
