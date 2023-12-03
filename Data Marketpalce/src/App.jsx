// // App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Contact from './component/Contact/Contact';
import BuyDatasetPage from './component/BuyDatasetPage/BuyDatasetPage';
import Team from './component/Team/Team';

function App() {
  const [userBlockchainAddress, setUserBlockchainAddress] = useState(null);

  const handleLogin = (blockchainAddress) => {
    // Update the state with the user's blockchain address
    setUserBlockchainAddress(blockchainAddress);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          {/* Pass onLogin callback to the Login component */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          {/* Pass userBlockchainAddress to the BuyDatasetPage component */}
          <Route
            path="/buy-dataset"
            element={<BuyDatasetPage userBlockchainAddress={userBlockchainAddress} />}
          />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
