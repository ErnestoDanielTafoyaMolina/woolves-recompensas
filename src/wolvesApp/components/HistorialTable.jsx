import React from 'react'

export const HistorialTable = () => {
  return (
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Producto</th>
                <th scope='col'>Costo </th>
                <th scope='col'>Estatus</th>
                <th scope='col'>Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope='row'>1</th>
                <td>Refresco</td>
                <td>15 wp</td>
                <td className='text-success'>Aceptado</td>
                <td><button className="btn btn-danger">Eliminar</button></td>
            </tr>
            <tr>
                <th scope='row'>2</th>
                <td>Descuento en proxima mensualidad</td>
                <td>50 wp</td>
                <td className='text-warning'>Pendiente</td>
                <td><button className="btn btn-warning">Cancelar</button></td>
            </tr>
            <tr>
                <th scope='row'>3</th>
                <td>Descuento en titulacion</td>
                <td>200 wp</td>
                <td><p className="text-danger">Rechazado</p></td>
                <td><button className="btn btn-danger">Eliminar</button></td>
            </tr>
        </tbody>
    </table>
  )
}
