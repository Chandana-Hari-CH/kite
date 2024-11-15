// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AccountPage from './components/AccountPage';
import FundsPage from './components/FundsPage';
import Profile from './components/Profile';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/acc" element={<AccountPage />} />
          <Route path="/funds" element={<FundsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
