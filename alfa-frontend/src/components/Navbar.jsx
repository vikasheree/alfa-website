import './Navbar.css'
import logo from '../assets/HOME/Alfa Logo.png'
import serviceLogo from '../assets/HOME/24 year service png.png'

import { useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false)
  const [searchText, setSearchText] = useState('')
  const [products, setProducts] = useState([])

  const navigate = useNavigate()

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {

    async function loadSearchProducts() {

      try {

        const divisionIds = [1, 2, 3, 4]

        const responses = await Promise.all(
          divisionIds.map(id =>
            fetch(`http://localhost:8080/api/divisions/${id}`)
          )
        )

        const divisions = await Promise.all(
          responses.map(response => {

            if (!response.ok) {
              throw new Error('Failed to load products')
            }

            return response.json()

          })
        )

        const allProducts = []

        divisions.forEach((division, index) => {

          const divisionRoutes = {
            1: '/industrial-automation',
            2: '/heating',
            3: '/duro-mats',
            4: '/solar'
          }

          const route = divisionRoutes[divisionIds[index]]

          ;(division.categories || []).forEach(category => {

            ;(category.products || [])
              .filter(product => product.isActive)
              .forEach(product => {

                allProducts.push({
                  id: product.id,
                  name: product.name,
                  slug: product.slug,
                  route: route
                })

              })

          })

        })

        setProducts(allProducts)

      } catch (error) {

        console.error('Failed to load search products:', error)

      }

    }

    loadSearchProducts()

  }, [])

  const searchResults = searchText.trim()
    ? products
        .filter(product =>
          product.name
            .toLowerCase()
            .includes(searchText.trim().toLowerCase())
        )
        .slice(0, 8)
    : []

  const createSlug = (name) => {

    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')

  }

  const handleProductClick = (product) => {

    const slug = product.slug || createSlug(product.name)

    navigate(`${product.route}?product=${slug}`)

    setSearchText('')
    closeMenu()

  }

  const handleSearchKeyDown = (event) => {

    if (event.key === 'Enter' && searchResults.length > 0) {
      handleProductClick(searchResults[0])
    }

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
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            onKeyDown={handleSearchKeyDown}
          />

          <button
            type="button"
            onClick={() => {

              if (searchResults.length > 0) {
                handleProductClick(searchResults[0])
              }

            }}
          >
            ⌕
          </button>


          {/* SEARCH RESULTS */}
          {searchText.trim() && (
            <div className="navbar-search-results">

              {searchResults.length > 0 ? (

                searchResults.map(product => (

                  <button
                    key={`${product.route}-${product.id}`}
                    type="button"
                    className="navbar-search-result"
                    onClick={() => handleProductClick(product)}
                  >
                    {product.name}
                  </button>

                ))

              ) : (

                <div className="navbar-search-no-results">
                  No products found
                </div>

              )}

            </div>
          )}

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