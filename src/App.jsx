import React, { useRef, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';

// Lazy loading компонентов для оптимизации производительности
const Body = lazy(() => import('./components/Body'));
const Gallery = lazy(() => import('./components/Gallery'));
const Menu = lazy(() => import('./components/Menu'));
const About = lazy(() => import('./components/About'));
const Cake = lazy(() => import('./components/Cake'));
const Contact = lazy(() => import('./components/Contact'));
const Terassa = lazy(() => import('./components/Terassa'));
const Privacy = lazy(() => import('./components/Privacy'));
const Terms = lazy(() => import('./components/Terms'));
const Offer = lazy(() => import('./components/Offer'));
const Success = lazy(() => import('./components/Success'));

function App() {
  const bookingRef = useRef(null);

  return (
    <Router>
      <ScrollToTop />
      <Navbar bookingRef={bookingRef} />
      <Suspense fallback={<Preloader />}>
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
      </Suspense>
      <Footer />
    </Router>
  );
}
export default App;
