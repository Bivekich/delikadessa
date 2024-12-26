import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Body from './components/Body';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import About from './components/About';
import Cake from './components/Cake';
import Contact from './components/Contact';
import Terassa from './components/Terassa';
import Privacy from './components/Privacy';
import Terms from './components/Terms';
import Offer from './components/Offer';
import ScrollToTop from './components/ScrollToTop';
import Success from './components/Success';

function App() {
  const bookingRef = useRef(null);

  return (
    <Router>
      <ScrollToTop />
      <Navbar bookingRef={bookingRef} />
      <Routes>
        <Route path="/" element={<Body bookingRef={bookingRef} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terassa" element={<Terassa />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
