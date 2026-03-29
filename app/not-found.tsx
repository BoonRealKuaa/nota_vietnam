import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-[calc(100vh-4rem)] bg-white flex items-center justify-center">
        <div className="text-center flex flex-col items-center gap-6 px-6">
          <p className="text-8xl font-black text-subtle">404</p>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-dark">Page not found</h1>
            <p className="text-muted max-w-xs">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <Link
            href="/"
            className="bg-dark text-white font-semibold px-8 py-3.5 rounded-full hover:bg-accent transition-colors"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
