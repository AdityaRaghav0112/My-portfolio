"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sampleImage from "../assets/p1.png";
import sampleImage2 from "../assets/p2.png";
import sampleImage3 from "../assets/p3.png";
import showcase1 from "../assets/skivvy.mp4";
import showcase2 from "../assets/demoParallax.mp4";
import showcase3 from "../assets/schedulify.mp4";

gsap.registerPlugin(ScrollTrigger);

// ✅ Reusable Project Card
const ProjectCard = ({
  image,
  title,
  year,
  description,
  tags,
  addr,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cursorRef = useRef(null);
  const cardRef = useRef(null);

  // Track mouse position relative to the card
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const moveCursor = (e) => {
      const rect = card.getBoundingClientRect();
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - rect.left}px`;
        cursorRef.current.style.top = `${e.clientY - rect.top}px`;
      }
    };

    card.addEventListener("mousemove", moveCursor);
    return () => card.removeEventListener("mousemove", moveCursor);
  }, []);

  

  return (

    
    <div className="relative w-screen h-full flex items-center justify-center px-10">
      <div
        ref={cardRef}
        className="relative bg-gradient-to-b from-zinc-900 to-black rounded-3xl overflow-hidden shadow-lg border border-zinc-800 max-w-5xl w-full group cursor-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.open(addr, "_blank")}
      >
        {/* Video Section */}
        <div className="relative w-full aspect-[16/9] flex justify-center items-center bg-black overflow-hidden">
          <motion.video
            src={image}
            className="w-full h-full cursor-target object-fill transition-all duration-500 ease-out group-hover:opacity-60 hover:scale-[90%]"
            initial={{ opacity: 1 }}
            whileHover={{ opacity: 0.6 }}
            transition={{ duration: 0.5 }}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Dark overlay for effect */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,black_100%)] opacity-0 group-hover:opacity-80 transition-all duration-500 pointer-events-none" />
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
          <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Custom Cursor */}
        <motion.div
          ref={cursorRef}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.8,
          }}
          transition={{ duration: 0.2 }}
          style={{ display: isHovered ? "block" : "none" }}
          className="absolute z-[9999] pointer-events-none text-white font-semibold bg-black/60 backdrop-blur-md border border-white/20 px-4 py-2 rounded-xl text-sm"
        >
          Visit Site
        </motion.div>
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
      addr: "https://skivvy.vercel.app/",
      image: showcase1,
      labelLeft: "",
      labelRight: "",
      title: "Skivvy",
      year: "2025",
      description:
        "A platform that pairs users by the skills they want to learn and teach, creating a space for mutual growth.",
      tags: [
        "WEB APP",
        "PROFILE PAIRING",
        "CHAT & MESSAGING",
        "VOICE/VIDEO INTERACTION",
        "DISCOVERY & MATCHING",
        "CLEAN, MODERN UI",
        "SKILL EXCHANGE REQUEST",
      ],
    },
  ];

  const projectsGroup2 = [
    {
      addr: "https://schedulify-three.vercel.app/",
      image: showcase3,
      labelLeft: "",
      labelRight: "",
      title: "Schedulify",
      year: "2025",
      description:
        "An interactive platform for students to learn, visualize, and master CPU scheduling algorithms with comprehensive notes.",
      tags: ["WEB APP", "FRONTEND", "GRAPHS & CHARTS", "TABLES", "NOTES"],
    },
  ];

  const projectsGroup3 = [
    {
      addr: "",
      image: showcase2,
      labelLeft: "Solo Dev.",
      labelRight: "Creative App",
      title: "Parallax",
      year: "2024",
      description:
        "A lightweight UI component showcasing parallax using multiple parts of an image and can be used in any web project.",
      tags: ["FRONTEND", "ANIMATION", "UI COMPONENT"],
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
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      <div ref={containerRef} className="flex h-full w-[300vw]">
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

        {/* ✅ Third Project Group */}
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
