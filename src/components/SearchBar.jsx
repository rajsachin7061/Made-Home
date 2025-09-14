import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ location, price, type });
  };

  return (
    <form className="flex flex-col md:flex-row gap-4 mb-8" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
      />
      <input
        type="text"
        placeholder="Price (e.g. < $1M)"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 flex-1"
      >
        <option value="">Type</option>
        <option value="house">House</option>
        <option value="apartment">Apartment</option>
        <option value="condo">Condo</option>
        <option value="villa">Villa</option>
      </select>
      <button
        type="submit"
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
