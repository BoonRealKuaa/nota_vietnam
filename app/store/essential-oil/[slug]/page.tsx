'use client'

import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { useState, use } from 'react'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { essentialOils } from '@/lib/products'

export default function OilProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const oil = essentialOils.find((o) => o.slug === slug)
  if (!oil) notFound()

  const [showIngredients, setShowIngredients] = useState(false)

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted uppercase tracking-widest font-medium mb-10">
            <Link href="/store" className="hover:text-dark transition-colors">Store</Link>
            <span>/</span>
            <Link href="/store/essential-oil" className="hover:text-dark transition-colors">Essential Oil</Link>
            <span>/</span>
            <span className="text-dark">{oil.name}</span>
          </div>

          {/* Product */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="flex flex-col gap-4">
              <div
                className="relative aspect-square w-full overflow-hidden rounded-3xl bg-white border border-subtle cursor-pointer"
                onClick={() => setShowIngredients((v) => !v)}
              >
                <Image
                  src={oil.img}
                  alt={oil.name}
                  fill
                  className={`object-contain p-8 transition-opacity duration-500 ${showIngredients ? 'opacity-0' : 'opacity-100'}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <Image
                  src={oil.ingredients}
                  alt={`${oil.name} ingredients`}
                  fill
                  className={`object-contain p-8 transition-opacity duration-500 ${showIngredients ? 'opacity-100' : 'opacity-0'}`}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowIngredients(false)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-colors ${!showIngredients ? 'bg-dark text-white border-dark' : 'border-subtle text-muted hover:border-dark'}`}
                >
                  Product
                </button>
                <button
                  type="button"
                  onClick={() => setShowIngredients(true)}
                  className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-colors ${showIngredients ? 'bg-dark text-white border-dark' : 'border-subtle text-muted hover:border-dark'}`}
                >
                  Ingredients
                </button>
              </div>
            </div>

            {/* Info */}
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">{oil.scent}</p>
                <h1 className="text-4xl md:text-5xl font-black text-dark leading-tight">{oil.name}</h1>
                <p className="text-2xl font-bold text-dark">{oil.price}</p>
              </div>

              <p className="text-base text-muted leading-relaxed">{oil.description}</p>

              <div className="flex flex-col gap-3 pt-2 border-t border-subtle">
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                  100% Natural ingredients
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                  No synthetic fragrance or chemicals
                </div>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <span className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                  Cold steam distillation process
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  type="button"
                  className="w-full bg-dark text-white font-semibold py-4 rounded-full hover:bg-accent transition-colors text-sm"
                >
                  Add to Cart
                </button>
                <Link
                  href="/store/essential-oil"
                  className="w-full text-center text-sm font-medium text-muted hover:text-dark transition-colors py-2"
                >
                  ← Back to Essential Oil
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
