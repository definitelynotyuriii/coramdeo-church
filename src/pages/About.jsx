import { useState, useEffect, useRef } from 'react'

const values = [
  {
    title: 'Jesus Christ Our Savior',
    desc: 'We believe that Jesus Christ is the Son of God and our Lord and Savior. Through His life, death, and resurrection, we receive forgiveness of sins and the hope of eternal life. We place our faith in Him and seek to follow His teachings.',
  },
  {
    title: 'Community',
    desc: 'We grow best together through small groups, fellowship, and walking through life side by side.',
  },
  {
    title: 'Service',
    desc: 'Faith becomes real when it moves outward serving our church, our city, and the world.',
  },
  
]

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

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        {/* Story card */}
        <Reveal
          direction="up"
          className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 md:p-16"
        >
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text */}
            <div>
              <Reveal direction="left" delay={150}>
                <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                  WHO WE ARE
                </span>
              </Reveal>
              <Reveal direction="left" delay={300}>
                <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-6xl md:text-6xl leading-[1.05] font-medium">
                  Our <span>Story</span>
                </h1>
              </Reveal>
              <Reveal direction="left" delay={450}>
                <p className="mt-6 max-w-[38rem] text-md leading-8 text-slate-500">
                  Coramdeo Christian Church Tuao was founded on September 27, 2011, under the leadership of Ptr. Dominga Perez.
                  From the beginning, the church has been built on a simple conviction that every part of life is lived before the face of God.
                  We are a community of believers pursuing Christ together, welcoming anyone who desires to know Him more and grow in faith.
                </p>
              </Reveal>
            </div>

            {/* Pastor image */}
            <Reveal
              direction="right"
              delay={300}
              className="relative mx-auto w-full max-w-xs md:ml-auto md:mr-0"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-[28px] border border-slate-200/80 bg-slate-100 shadow-sm">
                <img
                  src="/images/PTRADOMINGAA.png"
                  alt="Ptr. Dominga Perez, founding pastor of Coramdeo Christian Church Tuao"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-4 text-center text-sm text-slate-500">
                <span className="font-medium text-[#26364a]">Ptr. Dominga Perez</span>
                <span className="mx-2">·</span>
                Founding Pastor
              </p>
              <div className="mt-3 flex justify-center">
                <a
                  href="https://www.facebook.com/dominga.perez.35110"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow Ptr. Dominga Perez on Facebook"
                  className="group inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-white pl-1.5 pr-4 py-1.5 shadow-sm hover:border-[#1877F2] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2] text-white group-hover:scale-110 transition-transform duration-300">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971h-1.513c-1.491 0-1.956.931-1.956 1.886v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold text-[#26364a] group-hover:text-[#1877F2] transition-colors">
                    Facebook
                  </span>
                </a>
              </div>
            </Reveal>
          </div>
        </Reveal>

        {/* Core values */}
        <div className="mt-5">
          <Reveal direction="up">
            <div className="px-2 pt-10 pb-6">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                WHAT WE BELIEVE
              </span>
              <h2 className="mt-3 font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-medium">
                Our Core Values
              </h2>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} direction="zoom" delay={i * 180}>
                <div className="h-full rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-10 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#26364a]/5 border border-[#26364a] flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#26364a]" />
                  </div>
                  <h3 className="mt-6 font-['Cormorant_Garamond',serif] text-2xl font-medium">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About