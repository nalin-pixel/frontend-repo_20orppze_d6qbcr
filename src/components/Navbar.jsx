import { useState, useEffect } from 'react'
import { Menu, X, Coffee, CupSoda } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLink = (href, label) => (
    <a
      href={href}
      onClick={() => setOpen(false)}
      className="px-4 py-2 rounded-xl text-[15px] text-coffee-800/80 hover:text-coffee-900 transition-colors"
    >
      {label}
    </a>
  )

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-white/60 shadow-[0_8px_30px_rgba(0,0,0,0.08)]' : 'backdrop-blur-xl bg-white/30'} border-b border-white/40`}> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-2xl bg-white/70 backdrop-blur border border-white/60 shadow-sm flex items-center justify-center">
              <Coffee className="h-5 w-5 text-coffee-700" />
            </div>
            <span className="font-serif text-xl text-coffee-900">Café Aurelia</span>
          </a>

          <nav className="hidden md:flex items-center">
            {navLink('#menu', 'Menu')}
            {navLink('#specials', "Today's Specials")}
            {navLink('#about', 'About')}
            {navLink('#testimonials', 'Testimonials')}
            {navLink('#contact', 'Contact')}
          </nav>

          <button className="md:hidden h-10 w-10 rounded-xl bg-white/70 border border-white/60 flex items-center justify-center" onClick={() => setOpen(v=>!v)}>
            {open ? <X className="h-5 w-5 text-coffee-800"/> : <Menu className="h-5 w-5 text-coffee-800"/>}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4">
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-3 flex flex-col">
            {navLink('#menu', 'Menu')}
            {navLink('#specials', "Today's Specials")}
            {navLink('#about', 'About')}
            {navLink('#testimonials', 'Testimonials')}
            {navLink('#contact', 'Contact')}
            <a href="#contact" onClick={()=>setOpen(false)} className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-coffee-800 text-cream-50 shadow hover:shadow-md transition-shadow">
              <CupSoda className="h-4 w-4"/> Reserve a table
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
