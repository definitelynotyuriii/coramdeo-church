function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8">
        {/* Hero grid */}
        <div className="grid gap-5 lg:grid-cols-[1.42fr_1fr]">
          {/* Left card */}
          <div className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 flex flex-col">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
              CHRISTIAN CHURCH
            </span>

            <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-6xl md:text-7xl leading-[1.05] font-medium">
              In the presence 
              <br />
              of God
            </h1>

            <p className="mt-6 max-w-[34rem] text-lg leading-8 text-slate-500">
              -You make know to me the path of life; in your presence there is fullness
              of joy at your right hand are pleasures forevermore.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors">
                <span className="text-[10px]">◆</span> Plan your visit
              </button>
              <button className="rounded-full border border-slate-300 bg-white/60 text-sm font-medium px-5 py-3 hover:bg-white transition-colors">
                Read today's verse
              </button>
            </div>

            <div className="mt-10 pt-6 border-t border-slate-200 grid grid-cols-3 gap-6">
              {[
                ["Sunday", "10:00 AM"],
                ["Saturday", "9:30 AM"],
                ["Address", "Bugnay, Tuao, Cagayan"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                    {label}
                  </div>
                  <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image + floating card */}
          <div className="relative min-h-[420px]">
            <div
              className="absolute inset-0 rounded-[32px] bg-cover bg-center shadow-sm"
              style={{ backgroundImage: "url('/images/Coramdeo.jpg')" }}
            />
            <div className="absolute -left-6 -bottom-6 w-64 rounded-3xl border border-white/60 bg-white/60 backdrop-blur-md p-4 shadow-lg">
              <div className="text-[11px] tracking-[0.15em] text-[#c49a4a] uppercase">
                Church Photo
              </div>
              <div className="mt-1 font-['Cormorant_Garamond',serif] text-lg">
                Sunday worship, 9:30 AM
              </div>
              <div className="mt-1 text-sm text-slate-500">
                Devotion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero