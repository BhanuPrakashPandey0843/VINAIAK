import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css'; 
import LandingPage from './Pages/LandingPage';
import PricingPage from './Pages/PricingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/pricing" element={<PricingPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
