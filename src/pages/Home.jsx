import Hero from '../home/Hero'

function Home() {
  return (
    <>
      <Hero />
      <section className="bg-gray-900 py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Join us <span className="italic text-amber-400">this Sunday</span>
          </h2>
          <p className="text-white/60 mb-8">
            We'd love to have you worship with us. No perfect church, just people
            pursuing Jesus together.
          </p>
          <button className="bg-amber-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-amber-300 transition-colors">
            Plan Your Visit
          </button>
        </div>
      </section>
    </>
  )
}

export default Home