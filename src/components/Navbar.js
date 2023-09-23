import React, { useState } from 'react';
import { database } from '../firebaseconfig';
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';

const Navbar = ({ images, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useNavigate();

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const handleSignOut = () => {
    signOut(database).then(val => {
      console.log(val, "val")
      history('/')
    })
  }

  return (
    <>
    <nav className="bg-black p-4">
      <div className="flex items-center justify-between">
        <div className="text-white text-2xl md:text-8 lg:text-4xl font-semibold">Gallery</div>
          
        <div className="md:ml-4 flex items-center">
          <div className="relative md:mr-4">
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8 pr-3 py-2 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring focus:border-blue-300 md:w-12 lg:w-48 xl:w-56" // Adjust width on different screen sizes
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11 21l-6-6 6-6m4-9a9 9 0 110 18 9 9 0 010-18z"
                ></path>
              </svg>
            </div>
          </div>

          <button
            onClick={handleSignOut}
            className="bg-red-500 text-white px-3 py-2 rounded-md md:px-4 lg:px-6 xl:px-8 hover:bg-red-600 transition duration-300" // Adjust padding on different screen sizes
          >
            Sign Out
          </button>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
