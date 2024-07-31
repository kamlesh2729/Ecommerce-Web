import React from 'react'

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProductProvider from "./Contexts/ProductContext";
import CartProvider from "./Contexts/CartContext";

function App() {
  return (
    <CartProvider>
    <ProductProvider>
    <Router>
    <Navbar />
    <AllRoutes />
    <Footer/>
    </Router>
    </ProductProvider>
    </CartProvider>
  );
}

export default App;
