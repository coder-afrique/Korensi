import React, { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Korensi text */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-semibold text-gray-900">Korensi.</span>
          </div>
          
          {/* Get Started text */}
          <div className="hidden sm:flex sm:items-center">
            <span className="text-gray-500 text-sm">Get started</span>
          </div>
          
          {/* FAQs and Contact Us */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm font-medium">FAQs</a>
            <a href="#" className="text-gray-500 hover:text-gray-700 text-sm font-medium">Contact Us</a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <span className="block pl-3 pr-4 py-2 text-base text-gray-500">Get started</span>
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">FAQs</a>
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
