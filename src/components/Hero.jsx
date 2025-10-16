import React from "react";
import { FileUser } from "lucide-react";
import Darkveil from "../elements/DarkVeil";

const Hero = () => {
  return (
    <div className="hero-container w-full flex items-center justify-center mt-25 px-4 sm:px-6 lg:px-10">
      <div className="hero relative w-full max-w-[90rem] h-[80vh] sm:h-[70vh] md:h-[80vh] rounded-4xl text-white flex flex-col justify-end p-5 sm:p-8 md:p-12 overflow-hidden drop-shadow-2xl">
        {/* Background component */}
        <div className="absolute inset-0 -z-10">
          <Darkveil />
        </div>

        {/* Hero content */}
        <div className="max-w-5xl">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl py-6 sm:py-8">
            Hi, I'm <span className="text-blue-400">Aditya Raghav</span>.
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold leading-relaxed max-w-3xl">
            I’m a tech enthusiast who loves coding and building meaningful web experiences.
            My focus is clean code, smooth interfaces, and creative solutions.
          </p>
          <button className="bg-cyan-950 w-40 sm:w-48 md:w-52 p-3 text-base sm:text-lg my-6 sm:my-8 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-900 transition duration-300 hover:border-1 hover:border-blue-400">
            <FileUser size={20} />
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
