import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
        {/* <h1 className="text-4xl font-bold text-blue-600 shadow-lg">
  NextUpdate
</h1> */}

{/* <h1 className="text-4xl font-semibold text-blue-600 font-sans">
  NextUpdate
</h1> */}
<h1 className="text-4xl font-bold text-blue-600 hover:scale-110 transition-transform duration-300">
  NextUpdate
</h1>
          {/* <h1 className="text-2xl font-bold">MyWebsite</h1> */}
        </div>

        {/* Menu Links */}
        <div className="hidden md:flex space-x-4">
         
         <Link to="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700" > Home </Link>
         <Link to="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700" > About </Link>
         <Link to="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700" > Contact </Link>
         
         
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <span className="sr-only">Open menu</span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    {/* Mobile Menu Links */}
    {isOpen && (
      <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

        <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" > Home   </Link>
        <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" > About   </Link>
        <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700" > Contact   </Link>

        </div>
      </div>
    )}
  </nav>
);
}

export default Navbar;
