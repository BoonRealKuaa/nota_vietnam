import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import StoreDropdown from '@/components/store-dropdown'

const products = [
  {
    name: 'Lustre Dew Elixir',
    brand: 'Veloura Skincare',
    price: '$109.00',
    slug: 'lustre-dew-elixir',
    img: '/img/z7667935998253_9c3fa8bedb29c8aca9f2be56ba3edab7.jpg',
    category: 'Serum',
  },
  {
    name: 'Hydrating Day Cream',
    brand: 'Aéra Beauty',
    price: '$52.00',
    slug: 'hydrating-day-cream',
    img: '/img/z7667935998271_381470b5cbe6908cca2df1e3b7e07933.jpg',
    category: 'Moisturiser',
  },
  {
    name: 'Gentle Foaming Cleanser',
    brand: 'Natura Iris',
    price: '$159.00',
    slug: 'gentle-foaming-cleanser',
    img: '/img/z7667936053077_773327021f2e5af87b0a3873194c79e6.jpg',
    category: 'Cleanser',
  },
  {
    name: 'Replenishing Night Balm',
    brand: 'Eluna Botanicals',
    price: '$112.00',
    slug: 'replenishing-night-balm',
    img: '/img/z7667936162457_7e9f7a37998da19a3c2f84e04ee5fb50.jpg',
    category: 'Treatment',
  },
  {
    name: 'Brightening Toner',
    brand: 'Serenys Skin',
    price: '$210.00',
    slug: 'brightening-toner',
    img: '/img/z7667936217365_549513528605e3bca02bb2a1a838e770.jpg',
    category: 'Toner',
  },
]

export default function StorePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col gap-2 mb-2">
            <p className="text-xs text-muted uppercase tracking-widest font-medium">
              Our Collection
            </p>
            <h1 className="text-4xl md:text-5xl font-black text-dark">Store</h1>
          </div>
          <div className="flex items-center justify-between border-b border-subtle pb-6">
            <p className="text-muted text-sm">{products.length} products</p>
            <div className="flex items-center gap-2">
              {['All', 'Serum', 'Moisturiser', 'Cleanser', 'Treatment', 'Toner'].map((cat) => (
                <button
                  key={cat}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-subtle hover:bg-dark hover:text-white hover:border-dark transition-colors first:bg-dark first:text-white first:border-dark"
                >
                  {cat}
                </button>
              ))}
              <StoreDropdown />
            </div>
          </div>
        </div>

        {/* Products grid */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
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
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-xs font-medium bg-white/90 backdrop-blur-sm text-dark px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-0.5 px-1">
                  <p className="text-xs text-muted">{p.brand}</p>
                  <p className="text-sm font-semibold text-dark leading-snug">{p.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-sm font-bold text-dark">{p.price}</p>
                    <span className="text-xs text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                      View →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
