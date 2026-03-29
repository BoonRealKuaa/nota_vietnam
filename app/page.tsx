import Nav from '@/components/nav'
import Hero from '@/components/hero'
import About from '@/components/about'
import Stats from '@/components/stats'
import Features from '@/components/features'
import BlogSection from '@/components/blog-section'
import FAQ from '@/components/faq'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Stats />
        <Features />
        <BlogSection />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
