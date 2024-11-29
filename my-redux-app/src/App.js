import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Component/login';
import Registration from './Component/registration';
import DashboardUser from './Component/dashboardUser';
import DashboardAdmin from './Component/dashboardAdmin';
import Login from './Component/login';

function App() {
  return (
    <BrowserRouter>  
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/dashboardUser" element={<DashboardUser />} />
        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />
        <Route path="*" element={<Navigate to="/" />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;


