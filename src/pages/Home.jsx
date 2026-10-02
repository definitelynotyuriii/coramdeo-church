import Hero, { getVerseOfTheDay } from '../home/Hero'

function Home() {
  const verse = getVerseOfTheDay()

  return (
    <>
      <Hero />

      <section id="verse-of-the-day" className="max-w-6xl mx-auto px-6 pb-6 scroll-mt-6">
        <div className="bg-white rounded-3xl shadow-sm p-10">
          <div className="flex justify-between items-start mb-6">
            <div />
            <span className="text-[10px] tracking-widest text-gray-400">
              VERSE OF THE DAY
            </span>
          </div>

          <p className="font-serif text-2xl md:text-3xl text-gray-900 leading-snug mb-6 max-w-xl">
            "{verse.text}"
          </p>

          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-amber-400" />
            <span className="text-gray-600 text-sm">{verse.ref}</span>
          </div>

          <p className="text-gray-500 text-sm max-w-lg">
            A new verse is chosen for each day, drawn from the whole of
            Scripture, to be read slowly and kept close through the hours
            ahead.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl shadow-sm p-10">
            <span className="text-amber-600 text-xs font-semibold tracking-widest">
              OUR MISSION
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mt-3 mb-4 leading-snug">
              To love God and love our neighbor, faithfully and without
              reservation.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We exist to worship the living God, to be formed by His Word,
              and to extend His grace to this city — one honest, unhurried
              conversation at a time.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-10">
            <span className="text-amber-600 text-xs font-semibold tracking-widest">
              OUR VISION
            </span>
            <h3 className="font-serif text-2xl md:text-3xl text-gray-900 mt-3 mb-4 leading-snug">
              A neighborhood gathered around the light.
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              We see a congregation where every person is known, where
              Scripture is central, and where the morning hope of the
              Gospel is carried home and shared beyond our doors.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home