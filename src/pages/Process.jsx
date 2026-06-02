import { Helmet } from "react-helmet-async"
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

const steps = [
  {
    title: 'Plan',
    body: 'Everything starts with a conversation. We begin with a free 15-minute consultation to determine if we are a good fit. We will look at where you are today and your goals moving forward, ensuring you feel supported every step of the way. We will establish a clear purpose and a roadmap tailored specifically to your goals.',
  },
  {
    title: 'Foundational Strength',
    body: 'We begin by building a resilient physical base. We prioritize mastering essential movement patterns and developing the specialized strength required for your sport. This phase sets the groundwork for everything that follows.',
  },
  {
    title: 'Functional Movement',
    body: 'We take the work to the turf or gym to refine how you move in space. Through 1-on-1 coaching, we progress from foundational mechanics to sport-specific chaos drills. By introducing variable speeds and reactive demands in a controlled environment, we build the high-level coordination and reactive power you need.',
  },
  {
    title: 'Confident Return',
    body: 'We finalize your transition by testing your movement under maximum demands, ensuring you can handle the highest stakes of your sport. You will step back onto the field with complete trust in your body, fully prepared to compete at an elite level.',
  },
]

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % steps.length)
    }, 10000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pt-16"><Helmet><title>Our Process | Tulsa Movement Coaching</title><meta name="description" content="Learn how our 4-step process takes you from cleared to competition-ready. Plan, Foundational Strength, Functional Movement, Confident Return." /></Helmet>

      {/* Header */}
      <section className="relative bg-gradient-to-br from-[#1B3A6B] via-[#2554A0] to-[#1B3A6B] py-12 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3B72C8_0%,_transparent_60%)] opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">How It Works</p>
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight max-w-2xl mb-6">Our Process</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            A simple, thoughtful approach to bringing you from cleared to competition-ready. No guesswork — just expert progression built around you.
          </p>
        </div>
      </section>

      <Marquee />

      {/* Timeline */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#3B72C8_0%,_transparent_55%)] opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">

          <div className="relative flex flex-col">
            {steps.map((step, i) => {
              const isActive = activeStep === i
              const isCompleted = i < activeStep
              const isLast = i === steps.length - 1

              return (
                <div key={i} className="relative flex flex-col items-center">

                  {/* Card */}
                  <button
                    onClick={() => setActiveStep(i)}
                    className={`w-full rounded-3xl p-8 md:p-10 cursor-pointer transition-all duration-500
                      border shadow-lg
                      ${isActive
                        ? 'border-[#C85A1E] shadow-[0_8px_32px_rgba(200,90,30,0.25)] scale-[1.02]'
                        : 'border-white/20 hover:border-white/40 hover:scale-[1.01]'
                      }`}
                    style={{
                      background: isActive ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.08)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                    }}
                  >
                    <h3 className="font-bold text-2xl md:text-3xl mb-4 text-center text-white">
                      {step.title}
                    </h3>
                    <p className={`text-lg leading-relaxed text-center transition-colors duration-500 ${isActive ? 'text-white/90' : 'text-white/55'}`}>
                      {step.body}
                    </p>

                    {/* Progress bar inside active card */}
                    {isActive && (
                      <div className="mt-8 h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                          key={activeStep}
                          className="h-full bg-[#C85A1E] rounded-full"
                          style={{ animation: 'progress 10s linear forwards' }}
                        />
                      </div>
                    )}
                  </button>

                  {/* Connector line */}
                  {!isLast && (
                    <div className="relative w-px h-12 overflow-hidden my-1" style={{ background: 'rgba(255,255,255,0.2)' }}>
                      <div className={`absolute top-0 left-0 w-full bg-[#C85A1E] transition-all duration-700 ${isCompleted ? 'h-full' : 'h-0'}`} />
                    </div>
                  )}

                </div>
              )
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-10">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${activeStep === i ? 'bg-[#C85A1E] w-6' : 'bg-white/30 w-2.5 hover:bg-white/50'}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #C85A1E 0%, #E06830 50%, #C85A1E 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#E8823A_0%,_transparent_60%)] opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold text-4xl mb-4">Ready to Start?</h2>
          <p className="text-white/80 text-lg mb-8">Book a free 15-minute consultation and let's build your roadmap.</p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-white text-[#C85A1E] font-bold rounded hover:bg-[#F5F5F0] transition-colors duration-200"
          >
            Book a Free Consultation
          </Link>
        </div>
      </section>

    </div>
  )
}
