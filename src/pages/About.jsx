const values = [
  {
    title: 'Christ-Centered',
    desc: 'Every teaching, ministry, and decision flows from the truth of Scripture and the lordship of Jesus.',
  },
  {
    title: 'Community',
    desc: 'We grow best together — through small groups, fellowship, and walking through life side by side.',
  },
  {
    title: 'Service',
    desc: 'Faith becomes real when it moves outward — serving our church, our city, and the world.',
  },
]

function About() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-50 font-['Inter',sans-serif] text-[#26364a]">
      <div className="max-w-6xl mx-auto px-6 pt-8 pb-16">
        {/* Story card */}
        <div className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-12 md:p-16">
          <div className="grid items-center gap-12 md:grid-cols-2">
            {/* Text */}
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
                WHO WE ARE
              </span>
              <h1 className="mt-6 font-['Cormorant_Garamond',serif] text-6xl md:text-6xl leading-[1.05] font-medium">
                Our <span>Story</span>
              </h1>
              <p className="mt-6 max-w-[38rem] text-md leading-8 text-slate-500">
                Coramdeo Christian Church Tuao was founded on September 27, 2011, under the leadership of Ptr. Dominga Perez.
                From the beginning, the church has been built on a simple conviction that every part of life is lived before the face of God.
                We are a community of believers pursuing Christ together, welcoming anyone who desires to know Him more and grow in faith.
              </p>
            </div>

            {/* Pastor image */}
            <div className="relative mx-auto w-full max-w-xs md:ml-auto md:mr-0">
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
            </div>
          </div>
        </div>

        {/* Core values */}
        <div className="mt-5">
          <div className="px-2 pt-10 pb-6">
            <span className="text-[11px] font-semibold tracking-[0.2em] text-slate-500 uppercase">
              WHAT WE BELIEVE
            </span>
            <h2 className="mt-3 font-['Cormorant_Garamond',serif] text-4xl md:text-5xl font-medium">
              Our Core Values
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-[32px] border border-slate-200/80 bg-white/80 backdrop-blur p-10"
              >
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
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About