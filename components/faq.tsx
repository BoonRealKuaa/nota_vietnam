'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'What products does your store offer?',
    a: 'We offer a curated range of natural skincare products including serums, creams, cleansers, toners, and balms — each selected for its quality, sustainability, and effectiveness.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, we ship to over 50 countries worldwide. International shipping times vary by destination, typically 7–14 business days. All orders are tracked and insured.',
  },
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day hassle-free return policy on all unopened items. If you are unsatisfied with your purchase, simply contact our support team and we will guide you through the process.',
  },
  {
    q: 'Do you offer discounts or promotions?',
    a: 'Yes! We regularly run seasonal promotions and offer a welcome discount of 10% for first-time subscribers to our newsletter. Follow us on social media to stay updated on exclusive deals.',
  },
  {
    q: 'How can I track my order?',
    a: 'Once your order is shipped, you will receive an email with a tracking number. You can use this to track your delivery in real-time through our carrier partner\'s website.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-surface py-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs text-muted uppercase tracking-widest font-medium mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Your Questions Answered</h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-subtle">
          {faqs.map((faq, i) => (
            <div key={i} className="py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left group"
                aria-expanded={open === i}
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
          ))}
        </div>
      </div>
    </section>
  )
}
