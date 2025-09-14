import React from 'react';

const properties = [
  {
    id: 1,
    image: '/property1.jpg', // Placeholder, replace with actual image
    price: '$1,200,000',
    location: 'Beverly Hills, CA',
    bedrooms: 5,
    bathrooms: 4,
  },
  {
    id: 2,
    image: '/property2.jpg',
    price: '$850,000',
    location: 'Miami, FL',
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 3,
    image: '/property3.jpg',
    price: '$2,500,000',
    location: 'New York, NY',
    bedrooms: 4,
    bathrooms: 3,
  },
];

const Listings = () => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Property Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {properties.map((property) => (
          <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
            <img
              src={property.image}
              alt={property.location}
              className="h-48 w-full object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">{property.location}</h3>
                <p className="text-lg font-bold text-blue-600 mb-2">{property.price}</p>
                <p className="text-gray-700 mb-4">
                  {property.bedrooms} Beds &bull; {property.bathrooms} Baths
                </p>
              </div>
              <a
                href={`/property/${property.id}`}
                className="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300 text-center"
              >
                View Details
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Listings;
