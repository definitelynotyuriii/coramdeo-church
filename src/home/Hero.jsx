function Hero() {
  return (
    <section
      className="relative h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/images/Hero.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-px bg-amber-400" />
            <span className="text-amber-400 text-xs font-semibold tracking-widest">
              CORAMDEO CHRISTIAN CHURCH
            </span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
            Jesus <span className="italic text-amber-400">Christ</span>
          </h1>

          <p className="text-xl text-white/90 mb-4">
            Do everything in love.
          </p>

          <p className="text-white/70 mb-8">
            Coramdeo Christian Church, is church in Bugnay Tuao Cagayan,
            growing in faith, serving others, and living for the glory of God.
          </p>

          <div className="flex gap-4">
            <button className="bg-amber-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-amber-300 transition-colors">
              Plan Your Visit →
            </button>
            <button className="border border-white/40 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 text-xs tracking-widest text-center">
        SCROLL
        <div className="mt-1">↓</div>
      </div>
    </section>
  )
}

export default Hero