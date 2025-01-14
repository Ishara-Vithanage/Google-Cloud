import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivayPolicy from './pages/PrivayPolicy';
import TermsOfService from './pages/TermsOfService';
import Login from './pages/Login';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/PrivayPolicy" element={<PrivayPolicy />} />
        <Route path="/TermsOfService" element={<TermsOfService />} />
        <Route path="/" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/SignUp" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;