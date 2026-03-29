export default function Stats() {
  return (
    <section className="bg-dark text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Big number */}
        <div className="flex flex-col gap-4">
          <p className="text-7xl md:text-8xl lg:text-9xl font-black text-white leading-none tracking-tight">
            1200+
          </p>
          <p className="text-xl md:text-2xl text-white/60 font-medium">
            Products Got Sold Last Month
          </p>
        </div>

        {/* Quote */}
        <div className="flex flex-col gap-6">
          <div className="w-10 h-1 bg-accent rounded-full" />
          <p className="font-serif italic text-2xl md:text-3xl text-white/80 leading-relaxed">
            "At Essential, we believe beauty should feel effortless and
            empowering."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">
              E
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Essential Team</p>
              <p className="text-xs text-white/50">Brand Philosophy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
