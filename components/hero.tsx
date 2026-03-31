import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-dark overflow-hidden flex items-center">
      {/* Dark background only */}
      <div className="absolute inset-0 z-0 bg-dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-8 pb-0 grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="animate-fade-in-up text-sm text-white/50 tracking-widest uppercase font-medium">
              Natural Essential Oils — Pure &amp; Refined
            </p>
            <h1 className="animate-fade-in-up animation-delay-100 font-sans font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight">
              Invisible{' '}
              <span className="font-serif italic font-normal text-white/50">
                Architecture
              </span>{' '}
              For Your Space.
            </h1>
            <p className="animate-fade-in-up animation-delay-200 text-white/60 text-lg max-w-md leading-relaxed">
              Each NOTA essential oil is extracted from carefully selected natural ingredients — delivering a refined aromatic experience that nurtures your mind.
            </p>
          </div>

          <div className="animate-fade-in-up animation-delay-300 flex items-center gap-4">
            <Link
              href="/store"
              className="bg-white text-dark font-semibold px-8 py-3.5 rounded-full hover:bg-accent hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Explore the Collection
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </Link>
            <Link
              href="#about"
              className="text-sm text-white/60 font-medium underline underline-offset-4 hover:text-white transition-colors"
            >
              Learn more
            </Link>
          </div>

          {/* Trust signals */}
          <div className="animate-fade-in-up animation-delay-500 flex items-center gap-8 pt-4 border-t border-white/10">
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-white/40 mt-0.5">Natural ingredients</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">Zero</p>
              <p className="text-xs text-white/40 mt-0.5">Harmful chemicals</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <p className="text-2xl font-bold text-white">10+</p>
              <p className="text-xs text-white/40 mt-0.5">Signature product lines</p>
            </div>
          </div>
        </div>

        {/* Floating diffuser */}
        <div className="flex justify-center md:justify-end items-center translate-x-16">
          <div className="animate-fade-in-up animation-delay-300">
            <div className="animate-float">
              <div className="relative w-[440px] md:w-[560px] lg:w-[680px] h-[620px] md:h-[760px] lg:h-[900px] hover-sway">
                <Image
                  src="/img/diffuser-white-hero.png"
                  alt="NOTA Diffuser"
                  fill
                  className="object-contain object-center drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 340px, (max-width: 1024px) 420px, 500px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
