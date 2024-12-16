import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Menu from "./components/Menu";
import About from "./components/About";
import Cake from "./components/Cake";
import Contact from "./components/Contact";
import Terassa from "./components/Terassa";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terassa" element={<Terassa />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
