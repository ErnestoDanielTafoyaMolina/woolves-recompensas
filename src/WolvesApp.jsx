import React from 'react'
import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';
import { ProductProvider } from './wolvesApp/context/ProductProvider'


export const WolvesApp = () => {
  return (
    <>
        <AuthProvider>
            <ProductProvider>
              <AppRouter />
            </ProductProvider>
        </AuthProvider>
    </>
  )
}
