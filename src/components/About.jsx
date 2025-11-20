import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-white to-cream-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
        >
          <img src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJbnRlcmlvcnxlbnwwfDB8fHwxNzYzNjM3MzAyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Interior" className="w-full h-[420px] object-cover"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-900">Our Story</h2>
          <p className="mt-4 text-coffee-800/80 leading-relaxed">
            Inspired by the timeless elegance of European cafés, our space blends warm textures, gentle light, and thoughtful design. Every cup is a celebration of origin, craft, and community.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {['Single-origin beans','Handcrafted pastries','Sustainable sourcing'].map((t,i)=> (
              <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.1}} className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-4 text-coffee-900 shadow-sm">
                {t}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
