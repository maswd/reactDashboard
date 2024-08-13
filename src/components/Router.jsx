import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Customers from '../pages/Customers';
import Dashboard from '../pages/Dashboard';


const Router = () => {
    return (
        <Routes>
            <Route path='/customers' element={<Customers />} />
            <Route path='/' element={<Dashboard />} />
        </Routes>
    );
}

export default Router;
