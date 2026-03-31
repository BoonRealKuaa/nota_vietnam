'use client'

import { useState } from 'react'
import Reveal from '@/components/reveal'

const faqs = [
  {
    q: 'How are NOTA essential oils extracted?',
    a: 'We use cold steam distillation — a method that preserves the full spectrum of bioactive compounds and natural aroma. No chemical solvents, no additives. Each bottle is the pure result of what nature provides.',
  },
  {
    q: 'Where do your ingredients come from?',
    a: 'Our ingredients are harvested from certified growing regions across Vietnam and Southeast Asia. We work directly with local farmers to ensure quality from the source and support sustainable agricultural practices.',
  },
  {
    q: 'How do I choose the right scent for me?',
    a: 'Each NOTA product line is designed for a different emotional state and living space. You can refer to the detailed description of each product, or contact us via the Support page — our team will help you find the scent that resonates most with you.',
  },
  {
    q: 'Are the products suitable for sensitive skin?',
    a: 'NOTA essential oils contain no alcohol, parabens, or synthetic fragrances — making them safe for most skin types. For very sensitive skin, we recommend diluting with a carrier oil before applying directly.',
  },
  {
    q: 'What is your shipping and return policy?',
    a: 'We ship nationwide within 3–5 business days and internationally within 7–14 days. Unopened products may be returned within 30 days if there is a quality issue. Contact our support team and we will guide you through the process.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-surface py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <Reveal direction="none" className="text-center mb-14">
          <p className="text-xs text-muted uppercase tracking-widest font-medium mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Everything you need to know</h2>
        </Reveal>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-subtle">
          {faqs.map((faq, i) => (
            <Reveal key={i} delay={i * 60} direction="up">
              <div className="py-5">
                <button
                  type="button"
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left group"
                >
                  <span className="text-base font-semibold text-dark group-hover:text-accent transition-colors">
                    {faq.q}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full border border-subtle flex items-center justify-center transition-transform ${
                      open === i ? 'rotate-45 bg-dark border-dark' : 'bg-white'
                    }`}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke={open === i ? 'white' : 'currentColor'}
                      strokeWidth="1.5"
                    >
                      <line x1="7" y1="2" x2="7" y2="12" />
                      <line x1="2" y1="7" x2="12" y2="7" />
                    </svg>
                  </span>
                </button>
                {open === i && (
                  <p className="mt-4 text-sm text-muted leading-relaxed pr-12">{faq.a}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
