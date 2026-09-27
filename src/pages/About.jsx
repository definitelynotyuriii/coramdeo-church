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
    <>
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <span className="text-amber-600 text-xs font-semibold tracking-widest">
          WHO WE ARE
        </span>
        <h2 className="font-serif text-4xl md:text-5xl text-gray-900 mt-3 mb-6">
          Our <span className="italic text-amber-600">Story</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
          Coram Deo Christian Church was founded on a simple conviction — that
          every part of life is lived before the face of God. We are a community
          of believers pursuing Christ together, welcoming anyone who wants to
          know Him more.
        </p>
      </section>

      <section className="bg-gray-50 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-amber-600 text-xs font-semibold tracking-widest">
              WHAT WE BELIEVE
            </span>
            <h2 className="font-serif text-4xl text-gray-900 mt-3">
              Our Core Values
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((v) => (
              <div key={v.title} className="text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-amber-400/10 border border-amber-400 flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                </div>
                <h3 className="font-serif text-xl text-gray-900 mb-3">
                  {v.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default About