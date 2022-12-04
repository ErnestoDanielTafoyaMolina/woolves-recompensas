import React from 'react'
import { EmailModal } from './EmailModal'

export const UsersTable = () => {
  return (
    <>
        <table className="table">
        <thead>
            <tr>
                <th scope='col'>#</th>
                <th scope='col'>Usuario</th>
                <th scope='col'>Producto</th>
                <th scope='col'>Costo</th>
                <th scope='col'>Estatus</th>
                <th scope='col'>Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope='row'>1</th>
                <td>Ernesto Daniel</td>
                <td>Queso</td>
                <td>15wp</td>
                <td className='text-warning'>Pendiente</td>
                <td><EmailModal /></td>
            </tr>
            <tr>
                <th scope='row'>1</th>
                <td>Ricardo Raymundo</td>
                <td>Chicles</td>
                <td>15wp</td>
                <td className='text-warning'>Pendiente</td>
                <td><EmailModal /></td>
            </tr>
            <tr>
                <th scope='row'>1</th>
                <td>Mariana Rosas</td>
                <td>Descuento en titulacion</td>
                <td>15wp</td>
                <td className='text-warning'>Pendiente</td>
                <td><EmailModal /></td>
            </tr>
        </tbody>
    </table>
    </>
  )
}
