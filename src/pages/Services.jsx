import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

const packages = [
  {
    name: 'Online Strength Only',
    price: '$100',
    period: '/month',
    description: 'A fully virtual option for athletes who want structured, personalized programming they can follow on their own schedule.',
    features: [
      'Virtual at-home personalized strength plan',
      'Virtual accountability + support via text',
      'Custom program updated to your progress',
    ],
    highlight: false,
  },
  {
    name: 'Basic Session',
    price: '$100',
    period: '/hour',
    description: 'A single in-person session for a specific movement tune-up or assessment.',
    features: [
      '1-on-1 movement coaching',
      '60-minute in-person coaching session',
      'Goal setting and confidence building',
    ],
    highlight: false,
  },
  {
    name: 'Basic Performance',
    price: '$379',
    period: '/month',
    description: 'Our most popular entry point for athletes serious about bridging the gap consistently.',
    features: [
      '1-on-1 movement coaching',
      '1x in-person coaching session per week',
      'Virtual at-home personalized strength plan',
      'Virtual accountability + support via text',
    ],
    highlight: false,
  },
  {
    name: 'Advanced Performance',
    price: '$599',
    period: '/month',
    description: 'For athletes who want to accelerate their return with twice-weekly in-person sessions.',
    features: [
      '1-on-1 movement coaching',
      '2x in-person coaching sessions per week',
      'Virtual at-home personalized strength plan',
      'Virtual accountability + support via text',
    ],
    highlight: true,
  },
  {
    name: 'Elite Performance',
    price: '$850',
    period: '/month',
    description: 'Maximum frequency for athletes with a hard deadline or who demand elite-level output.',
    features: [
      '1-on-1 movement coaching',
      '3x in-person coaching sessions per week',
      'Virtual at-home personalized strength plan',
      'Virtual accountability + support via text',
    ],
    highlight: false,
  },
]

export default function Services() {
  return (
    <div className="pt-16">

      {/* Header */}
      <section className="relative py-12 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3B72C8_0%,_transparent_60%)] opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">Pricing</p>
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight max-w-2xl mb-6">Services & Packages</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Commitment and consistency produce results. All packages include a custom strength training program — movement sessions are in person, on your field or in your gym.
          </p>
        </div>
      </section>

      <Marquee />

      {/* Why Monthly */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Consistency', body: "We build a real progression that tracks your strength, speed, and movement quality over time. One session doesn't close the gap." },
            { title: 'Accountability', body: "You aren't just a name on the schedule — you're an athlete with goals we are working towards together." },
            { title: 'Better Value', body: 'Monthly athletes get priority scheduling and better rates. If your schedule is unpredictable, we can tailor a hybrid plan that fits.' },
          ].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-lg p-8 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
              <div className="w-8 h-1 rounded mb-4" style={{ background: 'linear-gradient(90deg, #C85A1E, #E06830)' }} />
              <h3 className="text-[#1B3A6B] font-bold text-xl mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">The Performance Path</p>
          <h2 className="text-[#1B3A6B] font-bold text-4xl">Choose Your Package</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`rounded-lg border flex flex-col transition-all duration-200 hover:scale-[1.02] hover:shadow-lg ${pkg.highlight ? 'border-[#C85A1E]' : 'border-gray-200 bg-white'}`}
              style={pkg.highlight ? { background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 100%)' } : {}}
            >
              {pkg.highlight && (
                <div className="text-white text-xs font-bold tracking-widest uppercase text-center py-2 rounded-t-lg" style={{ background: 'linear-gradient(90deg, #C85A1E, #E06830)' }}>
                  Most Popular
                </div>
              )}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className={`font-bold text-xl mb-1 ${pkg.highlight ? 'text-white' : 'text-[#1B3A6B]'}`}>{pkg.name}</h3>
                <div className="flex items-end gap-1 mb-4">
                  <span className={`font-bold text-4xl ${pkg.highlight ? 'text-white' : 'text-[#1B3A6B]'}`}>{pkg.price}</span>
                  <span className={`text-sm mb-1 ${pkg.highlight ? 'text-white/60' : 'text-gray-400'}`}>{pkg.period}</span>
                </div>
                <p className={`text-sm leading-relaxed mb-6 ${pkg.highlight ? 'text-white/70' : 'text-gray-500'}`}>{pkg.description}</p>
                <ul className="flex flex-col gap-3 flex-grow mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-[#C85A1E] mt-0.5 flex-shrink-0">✓</span>
                      <span className={`text-sm ${pkg.highlight ? 'text-white/80' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block text-center px-6 py-3 rounded font-semibold text-sm transition-colors duration-200 ${pkg.highlight ? 'bg-[#C85A1E] hover:bg-[#E06830] text-white' : 'text-white'}`}
                  style={!pkg.highlight ? { background: 'linear-gradient(135deg, #1B3A6B, #2554A0)' } : {}}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #C85A1E 0%, #E06830 50%, #C85A1E 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#E8823A_0%,_transparent_60%)] opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold text-4xl mb-4">Not Sure Which Package is Right?</h2>
          <p className="text-white/80 text-lg mb-8">Start with a free 15-minute consultation and we'll figure it out together.</p>
          <Link to="/contact" className="inline-block px-10 py-4 bg-white text-[#C85A1E] font-bold rounded hover:bg-[#F5F5F0] transition-colors duration-200">
            Book a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
