import React from "react";
import { FileUser } from "lucide-react";
import Darkveil from "../elements/DarkVeil";
import TextPressure from "./TextPressure";

const Hero = () => {
  return (
    <div className="hero-container w-full flex items-center justify-center">
      <div className="hero relative w-full h-screen text-white flex flex-col justify-end p-6 md:p-12 overflow-hidden drop-shadow-2xl">
        {/* Background component */}
        <div className="absolute inset-0 -z-10">
          <Darkveil />
        </div>

        {/* Hero content */}
        <div className="px-4 md:px-8">
          {/* TextPressure title */}
          <div className="py-6 sm:py-8">
            <TextPressure
              text="Hi, I'm Aditya Raghav."
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={true}
              textColor="#ffffff"
              strokeColor="#00bfff"
              minFontSize={36}
              maxFontSize={120} 
            />
          </div>
          

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold leading-relaxed max-w-3xl">
            I’m a tech enthusiast who loves coding and building meaningful web
            experiences. My focus is clean code, smooth interfaces, and creative
            solutions.
          </p>

          {/* Button */}
          <button className="bg-cyan-950 w-40 sm:w-48 md:w-52 p-3 text-base sm:text-lg my-6 sm:my-8 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-900 transition duration-300 hover:border hover:border-blue-400">
            <FileUser size={20} />
            View Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
