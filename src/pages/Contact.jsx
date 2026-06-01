import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Marquee from '../components/Marquee'

const SERVICE_ID = 'YOUR_SERVICE_ID'
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', sport: '', injury: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        phone: form.phone,
        sport: form.sport,
        injury: form.injury,
        message: form.message,
      }, PUBLIC_KEY)
      setStatus('success')
      setForm({ name: '', email: '', phone: '', sport: '', injury: '', message: '' })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <div className="pt-16">

      {/* Header */}
      <section className="relative py-12 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1B3A6B 0%, #2554A0 50%, #1B3A6B 100%)' }}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#3B72C8_0%,_transparent_60%)] opacity-40" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <p className="text-[#C85A1E] font-semibold text-sm tracking-widest uppercase mb-3">Get In Touch</p>
          <h1 className="text-white font-bold text-5xl md:text-6xl leading-tight max-w-2xl mb-6">Let's Talk About Your Goals</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">Start with a free 15-minute consultation. Fill out the form and Connor will reach out within one business day.</p>
        </div>
      </section>

      <Marquee />

      {/* Form + Info */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_380px] gap-16">

          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#1B3A6B] font-semibold text-sm">Full Name <span className="text-[#C85A1E]">*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="John Smith" className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2554A0] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#1B3A6B] font-semibold text-sm">Email Address <span className="text-[#C85A1E]">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="john@example.com" className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2554A0] transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#1B3A6B] font-semibold text-sm">Phone Number</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(918) 555-0000" className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2554A0] transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#1B3A6B] font-semibold text-sm">Sport / Activity</label>
                <input type="text" name="sport" value={form.sport} onChange={handleChange} placeholder="Soccer, Basketball, etc." className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2554A0] transition-colors" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#1B3A6B] font-semibold text-sm">Injury / Area of Focus</label>
              <input type="text" name="injury" value={form.injury} onChange={handleChange} placeholder="ACL, ankle sprain, general performance, etc." className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2554A0] transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#1B3A6B] font-semibold text-sm">Tell Us About Your Goals <span className="text-[#C85A1E]">*</span></label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Where are you in your recovery? What are you working towards?" className="border border-gray-300 rounded px-4 py-3 text-sm focus:outline-none focus:border-[#2554A0] transition-colors resize-none" />
            </div>
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded px-4 py-3 text-sm">
                Message sent! Connor will be in touch within one business day.
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 rounded px-4 py-3 text-sm">
                Something went wrong. Please try emailing directly at gearhartperformance@gmail.com.
              </div>
            )}
            <button type="submit" disabled={status === 'sending'} className="px-8 py-4 text-white font-bold rounded transition-colors duration-200 w-full sm:w-auto disabled:opacity-60"
              style={{ background: 'linear-gradient(135deg, #C85A1E, #E06830)' }}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="flex flex-col gap-8">
            <div className="rounded-lg p-8 text-white border border-white/20" style={{ background: 'linear-gradient(135deg, #1B3A6B, #2554A0)' }}>
              <h3 className="font-bold text-xl mb-6">Contact Info</h3>
              <ul className="flex flex-col gap-5 text-sm">
                <li>
                  <p className="text-white/50 uppercase tracking-widest text-xs mb-1">Email</p>
                  <a href="mailto:gearhartperformance@gmail.com" className="text-white hover:text-[#C85A1E] transition-colors">gearhartperformance@gmail.com</a>
                </li>
                <li>
                  <p className="text-white/50 uppercase tracking-widest text-xs mb-1">Location</p>
                  <p className="text-white">Tulsa, Oklahoma</p>
                  <p className="text-white/60 text-xs mt-1">Mobile — we come to you</p>
                </li>
                <li>
                  <p className="text-white/50 uppercase tracking-widest text-xs mb-1">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/connorgearhart/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#C85A1E] transition-colors">Connor Gearhart</a>
                </li>
              </ul>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-[#1B3A6B] font-bold text-lg mb-3">Free Consultation</h3>
              <p className="text-gray-600 text-sm leading-relaxed">Not sure if this is right for you? Start with a free 15-minute call. No commitment — just a conversation about where you are and where you want to be.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
