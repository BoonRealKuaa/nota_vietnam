import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const oils = [
  {
    name: 'Amber Glow',
    scent: 'Warm & Woody',
    price: '490.000₫',
    slug: 'amber-glow',
    img: '/img/z7667935998253_9c3fa8bedb29c8aca9f2be56ba3edab7.jpg',
  },
  {
    name: 'Golden Dusk',
    scent: 'Earthy & Rich',
    price: '490.000₫',
    slug: 'golden-dusk',
    img: '/img/z7667935998271_381470b5cbe6908cca2df1e3b7e07933.jpg',
  },
  {
    name: 'Ivory Mist',
    scent: 'Soft & Powdery',
    price: '490.000₫',
    slug: 'ivory-mist',
    img: '/img/z7667936053077_773327021f2e5af87b0a3873194c79e6.jpg',
  },
  {
    name: 'Sage Breeze',
    scent: 'Fresh & Herbal',
    price: '490.000₫',
    slug: 'sage-breeze',
    img: '/img/z7667936107521_f271b8ae1717570f6a7f20c14d8bbc3c.jpg',
  },
  {
    name: 'Blanc Silk',
    scent: 'Clean & Airy',
    price: '490.000₫',
    slug: 'blanc-silk',
    img: '/img/z7667936107613_bfbba8984c8d5219717a2b6cd1a40cc5.jpg',
  },
  {
    name: 'Forest Calm',
    scent: 'Green & Earthy',
    price: '490.000₫',
    slug: 'forest-calm',
    img: '/img/z7667936162457_7e9f7a37998da19a3c2f84e04ee5fb50.jpg',
  },
  {
    name: 'Lavender Haze',
    scent: 'Floral & Relaxing',
    price: '490.000₫',
    slug: 'lavender-haze',
    img: '/img/z7667936217365_549513528605e3bca02bb2a1a838e770.jpg',
  },
  {
    name: 'Rose Petal',
    scent: 'Sweet & Floral',
    price: '490.000₫',
    slug: 'rose-petal',
    img: '/img/z7667936217483_078f7c22525f1bce41edd6035f1f50c4.jpg',
  },
  {
    name: 'Mint Frost',
    scent: 'Cool & Refreshing',
    price: '490.000₫',
    slug: 'mint-frost',
    img: '/img/z7667936273215_4f6d0e0c1573aa472b824a335f8522ac.jpg',
  },
  {
    name: 'Celadon Dream',
    scent: 'Light & Aquatic',
    price: '490.000₫',
    slug: 'celadon-dream',
    img: '/img/z7667936327629_a81c42a5873a8ec2910deec4fb301d22.jpg',
  },
]

export default function EssentialOilPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex items-center gap-2 text-xs text-muted uppercase tracking-widest font-medium">
              <Link href="/store" className="hover:text-dark transition-colors">Store</Link>
              <span>/</span>
              <span>Essential Oil</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-dark">Essential Oil</h1>
          </div>
          <div className="flex items-center justify-between border-b border-subtle pb-6">
            <p className="text-muted text-sm">{oils.length} sản phẩm</p>
          </div>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
            {oils.map((oil) => (
              <div key={oil.slug} className="group flex flex-col gap-3 cursor-pointer">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src={oil.img}
                    alt={oil.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
                <div className="flex flex-col gap-0.5 px-1">
                  <p className="text-xs text-muted">{oil.scent}</p>
                  <p className="text-sm font-semibold text-dark leading-snug">{oil.name}</p>
                  <p className="text-sm font-bold text-dark mt-1">{oil.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
