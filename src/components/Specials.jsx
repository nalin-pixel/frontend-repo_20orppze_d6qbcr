import { useEffect, useRef } from 'react'

const specials = [
  { id: 1, name: 'Maple Latte', tag: 'New', img: 'https://images.unsplash.com/photo-1453614512568-c4024d13c247?q=80&w=1200&auto=format&fit=crop' },
  { id: 2, name: 'Pistachio Biscotti', tag: 'Chef\'s pick', img: 'https://images.unsplash.com/photo-1541976076758-347942db1970?q=80&w=1200&auto=format&fit=crop' },
  { id: 3, name: 'Lavender Honey Tea', tag: 'Seasonal', img: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?q=80&w=1200&auto=format&fit=crop' },
  { id: 4, name: 'Caramel Affogato', tag: 'Best seller', img: 'https://images.unsplash.com/photo-1523287562758-66c7fc58967f?q=80&w=1200&auto=format&fit=crop' },
  { id: 5, name: 'Berry Danish', tag: 'Fresh', img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop' },
]

function Specials() {
  const railRef = useRef(null)
  useEffect(() => {
    const el = railRef.current
    if (!el) return
    let raf
    let offset = 0
    const step = () => {
      offset -= 0.5
      el.style.transform = `translateX(${offset}px)`
      if (Math.abs(offset) > el.scrollWidth / 2) offset = 0
      raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section id="specials" className="relative py-20 bg-gradient-to-b from-cream-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-coffee-900">Today's Specials</h2>
          <p className="mt-3 text-coffee-700/80">A rotating selection of seasonal delights and barista creations.</p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none"/>
        <div className="whitespace-nowrap will-change-transform" ref={railRef}>
          {[...specials, ...specials].map((s, i) => (
            <div key={i} className="inline-block mx-3 align-top">
              <div className="w-[280px] h-[380px] rounded-3xl overflow-hidden bg-white/70 backdrop-blur border border-white/60 shadow-[0_10px_40px_rgba(0,0,0,0.06)]">
                <div className="h-64">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover"/>
                </div>
                <div className="p-4">
                  <p className="text-sm text-coffee-700/60">{s.tag}</p>
                  <h3 className="text-lg font-semibold text-coffee-900">{s.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specials
