import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';
import { ProductProvider } from './wolvesApp/context/ProductProvider'
import { UserProvider } from './wolvesApp/context/UserProvider'


export const WolvesApp = () => {
  return (
    <>
        <AuthProvider>
          <UserProvider>
            <ProductProvider>
              <AppRouter />
            </ProductProvider>
          </UserProvider>
        </AuthProvider>
    </>
  )
}
