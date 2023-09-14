import React from 'react';
import { Routes, Route } from 'react-router-dom/client';
import Sidebar from './Admins/Sidebar';
import MyNavbar from './Admins/NavBar';
import Dashboard from './Admins/Dashboard';
import AddCandidate from './Admins/AddCandidate';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/" element={<MyNavbar />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="/AddCandidate" element={<AddCandidate />} />
    </Routes>
  );
}

export default App;
