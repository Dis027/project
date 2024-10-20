import { useState } from 'react'
import Login from '../section/login/login';
import Register from '../section/login/register';
import { BrowserRouter as Router, Routes, Route ,Navigate } from 'react-router-dom';
import Landing from '../section/landing/landing';
import Cookies from 'js-cookie';

function App() {
  const isAuthenticated = () => {
    return Cookies.get('user') ? true : false;
  };

  return (
    <Router>
      <Routes>
      <Route 
          path="/signin" 
          element={isAuthenticated() ? <Navigate to="/" /> : <Login />} 
        />
        <Route 
          path="/register" 
          element={isAuthenticated() ? <Navigate to="/" /> : <Register />} 
        />
        <Route path="/" element={<Landing />} />

      </Routes>
    </Router>
  );
}

export default App
