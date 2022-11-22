import { NavLink } from "react-router-dom"

import '../../themes/navbar.css'
export const LoginNavbar = () => {
  return (
    <>
    <nav className="navbar sticky-top">
        <div className="container-fluid">
            <NavLink
             to="/"
             className="navbar-brand ">WolvesRecompensas</NavLink>
        </div>
    </nav>
    </>
  )
}
