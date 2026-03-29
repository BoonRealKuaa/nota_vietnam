import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    name: 'Lustre Dew Elixir',
    brand: 'Veloura Skincare',
    price: '$109.00',
    slug: 'lustre-dew-elixir',
    img: '/images/products/lustre-dew-elixir.jpg',
  },
  {
    name: 'Hydrating Day Cream',
    brand: 'Aéra Beauty',
    price: '$52.00',
    slug: 'hydrating-day-cream',
    img: '/images/products/hydrating-day-cream.png',
  },
  {
    name: 'Gentle Foaming Cleanser',
    brand: 'Natura Iris',
    price: '$159.00',
    slug: 'gentle-foaming-cleanser',
    img: '/images/products/gentle-foaming-cleanser.png',
  },
  {
    name: 'Replenishing Night Balm',
    brand: 'Eluna Botanicals',
    price: '$112.00',
    slug: 'replenishing-night-balm',
    img: '/images/products/replenishing-night-balm.png',
  },
  {
    name: 'Brightening Toner',
    brand: 'Serenys Skin',
    price: '$210.00',
    slug: 'brightening-toner',
    img: '/images/products/brightening-toner.png',
  },
]

export default function About() {
  return (
    <section id="about" className="bg-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Quote */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-serif italic text-2xl md:text-3xl text-muted leading-relaxed">
            "At our store, we believe that good design should be both beautiful
            and practical. That's why we curate a collection of carefully crafted
            essentials—each chosen for its purpose, quality, and timeless appeal."
          </p>
        </div>

        {/* Section header */}
        <div id="store" className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight max-w-sm">
            Find Products That Perfectly Match Your Lifestyle
          </h2>
          <Link
            href="/store"
            className="text-sm font-semibold text-dark border border-dark rounded-full px-6 py-2.5 hover:bg-dark hover:text-white transition-colors self-start sm:self-auto shrink-0"
          >
            View All
          </Link>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/store/${p.slug}`}
              className="group flex flex-col gap-3"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-surface">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
              </div>
              <div className="flex flex-col gap-0.5 px-1">
                <p className="text-xs text-muted">{p.brand}</p>
                <p className="text-sm font-semibold text-dark leading-snug">{p.name}</p>
                <p className="text-sm text-dark">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
