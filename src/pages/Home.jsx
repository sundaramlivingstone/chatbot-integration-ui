import React from "react";
import { useNavigate } from "react-router-dom";
import HomeImage from "../assets/Images/Home.png";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[var(--custom-bg-color)] text-white min-h-screen flex flex-col sm:flex-row items-center justify-center">
      <div className="max-w-2xl px-6 sm:px-0">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Make AI your brand manager
        </h1>
        <p className="text-base sm:text-lg mb-8">
          Don't let your brand lose customers. Qualify your leads to 3X your
          sales with our intelligent AI chatbot. It's like hiring a sales
          manager who knows your business in and out and works 24*7.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 h-3 w-3 rounded-full"></div>
              <span>Advanced Reporting</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500 h-3 w-3 rounded-full"></div>
              <span>Intelligent Analytics</span>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="bg-green-500 h-3 w-3 rounded-full"></div>
              <span>Business actions</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-500 h-3 w-3 rounded-full"></div>
              <span>Language support: 70+</span>
            </div>
          </div>
        </div>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-8"
          onClick={() => navigate("/organization-setup")}
        >
          Get a demo
        </button>
        <div className="flex items-center mt-4 text-gray-400">
          <span className="mr-2">4.7</span>
          <span>(Trusted)</span>
        </div>
      </div>
      <div className="mt-6 sm:mt-0">
        <img src={HomeImage} alt="HomeImage" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Home;
