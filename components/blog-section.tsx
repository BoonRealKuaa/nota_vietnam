import Image from 'next/image'
import Link from 'next/link'

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
    img: 'https://images.unsplash.com/photo-1570194065650-d99fb4ee7696?w=800&q=80',
  },
]

export default function BlogSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs text-muted uppercase tracking-widest font-medium mb-3">
              Journal
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark leading-tight max-w-sm">
              Explore Beauty Reads Tailored to Your Lifestyle
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-semibold text-dark border border-dark rounded-full px-6 py-2.5 hover:bg-dark hover:text-white transition-colors self-start sm:self-auto shrink-0"
          >
            All Articles
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((a) => (
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
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                  {a.category}
                </span>
                <h3 className="text-lg font-bold text-dark leading-snug group-hover:text-accent transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed line-clamp-2">
                  {a.description}
                </p>
              </div>
              <div className="flex items-center justify-between text-xs text-muted mt-auto pt-2 border-t border-subtle">
                <span>{a.author}</span>
                <span>{a.readTime}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
