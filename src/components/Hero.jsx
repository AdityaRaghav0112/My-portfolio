"use client";
import React, { useRef } from "react";
import { FileUser } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Particles from "../elements/Particles";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(() => {
    gsap.to(heroRef.current, {
      z: -500, // move backward in 3D
      opacity: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div
      className="hero-container w-full flex items-center justify-center"
      style={{ perspective: "1000px" }} // Enables 3D depth
    >
      <div
        ref={heroRef}
        className="hero relative w-full h-screen text-white flex flex-col justify-end p-6 md:p-12 overflow-hidden drop-shadow-2xl"
      >
        {/* ✅ Full-screen Particles Background */}
        <div className="absolute inset-0 -z-10">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        {/* Content */}
        <div className="px-4 md:px-8">
          <h1 className="text-6xl md:text-8xl font-semibold py-5">
            Hi, I'm{" "}
            <span className="text-blue-400 cursor-target">Aditya Raghav</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-semibold leading-relaxed max-w-3xl mb-18">
            I’m a tech enthusiast who loves coding and building meaningful web
            experiences. My focus is clean code, smooth interfaces, and creative
            solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
