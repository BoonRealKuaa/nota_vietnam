import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import Reveal from '@/components/reveal'
import { diffusers } from '@/lib/products'

export default function DiffuserPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <Reveal>
            <div className="flex items-center gap-2 text-xs text-muted uppercase tracking-widest font-medium mb-2">
              <Link href="/store" className="hover:text-dark transition-colors">Store</Link>
              <span>/</span>
              <span>Diffuser</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-dark mb-6">Diffuser</h1>
            <div className="border-b border-subtle pb-6">
              <p className="text-muted text-sm">{diffusers.length} products</p>
            </div>
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
                  <div className="relative shrink-0 w-36 h-36 rounded-xl overflow-hidden bg-surface">
                    <Image
                      src={d.img}
                      alt={d.name}
                      fill
                      className="object-contain p-3"
                      sizes="144px"
                    />
                  </div>
                  <div className="flex flex-col gap-1 flex-1">
                    <p className="text-xs text-muted uppercase tracking-wider font-medium">{d.type}</p>
                    <p className="text-xl font-bold text-dark group-hover:text-accent transition-colors">{d.name}</p>
                    <p className="text-sm text-muted leading-relaxed line-clamp-2">{d.description}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {d.specs.map((spec) => (
                        <span key={spec} className="text-xs font-medium text-dark bg-surface border border-subtle px-2.5 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="shrink-0 text-right">
                    <p className="text-lg font-bold text-dark">{d.price}</p>
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
