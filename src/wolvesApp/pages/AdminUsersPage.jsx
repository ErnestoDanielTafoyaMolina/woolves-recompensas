import React from 'react'
import { UsersTable } from '../components/UsersTable'

export const AdminUsersPage = () => {
  return (
    <>
      <h2>Aqui está la lista de los usuarios que han pedido algún producto</h2>
      <h3>¡Contestales!</h3>
      <UsersTable />
    </>
  )
}
