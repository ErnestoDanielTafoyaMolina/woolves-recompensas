import React from 'react'
import { NavLink } from 'react-router-dom'
import { LoginNavbar } from '../components/LoginNavbar'

import '../themes/loginCard.css'
export const LoginPage = () => {
  return (
    <>
      <LoginNavbar />
      <form className='form-control'>
        <div className="card">
        <input 
            type="text" 
            className='form-control'
            placeholder='matricula@utags.edu.mx'
            name='email'/>
          <input 
            type="text" 
            className='form-control mt-2'
            placeholder='contraseña'
            name='pass'/>
          <NavLink 
            className="btn btn-success mt-2"
            to="/catalogue"
            >
            Ingresar
          </NavLink>
        </div>
      </form>
    </>
  )
}
