import { useState } from 'react'

const VERSES = [
  { text: "Thou wilt shew me the path of life: in thy presence is fulness of joy; at thy right hand there are pleasures for evermore.", ref: "Psalm 16:11" },
  { text: "The LORD is my shepherd; I shall not want.", ref: "Psalm 23:1" },
  { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.", ref: "Proverbs 3:5-6" },
  { text: "I can do all things through Christ which strengtheneth me.", ref: "Philippians 4:13" },
  { text: "Fear thou not; for I am with thee: be not dismayed; for I am thy God: I will strengthen thee; yea, I will help thee.", ref: "Isaiah 41:10" },
  { text: "For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.", ref: "Jeremiah 29:11" },
  { text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", ref: "Romans 8:28" },
  { text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", ref: "Joshua 1:9" },
  { text: "Come unto me, all ye that labour and are heavy laden, and I will give you rest.", ref: "Matthew 11:28" },
  { text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", ref: "John 3:16" },
  { text: "God is our refuge and strength, a very present help in trouble.", ref: "Psalm 46:1" },
  { text: "Thy word is a lamp unto my feet, and a light unto my path.", ref: "Psalm 119:105" },
  { text: "Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.", ref: "Philippians 4:6" },
  { text: "They that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary.", ref: "Isaiah 40:31" },
  { text: "The LORD is my light and my salvation; whom shall I fear? the LORD is the strength of my life; of whom shall I be afraid?", ref: "Psalm 27:1" },
  { text: "For we walk by faith, not by sight.", ref: "2 Corinthians 5:7" },
  { text: "I will lift up mine eyes unto the hills, from whence cometh my help. My help cometh from the LORD, which made heaven and earth.", ref: "Psalm 121:1-2" },
  { text: "It is of the LORD's mercies that we are not consumed, because his compassions fail not. They are new every morning: great is thy faithfulness.", ref: "Lamentations 3:22-23" },
  { text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", ref: "Matthew 6:33" },
  { text: "And now abideth faith, hope, charity, these three; but the greatest of these is charity.", ref: "1 Corinthians 13:13" },
  { text: "Delight thyself also in the LORD; and he shall give thee the desires of thine heart.", ref: "Psalm 37:4" },
  { text: "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God.", ref: "Ephesians 2:8" },
  { text: "Now faith is the substance of things hoped for, the evidence of things not seen.", ref: "Hebrews 11:1" },
  { text: "O taste and see that the LORD is good: blessed is the man that trusteth in him.", ref: "Psalm 34:8" },
  { text: "Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.", ref: "John 14:6" },
  { text: "Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.", ref: "Romans 15:13" },
  { text: "Enter into his gates with thanksgiving, and into his courts with praise: be thankful unto him, and bless his name.", ref: "Psalm 100:4" },
  { text: "We love him, because he first loved us.", ref: "1 John 4:19" },
  { text: "And whatsoever ye do, do it heartily, as to the Lord, and not unto men.", ref: "Colossians 3:23" },
  { text: "He hath shewed thee, O man, what is good; and what doth the LORD require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?", ref: "Micah 6:8" },
]

// ===== EDIT YOUR VISIT INFO HERE =====
const VISIT_INFO = {
  services: [
    { day: "Sunday", time: "10:00 AM" },
    { day: "Saturday", time: "9:30 AM" },
  ],
  address: "Bugnay, Tuao, Cagayan",
  mapsQuery: "Bugnay, Tuao, Cagayan",
  expect: [
    "Warm welcome from our greeters",
    "Worship, prayer, and a message from the Word",
    "Come as you are — no dress code",
  ],
  contact: "", // e.g. "0917 123 4567" (leave empty to hide)
}
// =====================================

function getVerseOfTheDay() {
  const now = new Date()
  const startOfYear = new Date(now.getFullYear(), 0, 0)
  const dayOfYear = Math.floor((now - startOfYear) / 86400000)
  return VERSES[dayOfYear % VERSES.length]
}

function Hero() {
  const [showVerse, setShowVerse] = useState(false)
  const [showVisit, setShowVisit] = useState(false)
  const verse = getVerseOfTheDay()
  const todayLabel = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

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
              <button
                type="button"
                onClick={() => setShowVisit(true)}
                className="inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors cursor-pointer"
              >
                <span className="text-[10px]">◆</span> Plan your visit
              </button>
              <button
                type="button"
                onClick={() => setShowVerse(true)}
                className="rounded-full border border-slate-300 bg-white/60 text-sm font-medium px-5 py-3 hover:bg-white transition-colors cursor-pointer"
              >
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

      {/* Verse of the day modal */}
      {showVerse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={() => setShowVerse(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-[32px] bg-white p-10 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowVerse(false)}
              aria-label="Close"
              className="absolute top-5 right-6 text-2xl text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              ×
            </button>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
              Verse of the Day
            </span>
            <div className="mt-1 text-xs text-slate-400">{todayLabel}</div>
            <p className="mt-4 font-['Cormorant_Garamond',serif] text-2xl leading-9">
              {verse.text}
            </p>
            <div className="mt-4 text-sm text-slate-500">{verse.ref}</div>
          </div>
        </div>
      )}

      {/* Plan your visit modal */}
      {showVisit && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-6"
          onClick={() => setShowVisit(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-[32px] bg-white p-10 shadow-xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowVisit(false)}
              aria-label="Close"
              className="absolute top-5 right-6 text-2xl text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              ×
            </button>
            <span className="text-[11px] font-semibold tracking-[0.2em] text-[#c49a4a] uppercase">
              Plan Your Visit
            </span>
            <h2 className="mt-3 font-['Cormorant_Garamond',serif] text-3xl font-medium">
              We'd love to see you
            </h2>

            <div className="mt-6">
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Service Times
              </div>
              <div className="mt-2 space-y-1">
                {VISIT_INFO.services.map((s) => (
                  <div key={s.day} className="flex justify-between font-['Cormorant_Garamond',serif] text-xl">
                    <span>{s.day}</span>
                    <span>{s.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                Address
              </div>
              <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                {VISIT_INFO.address}
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                What to Expect
              </div>
              <ul className="mt-2 space-y-1 text-slate-600">
                {VISIT_INFO.expect.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[#c49a4a] text-[10px] mt-1.5">◆</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {VISIT_INFO.contact && (
              <div className="mt-6">
                <div className="text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                  Contact
                </div>
                <div className="mt-2 font-['Cormorant_Garamond',serif] text-xl">
                  {VISIT_INFO.contact}
                </div>
              </div>
            )}

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(VISIT_INFO.mapsQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#26364a] text-white text-sm font-semibold px-5 py-3 hover:bg-[#1c2a3a] transition-colors"
            >
              <span className="text-[10px]">◆</span> Get directions
            </a>
          </div>
        </div>
      )}
    </section>
  )
}

export default Hero