import React, { useContext, useEffect } from 'react'
import { AdminCards } from '../components/AdminCards'
import { CreateModal } from '../components/CreateModal'
import { ProductContext } from '../context/ProdutctContext';
import { useProduct } from '../context/ProductProvider';
export const AdminCataloguePage = () => {
  
  const { products } = useContext(ProductContext);

  return (
    <>
          <h2>¿Qué vas a editar hoy?...</h2>
          <CreateModal/>
      <div className="Productos">
        {
          products.map( producto => (
            <AdminCards 
                  key={ producto._id }
                   description={ producto.description } 
                   img={producto.url}
                   price={producto.price}
                   titile={producto.product}/>
          ) )
        }
      </div>
    </>
  )
}
