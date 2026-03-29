import Nav from '@/components/nav'
import Footer from '@/components/footer'

const methods = [
  {
    step: '01',
    title: 'Ethical Sourcing',
    description:
      'Every ingredient is sourced from certified organic farms and sustainable suppliers. We verify the full supply chain to ensure nothing harmful touches your skin or the planet.',
    tags: ['Organic certified', 'Fair trade', 'No harmful chemicals'],
  },
  {
    step: '02',
    title: 'Clean Formulation',
    description:
      'Our formulation process eliminates over 1,400 banned or restricted ingredients. Each product is crafted by independent chemists and verified by third-party labs before it reaches you.',
    tags: ['No parabens', 'No sulfates', 'Cruelty free'],
  },
  {
    step: '03',
    title: 'Mindful Manufacturing',
    description:
      'We partner with low-impact, carbon-neutral manufacturing facilities. Our packaging is fully recyclable or biodegradable, and we offset 100% of our shipping emissions.',
    tags: ['Carbon neutral', 'Recyclable packaging', 'Zero waste goal'],
  },
  {
    step: '04',
    title: 'Honest Testing',
    description:
      'Every product undergoes dermatologist testing on diverse skin types. We share the results openly — no cherry-picking, no misleading claims.',
    tags: ['Dermatologist tested', 'Clinical results', 'Transparent data'],
  },
]

export default function OurMethodsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="bg-dark text-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-xs text-white/40 uppercase tracking-widest font-medium mb-4">
              How We Work
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight max-w-2xl">
              Our Methods
            </h1>
            <p className="text-white/60 text-lg mt-6 max-w-xl leading-relaxed">
              Transparency is at the core of everything we do. Here's exactly how we select, formulate, and deliver every product.
            </p>
          </div>
        </section>

        {/* Methods */}
        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col divide-y divide-subtle">
            {methods.map((m) => (
              <div key={m.step} className="py-14 grid md:grid-cols-[120px_1fr] gap-8 items-start">
                <p className="text-5xl font-black text-subtle">{m.step}</p>
                <div className="flex flex-col gap-5">
                  <h2 className="text-2xl md:text-3xl font-bold text-dark">{m.title}</h2>
                  <p className="text-muted leading-relaxed max-w-2xl">{m.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-surface text-dark border border-subtle px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface py-20">
          <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">
              Ready to experience the difference?
            </h2>
            <a
              href="/store"
              className="bg-accent text-white font-semibold px-8 py-3.5 rounded-full hover:bg-dark transition-colors"
            >
              Shop Now
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
