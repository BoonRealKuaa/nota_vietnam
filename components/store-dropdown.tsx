'use client'

import { useState } from 'react'

export default function StoreDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full border border-subtle hover:bg-dark hover:text-white hover:border-dark transition-colors"
      >
        Collections
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white border border-subtle rounded-xl shadow-lg z-10 overflow-hidden">
          <button className="w-full text-left text-xs font-medium px-4 py-3 hover:bg-surface transition-colors text-dark">
            Essential Oil
          </button>
          <div className="h-px bg-subtle mx-3" />
          <button className="w-full text-left text-xs font-medium px-4 py-3 hover:bg-surface transition-colors text-dark">
            Diffuser
          </button>
        </div>
      )}
    </div>
  )
}
