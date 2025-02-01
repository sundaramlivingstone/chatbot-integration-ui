import React, { useState, useRef, useEffect } from "react";
import Logos from "../assets/Logos/Logo.svg";
import Signup from "./Signup";

const Navbar = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on ESC key press
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const navLinks = [
    { title: "Product", href: "#" },
    { title: "Pricing", href: "#" },
    { title: "Resources", href: "#" },
    { title: "Contact Us", href: "#" },
  ];

  return (
    <nav
      ref={navRef}
      className="bg-[var(--custom-bg-color)] text-white py-4 px-6 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between relative"
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="/"
        className="focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
      >
        <img src={Logos} alt="Company Logo" className="h-10" />
      </a>

      {/* Navigation Links */}
      <ul
        className={`flex-col lg:flex-row lg:flex lg:space-x-6 absolute lg:static bg-[var(--custom-bg-color)] lg:bg-transparent transition-all duration-300 ease-in-out w-full lg:w-auto top-full lg:top-auto left-0 lg:left-auto z-50 p-4 lg:p-0 shadow-lg lg:shadow-none ${
          isMobileMenuOpen ? "flex" : "hidden"
        } lg:flex`}
      >
        {navLinks.map((link, index) => (
          <li key={index} className="cursor-pointer py-2 lg:py-0">
            <a
              href={link.href}
              className="block w-full px-2 py-1 hover:bg-blue-600 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <button
          onClick={() => setShowSignup(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Build your free chatbot"
        >
          Build your free chatbot
        </button>

        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden text-white p-2 hover:bg-blue-600 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <span aria-hidden="true">✖</span>
          ) : (
            <span aria-hidden="true">☰</span>
          )}
        </button>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="signup-modal"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full mx-4">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-2 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => setShowSignup(false)}
              aria-label="Close signup modal"
            >
              <span aria-hidden="true">✖</span>
            </button>
            <Signup />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
