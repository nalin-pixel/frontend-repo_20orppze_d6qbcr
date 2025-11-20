import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import Specials from './components/Specials'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-cream-50 text-coffee-900">
      <Navbar />

      <main className="pt-16">
        <Hero />
        <Specials />
        <Menu />
        <About />
        <Testimonials />
        <Contact />
      </main>

      <footer className="py-10 text-center text-coffee-700/70 bg-gradient-to-b from-cream-50 to-white">
        © {new Date().getFullYear()} Café Aurelia. All rights reserved.
      </footer>
    </div>
  )
}

export default App
