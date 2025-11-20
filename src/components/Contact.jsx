import { motion } from 'framer-motion'

function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-900">Visit Us</h2>
          <p className="mt-4 text-coffee-800/80">123 Aurelia Ave, Sunlit District, Open daily 7am–9pm</p>
          <div className="mt-8 rounded-3xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
            <form className="grid gap-4">
              <input className="h-11 px-4 rounded-xl bg-cream-100/70 border border-white/60 focus:outline-none focus:ring-2 focus:ring-coffee-300" placeholder="Name"/>
              <input className="h-11 px-4 rounded-xl bg-cream-100/70 border border-white/60 focus:outline-none focus:ring-2 focus:ring-coffee-300" placeholder="Email"/>
              <textarea rows={4} className="px-4 py-3 rounded-xl bg-cream-100/70 border border-white/60 focus:outline-none focus:ring-2 focus:ring-coffee-300" placeholder="Message"/>
              <motion.button whileTap={{ scale: 0.98 }} className="h-11 rounded-xl bg-coffee-800 text-cream-50 shadow hover:shadow-md">Send</motion.button>
            </form>
          </div>
        </div>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="rounded-3xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1400&auto=format&fit=crop" alt="Map" className="w-full h-[420px] object-cover"/>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
