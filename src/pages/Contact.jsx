const CONTACT_INFO = {
  address: "Bugnay, Tuao, Cagayan",
  mapsQuery: "Bugnay, Tuao, Cagayan",
  facebook: "https://www.facebook.com/profile.php?id=61565906514332",
  email: "coramdeochurch1@gmail.com",
  services: [
    { day: "Sunday", time: "10:00 AM" },
  ],
}

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <div className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 md:p-16 text-center">
          <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
            GET IN TOUCH
          </span>
          <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-4xl md:text-4xl leading-[1.05] font-medium">
            Contact <span>Us</span>
          </h1>
          <p className="mt-6 max-w-[38rem] mx-auto text-base leading-4 text-slate-500">
            We'd love to hear from you. Reach out, call us, or visit us
            on a Sunday.
          </p>
        </div>

        <div className="mt-5 rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Address
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                {CONTACT_INFO.address}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Facebook
              </div>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 font-['Cormorant_Garamond',serif] text-xl block hover:underline"
              >
                Visit our page
              </a>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Email
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl break-all">
                {CONTACT_INFO.email}
              </div>
            </div>

            <div>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Service Times
              </div>
              <div className="mt-2 space-y-1">
                {CONTACT_INFO.services.map((s) => (
                  <div
                    key={s.day}
                    className="font-['Cormorant_Garamond',serif] text-xl"
                  >
                    {s.day} — {s.time}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 pt-8 justify-center border-t border-slate-100 mt-8">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                CONTACT_INFO.mapsQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors"
            >
              <span className="text-[10px]">◆</span> Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact