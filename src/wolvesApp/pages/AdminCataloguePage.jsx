import React, { useContext, useEffect } from 'react'
import { AdminCards } from '../components/AdminCards'
import { ProductContext } from '../context/ProdutctContext';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { GrAddCircle } from 'react-icons/gr';
export const AdminCataloguePage = () => {
  
  const { products } = useContext(ProductContext);
  const navigate = useNavigate();
  return (
    <>
      <h2>¿Qué vas a editar hoy?...</h2>
      <button className='btn btn-success' onClick={()=> navigate('/new')}>
        <GrAddCircle/>Nuevo
      </button>
      <div className="Productos">
        {
          products.map( product => (
            <AdminCards 
                  
                  product={ product }
                  key={ product._id }/>
          ) )
        }
      </div>
    </>
  )
}
