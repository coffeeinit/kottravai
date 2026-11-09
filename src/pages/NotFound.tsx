import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-purple-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-semibold"
            >
              <Home className="mr-2 h-5 w-5" />
              Go Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors font-semibold"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </button>
          </div>

          <div className="mt-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Looking for something specific?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <Link to="/about" className="block p-4 rounded-lg hover:bg-purple-50 transition-colors">
                <h4 className="font-semibold text-gray-900">About Us</h4>
                <p className="text-sm text-gray-600">Learn about our mission and impact</p>
              </Link>
              <Link to="/contact" className="block p-4 rounded-lg hover:bg-purple-50 transition-colors">
                <h4 className="font-semibold text-gray-900">Contact</h4>
                <p className="text-sm text-gray-600">Get in touch with our team</p>
              </Link>
              <Link to="/shop" className="block p-4 rounded-lg hover:bg-purple-50 transition-colors">
                <h4 className="font-semibold text-gray-900">Shop</h4>
                <p className="text-sm text-gray-600">Browse our artisan products</p>
              </Link>
              <Link to="/faq" className="block p-4 rounded-lg hover:bg-purple-50 transition-colors">
                <h4 className="font-semibold text-gray-900">FAQ</h4>
                <p className="text-sm text-gray-600">Find answers to common questions</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 