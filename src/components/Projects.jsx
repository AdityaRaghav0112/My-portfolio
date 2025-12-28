import React, { useState } from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { ArrowRight } from "lucide-react";
import ProjectsDetails from "./ProjectsDetails";
import { motion, useMotionValue, useSpring } from "motion/react";

const PREVIEW_RADIUS = 180; // 👈 change radius here (px)

const Projects = () => {
  const [isHidden, setIsHidden] = useState(false);

  // Cursor motion
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 10 });
  const springY = useSpring(y, { stiffness: 50, damping: 10 });

  // Preview control
  const [preview, setPreview] = useState(null);
  const [hoveredRect, setHoveredRect] = useState(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    setCursor({ x: mouseX, y: mouseY });
    x.set(mouseX + 20);
    y.set(mouseY + 20);
  };

  // Distance check
  const isWithinRadius = (mouse, rect, radius) => {
    if (!rect) return false;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = mouse.x - centerX;
    const dy = mouse.y - centerY;

    return Math.sqrt(dx * dx + dy * dy) < radius;
  };

  const Rprojects = [
    {
      title: "Skivvy",
      description:
        "An AI-powered personal assistant that helps you manage your tasks, schedule, and more.",
      link: "https://skivvy.ai",
      thumbnail: "/Projects/Skivvy.png",
    },
    {
      title: "Schedulify",
      description:
        "Smart scheduling platform for productivity.",
      link: "https://editorially.org",
      thumbnail: "/Projects/Schedulify.png",
    },
    {
      title: "Editrix AI",
      description:
        "AI-powered content editing platform.",
      link: "https://editrix.ai",
      thumbnail: "/Projects/Skivvy.png",
    },
    {
      title: "Pixel Perfect",
      description:
        "UI testing and pixel comparison tool.",
      link: "https://app.pixelperfect.quest",
      thumbnail: "/Projects/Skivvy.png",
    },
  ];

  const products = [
    { title: "Bikerz", link: "https://gomoonbeam.com", thumbnail: "/Projects/Skivvy.png" },
    { title: "Todo List", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
    { title: "Skivvy", link: "https://userogue.com", thumbnail: "/Projects/Skivvy.png" },
    { title: "Schedulify", link: "https://editorially.org", thumbnail: "/Projects/Schedulify.png" },
    { title: "Bikerz", link: "https://gomoonbeam.com", thumbnail: "/Projects/Skivvy.png" },
    { title: "Todo List", link: "https://cursor.so", thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png" },
    { title: "Skivvy", link: "https://userogue.com", thumbnail: "/Projects/Skivvy.png" },
    { title: "Schedulify", link: "https://editorially.org", thumbnail: "/Projects/Schedulify.png" },
  ];

  return (
    <div>
      <HeroParallax products={products} />

      <div className="px-4 py-16" onMouseMove={handleMouseMove}>
        <h1 className="text-center font-bold text-5xl text-white">
          My recent projects
        </h1>

        {Rprojects.map((project, index) => (
          <div
            key={index}
            onMouseEnter={(e) => {
              setPreview(project.thumbnail);
              setHoveredRect(e.currentTarget.getBoundingClientRect());
            }}
            onMouseLeave={() => {
              setPreview(null);
              setHoveredRect(null);
            }}
          >
            <div className="w-full bg-transparent rounded-xl shadow-md overflow-hidden my-8 flex justify-between items-center">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-white">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-white">
                    {project.description}
                  </p>
                </div>
              </a>

              <button
                onClick={() => setIsHidden(true)}
                className="text-white pr-4 flex gap-2 hover:pr-8 duration-200"
              >
                Read more <ArrowRight />
              </button>
            </div>

            {isHidden && (
              <ProjectsDetails
                title={project.title}
                description={project.description}
                link={project.link}
                thumbnail={project.thumbnail}
                closeModel={() => setIsHidden(false)}
              />
            )}

            <hr className="text-white" />
          </div>
        ))}

        {/* Cursor Preview */}
        {preview &&
          isWithinRadius(cursor, hoveredRect, PREVIEW_RADIUS) && (
            <motion.img
              src={preview}
              alt=""
              className="fixed top-0 left-0 z-50 w-120 h-auto 
                         object-cover rounded-lg shadow-lg 
                         pointer-events-none"
              style={{ x: springX, y: springY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
      </div>
    </div>
  );
};

export default Projects;
