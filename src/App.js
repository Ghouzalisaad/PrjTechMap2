import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Registration from './components/Register';
import Login from './components/Login';
import Friends from './components/Friends';
import Position from './components/Position';
import CurrentUser from './components/CurrentUser';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/Position" element={<Position />} />
        <Route path="/profile" element={<CurrentUser />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
