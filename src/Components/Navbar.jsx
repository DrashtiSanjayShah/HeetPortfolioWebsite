import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 1, text: "About Heet" },
    { id: 2, text: "Tech Stack" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Contact" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.paddingTop = "100px";
    } else {
      document.body.style.paddingTop = "0";
    }

    return () => {
      document.body.style.paddingTop = "0";
    };
  }, [isMenuOpen]);

  return (
    <nav className="md:relative fixed top-0 left-0 w-full mb-20 px-4 sm:px-8 py-7 z-50 ">
      {/* Logo Section */}
      <div className="flex items-center justify-between">
        <div className="flex flex-shrink-0 items-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-blue-800">HG</h1>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-9 text-xl text-blue-800">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.text.toLowerCase().replace(/\s/g, "")}`}
              className="hover:font-bold text-blue-500 transition duration-300"
            >
              {item.text}
            </a>
          ))}
        </div>

        <div
          onClick={handleNav}
          className="block md:hidden flex items-center z-50"
        >
          {isMenuOpen ? (
            <AiOutlineClose
              size={30}
              className="text-blue-500"
              aria-label="Close Menu"
            />
          ) : (
            <AiOutlineMenu
              size={30}
              className="text-blue-500"
              aria-label="Open Menu"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-white text-blue-800 p-4 transition-all duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-blue-800 m-4">HG</h1>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b hover:bg-blue-200 duration-300 text-blue-500 hover:font-bold cursor-pointer"
            onClick={handleLinkClick}
          >
            <a href={`#${item.text.toLowerCase().replace(/\s/g, "")}`}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
