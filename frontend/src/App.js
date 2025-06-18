import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './component/Register/register';
import Login from './component/login/login';
import HomePage from './component/homepage/homepage';
import AdminPage from './admin/admin/admin';




function App() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
