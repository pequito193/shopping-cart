import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Catalog from './components/Catalog';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
        <Routes>
          <Route path="/shopping-cart/" element={<Homepage />} />
          <Route path="/shopping-cart/catalog" element={<Catalog />} />
          <Route path="/shopping-cart/cart" element={<Cart />} />
        </Routes>
    </React.Fragment>
  );
}

export default App;
