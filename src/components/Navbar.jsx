import { NavLink } from "react-router-dom"


import '../themes/navbar.css'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink 
          className="navbar-brand"
          to="/catalogue"
          >WolvesRecompensas
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className='nav-link'
                to='/catalogue'
                >Catalogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className='nav-link'
                to='/historial'
                >Historial
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className='nav-link'
                to='/'
                >Salir
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
