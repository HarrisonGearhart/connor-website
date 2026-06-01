import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Process', to: '/process' },
  { label: 'Services', to: '/services' },
  { label: 'About', to: '/about' },
  { label: 'FAQ', to: '/faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const navStyle = {
    background: 'linear-gradient(135deg, #1B3A6B, #2554A0)',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
    boxShadow: scrolled ? '0 4px 24px rgba(27,58,107,0.4)' : 'none',
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300" style={navStyle}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        <Link to="/" className="flex flex-col leading-tight">
          <span className="text-white font-bold text-lg tracking-wide">TULSA MOVEMENT</span>
          <span className="text-[#C85A1E] font-semibold text-xs tracking-widest uppercase">Coaching</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link key={link.to} to={link.to}
              className={`text-sm font-medium tracking-wide transition-colors duration-200 ${location.pathname === link.to ? 'text-[#C85A1E]' : 'text-white/80 hover:text-white'}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="ml-2 px-4 py-2 text-white text-sm font-semibold rounded transition-all duration-200 hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #C85A1E, #E06830)' }}>
            Book Now
          </Link>
        </div>

        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="border-t border-white/10 px-6 py-4 flex flex-col gap-4"
          style={{ background: 'linear-gradient(135deg, #1B3A6B, #2554A0)' }}>
          {links.map(link => (
            <Link key={link.to} to={link.to}
              className={`text-sm font-medium tracking-wide ${location.pathname === link.to ? 'text-[#C85A1E]' : 'text-white/80'}`}>
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="mt-2 px-4 py-2 text-white text-sm font-semibold rounded text-center"
            style={{ background: 'linear-gradient(135deg, #C85A1E, #E06830)' }}>
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  )
}
