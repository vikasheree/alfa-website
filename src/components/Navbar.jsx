import './Navbar.css'
import logo from '../assets/Alfa Logo.png'
import serviceLogo from '../assets/24 year service png.png'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <a href="/" className="navbar-logo">
          <img src={logo} alt="Alfa Control Systems" />
        </a>

        <nav className="navbar-menu">

  <a href="/" className="active">HOME</a>
  <a href="/industrial">INDUSTRIAL AUTOMATION</a>
  <a href="/heating">HEATING SOLUTIONS</a>
  <a href="/duro-mats">DURO MATS</a>
  <a href="/solar">SOLAR EQUIPMENTS</a>

</nav>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="I am looking for..."
          />
          <button type="button">⌕</button>
        </div>
        <div className="navbar-service">
    <img src={serviceLogo} alt="24 Years in Business" />
  </div>

      </div>
    </header>
  )
}

export default Navbar