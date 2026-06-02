import { Helmet } from "react-helmet-async"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Marquee from '../components/Marquee'

const faqs = [
  {
    question: 'Who is this for?',
    answer: 'Anyone looking to improve their movement quality and return to the activities they love. While we primarily focus on high school and college athletes looking to improve performance post-injury, we can help anyone — athletes, weekend warriors, or anyone in between — return to normal function.',
  },
  {
    question: 'How do I get started?',
    answer: 'Getting started is simple. Fill out the contact form or reach out via email and we will walk you through the next steps. We start with a free 15-minute consultation to make sure we are a good fit and to map out your goals.',
  },
  {
    question: 'What makes you different?',
    answer: "This is not a cookie-cutter PT program. Our coaching is rooted in connection, science, and improving your day-to-day function alongside your long-term goals. Having someone hold you accountable throughout the process is a key factor in a smooth return — and that's exactly what we provide.",
  },
  {
    question: 'How can I contact you?',
    answer: 'You can reach us anytime via the contact form on this site or directly at gearhartperformance@gmail.com. We aim to respond within one business day.',
  },
  {
    question: 'How does the strength training portion work?',
    answer: 'You will be provided access to a professional training platform where Connor will build out a personalized blueprint for your progress in the gym. You will have an exact progression path so there is no guesswork — and we save our in-person sessions for high-intensity on-field work.',
  },
  {
    question: 'Do you offer remote options?',
    answer: 'Yes. Our Online Strength Only package is fully virtual and includes a personalized strength plan plus accountability support via text. For athletes outside Tulsa or those with unpredictable schedules, we can build a hybrid approach that fits your life.',
  },
  {
    question: 'Where do sessions take place?',
    answer: 'We are fully mobile — our office is your field or gym. We come to a location near you that you are familiar with. This allows ample space to continue your post-injury preparation in an environment where you already feel comfortable.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="pt-16"><Helmet><title>FAQ | Tulsa Movement Coaching</title><meta name="description" content="Frequently asked questions about post-injury performance coaching with Tulsa Movement Coaching." /></Helmet>

      {/* Header */}
      <section className="relative py-12 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3B72C8_0%,_transparent_60%)] opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">Questions</p>
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight max-w-2xl mb-6">Frequently Asked Questions</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">Everything you need to know before getting started. Don't see your question? Reach out directly.</p>
        </div>
      </section>

      <Marquee />

      {/* Accordion on gradient background */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#3B72C8_0%,_transparent_55%)] opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden transition-all duration-300"
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: isOpen ? '1.5px solid #C85A1E' : '1.5px solid rgba(255,255,255,0.15)',
                    boxShadow: isOpen ? '0 4px 24px rgba(200,90,30,0.15)' : 'none',
                  }}
                >
                  <button onClick={() => toggle(i)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4">
                    <span className="text-white font-semibold text-base">{faq.question}</span>
                    <span className={`text-[#C85A1E] text-xl font-bold flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                  </button>
                  <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-6 pb-6 text-white/70 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #C85A1E 0%, #E06830 50%, #C85A1E 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#E8823A_0%,_transparent_60%)] opacity-50" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-white font-bold text-4xl mb-4">Still Have Questions?</h2>
          <p className="text-white/80 text-lg mb-8">Reach out directly and Connor will get back to you within one business day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="px-10 py-4 bg-white text-[#C85A1E] font-bold rounded hover:bg-[#F5F5F0] transition-colors duration-200">Contact Us</Link>
            <a href="mailto:gearhartperformance@gmail.com" className="px-10 py-4 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-[#C85A1E] transition-colors duration-200">Send an Email</a>
          </div>
        </div>
      </section>

    </div>
  )
}
