import React from "react";
import { FileUser } from "lucide-react";

const Hero = () => {
  return (
    <div className="hero-container w-full flex items-center justify-center">
      <div className="w-[90rem] h-[80vh] m-10 bg-black rounded-4xl text-white flex flex-col justify-end p-5">
        <h1 className="font-bold text-8xl py-10">Hi, I'm Aditya Raghav.</h1>
        <p className="text-xl">I’m Aditya Raghav, a tech enthusiast who loves coding and building meaningful web experiences. My focus is clean code, smooth interfaces, and creative solutions.</p>
        <button className="bg-cyan-950 w-52 p-3 text-lg my-8 rounded-xl flex items-center justify-center "><FileUser />Veiw Resume </button>
      </div>
    </div>
  );
};

export default Hero;
