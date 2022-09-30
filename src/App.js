import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
