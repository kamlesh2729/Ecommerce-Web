import React from 'react'

import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <AllRoutes />
    <Footer/>
    </Router>
    </>
  );
}

export default App;
