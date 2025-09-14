import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-gray-900">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        autoPlay
        loop
        muted
        playsInline
        src="/luxury-property.mp4" // Placeholder, replace with actual video
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Find Your Dream Home Today
        </h1>
        <p className="text-lg md:text-2xl mb-8 drop-shadow-lg">
          Discover luxury properties tailored to your lifestyle.
        </p>
        <a
          href="/listings"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300"
        >
          View Listings
        </a>
      </div>
      <div className="absolute inset-0 bg-black opacity-30" />
    </section>
  );
};

export default Hero;
