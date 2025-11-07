import React from 'react';

const Reviews = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-12 md:py-16 lg:py-24 px-4 relative overflow-hidden">
      {/* Atmospheric effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.06),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.06),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-left mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 md:mb-3">
            <span className="text-white">
              WHAT THE PRESS SAYS
            </span>
          </h2>
        </div>

        {/* Review Card - Full Width */}
        <div className="w-full">
          <div className="relative w-full rounded-none md:rounded-lg overflow-hidden bg-slate-950">
            {/* Background Image */}
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <img 
                src="src/Images/Reviews IGN.png" 
                alt="IGN Review Background" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              
              {/* Dark Overlay - stronger on left, fades to right */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
              
              {/* Additional bottom gradient for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>

            {/* Content Overlay - Positioned absolute over image */}
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 lg:p-8 xl:p-12">
              <div className="max-w-2xl">
                {/* Rating */}
                <div className="mb-3 md:mb-4">
                  <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                    9.5/10
                  </span>
                </div>

                {/* Publication */}
                <div className="mb-2 md:mb-3">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-wide">
                    IGN
                  </h3>
                </div>

                {/* Divider */}
                <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-orange-500 mb-3 md:mb-4"></div>

                {/* Quote */}
                <blockquote className="text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed font-light">
                  "Tense, treacherous, and terrifying. Helix Outriders redefines the extraction shooter with brutal innovation."
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 md:mt-12 lg:mt-16 text-center md:text-left">
          <p className="text-sm md:text-base text-gray-500">
            © 2025 Helix Outriders. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="bg-slate-950">
      <Reviews />
    </div>
  );
}