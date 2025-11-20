import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const data = [
  { quote: 'The ambiance is like a warm hug—every detail feels intentional and soothing.', name: 'Elena M.' },
  { quote: 'Best latte art and the softest croissants. A perfect weekend ritual.', name: 'Noah R.' },
  { quote: 'Luxurious yet cozy. The kind of place you never want to leave.', name: 'Priya S.' },
]

function Testimonials() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const t = setInterval(()=> setIndex(i => (i+1)%data.length), 4000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-cream-100 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-coffee-900">What Guests Say</h2>
        <div className="mt-10 relative h-36">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <p className="text-xl md:text-2xl text-coffee-800/90 leading-relaxed max-w-3xl">“{data[index].quote}”</p>
              <p className="mt-4 text-coffee-700/70">— {data[index].name}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
