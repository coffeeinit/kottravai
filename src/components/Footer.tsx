import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { path: '/news', label: 'News' },
    { path: '/events', label: 'Events' },
    
    { path: '/story', label: 'Our Story' },
    { path: '/b2b', label: 'Bulk Orders' },
    { path: '/contact', label: 'Contact' },
    { path: '/faq', label: 'FAQ' },
    { path: '/media-kit', label: 'Media Kit' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms-of-use', label: 'Terms of Use' },
    { path: '/shipping', label: 'Shipping Policy' },
    { path: '/refunds', label: 'Refunds & Returns' },
  ];

  const contactInfo = [
    {
      icon: <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2" />,
      text: 'Kottravai Head Office, Vaazhai Incubator Campus, Puliyangudi, Tenkasi',
      className: 'text-gray-400 text-xs sm:text-sm'
    },
    {
      icon: <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2" />,
      text: '+91 97870 30811',
      className: 'text-gray-400'
    },
    {
      icon: <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 mr-2" />,
      text: 'support@kottravai.in',
      className: 'text-gray-400'
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Kottravai Logo"  
                  className="h-55 w-55 lg:h-55 lg:w-55 "
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </Link>
            </div>
            <p className="text-gray-400 text-sm lg:text-base py-5">
              A Platform Powered by Purpose.
              <br />
              Handmade by Women. Made for the World.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {quickLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-gray-400 hover:text-white transition-colors text-sm lg:text-base"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get in Touch</h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start">
                  {item.icon}
                  <span className={item.className}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center">
          <p className="text-gray-400 text-sm lg:text-base">
            A Platform Powered by Purpose | Copyrighted 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;