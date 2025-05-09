import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import UploadSighting from './components/UploadSighting';
import Sightings from './components/Sightings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="nav" style={{ padding: '1rem', backgroundColor: '#f0f0f0' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Login</Link>
        <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link>
        <Link to="/upload" style={{ marginRight: '10px' }}>Upload Bee Sighting</Link>
        <Link to="/sightings">View Sightings</Link>
      </div>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<UploadSighting />} />
        <Route path="/sightings" element={<Sightings />} />
      </Routes>
    </Router>
  );
}

export default App;

