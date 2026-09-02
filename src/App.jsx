import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Partners from './components/Partners'
import About from './components/About'
import Contact from './components/Contact'



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <a href="/request-quote" className="quote-button">
  Enquire Now
</a>
<Solutions />
<Partners />
<About />
<Contact />

<a
  href="#"
  className="whatsapp-button"
  aria-label="Let's Chat"
>
  <span className="whatsapp-icon">●</span>
  Let's Chat!
</a>
    </>
    
  )
}

export default App