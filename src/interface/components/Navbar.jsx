import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { AuthContext } from '../../auth'


import '../../themes/navbar.css'

export const Navbar = () => {

  const { login,user, logout  } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogout = () =>{
    logout();
    navigate(
      '/login',{
        replace:true
      }
    )
  }
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink 
          className="navbar-brand text-light"
          to="/catalogue"
          ><b>WolvesRecompensas</b>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink 
                className='nav-link text-light'
                to='/catalogue'
                >Catalogo
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className='nav-link text-light'
                to='/historial'
                >Historial
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink 
                className='nav-link text-light'
                to='/admin-c'
                >Admin
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className='nav-link text-light'
                to='/admin-ul'
                >Peticiones
              </NavLink>
            </li>

          </ul>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
            <ul className="navbar-nav ml-auto">
              <span className="nav-item nav-link text-light">
                { user.name } { user.points }wp
              </span>
              <button
                        className="nav-item nav-link btn text-light"
                        onClick={ onLogout }
                    >
                        Logout
                    </button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
