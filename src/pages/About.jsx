import connorImg from '../assets/connor.webp'
import { Link } from 'react-router-dom'

const credentials = [
  {
    category: 'Education',
    items: [
      { title: 'Master of Science — Kinesiology', subtitle: 'Illinois State University' },
      { title: 'Bachelor of Science — Athletic Training', subtitle: 'Oklahoma State University' },
    ],
  },
  {
    category: 'Certifications',
    items: [
      { title: 'Certified Personal Trainer', subtitle: 'CPT-NCSF' },
      { title: 'Corrective Exercise Specialist', subtitle: 'CES' },
      { title: 'Athletic Trainer Certified', subtitle: 'ATC' },
      { title: 'CPR / AED Certified', subtitle: 'American Heart Association — BLS' },
    ],
  },
]

const research = [
  {
    title: 'Return-to-Sport Criteria After ACL Reconstruction',
    summary: 'Evidence supporting objective criteria-based return to sport decisions over time-based clearance to reduce re-injury risk.',
  },
  {
    title: 'Neuromuscular Training & Injury Prevention',
    summary: 'Research demonstrating the effectiveness of neuromuscular training programs in reducing lower extremity injury rates in athletes.',
  },
  {
    title: 'The Role of Strength & Power in Athletic Performance',
    summary: 'Studies linking maximal strength and reactive strength development to improved sport performance outcomes post-rehabilitation.',
  },
]

export default function About() {
  return (
    <div className="pt-16">

      {/* Bio — full gradient navy */}
      <section className="relative overflow-hidden py-12 md:py-24" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3B72C8_0%,_transparent_60%)] opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">The Coach</p>
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight max-w-2xl mb-2">Connor Gearhart</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

            {/* Photo */}
            <div className="rounded-2xl overflow-hidden aspect-[4/5] flex items-center justify-center border border-white/20"
              style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
              <img
                src={connorImg}
                alt="Connor Gearhart"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.parentElement.innerHTML = '<span class="text-white/30 text-sm">Photo coming soon</span>'
                }}
              />
            </div>

            {/* Bio Text */}
            <div className="flex flex-col gap-8 text-white/80 text-lg leading-relaxed">
              <div>
                <h2 className="text-white font-bold text-2xl mb-4">A Vision for the Tulsa Community</h2>
                <p className="mb-4">
                  I believe that elite-level care shouldn't be reserved only for the pros. Every high school and college athlete in our city deserves the same precision and support as a Division I starter.
                </p>
                <p>
                  My career has focused on helping elite athletes return to sport from injury as quickly and safely as possible. I have long noticed a gap in the return to performance process and I can provide a much needed service to the Tulsa community by guiding you through what can be a stressful and cumbersome process.
                </p>
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl mb-4">The "Why"</h2>
                <p className="mb-6">I've seen firsthand how the injury process can shake an athlete's identity.</p>
                <p className="mb-4">I started this mobile practice because I wanted to provide a <strong className="text-white">bridge</strong>. By coming to you, I can work in your environment to build more than just muscle. We focus on:</p>
                <ul className="flex flex-col gap-3">
                  {[
                    'Mastering the mechanics of jumping, landing, and deceleration so you can trust your body again.',
                    '1-on-1 coaching that actually listens to your concerns and adapts to your daily progress.',
                    'Using my 10+ years of DI experience to ensure we are moving with purpose, not guesswork.',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A1E] mt-2.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6">I'm proud to be Tulsa's only mobile movement specialist, and I'm even prouder to help our local athletes regain their edge. <strong className="text-white">Let's get back to work.</strong></p>
              </div>
              <Link to="/contact" className="inline-block w-fit px-8 py-4 bg-[#C85A1E] hover:bg-[#E06830] text-white font-semibold rounded transition-colors duration-200">
                Let's Talk About Your Goals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#F5F5F0] border-t border-gray-200 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">Background</p>
            <h2 className="text-[#1B3A6B] font-bold text-4xl">Credentials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {credentials.map((group, i) => (
              <div key={i}>
                <h3 className="text-[#1B3A6B] font-bold text-sm tracking-widest uppercase mb-6 border-b border-gray-300 pb-3">{group.category}</h3>
                <ul className="flex flex-col gap-5">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A1E] mt-2 flex-shrink-0" />
                      <div>
                        <p className="text-[#1B3A6B] font-semibold">{item.title}</p>
                        <p className="text-gray-500 text-sm">{item.subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_#3B72C8_0%,_transparent_55%)] opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">Evidence-Based</p>
            <h2 className="text-white font-bold text-4xl mb-4">Rooted in Research</h2>
            <p className="text-white/70 text-lg max-w-2xl leading-relaxed">Every protocol we use is grounded in current sports science. Here are some of the foundational research areas that inform our approach.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {research.map((item, i) => (
              <div key={i} className="rounded-lg p-8 transition-all duration-200 hover:scale-[1.02] border border-white/20 hover:border-white/40"
                style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                <div className="w-8 h-1 rounded mb-6" style={{ background: 'linear-gradient(90deg, #C85A1E, #E06830)' }} />
                <h3 className="text-white font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
