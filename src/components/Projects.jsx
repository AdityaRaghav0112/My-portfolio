import React from "react";
import ProfileCard from "../elements/ProfileCard";
import ThreeDCardDemo from "./ThreeDCardDemo";

const Projects = () => {
  return (
    <div className="mt-20 flex flex-col p-5 gap-5">
      <h1 className='text-white text-center text-5xl font-semibold'>Latest Projects</h1>
      <p className="text-center text-xl text-gray-400 font-semibold">
        A glimpse into my recent work and latest explorations.
      </p>

      {/* PROJECT SHOWCASE */}
      <div className="projects flex items-center justify-center gap-20 mt-20">
        {/* <ProfileCard name="Skivvy" tag="A skill sharing platform" avatarUrl='../../public/p1.png'/> */}
        {/* <ProfileCard name="Parallax" tag="A skill sharing platform " avatarUrl='../../public/p2.png'/>
        <ProfileCard name="Roll your dice" tag="A skill sharing platform" avatarUrl='../../public/p3.png'/> */}
        <ThreeDCardDemo
          name="Skivvy"
          tag="A skill sharing platform"
          image="../../public/p1.png"
        />
        <ThreeDCardDemo
          name="Parallax"
          tag="An extraordinary UI element"
          image="../../public/p2.png"
        />
        <ThreeDCardDemo
          name="Roll your dice"
          tag="A multiplayer minigame"
          image="../../public/p3.png"
        />
      </div>
    </div>
  );
};

export default Projects;
