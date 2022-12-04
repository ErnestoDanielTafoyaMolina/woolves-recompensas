import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../interface/components/Navbar';
import { AdminCataloguePage } from '../pages/AdminCataloguePage';
import { AdminUsersPage } from '../pages/AdminUsersPage';
import { CataloguePage, HistorialPage } from '../pages/pages-index';


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

                <Route path='/*' element ={ <Navigate to="/catalogue" /> } />
            </Routes>
        </div>
    </>
  )
}
