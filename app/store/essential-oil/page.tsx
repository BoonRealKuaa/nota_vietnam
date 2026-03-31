import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Reveal from '@/components/reveal'
import { essentialOils, diffusers } from '@/lib/products'

export default function EssentialOilPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        {/* ── Essential Oil Section ── */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <Reveal>
            <div className="flex items-center gap-2 text-xs text-muted uppercase tracking-widest font-medium mb-2">
              <Link href="/store" className="hover:text-dark transition-colors">Store</Link>
              <span>/</span>
              <span>Essential Oil</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-dark mb-6">Essential Oil</h1>
            <div className="border-b border-subtle pb-6">
              <p className="text-muted text-sm">{essentialOils.length} products</p>
            </div>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {essentialOils.map((oil, i) => (
              <Reveal key={oil.slug} delay={i * 60}>
                <Link href={`/store/essential-oil/${oil.slug}`} className="group flex flex-col gap-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-white border border-subtle">
                    <Image
                      src={oil.img}
                      alt={oil.name}
                      fill
                      className="object-contain p-3 transition-opacity duration-300 group-hover:opacity-0"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <Image
                      src={oil.ingredients}
                      alt={`${oil.name} ingredients`}
                      fill
                      className="object-contain p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 px-1">
                    <p className="text-xs text-muted">{oil.scent}</p>
                    <p className="text-sm font-semibold text-dark leading-snug">{oil.name}</p>
                    <p className="text-sm text-dark">{oil.price}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="border-t border-subtle" />
        </div>

        {/* ── Diffuser Section ── */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-black text-dark mb-2">Diffuser</h2>
            <p className="text-muted text-sm mb-6">{diffusers.length} products</p>
            <div className="border-b border-subtle" />
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="flex flex-col gap-5">
            {diffusers.map((d, i) => (
              <Reveal key={d.slug} delay={i * 80}>
                <Link
                  href={`/store/diffuser/${d.slug}`}
                  className="group flex gap-6 items-center p-5 rounded-2xl border border-subtle bg-white hover:border-dark transition-colors"
                >
                  <div className="relative shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-surface">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      className="object-contain p-2"
                      sizes="112px"
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">{d.type}</p>
                    <p className="text-lg font-bold text-dark group-hover:text-accent transition-colors">{d.name}</p>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">{d.description}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-base font-bold text-dark">{d.price}</p>
                    <p className="text-xs text-muted mt-1 group-hover:text-dark transition-colors">View →</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
