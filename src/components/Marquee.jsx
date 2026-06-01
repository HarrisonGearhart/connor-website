import { useEffect, useRef } from 'react'

const items = [
  'Cleared ≠ Prepared',
  'No More Guesswork',
  'Expert Progression',
  'Return Stronger',
  'Science-Based Coaching',
  'Built for Tulsa Athletes',
]

export default function Marquee() {
  const trackRef = useRef(null)
  const posRef = useRef(0)
  const rafRef = useRef(null)
  const SPEED = 1.5 // pixels per frame — adjust this number only

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const halfWidth = track.scrollWidth / 2

    const tick = () => {
      posRef.current += SPEED
      if (posRef.current >= halfWidth) {
        posRef.current = 0
      }
      track.style.transform = `translateX(-${posRef.current}px)`
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="bg-[#C85A1E] py-3 overflow-hidden">
      <div ref={trackRef} className="flex whitespace-nowrap will-change-transform">
        <div className="flex flex-shrink-0">
          {items.map((item, i) => (
            <span key={`a-${i}`} className="text-white font-semibold text-sm tracking-widest uppercase mx-8">
              {item}<span className="mx-8 opacity-50">·</span>
            </span>
          ))}
        </div>
        <div className="flex flex-shrink-0" aria-hidden="true">
          {items.map((item, i) => (
            <span key={`b-${i}`} className="text-white font-semibold text-sm tracking-widest uppercase mx-8">
              {item}<span className="mx-8 opacity-50">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
