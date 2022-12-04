import { SolicitModal } from "./SolicitModal"


export const Cards = ({producto}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
        <div className="card-titile"><h3>{ producto.product }</h3></div>
          {producto.image && <img src={ producto.image.url } alt={`imagen de ${producto.product}`} /> }
          <div className="card-text"><li><b>Descripcion:</b>{ producto.description }.  </li></div>
          <div className="card-text"><li><b>Precio:</b>{ producto.price } wp</li></div>
          <SolicitModal />
        </div>
      </div>
    </>
  )
}
