import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'
import imgMakel from '../assets/makel.webp'
import imgJess from '../assets/jess.webp'
import imgApplegate from '../assets/applegate.webp'
import imgBernal from '../assets/bernal.webp'
import imgKropp from '../assets/kropp.webp'

const testimonials = [
  {
    quote: "Connor took the time to really understand my movement deficiencies and supported me through my return to college soccer. That coaching and guidance still serves me as a professional soccer player.",
    name: "Makel Rasheed",
    detail: "Current: Indy 11 USL · Former: Xavier University",
    img: imgMakel,
  },
  {
    quote: "Recovering from an ACL tear, I reached a point where I was frustrated with my progress and desperate to get back on the field and feel like the soccer player I used to be. I started working with Connor and everything changed — he met me where I was, pushed me harder than I thought I could handle, and got me feeling like myself again. Connor is the perfect balance of patient when you need it and tough when you need it too. He is a wonderful person to have in your corner during what can be a very challenging time. Couldn't recommend him more highly.",
    name: "Jess Miller",
    detail: "Former: Xavier University",
    img: imgJess,
  },
  {
    quote: "When I tore my ACL I felt lost. Very thankful for Connor and his attention to detail in my rehab process. We set short term and long term goals and I never felt lost. He helped me return to play and have a great season.",
    name: "Will Applegate",
    detail: "Current: University of Tulsa",
    img: imgApplegate,
  },
  {
    quote: "Connor was the fundamental part in my recovery and made sure I was beyond prepared for my return. Thanks to him, I came back to full competitive play and have never looked back since.",
    name: "Fabrizio Bernal",
    detail: "Current: Xavier University · Former: San Antonio FC",
    img: imgBernal,
  },
  {
    quote: "Getting back on the field after an injury is stressful, but Connor made the whole process seamless. He was always accessible, guided me through the mental blocks, and made sure I never felt left in the dark about my progress.",
    name: "Dlyan Kropp",
    detail: "Current: Real Salt Lake 2 · Former: UNC Chapel Hill",
    img: imgKropp,
  },
]

export default function Home() {
  return (
    <div className="pt-16">

      {/* Hero */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3B72C8_0%,_transparent_60%)] opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 md:py-24">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-4">Tulsa Movement Coaching</p>
          <h1 className="text-white font-bold text-5xl md:text-7xl leading-tight max-w-3xl mb-6">
            One on One Post-Injury Performance Coaching
          </h1>
          <ul className="flex flex-col gap-2 mb-10">
            {[
              'D1 level performance delivered to your field',
              'Return stronger, not just cleared',
              'Where PT ends and performance begins',
              'Rooted in science, individualized approach',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-white/80 text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C85A1E] flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#C85A1E] hover:bg-[#E06830] text-white font-semibold rounded transition-colors duration-200 text-center">
              Book a Free Consultation
            </Link>
            <Link to="/process" className="px-8 py-4 border border-white/30 hover:border-white text-white font-semibold rounded transition-colors duration-200 text-center">
              See Our Process
            </Link>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Bridging the Gap */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">The Problem</p>
            <h2 className="text-[#1B3A6B] font-bold text-4xl leading-tight mb-6">Bridging the Performance Gap</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              There is a dangerous gap between being cleared and being competition-ready. Most athletes get stuck here — insurance visits run out and you're expected to return to sport before you feel 100%.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We exist to help local Tulsa athletes navigate this gap and provide a smooth transition back to high performance.
            </p>
            <Link to="/process" className="inline-block px-6 py-3 text-white font-semibold rounded transition-colors duration-200" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2554A0)' }}>
              See How It Works
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { title: 'Elite Model', body: 'In professional sports, bridging the gap from cleared to competition-ready is mandatory. We bring that same model to Tulsa.' },
              { title: 'Full Kinetic Chain', body: "We don't just treat symptoms — we optimize mechanics to build a more resilient athlete than you were before your injury." },
              { title: 'D1 Experience', body: 'With over a decade of Division One collegiate experience, we provide the intensity required to get you feeling like yourself again.' },
            ].map((card, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-lg p-6 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                <div className="w-8 h-1 rounded mb-3" style={{ background: 'linear-gradient(90deg, #C85A1E, #E06830)' }} />
                <h3 className="text-[#1B3A6B] font-bold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Person & Remote */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#3B72C8_0%,_transparent_55%)] opacity-30" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">Flexibility</p>
              <h2 className="text-white font-bold text-4xl leading-tight mb-6">In-Person and Remote Options</h2>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                Our office is your field or gym. We meet at your convenience at a location near you that you're already familiar with — giving us the space to continue your post-injury preparation the right way.
              </p>
              <p className="text-white/70 text-lg leading-relaxed mb-10">
                Can't make it in person? Our virtual strength programming keeps you on track from anywhere, with direct accountability and support built in.
              </p>
              <Link to="/services" className="inline-block px-6 py-3 bg-[#C85A1E] hover:bg-[#E06830] text-white font-semibold rounded transition-colors duration-200">
                View All Services
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { label: 'In-Person', desc: 'On your field, turf, or gym. We bring the coaching to you in a familiar environment built for performance.' },
                { label: 'Remote / Virtual', desc: 'Personalized strength programming delivered to your device with ongoing accountability via text.' },
                { label: 'Hybrid', desc: 'Combine in-person movement sessions with virtual strength programming for maximum flexibility and results.' },
              ].map((item, i) => (
                <div key={i} className="rounded-lg p-6 transition-all duration-200 hover:scale-[1.02] border border-white/20 hover:border-white/40"
                  style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}>
                  <h3 className="text-white font-bold text-lg mb-2">{item.label}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">Results</p>
          <h2 className="text-[#1B3A6B] font-bold text-4xl">What Athletes Are Saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col gap-4 shadow-sm transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
              <div className="flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0 border-2 border-[#C85A1E]"
                />
                <div>
                  <p className="text-[#1B3A6B] font-bold text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs leading-snug mt-0.5">{t.detail}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed flex-grow">
                <span className="text-[#C85A1E] font-bold text-base">"</span>
                {t.quote}
                <span className="text-[#C85A1E] font-bold text-base">"</span>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #C85A1E 0%, #E06830 50%, #C85A1E 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#E8823A_0%,_transparent_60%)] opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold text-4xl mb-4">Ready to Get Back to Work?</h2>
          <p className="text-white/80 text-lg mb-8">Stop guessing. Start training. Book a free 15-minute consultation today.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-[#C85A1E] font-bold rounded hover:bg-[#F5F5F0] transition-colors duration-200">
            Book a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
