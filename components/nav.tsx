'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [storeOpen, setStoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const storeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (storeRef.current && !storeRef.current.contains(e.target as Node)) {
        setStoreOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div className={`max-w-[1280px] mx-auto rounded-2xl border transition-all duration-300 ${
        scrolled
          ? 'bg-dark/70 backdrop-blur-md border-white/10 shadow-sm'
          : 'bg-dark border-dark shadow-none'
      }`}>
      <div className="px-6 h-[56px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/img/nO BACKGROUND.png" alt="Nota" width={100} height={40} className="object-contain" priority />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div ref={storeRef} className="relative">
            <button
              type="button"
              onClick={() => setStoreOpen((v) => !v)}
              className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors"
            >
              Store
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${storeOpen ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            {storeOpen && (
              <div className="absolute left-0 mt-3 w-44 bg-dark border border-white/10 rounded-xl shadow-lg z-50 overflow-hidden">
                <Link
                  href="/store/diffuser"
                  onClick={() => setStoreOpen(false)}
                  className="block text-sm px-4 py-3 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  Diffuser
                </Link>
                <div className="h-px bg-white/10 mx-3" />
                <Link
                  href="/store/essential-oil"
                  onClick={() => setStoreOpen(false)}
                  className="block text-sm px-4 py-3 hover:bg-white/10 transition-colors text-white/80 hover:text-white"
                >
                  Essential Oil
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">
            Blog
          </Link>
          <Link href="/our-methods" className="text-sm text-white/70 hover:text-white transition-colors">
            About us
          </Link>
          <Link href="/support" className="text-sm text-white/70 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/store"
            className="bg-white text-dark text-sm font-medium px-5 py-2.5 rounded-full hover:bg-white/80 transition-colors"
          >
            Shop
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-white transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-white font-medium">Store</p>
            <div className="flex flex-col gap-1 pl-3 border-l border-white/20">
              <Link href="/store/essential-oil" className="text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>Essential Oil</Link>
              <Link href="/store/diffuser" className="text-sm text-white/60 hover:text-white" onClick={() => setOpen(false)}>Diffuser</Link>
            </div>
          </div>
          <Link href="/blog" className="text-white font-medium" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/our-methods" className="text-white font-medium" onClick={() => setOpen(false)}>About us</Link>
          <Link href="/support" className="text-white font-medium" onClick={() => setOpen(false)}>Contact</Link>
          <Link
            href="/store"
            className="inline-block bg-white text-dark text-sm font-medium px-5 py-2.5 rounded-full w-fit"
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>
        </div>
      )}
      </div>
    </header>
  )
}
