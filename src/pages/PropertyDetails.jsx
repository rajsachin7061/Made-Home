import React from 'react';

const property = {
  id: 1,
  images: ['/property1a.jpg', '/property1b.jpg', '/property1c.jpg'], // Placeholder images
  price: '$1,200,000',
  location: 'Beverly Hills, CA',
  bedrooms: 5,
  bathrooms: 4,
  sqft: 4200,
  yearBuilt: 2018,
  amenities: ['Pool', 'Home Theater', 'Gym', 'Smart Home'],
  description:
    'Experience luxury living in this stunning Beverly Hills estate. Featuring spacious rooms, modern amenities, and breathtaking views. Perfect for families and entertaining guests.',
};

const PropertyDetails = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">{property.location}</h2>
      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {property.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Property image ${idx + 1}`}
            className="w-full h-56 object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
      {/* Price & Description */}
      <div className="mb-6">
        <p className="text-2xl font-bold text-blue-600 mb-2">{property.price}</p>
        <p className="text-gray-700 mb-4">{property.description}</p>
      </div>
      {/* Features */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Features</h3>
        <ul className="list-disc list-inside text-gray-800">
          <li>{property.sqft} sq. ft.</li>
          <li>{property.bedrooms} Bedrooms</li>
          <li>{property.bathrooms} Bathrooms</li>
          <li>Year Built: {property.yearBuilt}</li>
          {property.amenities.map((amenity, idx) => (
            <li key={idx}>{amenity}</li>
          ))}
        </ul>
      </div>
      {/* Contact Form */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Contact for Inquiry</h3>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            Send Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default PropertyDetails;
