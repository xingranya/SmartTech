import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ShoppingCart, User, ChevronRight, Github } from 'lucide-react';

// Pages
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SaaSPage from './pages/SaaSPage';
import ServicesPage from './pages/ServicesPage';
import EcosystemPage from './pages/EcosystemPage';
import LoginPage from './pages/LoginPage';
import PaymentPage from './pages/PaymentPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: '智能硬件', path: '/products' },
    { name: 'SaaS平台', path: '/saas' },
    { name: '增值服务', path: '/services' },
    { name: '生态合作', path: '/ecosystem' },
  ];

  const isActive = (path: string) => location.pathname.startsWith(path);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center transform rotate-3">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Smart<span className="text-brand-600">Tech</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="flex items-center space-x-1 text-slate-600 hover:text-brand-600">
              <User size={18} />
              <span className="text-sm font-medium">登录</span>
            </Link>
            <Link to="/products" className="bg-brand-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-700 transition-colors shadow-lg shadow-brand-200">
              立即体验
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-brand-600 hover:bg-brand-50"
            >
              登录 / 注册
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">SmartTech</h3>
          <p className="text-sm text-slate-400">
            通过新一代传感器与边缘 AI 解决方案，赋能工业智能，引领数字化转型。
          </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">产品中心</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-brand-400">智能传感器</Link></li>
            <li><Link to="/products" className="hover:text-brand-400">边缘计算主机</Link></li>
            <li><Link to="/saas" className="hover:text-brand-400">SaaS 平台</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">支持与服务</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-brand-400">技术文档</Link></li>
            <li><Link to="/services" className="hover:text-brand-400">API 参考手册</Link></li>
            <li><Link to="/services" className="hover:text-brand-400">联系销售</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">关注我们</h4>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-brand-400"><Github size={20} /></a>
            {/* Add more social icons as needed */}
          </div>
          <div className="mt-4">
            <p className="text-xs text-slate-500">订阅我们的最新动态</p>
            <div className="flex mt-2">
              <input type="email" placeholder="您的邮箱" className="bg-slate-800 text-white text-sm px-3 py-2 rounded-l focus:outline-none focus:ring-1 focus:ring-brand-500 w-full" />
              <button className="bg-brand-600 px-3 py-2 rounded-r hover:bg-brand-700 text-white"><ChevronRight size={16} /></button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SmartTech Solutions Inc. 保留所有权利.
      </div>
    </div>
  </footer>
);

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