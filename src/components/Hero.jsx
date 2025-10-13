import React from "react";
import { FileUser } from "lucide-react";
import Darkveil from "../elements/DarkVeil";

const Hero = () => {
  return (
    <div className="hero-container w-full flex items-center justify-center">
      <div className="hero relative w-[90rem] h-[80vh] m-10 rounded-4xl text-white flex flex-col justify-end p-5 overflow-hidden drop-shadow-2xl">
        {/* Background component */}
        <div className="absolute inset-0 -z-10">
          <Darkveil />
        </div>

        {/* Hero content */}
        <h1 className="font-bold text-8xl py-10">Hi, I'm Aditya Raghav.</h1>
        <p className="text-xl text-gray-300 font-semibold max-w-4xl">
          I’m Aditya Raghav, a tech enthusiast who loves coding and building
          meaningful web experiences. My focus is clean code, smooth interfaces,
          and creative solutions.
        </p>
        <button className="bg-cyan-950 w-52 p-3 text-lg my-8 rounded-xl flex items-center justify-center gap-2 hover:bg-cyan-900 transition">
          <FileUser />
          View Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
