import React from "react";
import ThreeDCardDemo from "./ThreeDCardDemo";

const Projects = () => {
  return (
    <div className="mt-20 flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 gap-5">
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
        Latest Projects
      </h1>

      {/* Subtitle */}
      <p className="text-center text-base sm:text-lg md:text-xl text-gray-400 font-semibold max-w-2xl">
        A glimpse into my recent work and latest explorations.
      </p>

      {/* PROJECT SHOWCASE */}
      <div
        className="
          projects 
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-10 
          sm:gap-12 
          md:gap-16 
          mt-14 
          w-full 
          justify-items-center
        "
      >
        <ThreeDCardDemo
          name="Skivvy"
          tag="A skill sharing platform"
          image="../../p1.png"
        />
        <ThreeDCardDemo
          name="Parallax"
          tag="An extraordinary UI element"
          image="../../p2.png"
        />
        <ThreeDCardDemo
          name="Roll your dice"
          tag="A multiplayer minigame"
          image="../../p3.png"
        />
      </div>
    </div>
  );
};

export default Projects;
