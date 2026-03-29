import Nav from '@/components/nav'
import Footer from '@/components/footer'

const topics = [
  { icon: '📦', title: 'Orders & Shipping', description: 'Track your order, update your address, or learn about our shipping partners and timelines.' },
  { icon: '↩️', title: 'Returns & Refunds', description: 'Hassle-free 30-day returns on unopened items. Learn how to start a return request.' },
  { icon: '🧴', title: 'Product Questions', description: 'Ingredient information, usage guides, and help finding the right product for your skin type.' },
  { icon: '👤', title: 'Account & Orders', description: 'Update your details, view order history, or manage your subscription settings.' },
]

export default function SupportPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-surface py-20 border-b border-subtle">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col gap-4">
            <p className="text-xs text-muted uppercase tracking-widest font-medium">Help Center</p>
            <h1 className="text-4xl md:text-5xl font-black text-dark">How can we help?</h1>
            <p className="text-muted text-lg">
              Our team is available Monday–Friday, 9am–6pm (GMT+7).
            </p>
            {/* Search */}
            <div className="relative mt-4 max-w-xl mx-auto w-full">
              <input
                type="text"
                placeholder="Search for answers…"
                className="w-full bg-white border border-subtle rounded-full px-6 py-3.5 text-sm text-dark placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-dark/10 shadow-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-dark text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-accent transition-colors">
                Search
              </button>
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-xl font-bold text-dark mb-8">Browse by topic</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {topics.map((t) => (
              <button
                key={t.title}
                className="text-left flex items-start gap-4 p-6 rounded-2xl border border-subtle hover:border-dark hover:shadow-sm transition-all bg-white group"
              >
                <span className="text-2xl mt-0.5">{t.icon}</span>
                <div className="flex flex-col gap-1.5">
                  <p className="font-semibold text-dark group-hover:text-accent transition-colors">
                    {t.title}
                  </p>
                  <p className="text-sm text-muted leading-relaxed">{t.description}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-dark text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
            <h2 className="text-3xl font-bold">Still need help?</h2>
            <p className="text-white/60 text-lg">
              Our support team responds to all emails within 24 hours on business days.
            </p>
            <a
              href="mailto:support@essential.com"
              className="bg-white text-dark font-semibold px-8 py-3.5 rounded-full hover:bg-accent hover:text-white transition-colors"
            >
              Email us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
