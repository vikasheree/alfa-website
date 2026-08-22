import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <a href="#" className="navbar-logo">
          ALFA
        </a>

        <ul className="navbar-links">
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