import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-[45px] tracking-tight font-bold text-[#020202] sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Move Money Across Borders</span>{' '}
                <span className="block xl:inline">Swiftly With <span className="text-[#21BF44]">Korensi</span> 🚀</span>
              </h1>
              <p className="mt-3 text-[20px] font-semibold text-[#02020280] sm:mt-5 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                Transfer USD to Naira in Seconds
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div>
                  <span
                    className="inline-block w-full px-8 py-3 text-base font-medium text-[#ffffff] bg-[#4DCC69] shadow-[0_2px_30%_rgba(0,0,0,0.1)] md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </span>
                </div>
              </div>
            </div>
          </main>
          
          {/* Illustration */}
          <div className="absolute bottom-0 right-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20">
            <img
              src="/Burst-Bloat.png"
              alt="Burst-Bloat Illustration"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
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
