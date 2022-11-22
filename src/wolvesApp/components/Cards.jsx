import { SolicitModal } from "./SolicitModal"


export const Cards = ({description, img, price, titile}) => {
  console.log(img);
  return (
    <>
      <div className="card">
        <div className="card-body">
        <div className="card-titile"><h3>{ titile }</h3></div>
          <img src={ img } alt={`imagen de ${titile}`} />
          <div className="card-text"><li><b>Descripcion:</b>{ description }.  </li></div>
          <div className="card-text"><li><b>Precio:</b>{ price } wp</li></div>
          <SolicitModal />
        </div>
      </div>
    </>
  )
}
