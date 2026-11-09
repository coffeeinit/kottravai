import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Close mobile menu on navigation
  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/b2b', label: 'Gifting' },
    { path: '/story', label: 'Our Story' },
    { path: '/contact', label: 'Contact' },
    { path: '/join', label: 'Join Us' },
    { path: '/x', label: 'Kottravai X' },
  ];

  return (
    <header className="bg-white/95 shadow-sm border-b border-purple-100  top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-18">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img 
                src="/assets/logo.png" 
                alt="Kottravai Logo" 
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(item.path) 
                    ? 'text-purple-600 border-b-2 border-purple-600' 
                    : 'text-gray-900 hover:text-purple-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://shop.kottravai.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-sm shadow-sm"
            >
              Shop Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 hover:text-purple-600 p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-white z-[9999]" onClick={handleNavClick}>
          <div className="absolute top-0 left-0 w-full h-full bg-white p-6 flex flex-col gap-2 z-[10000]" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center" onClick={handleNavClick}>
                <img 
                  src="/assets/logo.png" 
                  alt="Kottravai Logo" 
                  className="h-8 w-8 mr-2" 
                  style={{objectFit: 'contain'}} 
                />
              </Link>
              <button 
                onClick={handleNavClick} 
                className="text-gray-900 hover:text-purple-600 p-2 transition-colors" 
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`block px-3 py-3 text-base font-medium rounded-lg transition-colors ${
                  isActive(item.path) 
                    ? 'bg-purple-100 text-purple-700' 
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="mt-6 pt-4 border-t border-gray-200">
              <a
                href="https://shop.kottravai.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-3 rounded-lg text-center font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;