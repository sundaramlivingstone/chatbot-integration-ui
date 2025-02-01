import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#021024] text-gray-300 py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Logo and Copyright */}
        <div className="flex items-center space-x-3">
          <div className="bg-white rounded-full p-2 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
          </div>
          <span className="text-sm">
            BeyondChats 2024. All rights reserved.
          </span>
        </div>

        {/* Links */}
        <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-white transition">
            Data Security & Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition">
            Terms and Conditions
          </a>
          <a href="#" className="hover:text-white transition">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
