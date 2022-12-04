import React, { useContext } from 'react'
import { LoginNavbar } from '../components/LoginNavbar'
import * as Yup from 'yup';
import '../../themes/navbar.css';
import '../../themes/loginCard.css';

import { AuthContext } from '../context/AutContext';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field,ErrorMessage } from 'formik';


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
      <Formik
        initialValues={{
          email:'',
          password:'',
        }}
        validationSchema={
          Yup.object({
          email:Yup.string().required("correo requerido"),
          password:Yup.string().required("contraseña requerida"),
        })}
        onSubmit={ onLogin }
      >
        <Form className='form-control'>
          <div className="card-login">
            <Field 
                type="text" 
                className='form-control'
                placeholder='matricula@utags.edu.mx'
                name='email'/>
                <ErrorMessage component="p" className='text-danger text-sm' name='email' 
            />
            <Field 
              type="text" 
              className='form-control mt-2'
              placeholder='contraseña'
              name='password'/>
              <ErrorMessage component="p" className='text-danger text-sm' name='password'
            />

              <button 
                type='submit'
                className="btn btn-success btn-lg btn-block mt-2"
                onClick={ onLogin }
              >Login
            </button>
          </div>
        </Form>
      </Formik>
    </>
  )
}
