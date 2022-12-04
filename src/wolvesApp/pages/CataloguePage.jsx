import React, { useContext, useEffect } from 'react'
import { Cards } from '../components/Cards';


import '../../themes/globalCard.css';
import { ProductContext } from '../context/ProdutctContext';
import { useProduct } from '../context/ProductProvider';

export const CataloguePage = () => {

  const { products } = useContext(ProductContext);

  return (
    <>
      <h2>Hoy está disponible...</h2>
      <div className="Productos">
        {
          products ?
            products.map( producto => (
            <Cards 
              key={ producto._id }
              producto={ producto } />
          ) ):<h2>No hay productos disponibles</h2>
        }
      </div>
    </>
  )
}
