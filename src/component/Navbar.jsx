import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { HashLink } from 'react-router-hash-link';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses =
    "text-lg font-semibold py-3 px-5 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-500";

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-base-100 shadow-sm max-w-7xl mx-auto">
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="px-2 lg:hidden"
          >
            {!menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 border-2 rounded-md"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8"
                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>

          <h1 className='text-xl font-extrabold'>
            {'<Mah'}<span className='text-blue-500'>adi</span>{'/>'}
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6 text-[16px] font-semibold">
            {["home", "about", "skills", "educational", "experience", "projects", "contact"].map((id) => (
              <li key={id}>
                <HashLink smooth to={`/#${id}`} className="relative group">
                  <span className="transition-colors duration-300 hover:text-blue-500">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </span>
                  <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-8 items-center">
        <div className=''>
            <ThemeToggle />
        </div>
          <a href='#contact'
            className="px-4 py-2 text-sm border border-blue-500 rounded-md text-blue-500 hover:bg-blue-100 transition hidden lg:block">
            Let's Talk
          </a>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 backdrop-blur-lg shadow-lg z-50 transform transition-transform duration-500
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 border-2 bg-white text-black px-1 py-1 rounded-full cursor-pointer"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col mt-4 space-y-5">
          {["home", "about", "skills", "educational", "experience", "projects", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Gradient */}
      <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute bottom-0 left-0" />
    </div>
  );
};

export default Navbar;
