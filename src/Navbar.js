import React, { useState } from 'react';

const Navbar = ({ images, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl font-semibold">Gallery</div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-200 px-2 py-1 rounded-md"
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100"
            >
              Search
            </button>
          </div>
          <button className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-100">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
