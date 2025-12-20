import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';

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

export default Navbar;