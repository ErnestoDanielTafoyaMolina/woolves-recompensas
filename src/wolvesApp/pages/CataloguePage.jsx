import React from 'react'
import { Cards } from '../components/Cards';

const Productos = [
  {
    idProducto:1,
    nombreProducto:"Refresco",
    descProducto:"Valido por un refresco de 600 ml",
    precioProducto:15,
    img:"https://img.freepik.com/vector-gratis/lata-refresco-aluminio-sobre-blanco_1308-32368.jpg?w=740&t=st=1669150224~exp=1669150824~hmac=5f74be403fdb6534a350b0d45bf29a84e6abab6bdc4e3f0759295753fe5c3022",
  },
  {
    idProducto:2,
    nombreProducto:"Descuento en proxima mensualidad",
    descProducto:"Se supone que te dan un 25% de descuento en la proxima mensualidad pero...No se para que pedir esto si literal no te o van a dar",
    precioProducto:50,
    img:"https://img.freepik.com/vector-gratis/fondo-moderno-diseno-bandera-compras_1017-16285.jpg?1&w=740&t=st=1669150258~exp=1669150858~hmac=446deab1be455a3a3ad65d3f3f4de07364d3727c6b65abd22afe97ac82135c50",
  },
  {
    idProducto:3,
    nombreProducto:"Descuento en titulacion",
    descProducto:"Simon hijo, al rato ajajajajaja y es más, caro pa que te ilusiones al menos",
    precioProducto:200,
    img:"https://img.freepik.com/vector-gratis/universidad-estudiante-mortero-tapa-bordo-diploma_3446-334.jpg?w=740&t=st=1669150335~exp=1669150935~hmac=9415bba365c7486d7bba45be2d3bf280406fa3f136b5b1a69478f866cf916405",
  },
  {
    idProducto:4,
    nombreProducto:"Chicle",
    descProducto:"Son chicles, ni estan tan chidos",
    precioProducto:1,
    img:"https://img.freepik.com/foto-gratis/gumballs-colores_1368-5477.jpg?w=900&t=st=1669150168~exp=1669150768~hmac=f6005333a5918c38434eda2174d807fdc23d7339dae42959a333007bab189c2d",
  },
  {
    idProducto:5,
    nombreProducto:"Queso",
    descProducto:"En conclusion, queso",
    precioProducto:1,
    img:"https://img.freepik.com/vector-gratis/queso-maasdam-estilo-dibujos-animados_1308-79808.jpg?w=1060&t=st=1669150195~exp=1669150795~hmac=83dd8e5d166bee9ddd07281f023c172b1fa7434448d991203e84566193d087cf",
  },
  {
    idProducto:6,
    nombreProducto:"Pizza",
    descProducto:"Valido por una pizza",
    precioProducto:7,
    img:"https://img.freepik.com/foto-gratis/pizza-hawaiana_1203-2455.jpg?w=900&t=st=1669150050~exp=1669150650~hmac=f909921d846b98e9d4fbc6f0719bd1d406c9bfe5482cc476c171a005d75e0f39",
  },
]

import '../../themes/globalCard.css';

export const CataloguePage = () => {
  return (
    <>
      <h2>Hoy está disponible...</h2>
      <div className="Productos">
        {
          Productos.map( producto => (
            <Cards 
                  key={producto.idProducto}
                   description={producto.descProducto} 
                   img={producto.img}
                   price={producto.precioProducto}
                   titile={producto.nombreProducto}/>
          ) )
        }
      </div>
    </>
  )
}
