import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;