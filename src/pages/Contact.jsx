import { useState, useEffect, useRef } from 'react'

const CONTACT_INFO = {
  address: "Bugnay, Tuao, Cagayan",
  mapsQuery: "Bugnay, Tuao, Cagayan",
  facebook: "https://www.facebook.com/profile.php?id=61565906514332",
  email: "coramdeochurch1@gmail.com",
  services: [
    { day: "Sunday", time: "10:00 AM" },
  ],
}

// Scroll reveal: fades/slides/unblurs in when it enters the screen, replays every time
function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const hidden = {
    up: 'translateY(48px)',
    left: 'translateX(-56px)',
    right: 'translateX(56px)',
    zoom: 'scale(0.92)',
  }[direction]

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hidden,
        filter: visible ? 'blur(0px)' : 'blur(8px)',
        transition: `opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, filter 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: 'opacity, transform, filter',
      }}
    >
      {children}
    </div>
  )
}

function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        <Reveal
          direction="up"
          className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 md:p-16 text-center"
        >
          <Reveal delay={150}>
            <span className="text-[11px] font-semibold tracking-[0.4em] text-slate-500 uppercase">
              GET IN TOUCH
            </span>
          </Reveal>
          <Reveal delay={300}>
            <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-4xl md:text-5xl leading-[1.05] font-medium">
              Contact <span>Us</span>
            </h1>
          </Reveal>
          <Reveal delay={450}>
            <p className="mt-6 max-w-[40rem] mx-auto text-sm leading-4 text-slate-500">
              We'd love to hear from you. Reach out, call us, or visit us
              on a Sunday.
            </p>
          </Reveal>
        </Reveal>

        <Reveal
          direction="up"
          delay={150}
          className="mt-5 rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-8 md:p-10 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1.5fr_1fr] gap-8 text-center">
            <Reveal direction="zoom" delay={200}>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Address
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl md:whitespace-nowrap">
                {CONTACT_INFO.address}
              </div>
            </Reveal>

            <Reveal direction="zoom" delay={350}>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Facebook
              </div>
              <a
                href={CONTACT_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="group mt-2 inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white pl-1.5 pr-4 py-1.5 shadow-sm hover:border-[#1877F2] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white group-hover:scale-110 transition-transform duration-300">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                  </svg>
                </span>
                <span className="text-xs font-semibold text-[#26364a] group-hover:text-[#1877F2] transition-colors">
                  Visit our page
                </span>
              </a>
            </Reveal>

            <Reveal direction="zoom" delay={500}>
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Email
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl break-all">
                {CONTACT_INFO.email}
              </div>
            </Reveal>

            <Reveal direction="zoom" delay={650}>
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
            </Reveal>
          </div>

          <Reveal delay={800}>
            <div className="flex flex-wrap gap-3 pt-8 justify-center border-t border-slate-100 mt-8">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  CONTACT_INFO.mapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] hover:-translate-y-0.5 hover:shadow-lg transition-all"
              >
                <span className="text-[10px]">◆</span> Get directions
              </a>
            </div>
          </Reveal>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact