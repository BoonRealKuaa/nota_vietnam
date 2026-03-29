import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

const articles = [
  {
    slug: 'skincare-tips',
    category: 'Skincare',
    title: 'Skincare Tips',
    description:
      'Expert advice and simple routines to keep your skin healthy and glowing every day.',
    author: 'Lucas Grant',
    role: 'Visual designer',
    readTime: '5 min read',
    date: 'Mar 12, 2025',
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80',
  },
  {
    slug: 'glow-guide',
    category: 'Wellness',
    title: 'Glow Guide',
    description:
      'Your complete guide to achieving a natural, radiant glow with minimal effort.',
    author: 'Sofia Reyes',
    role: 'Beauty editor',
    readTime: '7 min read',
    date: 'Feb 28, 2025',
    img: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
  },
  {
    slug: 'clean-beauty',
    category: 'Clean Beauty',
    title: 'Clean Beauty',
    description:
      'Understanding the clean beauty movement and how to make the switch effortlessly.',
    author: 'Maya Chen',
    role: 'Wellness writer',
    readTime: '6 min read',
    date: 'Feb 14, 2025',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80',
  },
  {
    slug: 'diy-care',
    category: 'DIY',
    title: 'DIY Care',
    description:
      'Simple homemade recipes and rituals to elevate your self-care routine naturally.',
    author: 'Ines Vidal',
    role: 'Content creator',
    readTime: '8 min read',
    date: 'Jan 30, 2025',
    img: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee7696?w=800&q=80',
  },
]

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 border-b border-subtle">
          <p className="text-xs text-muted uppercase tracking-widest font-medium mb-2">Journal</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h1 className="text-4xl md:text-5xl font-black text-dark">
              Explore Beauty Reads
            </h1>
            <p className="text-muted text-sm">{articles.length} articles</p>
          </div>
        </div>

        {/* Articles */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          {/* Featured first article */}
          <Link
            href={`/blog/${articles[0].slug}`}
            className="group grid md:grid-cols-2 gap-8 mb-16 pb-16 border-b border-subtle"
          >
            <div className="relative aspect-video md:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface">
              <Image
                src={articles[0].img}
                alt={articles[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-5">
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                {articles[0].category}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight group-hover:text-accent transition-colors">
                {articles[0].title}
              </h2>
              <p className="text-muted leading-relaxed">{articles[0].description}</p>
              <div className="flex items-center gap-4 text-sm text-muted pt-2 border-t border-subtle">
                <span className="font-medium text-dark">{articles[0].author}</span>
                <span>·</span>
                <span>{articles[0].date}</span>
                <span>·</span>
                <span>{articles[0].readTime}</span>
              </div>
            </div>
          </Link>

          {/* Rest of articles */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group flex flex-col gap-4"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface">
                  <Image
                    src={a.img}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {a.category}
                  </span>
                  <h3 className="text-xl font-bold text-dark group-hover:text-accent transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {a.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted border-t border-subtle pt-3 mt-auto">
                  <span>{a.author}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime}</span>
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
