import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react'

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  {
    name: 'Ministries',
    path: '/ministries',
    children: [
      { name: 'Kids Ministry', path: '/ministries/kids' },
      { name: 'Music Ministry', path: '/ministries/music' },
      { name: 'Youth Ministry', path: '/ministries/youth' },
    ],
  },
  { name: 'Give', path: '/give' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="w-full max-w-6xl mx-auto px-6 pt-6">
      <div className="bg-white rounded-full shadow-sm px-6 h-16 flex items-center justify-between gap-8">
        <NavLink to="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/images/coramdeologo.png"
            alt="Coram Deo logo"
            className="h-7 w-7 object-contain"
          />
          <span className="font-serif text-xl text-gray-900 whitespace-nowrap">CORAMDEO</span>
          <span className="hidden lg:inline text-[10px] tracking-widest text-gray-400 font-medium whitespace-nowrap">
            .
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) =>
            link.children ? (
              <div key={link.name} className="relative group">
                <NavLink
                  to={link.path}
                  end
                  className={`text-sm font-medium transition-colors ${
                    pathname.startsWith('/ministries')
                      ? 'text-gray-900'
                      : 'text-gray-500 group-hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </NavLink>
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 hidden group-hover:block group-focus-within:block z-50">
                  <div className="bg-white rounded-2xl shadow-lg border border-slate-100 py-2 w-48">
                    {link.children.map((child) => (
                      <NavLink
                        key={child.path}
                        to={child.path}
                        className={({ isActive }) =>
                          `block px-5 py-2.5 text-sm font-medium transition-colors ${
                            isActive
                              ? 'text-gray-900 bg-slate-50'
                              : 'text-gray-500 hover:text-gray-900 hover:bg-slate-50'
                          }`
                        }
                      >
                        {child.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
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
            )
          )}
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
          {links.map((link) =>
            link.children ? (
              <div key={link.name} className="flex flex-col gap-3">
                <NavLink
                  to={link.path}
                  end
                  onClick={() => setOpen(false)}
                  className="text-gray-600 text-sm font-medium"
                >
                  {link.name}
                </NavLink>
                {link.children.map((child) => (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    onClick={() => setOpen(false)}
                    className="text-gray-500 text-sm font-medium pl-4"
                  >
                    {child.name}
                  </NavLink>
                ))}
              </div>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setOpen(false)}
                className="text-gray-600 text-sm font-medium"
              >
                {link.name}
              </NavLink>
            )
          )}
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