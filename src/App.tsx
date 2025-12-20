import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SaaSPage from './pages/SaaSPage';
import ServicesPage from './pages/ServicesPage';
import EcosystemPage from './pages/EcosystemPage';
import LoginPage from './pages/LoginPage';
import PaymentPage from './pages/PaymentPage';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductListPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/saas" element={<SaaSPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;