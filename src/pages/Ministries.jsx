import { Link } from 'react-router-dom'

const ministries = [
  { name: 'Kids Ministry', path: '/ministries/kids', image: '/images/kidministry1.jpg' },
  { name: 'Music Ministry', path: '/ministries/music', image: '/images/MUSICMINISTRY.jpg' },
  { name: 'Youth Ministry', path: '/ministries/youth', image: '/images/youthministry1.jpg' },
]

function Ministries() {
  return (
    <section
      style={{ animation: 'ministriesFade 0.6s ease-out' }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <style>{`
        @keyframes ministriesFade {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Our Ministries</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {ministries.map((m) => (
          <Link
            key={m.path}
            to={m.path}
            className="group block bg-white rounded-[32px] shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={m.image}
              alt={m.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h2 className="font-serif text-2xl text-gray-900 group-hover:text-[#c49a4a] transition-colors">
                {m.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Ministries