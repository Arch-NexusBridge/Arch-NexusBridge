import ComponentLayout from "@/pages/layout/ComponentLayout";
import React from "react";

const Hero: React.FC = () => {
  return (
    <ComponentLayout>
      <div className="relative w-screen md:h-[550px] bg-cover bg-center bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
        <div className="relative mx-auto text-center px-8 md:pt-32 md:pb-12 pt-20 pb-8">
          <span className="text-mintGreen font-semibold text-base md:text-2xl">
            The Future of Decentralized Applications
          </span>
          <h1 className="font-extrabold text-white mb-6 text-5xl md:text-7xl">
            NexusBridge
            <p className="font-semibold text-2xl md:text-4xl text-white mt-4">
              on Archway
            </p>
          </h1>
          <div className="md:text-lg mb-10 text-gray-200 mx-4 md:mx-32">
            <p>Bridging Web2 and Web3 to empower developers and</p>
            <p>accelerate the growth of the decentralized applications.</p>
          </div>
          <div className="flex justify-center space-x-4 mt-8">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg">
              Get Started
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </ComponentLayout>
  );
};

export default Hero;
