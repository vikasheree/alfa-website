import './Navbar.css'
import logo from '../assets/Alfa Logo.png'
import serviceLogo from '../assets/24 year service png.png'

import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Alfa Control Systems" />
        </Link>

     <nav className="navbar-menu">

  <NavLink to="/" className="nav-home">
    HOME
  </NavLink>

  <NavLink to="/industrial-automation" className="nav-industrial">
    INDUSTRIAL AUTOMATION
  </NavLink>

  <NavLink to="/heating" className="nav-heating">
    HEATING SOLUTIONS
  </NavLink>

  <NavLink to="/duro-mats" className="nav-duro">
    DURO MATS
  </NavLink>

  <NavLink to="/solar" className="nav-solar">
    SOLAR EQUIPMENTS
  </NavLink>

</nav>
        <div className="navbar-search">
          <input
            type="text"
            placeholder="I am looking for..."
          />
          <button type="button">⌕</button>
        </div>

        <div className="navbar-service">
          <img
            src={serviceLogo}
            alt="24 Years in Business"
          />
        </div>

      </div>
    </header>
  )
}

export default Navbar