export default function Marquee() {
  const items = [
    'Cleared ≠ Prepared',
    'No More Guesswork',
    'Expert Progression',
    'Return Stronger',
    'Science-Based Coaching',
    'Built for Tulsa Athletes',
  ]

  const repeated = [...items, ...items]

  return (
    <div className="bg-[#C85A1E] py-3 overflow-hidden">
      <div className="flex whitespace-nowrap marquee-scroll">
        {repeated.map((item, i) => (
          <span key={i} className="text-white font-semibold text-sm tracking-widest uppercase mx-8">
            {item}
            <span className="mx-8 opacity-50">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
