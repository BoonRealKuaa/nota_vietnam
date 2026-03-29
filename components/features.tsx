const features = [
  {
    category: 'Materials',
    title: 'Sustainable Elegance',
    description:
      'Thoughtfully crafted from eco-friendly materials, this product reflects a commitment to both style and the planet.',
    tags: ['Plant based', 'Organic'],
    icon: '🌿',
  },
  {
    category: 'Sources',
    title: 'Natural Integrity',
    description:
      'Built with responsibly sourced components and clean design principles, it blends function, form, and sustainability.',
    tags: ['All natural', 'Chemicals free'],
    icon: '✦',
  },
  {
    category: 'Design',
    title: 'Conscious Design',
    description:
      'Made using durable, low-impact materials, this piece is as mindful as it is beautifully made—designed to last and leave a lighter footprint.',
    tags: ['Handled with care', 'Expert design'],
    icon: '◈',
  },
]

export default function Features() {
  return (
    <section className="bg-surface py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 max-w-lg">
          <p className="text-xs text-muted uppercase tracking-widest font-medium mb-3">
            Our Principles
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight">
            Crafted with Purpose, Built to Last
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.category}
              className="bg-white rounded-2xl p-8 flex flex-col gap-5 border border-subtle hover:shadow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-surface flex items-center justify-center text-2xl">
                {f.icon}
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
          ))}
        </div>
      </div>
    </section>
  )
}
