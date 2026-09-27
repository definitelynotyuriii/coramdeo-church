import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { name: 'HOME', path: '/' },
  { name: 'ABOUT', path: '/about' },
  { name: 'MINISTRIES', path: '/ministries/kids' },
  { name: 'GIVE', path: '/give' },
  { name: 'CONTACT', path: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border border-amber-400 flex items-center justify-center">
            <span className="text-amber-400 font-serif text-sm">CD</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-serif text-lg">CORAMDEO</p>
            <p className="text-amber-400/80 text-[10px] tracking-widest">CHRISTIAN CHURCH</p>
          </div>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-amber-400' : 'text-white/80 hover:text-amber-400'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <NavLink
          to="/contact"
          className="hidden md:inline-block bg-amber-400 text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-amber-300 transition-colors"
        >
          Plan Your Visit
        </NavLink>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden flex flex-col px-6 pb-6 gap-4 bg-gray-900/95">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className="text-white/90 text-base font-medium pt-2"
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-amber-400 text-gray-900 text-sm font-semibold px-6 py-2.5 rounded-full text-center mt-2"
          >
            Plan Your Visit
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar