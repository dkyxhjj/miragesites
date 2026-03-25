"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
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
];

export default function AccordionFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-14 space-y-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={faq.q}
            className="overflow-hidden rounded-xl border border-border-subtle bg-white transition-shadow hover:shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <h3 className="text-lg font-bold">{faq.q}</h3>
              <ChevronDown
                size={18}
                className={`shrink-0 text-text-muted transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-all duration-300 ease-in-out"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[15px] leading-relaxed text-text-secondary">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
