import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";
import Auth from "./Pages/Auth";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Product" element={<Products />} />
      <Route exact path="/Testimonials" element={<Testimonials />} />
      <Route exact path="/Contact" element={<Contact />} />
      <Route exact path="/Auth" element={<Auth />} />
      AllRoutes
    </Routes>
  );
};

export default AllRoutes;
