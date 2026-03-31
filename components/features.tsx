import Reveal from '@/components/reveal'

const features = [
  {
    category: 'Ingredients',
    title: 'Pure from Nature',
    description:
      'Every ingredient is carefully selected from certified clean sources — no preservatives, no synthetic fragrance. Only what nature truly provides.',
    tags: ['100% Natural', 'Chemical-free'],
    symbol: '◯',
  },
  {
    category: 'Sourcing',
    title: 'Responsibility to the Earth',
    description:
      'We partner directly with local growers across Vietnam, ensuring a sustainable supply chain that supports indigenous agricultural communities.',
    tags: ['Sustainable farming', 'Proudly Vietnamese'],
    symbol: '◻',
  },
  {
    category: 'Craftsmanship',
    title: 'Refined in Every Detail',
    description:
      'Cold steam distillation preserves the full spectrum of bioactive compounds in each oil. Every batch is hand-verified for quality before reaching you.',
    tags: ['Handcrafted', 'Quality assured'],
    symbol: '◈',
  },
]

export default function Features() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal className="mb-16 max-w-lg">
          <p className="text-xs text-muted uppercase tracking-widest font-medium mb-3">
            Our Commitment
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
            Uncompromising quality. Understated excellence.
          </h2>
        </Reveal>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.category} delay={i * 100}>
              <div className="bg-white rounded-2xl p-8 flex flex-col gap-5 border border-subtle hover:shadow-sm transition-shadow h-full">
                <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-xl font-light text-muted">
                  {f.symbol}
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-semibold text-accent uppercase tracking-widest">
                    {f.category}
                  </p>
                  <h3 className="text-xl font-bold text-dark">{f.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{f.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium text-dark bg-surface border border-subtle px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
