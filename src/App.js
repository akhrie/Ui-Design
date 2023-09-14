import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import MyNavbar from './Admins/NavBar';
import Sidebar from './Admins/Sidebar';
import Dashboard from './Admins/Dashboard';
import AddCandidate from './Admins/AddCandidate';
import Examination from './Admins/Examination';
import ManageAddCandidate from './Admins/ManageAddCandidate';
function App() {
  return (
    <div>
      <MyNavbar />
  <Sidebar/>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Dashboard />} />
          <Route path="AddCandidate" element={<AddCandidate />} />
          <Route path="ManageAddCandidate" element={<ManageAddCandidate/>} />
          <Route path="Examination" element={<Examination/>} />
          {/* Add more routes here */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
