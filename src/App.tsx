import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/payment" element={<PaymentPage />} />
    </Routes>
  );
}

export default App;