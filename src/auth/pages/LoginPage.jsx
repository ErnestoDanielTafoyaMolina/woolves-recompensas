import React, { useContext } from 'react'
import { LoginNavbar } from '../components/LoginNavbar'

import '../../themes/navbar.css';
import '../../themes/loginCard.css';
import { AuthContext } from '../context/AutContext';
import { useNavigate } from 'react-router-dom';


export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogin = () => {

    const lastPath = localStorage.getItem('lastPath')|| '/';

    login('Ernesto Daniel');

    navigate(lastPath, {
        replace: true
    });
}
  return (
    <>
      <LoginNavbar />
      <form className='form-control'>
        <div className="card-login">
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
            <button 
            className="btn btn-success btn-lg btn-block mt-2"
            onClick={ onLogin }
            >Login
          </button>
        </div>
      </form>
    </>
  )
}
