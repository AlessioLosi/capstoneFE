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
import PostPage from './Component/ADMIN/PostPage';
import AdminProfile from './Component/ADMIN/AdminProfile';
import UserProfile from './Component/USER/UserProfile';
import UserPostPage from './Component/USER/UserPostPage';
function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<MainPage />} />

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Registration />} />

        <Route path="/dashboardUser" element={<DashboardUser />} />
        <Route path="/gestioneEventi" element={<GestioneEventi/>} />
        <Route path="/profilo" element={<AdminProfile/>} />
        <Route path="/profiloUser" element={<UserProfile/>} />
        <Route path="/postUser" element={<UserPostPage/>} />
        <Route path="/dashboardUser" element={<DashboardUser />} />
        <Route path="/post" element={<PostPage/>} />

        <Route path="/dashboardAdmin" element={<DashboardAdmin />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
