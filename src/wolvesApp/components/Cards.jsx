import { SolicitModal } from "./SolicitModal"


export const Cards = ({description, img, price, titile}) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <img src={ img } alt="imagen de un producto" />
          <div className="card-titile">{ titile }</div>
          <div className="card-text">{ description }</div>
          <div className="card-text">Precio: { price }</div>
          <SolicitModal />
        </div>
      </div>
    </>
  )
}
