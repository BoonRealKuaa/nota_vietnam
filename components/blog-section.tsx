'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Reveal from '@/components/reveal'

const articles = [
  {
    slug: 'skincare-tips',
    category: 'Skincare',
    title: 'Skincare Tips',
    description:
      'Expert advice and simple routines to keep your skin healthy and glowing every day.',
    author: 'Lucas Grant',
    role: 'Visual designer',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
  },
  {
    slug: 'glow-guide',
    category: 'Wellness',
    title: 'Glow Guide',
    description:
      'Your complete guide to achieving a natural, radiant glow with minimal effort.',
    author: 'Sofia Reyes',
    role: 'Beauty editor',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
  },
  {
    slug: 'clean-beauty',
    category: 'Clean Beauty',
    title: 'Clean Beauty',
    description:
      'Understanding the clean beauty movement and how to make the switch effortlessly.',
    author: 'Maya Chen',
    role: 'Wellness writer',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
  },
  {
    slug: 'diy-care',
    category: 'DIY',
    title: 'DIY Care',
    description:
      'Simple homemade recipes and rituals to elevate your self-care routine naturally.',
    author: 'Ines Vidal',
    role: 'Content creator',
    readTime: '8 min read',
    img: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee7696?w=800&q=80',
  },
  {
    slug: 'aromatherapy',
    category: 'Aromatherapy',
    title: 'Aromatherapy 101',
    description:
      'Discover how essential oils can transform your mood, sleep, and focus naturally.',
    author: 'Nora Blake',
    role: 'Health writer',
    readTime: '6 min read',
    img: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80',
  },
  {
    slug: 'morning-ritual',
    category: 'Lifestyle',
    title: 'Morning Ritual',
    description:
      'Build a powerful morning routine with scent as your anchor for a calm, focused day.',
    author: 'James Wu',
    role: 'Lifestyle coach',
    readTime: '5 min read',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    slug: 'nature-scents',
    category: 'Nature',
    title: 'Nature Scents',
    description:
      'Explore how botanicals and forest notes bring calm and clarity to your living space.',
    author: 'Ella Moore',
    role: 'Nature writer',
    readTime: '7 min read',
    img: 'https://images.unsplash.com/photo-1518710843675-2540dd79065c?w=800&q=80',
  },
  {
    slug: 'diffuser-guide',
    category: 'Guide',
    title: 'Diffuser Guide',
    description:
      'Everything you need to know about choosing and using a diffuser for your home.',
    author: 'Sam Park',
    role: 'Product specialist',
    readTime: '9 min read',
    img: 'https://images.unsplash.com/photo-1600857062241-98e5dba7f8ba?w=800&q=80',
  },
]

export default function BlogSection() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-dark py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-3">
              Blog
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight max-w-sm">
              Explore Scents Tailored to Your Lifestyle
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-white border border-white/30 rounded-full px-6 py-2.5 hover:bg-white hover:text-dark transition-colors self-start sm:self-auto shrink-0"
          >
            All Articles
          </Link>
        </Reveal>
      </div>

      {/* Marquee */}
      <div
        className="group flex gap-5 w-max animate-blog-marquee hover:[animation-play-state:paused]"
        ref={trackRef}
      >
        {[...articles, ...articles].map((a, i) => (
          <Link
            key={i}
            href={`/blog/${a.slug}`}
            className="flex flex-col shrink-0 w-72 rounded-2xl border border-white/10 overflow-hidden bg-white/5 hover:bg-white/10 transition-colors"
          >
            <div className="relative w-full h-44 shrink-0">
              <Image
                src={a.img}
                alt={a.title}
                fill
                className="object-cover"
                sizes="288px"
              />
            </div>
            <div className="flex flex-col gap-2 p-4 flex-1">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {a.category}
              </span>
              <h3 className="text-base font-bold text-white leading-snug">
                {a.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed line-clamp-2 flex-1">
                {a.description}
              </p>
              <div className="flex items-center justify-between text-xs text-white/40 pt-3 border-t border-white/10 mt-auto">
                <span>{a.author}</span>
                <span>{a.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
