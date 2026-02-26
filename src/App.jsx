import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import LegalSystemsPage from './pages/LegalSystemsPage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/legal-systems" element={<LegalSystemsPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <FloatingWhatsAppButton />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
