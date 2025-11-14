"use client";
import React, { useState, useEffect, useRef } from "react";
import { Linkedin, Github, Menu, X, ArrowDown } from "lucide-react";
import TargetCursor from "./TargetCursor";
import myFile from '../assets/Resume.pdf';

const Header = () => {
  const navLinks = [
    { id: "projects", title: "Projects" },
    { id: "skills", title: "Skills" },
    { id: "exp", title: "Experience & Education" },
    { id: "contact", title: "Contact" },
  ];

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <> 
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between transition-all duration-500
        ${
          scrolled
            ? "w-[90%] sm:w-[80%] md:w-[70%] bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg px-4 sm:px-6 py-3 border border-white/20"
            : "w-[95%] sm:w-[90%] md:w-[85%] bg-transparent px-6 sm:px-10 py-4"
        }`}
    >
      {/* Logo / Name */}
      <button>
        <h1 className="font-semibold text-lg sm:text-xl text-white whitespace-nowrap">
          Aditya Raghav
        </h1>
      </button>
      
        
      {/* Desktop Navigation */}
      <ul className="hidden md:flex justify-evenly space-x-6 lg:space-x-10 font-medium text-gray-200">
        
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="hover:text-blue-400 transition-colors cursor-target cursor-none" 
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop Social Buttons */}
      <div className="hidden md:flex space-x-2 lg:space-x-3">
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = myFile;
            link.download = "Resume.pdf";
            link.click();
          }}
          className="text-white text-lg bg-blue-800 px-2 py-1 rounded-xl flex items-center gap-1 cursor-target hover:bg-transparent duration-500"
        >
          Resume <ArrowDown/>
        </button>
        
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 mt-3 w-full bg-black/70 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center space-y-4 md:hidden border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                handleNavClick(e, link.id);
                setMenuOpen(false);
              }}
              className="text-gray-200 hover:text-blue-400 text-base sm:text-lg transition-colors"
            >
              {link.title}
            </a>
          ))}

          <div className="flex space-x-4 mt-2">
            <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = myFile;
            link.download = "Resume.pdf";
            link.click();
          }}
          className="text-white text-lg bg-blue-800 px-2 py-1 rounded-xl flex items-center gap-1 cursor-target hover:bg-transparent duration-500"
        >
          Resume <ArrowDown/>
        </button>
          </div>
        </div>
      )}
    </header>
    </>
  );
};

export default Header;
