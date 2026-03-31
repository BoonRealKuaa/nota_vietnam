'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Reveal from '@/components/reveal'

const products = [
  { name: 'Deep Zen', scent: 'Warm & Woody', price: '500,000₫', slug: 'deep-zen', img: '/img/products/deep-zen.png', ingredients: '/img/products/deep-zen-ingredients.png' },
  { name: 'Morning Clarity', scent: 'Fresh & Light', price: '500,000₫', slug: 'morning-clarity', img: '/img/products/morning-clarity.png', ingredients: '/img/products/morning-clarity-ingredients.png' },
  { name: 'Pure Oxygen', scent: 'Clean & Airy', price: '500,000₫', slug: 'pure-oxygen', img: '/img/products/pure-oxygen.png', ingredients: '/img/products/pure-oxygen-ingredients.png' },
  { name: 'Cyber Fresh', scent: 'Cool & Crisp', price: '500,000₫', slug: 'cyber-fresh', img: '/img/products/cyber-fresh.png', ingredients: '/img/products/cyber-fresh-ingredients.png' },
  { name: 'Ether Dream', scent: 'Soft & Ethereal', price: '500,000₫', slug: 'ether-dream', img: '/img/products/ether-dream.png', ingredients: '/img/products/ether-dream-ingredients.png' },
  { name: 'Imperial Tea', scent: 'Rich & Refined', price: '500,000₫', slug: 'imperial-tea', img: '/img/products/imperial-tea.png', ingredients: '/img/products/imperial-tea-ingredients.png' },
  { name: 'Midnight Bloom', scent: 'Floral & Mysterious', price: '500,000₫', slug: 'midnight-bloom', img: '/img/products/midnight-bloom.png', ingredients: '/img/products/midnight-bloom-ingredients.png' },
  { name: 'Neon Pulse', scent: 'Bold & Vibrant', price: '500,000₫', slug: 'neon-pulse', img: '/img/products/neon-pulse.png', ingredients: '/img/products/neon-pulse-ingredients.png' },
  { name: 'The Velvet Suit', scent: 'Smooth & Luxurious', price: '500,000₫', slug: 'the-velvet-suit', img: '/img/products/the-velvet-suit.png', ingredients: '/img/products/the-velvet-suit-ingredients.png' },
]

export default function About() {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(dir: 'left' | 'right') {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({ left: dir === 'right' ? 320 : -320, behavior: 'smooth' })
  }

  return (
    <section id="about" className="bg-white pt-4 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Quote */}
        <Reveal direction="none" className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">Our Vision</h2>
          <p className="font-serif italic text-2xl md:text-3xl text-muted leading-relaxed">
            "We believe every scent is a memory — distilled from nature, preserved in each bottle, and offered to you with the deepest care."
          </p>
        </Reveal>

        {/* Section header */}
        <Reveal className="mb-8">
        <div id="store" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight max-w-sm">
            Our most beloved product lines
          </h2>
          <div className="flex items-center gap-3 self-start sm:self-auto shrink-0">
            <button
              type="button"
              title="Scroll left"
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-full border border-subtle flex items-center justify-center hover:bg-dark hover:border-dark hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="9 2 4 7 9 12" />
              </svg>
            </button>
            <button
              type="button"
              title="Scroll right"
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-full border border-subtle flex items-center justify-center hover:bg-dark hover:border-dark hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polyline points="5 2 10 7 5 12" />
              </svg>
            </button>
            <Link
              href="/store/essential-oil"
              className="text-sm font-semibold text-dark border border-dark rounded-full px-6 py-2.5 hover:bg-dark hover:text-white transition-colors"
            >
              View All
            </Link>
          </div>
        </div>
        </Reveal>

        {/* Scrollable product list */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 60} direction="up" className="shrink-0 w-56">
            <Link
              href="/store/essential-oil"
              className="group flex flex-col gap-3"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white border border-subtle">
                {/* Product image */}
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain p-3 transition-opacity duration-300 group-hover:opacity-0"
                  sizes="224px"
                />
                {/* Ingredients image on hover */}
                <Image
                  src={p.ingredients}
                  alt={`${p.name} ingredients`}
                  fill
                  className="object-contain p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  sizes="224px"
                />
              </div>
              <div className="flex flex-col gap-0.5 px-1">
                <p className="text-xs text-muted">{p.scent}</p>
                <p className="text-sm font-semibold text-dark leading-snug">{p.name}</p>
                <p className="text-sm text-dark">{p.price}</p>
              </div>
            </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
