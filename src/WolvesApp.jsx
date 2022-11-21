import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { ProductProvider } from './context/ProductProvider'
import { UserProvider } from './context/UserProvider'
import { CataloguePage, HistorialPage, LoginPage} from './pages/pages-index';

export const WolvesApp = () => {
  return (
    <>
    <UserProvider>
      <ProductProvider>
        <Routes>
          <Route path='/' element={ <LoginPage /> } />
          <Route path='/catalogue' element={ <CataloguePage /> } />
          <Route path='/historial' element={ <HistorialPage /> } />
          <Route path='/login' element={ <LoginPage /> } />

          <Route path='/*' element={<Navigate to='/login' />} />
        </Routes>
      </ProductProvider>
    </UserProvider>
    </>
  )
}
