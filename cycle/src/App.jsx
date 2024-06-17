import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/utils/navbar/navbar";
import Home from "./components/home/home";
import Bikes from "./components/bikes/bikes";
import About from "./components/about/about";
import Details from "./components/bikes/details";
import Coalition from "./components/coalition/coalition";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<Bikes />} />
        {/* <Route path="/explore" element={<Explore />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/details" element={<Details />} />
        <Route path="/coalition" element={<Coalition />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
