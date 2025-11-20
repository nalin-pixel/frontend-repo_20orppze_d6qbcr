import { motion } from 'framer-motion'

const items = [
  { id: 1, name: 'Velvet Latte', desc: 'Silky microfoam over single-origin espresso', price: '$5.50', img: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Amber Cappuccino', desc: 'Balanced, bold, and beautifully textured', price: '$5.20', img: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Hazelnut Cortado', desc: 'Rich espresso tempered with warm milk', price: '$4.80', img: 'https://images.unsplash.com/photo-1503481766315-7a586b20f66f?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Rose Matcha', desc: 'Ceremonial-grade matcha with floral notes', price: '$5.90', img: 'https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Almond Croissant', desc: 'Buttery, flaky, and delicately sweet', price: '$4.20', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1200&auto=format&fit=crop' },
  { id: 6, name: 'Cocoa Torte', desc: 'Decadent dark chocolate with sea salt', price: '$6.40', img: 'https://images.unsplash.com/photo-1568051243858-02f5d9b85dcf?q=80&w=1200&auto=format&fit=crop' }
]

function Menu() {
  return (
    <section id="menu" className="relative py-20 bg-gradient-to-b from-white to-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-900">Our Menu</h2>
          <p className="mt-3 text-coffee-700/80 max-w-2xl">Crafted with care, served with warmth. Explore our signature beverages and patisserie selection.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-3xl overflow-hidden bg-white/70 backdrop-blur border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_15px_60px_rgba(0,0,0,0.08)] transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-500"/>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-coffee-900 text-lg">{item.name}</h3>
                    <p className="text-sm text-coffee-700/80 mt-1">{item.desc}</p>
                  </div>
                  <span className="text-coffee-800 font-medium bg-cream-100 px-3 py-1 rounded-full">{item.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu
