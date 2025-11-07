import React from 'react';

const Reviews = () => {
  const reviews = [
    {
      publication: "IGN",
      quote: "Tense, treacherous, and terrifying. Helix Outriders redefines the extraction shooter with brutal innovation.",
      rating: "9.5/10",
      imagePlaceholder: "/path-to-your-image-1.jpg" // Replace with your actual image path
    },
    {
      publication: "GAMESPOT",
      quote: "Every extraction feels like escaping hell itself. A masterclass in tension and teamwork.",
      rating: "9/10",
      imagePlaceholder: "/path-to-your-image-2.jpg"
    },
    {
      publication: "PC GAMER",
      quote: "The Death Echo system turns failure into the most intense moments of redemption in gaming.",
      rating: "92/100",
      imagePlaceholder: "/path-to-your-image-3.jpg"
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-24 px-4 relative overflow-hidden">
      {/* Atmospheric effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.06),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(249,115,22,0.06),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-cyan-400 text-xs font-bold tracking-[0.4em] uppercase">
              Critical Acclaim
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-orange-500">
              WHAT THE PRESS SAYS
            </span>
          </h2>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-xl overflow-hidden"
              style={{
                transform: `rotate(${index % 2 === 0 ? '-1deg' : '1deg'})`
              }}
            >
              {/* Background Image Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900">
                {/* This is where your image goes - replace the gradient with: */}
                {/* <img src={review.imagePlaceholder} alt="" className="w-full h-full object-cover" /> */}
                <div className="w-full h-full flex items-center justify-center text-slate-600 text-sm">
                  [Background Image {index + 1}]
                </div>
              </div>

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-slate-950/20"></div>
              
              {/* Vignette effect */}
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.7)]"></div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                {/* Rating Badge */}
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-lg text-cyan-400 font-bold text-lg">
                    {review.rating}
                  </span>
                </div>

                {/* Publication */}
                <h3 className="text-3xl font-bold text-white mb-4 tracking-wider drop-shadow-lg">
                  {review.publication}
                </h3>

                {/* Quote */}
                <div className="relative">
                  <div className="absolute -left-3 top-0 text-6xl text-cyan-500/30 font-serif leading-none">
                    "
                  </div>
                  <p className="text-gray-200 text-lg leading-relaxed pl-6 drop-shadow-md">
                    {review.quote}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 w-24 bg-gradient-to-r from-cyan-500 to-orange-500 group-hover:w-full transition-all duration-500"></div>
              </div>

              {/* Border on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/30 transition-all duration-300 rounded-xl pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg italic">
            "The best extraction shooter of the generation"
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