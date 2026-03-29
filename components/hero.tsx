import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] bg-white flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted tracking-widest uppercase font-medium">
              Natural &amp; Curated
            </p>
            <h1 className="font-sans font-black text-5xl md:text-6xl lg:text-7xl text-dark leading-[1.05] tracking-tight">
              Built To Buy,{' '}
              <span className="font-serif italic font-normal text-muted">
                Designed
              </span>{' '}
              To Delight.
            </h1>
            <p className="text-muted text-lg max-w-md leading-relaxed">
              Natural tools and curated products designed to elevate your lifestyle.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/store"
              className="bg-accent text-white font-semibold px-8 py-3.5 rounded-full hover:bg-dark transition-colors inline-flex items-center gap-2"
            >
              Explore Store
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </Link>
            <Link
              href="#about"
              className="text-sm text-dark font-medium underline underline-offset-4 hover:text-accent transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 pt-4 border-t border-subtle">
            <div>
              <p className="text-2xl font-bold text-dark">1,200+</p>
              <p className="text-xs text-muted mt-0.5">Products sold monthly</p>
            </div>
            <div className="w-px h-10 bg-subtle" />
            <div>
              <p className="text-2xl font-bold text-dark">230k+</p>
              <p className="text-xs text-muted mt-0.5">Happy customers</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-72 h-[520px] md:w-80 md:h-[600px] lg:w-96 lg:h-[680px]">
            {/* Background blob */}
            <div className="absolute inset-0 rounded-[40%_60%_60%_40%/50%_50%_70%_30%] bg-surface" />
            <Image
              src="/images/hero/product-hero.png"
              alt="Natural skincare product"
              fill
              className="object-contain object-center relative z-10 drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
