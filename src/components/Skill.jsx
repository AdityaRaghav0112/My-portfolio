import React from "react";
import LogoLoop from "../elements/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import HoverEffect from "./ui/card-hover-effect";
import { Color } from "ogl";

const Skill = () => {
  const projects = [
    {
      title: "Languages & Frameworks",
      description:
        "React.js, TailwindCSS, HTML5, CSS3, javascript, GSAP, Lucide react",
      link: "https://drive.google.com/drive/folders/1wryKRLTSdFR1lLyPdZp2E-c9pdbe9E-1?usp=sharing",
    },
    {
      title: "Libraries & Dev Tools",
      description:
        "Git, Github, Shadcn, react-bits, Bootstrap, figma, Acentrinity UI",
      link: "https://drive.google.com/drive/folders/1wryKRLTSdFR1lLyPdZp2E-c9pdbe9E-1?usp=sharing",
    },
    {
      title: "Database & Deployment",
      description: "MySQL, MobgoDB, Vercel, Netlify, Render",
      link: "https://drive.google.com/drive/folders/1wryKRLTSdFR1lLyPdZp2E-c9pdbe9E-1?usp=sharing",
    },
    {
      title: "Operating System & Softwares",
      description: "Windows, Linux, MacOS, Adobe Photoshop, MS Office",
      link: "https://drive.google.com/drive/folders/1wryKRLTSdFR1lLyPdZp2E-c9pdbe9E-1?usp=sharing",
    },
  ];

  const skills = [
    { sn: "React & Next.js", level: 90 },
    { sn: "UI frontend design", level: 85 },
    { sn: "Tailwind CSS / Framer motion", level: 80 },
  ];

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    {
      node: <SiTypescript />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org",
    },
    {
      node: <SiTailwindcss />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com",
    },
  ];

  const imageLogos = [
    {
      src: "/logos/company1.png",
      alt: "Company 1",
      href: "https://company1.com",
    },
    {
      src: "/logos/company2.png",
      alt: "Company 2",
      href: "https://company2.com",
    },
    {
      src: "/logos/company3.png",
      alt: "Company 3",
      href: "https://company3.com",
    },
  ];
  return (
    <>
      <div className="skills-container flex flex-col items-center justify-center">
        <div className="skills w-full">
          <h1 className="text-white text-center text-5xl font-semibold p-5">
            My Skill Set
          </h1>
          <p className="text-center text-xl text-gray-400 font-semibold mb-10">
            A comprehensive overveiw of my creative and technical abilities.
          </p>

          <div
            style={{
              height: "100px",
              position: "relative",
              overflow: "hidden",
              color: "white",
              marginTop: "2rem",
            }}
          >
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#0000"
              ariaLabel="Technology partners"
            />
          </div>

          <div className="chart-container flex items-center justify-center">
            <div className="chart w-[75%]">
              <h2 className="text-white font-semibold text-2xl">
                Technical Skills
              </h2>
              {skills.map((s, index) => (
                <React.Fragment key={index}>
                  <div className="mb-6 text-white flex justify-between mr-3 pt-5">
                    <span className="text-lg font-medium mt-3">{s.sn}</span>
                    <span className="text-lg font-medium text-gray-400">
                      {s.level}%
                    </span>
                  </div>
                  <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-blue-500 rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: `${s.level}%` }}
                    ></div>
                  </div>
                </React.Fragment>
              ))}

              <div className="max-w-10xl mx-auto px-8">
                <HoverEffect items={projects} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
