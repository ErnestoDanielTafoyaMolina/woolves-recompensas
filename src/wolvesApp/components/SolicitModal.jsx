import React from 'react'

export const SolicitModal = () => {
  return (
    <>
        <button type="button" className="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Canjear
        </button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Producto Solicitado</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                Has solicitado el producto ... ¿Seguro que lo quieres canjear?
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Mejor no...</button>
                <button type="button" className="btn btn-success" data-bs-dismiss="modal">Sí, canjear</button>
            </div>
            </div>
        </div>
        </div>
    </>
  )
}
