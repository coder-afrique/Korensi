import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Move Money Across Borders</span>{' '}
                <span className="block text-indigo-600 xl:inline">Swiftly With Korensi 🚀</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transfer USD to Naira in Seconds
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium text-[#ffffff] bg-[#4DCC69] hover:bg-[#45b85f] shadow-[0_2px_30%_rgba(0,0,0,0.1)] transition-all duration-200 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      
      {/* GIF */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 flex items-center justify-center p-8">
        <img
          className="h-auto w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-cover"
          src="/Cash Payment.gif"
          alt="Cash Payment"
        />
      </div>
    </section>
  );
};

export default HeroSection;
