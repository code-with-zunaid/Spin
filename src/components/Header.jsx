import React, { useState } from 'react';
import { FaBars, FaTimes, FaAngleDown, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-blue-100 py-2 px-4 text-center">
        <p className="text-sm font-semibold">
          Cyfuture AI hackathon is <span className="text-red-500 animate-pulse">LIVE!</span> | Win up to ₹5 Lakhs 
          <a href="https://hackathon.cyfuture.ai/" target="_blank" rel="noopener noreferrer" className="ml-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-bold hover:bg-green-600">
            Register Now!
          </a>
        </p>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="w-40">
            <a href="/">
              <img src="/images/logo.png" alt="Cyfuture Logo" className="w-full" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-800 hover:text-blue-600 font-medium"
              >
                Services <FaAngleDown className="ml-1" />
              </button>
              {/* Services Dropdown */}
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-2 w-96 bg-white shadow-lg rounded-md z-50 p-4 grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-blue-600 mb-2">Main Services</h3>
                    <ul className="space-y-2">
                      <li><a href="/cloud" className="hover:text-blue-600">Cloud & Infrastructure</a></li>
                      <li><a href="/bpo" className="hover:text-blue-600">Business Process Services</a></li>
                      <li><a href="/applications" className="hover:text-blue-600">Business Applications</a></li>
                      <li><a href="/design" className="hover:text-blue-600">Design & Development</a></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-600 mb-2">Other Services</h3>
                    <ul className="space-y-2">
                      <li><a href="/datacenter" className="hover:text-blue-600">Data Center Services</a></li>
                      <li><a href="/iot" className="hover:text-blue-600">Internet of Things</a></li>
                      <li><a href="/ai" className="hover:text-blue-600">Artificial Intelligence</a></li>
                      <li><a href="/bigdata" className="hover:text-blue-600">Big Data & Analytics</a></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <a href="/industries" className="text-gray-800 hover:text-blue-600 font-medium">Industries</a>
            <a href="/technologies" className="text-gray-800 hover:text-blue-600 font-medium">Technologies</a>
            <a href="/about" className="text-gray-800 hover:text-blue-600 font-medium">Discover Cyfuture</a>
            <a href="/careers" className="text-gray-800 hover:text-blue-600 font-medium">Careers</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white py-4 px-2 shadow-lg rounded-md mt-2">
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => toggleDropdown('mobileServices')}
                  className="flex items-center justify-between w-full text-gray-800 hover:text-blue-600 font-medium"
                >
                  Services <FaAngleDown />
                </button>
                {activeDropdown === 'mobileServices' && (
                  <ul className="pl-4 mt-2 space-y-2">
                    <li><a href="/cloud" className="block py-1 hover:text-blue-600">Cloud & Infrastructure</a></li>
                    <li><a href="/bpo" className="block py-1 hover:text-blue-600">Business Process Services</a></li>
                    <li><a href="/applications" className="block py-1 hover:text-blue-600">Business Applications</a></li>
                    <li><a href="/design" className="block py-1 hover:text-blue-600">Design & Development</a></li>
                  </ul>
                )}
              </li>
              <li><a href="/industries" className="block py-1 hover:text-blue-600">Industries</a></li>
              <li><a href="/technologies" className="block py-1 hover:text-blue-600">Technologies</a></li>
              <li><a href="/about" className="block py-1 hover:text-blue-600">Discover Cyfuture</a></li>
              <li><a href="/careers" className="block py-1 hover:text-blue-600">Careers</a></li>
              <li><a href="/contact" className="block py-1 hover:text-blue-600">Contact Us</a></li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;