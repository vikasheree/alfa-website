import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#" className="navbar-logo">
          ALFA
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <ul className={`navbar-links ${menuOpen ? 'mobile-open' : ''}`}>
          <li><a href="#home">Home</a></li>
          <li><a href="#industrial">Industrial</a></li>
          <li><a href="#duro-mats">Duro Mats</a></li>
          <li><a href="#heaters">Heaters</a></li>
          <li><a href="#why-alfa">Why Alfa</a></li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar