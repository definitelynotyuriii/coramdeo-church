import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Ministries', path: '/ministries/kids' },
  { name: 'Give', path: '/give' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full max-w-6xl mx-auto px-6 pt-6">
      <div className="bg-white rounded-full shadow-sm px-6 h-16 flex items-center justify-between gap-8">
        <NavLink to="/" className="flex items-baseline gap-2 shrink-0">
          <span className="font-serif text-xl text-gray-900 whitespace-nowrap">CORAMDEO</span>
          <span className="hidden lg:inline text-[10px] tracking-widest text-gray-400 font-medium whitespace-nowrap">
            .
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Join us
          </NavLink>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white rounded-2xl shadow-sm mt-2 px-6 py-4 flex flex-col gap-3">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-gray-600 text-sm font-medium"
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-gray-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-1"
          >
            Join us
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar