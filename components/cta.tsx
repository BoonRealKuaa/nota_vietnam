import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-accent py-28">
      <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-8">
        <div className="flex flex-col gap-4">
          <p className="text-white/70 text-sm uppercase tracking-widest font-medium">
            230k+ Happy Customers
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight">
            The Perfect Product Is Just A Click Away
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <Link
            href="/store"
            className="bg-white text-dark font-semibold px-8 py-3.5 rounded-full hover:bg-dark hover:text-white transition-colors inline-flex items-center gap-2"
          >
            Shop Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9 4 13 8 9 12" />
            </svg>
          </Link>
          <Link
            href="/blog"
            className="text-white/80 text-sm font-medium hover:text-white transition-colors underline underline-offset-4"
          >
            Explore our journal
          </Link>
        </div>

        {/* Social proof avatars */}
        <div className="flex items-center gap-3 mt-2">
          <div className="flex -space-x-2">
            {[
              'bg-pink-300',
              'bg-purple-300',
              'bg-yellow-300',
              'bg-green-300',
              'bg-blue-300',
            ].map((color, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 border-accent ${color}`}
              />
            ))}
          </div>
          <p className="text-white/80 text-sm">
            Loved by <span className="font-semibold text-white">230,000+</span> customers worldwide
          </p>
        </div>
      </div>
    </section>
  )
}
