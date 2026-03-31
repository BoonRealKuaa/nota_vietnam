import Image from 'next/image'
import Reveal from '@/components/reveal'

const places = [
  { src: '/img/places/living-room.png', label: 'Living Room' },
  { src: '/img/places/bedroom.png', label: 'Bedroom' },
  { src: '/img/places/gym.png', label: 'Gym' },
  { src: '/img/places/showroom.png', label: 'Showroom' },
  { src: '/img/places/office.jpg', label: 'Office' },
]

export default function Stats() {
  return (
    <section className="bg-dark text-white py-24">
      <div className="max-w-7xl mx-auto px-6 mb-14">
        {/* Brand statement */}
        <Reveal className="flex flex-col gap-6 max-w-2xl">
          <div className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest font-medium text-white/40">
              Our Philosophy
            </p>
            <p className="font-serif italic text-3xl md:text-4xl text-white/90 leading-relaxed">
              "We distill nature's silence through the lens of intelligence."
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white/60">
              N
            </div>
            <div>
              <p className="text-sm font-semibold text-white">NOTA Vietnam</p>
              <p className="text-xs text-white/40">Founder</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      <Reveal direction="none">
        <div className="overflow-hidden">
          <div className="flex animate-marquee gap-4">
            {[...places, ...places].map((p, i) => (
              <div key={i} className="relative shrink-0 w-72 h-44 rounded-2xl overflow-hidden">
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-dark/30" />
                <span className="absolute bottom-3 left-4 text-xs font-semibold text-white/80 uppercase tracking-widest">
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
