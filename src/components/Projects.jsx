"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sampleImage from "../assets/p1.png";
import sampleImage2 from '../assets/p2.png';
import sampleImage3 from '../assets/p3.png';

gsap.registerPlugin(ScrollTrigger);

// ✅ Reusable Project Card
const ProjectCard = ({ image, labelLeft, labelRight, title, year, description, tags }) => {
  return (
    <div className="relative w-screen h-full flex items-center justify-center px-10">
      <div className="relative bg-gradient-to-b from-zinc-900 to-black rounded-3xl overflow-hidden shadow-lg border border-zinc-800 max-w-5xl w-full group">
        {/* Image Section */}
        <div className="relative w-full aspect-[16/9] flex justify-center items-center bg-black overflow-hidden">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:opacity-60 hover:size-[95%]"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.5 }}
          />

          {/* Black vignette lighting */}
          <div className="absolute inset-0 rounded-3xl pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)] opacity-0 group-hover:opacity-80 transition-all duration-500" />

          {/* Floating Labels */}
          <div className="absolute bottom-8 left-10">
            <span className="bg-amber-500/90 text-black px-3 py-1 rounded-lg font-semibold text-sm shadow-lg">
              {labelLeft}
            </span>
          </div>

          <div className="absolute bottom-8 right-10">
            <span className="bg-indigo-500/90 text-white px-3 py-1 rounded-lg font-semibold text-sm shadow-lg">
              {labelRight}
            </span>
          </div>

          {/* Center Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20"
          >
            View Details
          </motion.button>
        </div>

        {/* Info Section */}
        <div className="p-6 text-zinc-100">
          <p className="text-sm text-zinc-400">{year}</p>
          <h2 className="text-2xl font-extrabold mt-1">{title}</h2>

          <div className="flex flex-wrap gap-2 my-3">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-zinc-800 text-zinc-300 text-xs px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

// ✅ Main Projects Section
const Projects = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const projectsGroup1 = [
    {
      image: sampleImage,
      labelLeft: "Group Cptn.",
      labelRight: "Air Marshal",
      title: "Skivvy",
      year: "2025",
      description:
        "How we helped Indian Defense units move from static sand models to a digital planning tool...",
      tags: ["WEB APP", "UI/UX DESIGN", "USER RESEARCH"],
    },
  ];

  const projectsGroup2 = [
    {
      image: sampleImage2,
      labelLeft: "Solo Dev.",
      labelRight: "Creative App",
      title: "Schedulify",
      year: "2024",
      description:
        "A lightweight design system made for fast prototyping and creative workflows.",
      tags: ["DESIGN SYSTEM", "FRONTEND", "ANIMATION"],
    },
  ];
  const projectsGroup3 = [
    {
      image: sampleImage3,
      labelLeft: "Solo Dev.",
      labelRight: "Creative App",
      title: "Schedulify",
      year: "2024",
      description:
        "A lightweight design system made for fast prototyping and creative workflows.",
      tags: ["DESIGN SYSTEM", "FRONTEND", "ANIMATION"],
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const totalScrollWidth = container.scrollWidth - section.offsetWidth;

    gsap.to(container, {
      x: -totalScrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => `+=${totalScrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidde">
      <div ref={containerRef} className="flex h-full w-[200vw]">
        {/* ✅ First Project Group */}
        <div className="flex w-screen h-full justify-center items-center">
          {projectsGroup1.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        {/* ✅ Second Project Group */}
        <div className="flex w-screen h-full justify-center items-center">
          {projectsGroup2.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <div className="flex w-screen h-full justify-center items-center">
          {projectsGroup3.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
