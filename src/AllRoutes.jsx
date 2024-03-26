import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Models from "./Pages/Products";
import Testimonials from "./Pages/Testimonials";
import Contact from "./Pages/Contact";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/About" element={<About />} />
      <Route exact path="/Models" element={<Models />} />
      <Route exact path="/Testimonials" element={<Testimonials />} />
      <Route exact path="/Contact" element={<Contact />} />
      AllRoutes
    </Routes>
  );
};

export default AllRoutes;
