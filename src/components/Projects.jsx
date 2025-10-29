import React from "react";
import ThreeDCardDemo from "./ThreeDCardDemo";

const Projects = () => {
  return (
    <div className="mt-10 sm:mt-16 flex flex-col items-center px-4 sm:px-6 md:px-10 gap-4 sm:gap-6">
      {/* Title */}
      <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold text-center">
        Latest Projects
      </h1>

      {/* Subtitle */}
      <p className="text-center text-sm sm:text-lg text-gray-400 font-semibold max-w-2xl">
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
          gap-6
          sm:gap-10
          md:gap-14
          mt-8
          sm:mt-14
          mb-10
          sm:mb-20
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
