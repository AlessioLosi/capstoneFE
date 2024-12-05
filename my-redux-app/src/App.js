import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './Component/login';
import Registration from './Component/registration';
import DashboardUser from './Component/USER/dashboardUser';
import DashboardAdmin from './Component/ADMIN/dashboardAdmin';
import MainPage from './Component/MainPage';
import GestioneEventi from './Component/ADMIN/GestioneEventi';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import UserProfile from './Component/UserProfile';
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<MainPage />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/dashboardUser" element={<DashboardUser />} />
        <Route path="/gestioneEventi" element={<GestioneEventi/>} />
        <Route path="/profilo" element={<UserProfile/>} />
        <Route path="/dashboardUser" element={<DashboardUser />} />

        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
