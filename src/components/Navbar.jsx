import './Navbar.css'
import logo from '../assets/HOME/Alfa Logo.png'
import serviceLogo from '../assets/HOME/24 year service png.png'

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
        >
          <img src={logo} alt="Alfa Control Systems" />
        </Link>


        {/* DESKTOP MENU */}
        <nav className="navbar-menu">

          <NavLink to="/" className="nav-home">
            HOME
          </NavLink>

          <NavLink
            to="/industrial-automation"
            className="nav-industrial"
          >
            INDUSTRIAL AUTOMATION
          </NavLink>

          <NavLink
            to="/heating"
            className="nav-heating"
          >
            HEATING SOLUTIONS
          </NavLink>

          <NavLink
            to="/duro-mats"
            className="nav-duro"
          >
            DURO MATS
          </NavLink>

          <NavLink
            to="/solar"
            className="nav-solar"
          >
            SOLAR EQUIPMENTS
          </NavLink>

        </nav>


        {/* SEARCH */}
        <div className="navbar-search">

          <input
            type="text"
            placeholder="I am looking for..."
          />

          <button type="button">
            ⌕
          </button>

        </div>


        {/* SERVICE LOGO */}
        <div className="navbar-service">

          <img
            src={serviceLogo}
            alt="24 Years in Business"
          />

        </div>


        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>

      </div>


      {/* MOBILE MENU */}
      <nav
        className={`navbar-mobile-menu ${
          menuOpen ? 'open' : ''
        }`}
      >

        <NavLink
          to="/"
          className="nav-home"
          onClick={closeMenu}
        >
          HOME
        </NavLink>

        <NavLink
          to="/industrial-automation"
          className="nav-industrial"
          onClick={closeMenu}
        >
          INDUSTRIAL AUTOMATION
        </NavLink>

        <NavLink
          to="/heating"
          className="nav-heating"
          onClick={closeMenu}
        >
          HEATING SOLUTIONS
        </NavLink>

        <NavLink
          to="/duro-mats"
          className="nav-duro"
          onClick={closeMenu}
        >
          DURO MATS
        </NavLink>

        <NavLink
          to="/solar"
          className="nav-solar"
          onClick={closeMenu}
        >
          SOLAR EQUIPMENTS
        </NavLink>

      </nav>

    </header>
  )
}

export default Navbar