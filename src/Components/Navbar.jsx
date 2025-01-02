import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 1, text: 'About Heet' },
    { id: 2, text: 'Tech Stack' },
    { id: 3, text: 'Projects' },
    { id: 4, text: 'Contact' },
  ];

  return (
    <nav className="mb-20 flex items-center justify-between py-8 px-4 sm:px-8">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        {/* Replace with logo if necessary */}
        <h1 className="text-5xl font-bold text-blue-800">HG</h1>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden md:flex items-center gap-9 text-xl text-blue-800">
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.text.toLowerCase().replace(/\s/g, '')}`}
            className="hover:font-bold text-blue-500 transition duration-300"
          >
            {item.text}
          </a>
        ))}
      </div>

      {/* Hamburger Icon for Mobile */}
      <div onClick={handleNav} className="block md:hidden flex items-center sticky top-0 z-50">
        {isMenuOpen ? (
          <AiOutlineClose size={30} className="text-blue-500" aria-label="Close Menu" />
        ) : (
          <AiOutlineMenu size={30} className="text-blue-500" aria-label="Open Menu" />
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg text-blue-800 p-4 transition-all duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Logo */}
        <h1 className="text-3xl font-bold text-blue-800 m-4">HG</h1>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className="p-4 border-b hover:bg-blue-200 duration-300 text-blue-500 hover:font-bold cursor-pointer"
            onClick={handleLinkClick} // Close the menu on link click
          >
            <a href={`#${item.text.toLowerCase().replace(/\s/g, '')}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
