import React from 'react'

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart'
import Footer from './Components/Footer';
import ProductProvider from "./Contexts/ProductContext";
import CartProvider from "./Contexts/CartContext";
import Sliderbar from './Contexts/SliderbarContext';

function App() {
  return (
    <Sliderbar>
    <CartProvider>
    <ProductProvider>
    <Router>
    <Navbar />
    <Cart/>
    <AllRoutes />
    <Footer/>
    </Router>
    </ProductProvider>
    </CartProvider>
    </Sliderbar>
  );
}

export default App;
