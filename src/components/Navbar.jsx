import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white shadow-md">
    <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <div className="text-2xl font-bold text-blue-600">LuxRealty</div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="hover:text-blue-600 font-medium">Home</Link></li>
        <li><Link to="/listings" className="hover:text-blue-600 font-medium">Listings</Link></li>
        <li><Link to="/about" className="hover:text-blue-600 font-medium">About</Link></li>
        <li><Link to="/contact" className="hover:text-blue-600 font-medium">Contact</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
