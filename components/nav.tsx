'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [storeOpen, setStoreOpen] = useState(false)
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-subtle">
      <div className="max-w-[1280px] mx-auto px-6 h-[64px] flex items-center justify-between">
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
              className="flex items-center gap-1 text-sm text-muted hover:text-dark transition-colors"
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
              <div className="absolute left-0 mt-3 w-44 bg-white border border-subtle rounded-xl shadow-lg z-50 overflow-hidden">
                <Link
                  href="/store/essential-oil"
                  onClick={() => setStoreOpen(false)}
                  className="block text-sm px-4 py-3 hover:bg-surface transition-colors text-dark"
                >
                  Essential Oil
                </Link>
                <div className="h-px bg-subtle mx-3" />
                <Link
                  href="/store/diffuser"
                  onClick={() => setStoreOpen(false)}
                  className="block text-sm px-4 py-3 hover:bg-surface transition-colors text-dark"
                >
                  Diffuser
                </Link>
              </div>
            )}
          </div>
          <Link href="/blog" className="text-sm text-muted hover:text-dark transition-colors">
            Blog
          </Link>
          <Link href="/our-methods" className="text-sm text-muted hover:text-dark transition-colors">
            Our methods
          </Link>
          <Link href="/support" className="text-sm text-muted hover:text-dark transition-colors">
            Support
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/store"
            className="bg-dark text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent transition-colors"
          >
            Shop
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-dark transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-dark transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-dark transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-subtle bg-white px-6 py-6 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-dark font-medium">Store</p>
            <div className="flex flex-col gap-1 pl-3 border-l border-subtle">
              <Link href="/store/essential-oil" className="text-sm text-muted" onClick={() => setOpen(false)}>Essential Oil</Link>
              <Link href="/store/diffuser" className="text-sm text-muted" onClick={() => setOpen(false)}>Diffuser</Link>
            </div>
          </div>
          <Link href="/blog" className="text-dark font-medium" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/our-methods" className="text-dark font-medium" onClick={() => setOpen(false)}>Our methods</Link>
          <Link href="/support" className="text-dark font-medium" onClick={() => setOpen(false)}>Support</Link>
          <Link
            href="/store"
            className="inline-block bg-dark text-white text-sm font-medium px-5 py-2.5 rounded-full w-fit"
            onClick={() => setOpen(false)}
          >
            Shop
          </Link>
        </div>
      )}
    </header>
  )
}
