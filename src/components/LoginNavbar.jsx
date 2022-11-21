import { NavLink } from "react-router-dom"


export const LoginNavbar = () => {
  return (
    <>
    <nav className="navbar">
        <div className="container-fluid">
            <NavLink
             to="/"
             className="navbar-brand ">WolvesRecompensas</NavLink>
        </div>
    </nav>
    </>
  )
}
