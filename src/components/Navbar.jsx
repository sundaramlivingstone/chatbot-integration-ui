import React, { useState } from "react";
import Logos from "../assets/Logos/Logo.svg";
import Signup from "./Signup";

const Navbar = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <nav className="bg-[var(--custom-bg-color)] text-white py-4 px-6 sm:px-8 md:px-10 lg:px-12 flex items-center justify-between">
      <img src={Logos} alt="Logo" className="h-10" />

      <ul className="flex space-x-6">
        <li className="cursor-pointer">Product</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">Resources</li>
        <li className="cursor-pointer">Contact Us</li>
      </ul>

      <button
        onClick={() => setShowSignup(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
      >
        Build your free chatbot
      </button>

      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={() => setShowSignup(false)}
            >
              ✖
            </button>
            <Signup />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
