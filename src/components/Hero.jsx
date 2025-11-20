import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect } from 'react'

function FloatingBean({ delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0.6, rotate: -10 }}
      animate={{ y: [0, -10, 0], rotate: [-10, 5, -10] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay }}
      className={`absolute ${className}`}
    >
      <svg width="28" height="42" viewBox="0 0 28 42" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.7 41.2c-3.9.2-7.7-2.5-10-6.8C-1 25.4 4.3 3.1 18.2.5c6.7-1.2 9.9 6.1 8.9 14.6-1.1 9.8-7.5 25.6-13.4 26.1z" fill="#6b4f3a" fillOpacity="0.4"/>
      </svg>
    </motion.div>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7])

  useEffect(()=>{
    // smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => { document.documentElement.style.scrollBehavior = '' }
  },[])

  return (
    <section id="home" ref={ref} className="relative min-h-[90vh] md:min-h-screen overflow-hidden bg-gradient-to-b from-cream-100 via-cream-50 to-white">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_500px_at_50%_-10%,rgba(255,255,255,0.7),transparent)]"/>
        <div className="absolute inset-0 backdrop-blur-[2px]"/>
      </motion.div>

      <div className="absolute inset-0 pointer-events-none">
        <FloatingBean className="left-8 top-24"/>
        <FloatingBean delay={1.2} className="right-12 top-40"/>
        <FloatingBean delay={2.4} className="left-1/3 bottom-16"/>
        <FloatingBean delay={0.6} className="right-1/4 bottom-24"/>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-24 md:pt-48">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="font-serif text-5xl md:text-7xl text-coffee-900 tracking-tight"
        >
          Where Warmth Meets Elegance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg md:text-xl text-coffee-700/80"
        >
          Savor artisan brews and delicate bites in a cozy, luxurious ambiance inspired by the golden glow of morning light.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6, ease: 'easeOut', delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a href="#menu" className="px-6 py-3 rounded-2xl bg-coffee-800 text-cream-50 shadow-lg shadow-coffee-800/10 hover:shadow-xl transition-all">
            Explore Menu
          </a>
          <a href="#about" className="px-6 py-3 rounded-2xl bg-white/70 backdrop-blur border border-white/60 text-coffee-900 hover:bg-white/80 transition-colors">
            Our Story
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
