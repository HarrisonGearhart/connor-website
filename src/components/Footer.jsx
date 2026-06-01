import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="text-white/70 mt-auto" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex flex-col leading-tight mb-3">
              <span className="text-white font-bold text-lg tracking-wide">TULSA MOVEMENT</span>
              <span className="text-[#C85A1E] font-semibold text-xs tracking-widest uppercase">Coaching</span>
            </div>
            <p className="text-sm leading-relaxed">Post-injury performance coaching for Tulsa athletes. Where PT ends and performance begins.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Navigate</h4>
            <ul className="flex flex-col gap-2 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'Our Process', to: '/process' },
                { label: 'Services', to: '/services' },
                { label: 'About', to: '/about' },
                { label: 'FAQ', to: '/faq' },
                { label: 'Contact', to: '/contact' },
              ].map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors duration-200">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4">Contact</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a href="mailto:gearhartperformance@gmail.com" className="hover:text-white transition-colors duration-200">gearhartperformance@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/connorgearhart/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a>
              </li>
              <li className="text-white/50 text-xs mt-2">Tulsa, Oklahoma</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-xs text-white/40 flex flex-col md:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Gearhart Performance LLC. All rights reserved.</span>
          <span>Site by <span className="text-white/60">Harrison Gearhart</span></span>
        </div>
      </div>
    </footer>
  )
}
