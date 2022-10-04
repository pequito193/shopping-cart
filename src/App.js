import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <React.Fragment>
        <Header />
        <Routes>
          <Route exact path="/shopping-cart/" element={<Home />} />
          <Route exact path="/shopping-cart/catalog" element={<Catalog />} />
          <Route exact path="/shopping-cart/cart" element={<Cart />} />
        </Routes>
        <Footer />
    </React.Fragment>
  );
}

export default App;
