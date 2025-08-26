import React from 'react'
import ThemeToggle from './ThemeToggle'
import { HashLink } from 'react-router-hash-link'

const Navbar = () => {
  const linkClasses =
    "relative group transition-colors duration-300 hover:text-blue-500";

  const underlineClasses =
    "absolute left-0 bottom-[-2px] w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full";

  return (
    <div className="fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="relative">
        {/* Navbar Main */}
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            {/* Mobile Dropdown */}
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
                {["home", "about", "skills", "educational", "experience", "projects", "contact"].map((id) => (
                  <li key={id}>
                    <a href={`#${id}`} className={linkClasses}>
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                      <span className={underlineClasses}></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <h1 className='text-xl font-extrabold'>
              {'<Mah'}<span className='text-blue-500'>adi</span>{'/>'}
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-6 text-[16px] font-semibold">
              {["home", "about", "skills", "educational", "experience", "projects", "contact"].map((id) => (
                <li key={id} className="list-none">
                  <HashLink smooth to={`/#${id}`} className={linkClasses}>
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                    <span className={underlineClasses}></span>
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="navbar-end gap-5 items-center">
            <ThemeToggle />
            <a href='#contact'
              className="px-4 py-2 text-sm border border-blue-500 rounded-md text-blue-500 hover:bg-blue-100 transition hidden lg:block">
              Let's Talk
            </a>
          </div>
        </div>

        {/* Gradient Border at Bottom */}
        <div className="h-[3px] w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 absolute bottom-0 left-0" />
      </div>
    </div>
  )
}

export default Navbar
