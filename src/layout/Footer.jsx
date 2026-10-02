function Footer() {
  return (
    <footer className="mt-auto w-full max-w-6xl mx-auto px-6 pb-8 pt-16 font-['Inter',sans-serif] text-[#26364a]">
      <div className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur px-8 py-10 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Left */}
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] text-2xl leading-none">
              Coramdeo Christian Church
            </h2>
            <p className="mt-3 text-[10px] tracking-[0.2em] text-slate-500 uppercase">
              In the presence of GOD
            </p>
            <p className="mt-6 max-w-sm text-sm leading-6 text-slate-500">
              We would love to hear from you a question, a prayer, or simply
              to say hello.
            </p>
          </div>

          {/* Right */}
          <div className="md:text-right">
            <p className="text-[11px] tracking-[0.2em] text-slate-500 uppercase">
              Reach us
            </p>
            <div className="mt-3 space-y-2 text-sm">
              <p>coramdeochurch1@gmail.com</p>
              <p>Bugnay, Tuao, Cagayan Valley</p>
              <p>2441</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col gap-2 border-t border-slate-200 pt-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Coramdeo Christian Chuch</p>
          <p>PTR. DOMINGA PEREZ</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer