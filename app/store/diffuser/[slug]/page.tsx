import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { diffusers } from '@/lib/products'

export default async function DiffuserProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const diffuser = diffusers.find((d) => d.slug === slug)
  if (!diffuser) notFound()

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-10 pb-24">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-muted uppercase tracking-widest font-medium mb-10">
            <Link href="/store" className="hover:text-dark transition-colors">Store</Link>
            <span>/</span>
            <Link href="/store/essential-oil" className="hover:text-dark transition-colors">Diffuser</Link>
            <span>/</span>
            <span className="text-dark">{diffuser.name}</span>
          </div>

          {/* Product */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image */}
            <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-surface border border-subtle">
              <Image
                src={diffuser.img}
                alt={diffuser.name}
                fill
                className="object-contain p-10"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-8 pt-2">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold text-accent uppercase tracking-widest">{diffuser.type}</p>
                <h1 className="text-4xl md:text-5xl font-black text-dark leading-tight">{diffuser.name}</h1>
                <p className="text-2xl font-bold text-dark">{diffuser.price}</p>
              </div>

              <p className="text-base text-muted leading-relaxed">{diffuser.description}</p>

              {/* Specs */}
              <div className="flex flex-col gap-3 p-5 rounded-2xl bg-surface">
                <p className="text-xs font-semibold text-dark uppercase tracking-widest mb-1">Specifications</p>
                {diffuser.specs.map((spec) => (
                  <div key={spec} className="flex items-center gap-3 text-sm text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {spec}
                  </div>
                ))}
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
                  ← Back to Store
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
