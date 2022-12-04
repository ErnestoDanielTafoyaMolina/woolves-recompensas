import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../interface/components/Navbar';
import { AdminCataloguePage } from '../pages/AdminCataloguePage';
import { AdminUsersPage } from '../pages/AdminUsersPage';
import { CataloguePage, HistorialPage, NewProduct } from '../pages';


export const SystemRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path='catalogue' element ={<CataloguePage />} />
                <Route path='historial' element ={<HistorialPage />} />
                <Route path='admin-c' element = {<AdminCataloguePage />} />
                <Route path='admin-ul' element = {<AdminUsersPage />} />
                <Route path='new' element = { <NewProduct /> } />
                <Route path='product/:id' element = { <NewProduct /> } />

                <Route path='/*' element ={ <Navigate to="/catalogue" /> } />
            </Routes>
            <Toaster />
        </div>
    </>
  )
}
