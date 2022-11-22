import React from 'react'
import { Cards } from '../components/Cards';
import { Navbar } from '../../interface/components/Navbar';

import '../../themes/globalCard.css';

export const CataloguePage = () => {
  return (
    <>
      <h2>Este será el catalogo</h2>
      <div className="Productos">
        <Cards  />
        <Cards  />
        <Cards  />
        <Cards  />
        <Cards  />
        <Cards  />
      </div>
    </>
  )
}
