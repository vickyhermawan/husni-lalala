import React from "react";

function Hero() {
  return (
    <div className="max-w-full h-screen bg-hero-pattern grid grid-flow-row sm:grid-flow-col grid-rows-12 bg-no-repeat bg-cover" id="hero">
        <div className="flex flex-col justify-center items-center">
            <div className ="mb-36">
                <select className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                    <option value="">
                        Select an option
                    </option>
                    <option value="dog">
                        Dog
                    </option>
                </select>
            </div>
            <div className="text-center flex flex-col justify-center items-center">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal">
                    Ciptakan Perjalanan Terbaik Anda
                </h1>
                <p className="text-white-500 mt-4 mb-6 max-w-screen-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </p>
            </div>
        </div>
    </div>
  );
};

export default Hero;
