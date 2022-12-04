import React from 'react'

export const EmailModal = () => {
  return (
    <>
      <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#emailModal">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
          </svg> responder
      </button>

        <div className="modal fade" id="emailModal" tabIndex="-1" aria-labelledby="emailModalLabel" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="emailModalLabel">Responde amablemente</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <form>
                    <div className="form-group mt-2">
                        <label htmlFor="description">Email</label>
                        <input type="email" className="form-control" name="description" placeholder="matricula@utags.edu.mx" />
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="name">Su peticion ha sido</label>
                        <select name="status" id="">
                          <option value="refuse">Rechazada</option>
                          <option value="accepted">Aceptada</option>
                        </select>
                      </div>
                      <div className="form-group mt-2">
                        <label htmlFor="description">Por el siguiente motivo</label>
                        <input type="text" className="form-control" name="description" placeholder="Explique" />
                      </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Añadir</button>
                </div>
              </div>
          </div>
        </div>
    </>
  )
}
