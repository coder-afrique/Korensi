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
            <span className="text-4xl font-bold">
              <span className="text-[#062638]">Koren</span>
              <span className="text-[#21BF44]">si.</span>
            </span>
          </div>
          
          {/* Get Started button */}
          <div className="hidden sm:flex sm:items-center">
            <span className="text-[#21BF44] text-[15px] font-semibold px-4 py-2 rounded-full border border-[#21BF44] bg-[#21BF44]/15">
              Get started
            </span>
          </div>
          
          {/* Contact Us */}
          <div className="hidden sm:flex sm:items-center">
            <a href="#" className="text-[#21BF44] hover:text-[#21BF44]/80 text-sm font-medium">Contact Us</a>
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
            <span className="block mx-3 text-[15px] font-semibold text-[#21BF44] px-4 py-2 rounded-full border border-[#21BF44] bg-[#21BF44]/15">
              Get started
            </span>
            <a href="#" className="block pl-3 pr-4 py-2 text-base font-medium text-[#21BF44] hover:bg-gray-50 hover:text-[#21BF44]/80">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
