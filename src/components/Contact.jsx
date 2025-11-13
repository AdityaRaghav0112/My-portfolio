import React, { useState, useCallback } from "react";
import { Mail, Instagram, Linkedin, Github } from "lucide-react";
import ProfileCard from "../elements/ProfileCard";
import TargetCursor from "./TargetCursor";
import { Navigate } from "react-router-dom";

const Contact = () => {
  const [tooltip, setTooltip] = useState("Click to copy");

  const handleCopy = () => {
    navigator.clipboard.writeText("adityaraghav239@gmail.com");
    setTooltip("Copied!");
    setTimeout(() => setTooltip("Click to copy"), 1500);
  };

  return (
    <div className="text-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-12 gap-6 mt-20 bg-blue-950/50 h-screen">
      {/* Section Heading */}
      <div className="flex flex-col items-center">
        <h1 className="text-white items-center font-semibold text-3xl sm:text-4xl md:text-5xl cursor-target">
          Get in Touch
        </h1>
        <p className="text-gray-400 font-medium text-sm sm:text-base md:text-lg max-w-2xl mt-5">
          I'm always open to discussing new projects, creative ideas or
          opportunities. Feel free to reach out.
        </p>
      </div>

      {/* Contact Information */}
      <h2 className="text-white font-semibold text-lg sm:text-xl mt-5">
        Contact Information
      </h2>

      <div className="socials flex flex-col sm:flex-row justify-evenly items-start sm:items-center gap-10 mt-10">
        {/* Social Section */}
        <div className="flex flex-col items-center sm:items-start gap-6">
          <div>
            <ProfileCard
              name=""
              tag=""
              avatarUrl="../../profile4.jpeg"
              addr=""
            />
          </div>
        </div>

        {/* Email + Socials */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <TargetCursor
              spinDuration={2}
              hideDefaultCursor={true}
              parallaxOn={true}
            />

            {/* Social buttons */}
            <button onClick={()=> window.open('https://www.instagram.com/adityaraghav65/', '_blank')} className="row-span-1 col-span-1 cursor-target text-white bg-gradient-to-tr from-[#f58529] via-[#dd2a7b] to-[#8134af] p-3 rounded-3xl hover:scale-105 transition-transform">
              <Instagram className="size-20" />
            </button>

            <button onClick={()=> window.open('https://www.linkedin.com/in/adityaraghav0112/', '_blank')} className="row-span-1 col-span-1 cursor-target text-white bg-[#0A66C2] p-3 rounded-3xl hover:scale-105 transition-transform">
              <Linkedin className="size-20" />
            </button>

            <button onClick={()=> window.open('https://github.com/AdityaRaghav0112', '_blank')} className="row-span-1 col-span-1 cursor-target text-white bg-[#2b3137] p-3 rounded-3xl hover:scale-105 transition-transform">
              <Github className="size-20" />
            </button>

            {/* Email Button with Tooltip */}
            <div className="relative w-fit mx-auto group row-span-1 col-span-3">
              <button
                onClick={handleCopy}
                className="cursor-target text-white bg-neutral-800 p-3 rounded-3xl text-2xl relative transition-all duration-300 hover:bg-neutral-700"
              >
                adityaraghav239@gmail.com
              </button>

              {/* Tooltip */}
              <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-gray-800 text-white text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tooltip}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
