"use client";

import { useState } from "react";
const price = 299;
const periods = [
  { label: "1 year", months: 12 },
  { label: "3 years", months: 36 },
  { label: "5 years", months: 60 },
];

const monthlyPlatforms = [
  { name: "Wix", monthly: 26 },
  { name: "Squarespace", monthly: 37 },
  { name: "Shopify", monthly: 53 },
];

export default function CostComparison() {
  const [activeIndex, setActiveIndex] = useState(1);
  const period = periods[activeIndex];

  return (
    <div className="mx-auto max-w-4xl">
      {/* Period toggle */}
      <div className="flex justify-center">
        <div className="inline-flex rounded-full bg-surface-raised p-1">
          {periods.map((p, i) => (
            <button
              key={p.label}
              onClick={() => setActiveIndex(i)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                activeIndex === i
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "text-text-muted hover:text-text-primary"
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison cards */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {/* Monthly builders */}
        <div className="rounded-2xl border border-border-subtle bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-text-muted">
            Monthly website builders
          </p>
          <div className="mt-6 space-y-5">
            {monthlyPlatforms.map((p) => {
              const total = p.monthly * period.months;
              return (
                <div key={p.name} className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-text-primary">{p.name}</p>
                    <p className="text-sm text-text-muted">
                      ${p.monthly}/mo × {period.months} months
                    </p>
                  </div>
                  <p className="text-2xl font-extrabold text-red-500">
                    ${total.toLocaleString()}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-6 border-t border-border-subtle pt-4">
            <p className="text-sm text-text-muted">
              + you don&apos;t own the code, limited customization, cookie-cutter templates
            </p>
          </div>
        </div>

        {/* Mirage */}
        <div className="rounded-2xl border-2 border-primary/30 bg-white p-8 shadow-lg shadow-primary/8">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Mirage Sites
          </p>
          <div className="mt-6">
            <div className="flex items-end gap-3">
              <p className="text-5xl font-extrabold tracking-tight text-text-primary">${price}</p>
              <p className="mb-1.5 text-lg text-text-muted">per service</p>
            </div>
            <p className="mt-2 text-[15px] text-text-secondary">
              Same price whether it&apos;s {period.label} or forever. You pay once.
            </p>
          </div>

          <div className="mt-8 rounded-xl bg-primary/5 p-5">
            <p className="text-sm font-semibold text-primary">
              You save vs. Squarespace over {period.label}:
            </p>
            <p className="mt-1 text-3xl font-extrabold gradient-text">
              ${(37 * period.months - price).toLocaleString()}
            </p>
          </div>

          <div className="mt-6 border-t border-border-subtle pt-4">
            <p className="text-sm text-text-muted">
              + you own everything, fully custom, no monthly fees ever
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
