import Link from 'next/link'
import Reveal from '@/components/reveal'

export default function CTA() {
  return (
    <section className="bg-dark py-28">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <Reveal direction="none" className="flex flex-col gap-4 w-full">
          <p className="text-white/40 text-xs uppercase tracking-widest font-medium tracking-[0.3em]">
            NOTA Vietnam
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            The right scent can transform an entire day.
          </h2>
          <p className="text-white/50 text-base max-w-xl mx-auto leading-relaxed">
            Discover the NOTA collection — crafted to accompany your most private and meaningful moments.
          </p>
        </Reveal>

        <Reveal delay={150} direction="up" className="w-full flex justify-center">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            <Link
              href="/store/essential-oil"
              className="bg-white text-dark font-semibold px-8 py-3.5 rounded-full hover:bg-accent hover:text-white transition-colors inline-flex items-center gap-2"
            >
              Explore Essential Oil
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="8" x2="13" y2="8" />
                <polyline points="9 4 13 8 9 12" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="text-white/60 text-sm font-medium hover:text-white transition-colors underline underline-offset-4"
            >
              Read our blog
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
