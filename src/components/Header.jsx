"use client";
import React, { useState, useEffect} from "react";
import { Linkedin, Github, Menu, X } from "lucide-react";


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
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between transition-all duration-500 
          ${
            scrolled
              ? "w-[70%] bg-white/10 backdrop-blur-lg rounded-full shadow-lg px-8 py-4 border border-white/20"
              : "w-[95%] bg-transparent px-12 py-6"
          }
        `}
      >
        {/* Logo / Name */}
        <button><h1 className="font-semibold text-xl text-white">Aditya Raghav</h1></button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-evenly space-x-10 font-medium text-gray-200">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="hover:text-blue-400 transition-colors"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Buttons */}
        <div className="hidden md:flex space-x-3">
          <button
            onClick={() =>
              window.open("https://linkedin.com/in/aditya-raghav-958247259")
            }
            className="w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full hover:scale-110 duration-150 hover:border-2 hover:border-blue-400"
          >
            <Linkedin size={20} />
          </button>
          <button
            onClick={() =>
              window.open("https://github.com/AdityaRaghav0112", "_blank")
            }
            className="w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full hover:scale-110 duration-150 hover:border-2 hover:border-blue-400"
          >
            <Github size={20} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="absolute top-full mt-3 left-0 w-full bg-black/60 backdrop-blur-md rounded-2xl p-4 md:hidden flex flex-col items-center space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  handleNavClick(e, link.id);
                  setMenuOpen(false);
                }}
                className="text-gray-200 hover:text-blue-400 text-lg transition-colors"
              >
                {link.title}
              </a>
            ))}
            <div className="flex space-x-3 mt-2">
              <button
                onClick={() =>
                  window.open("https://linkedin.com/in/aditya-raghav-958247259")
                }
                className="w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full hover:scale-110 duration-150 hover:border-2 hover:border-blue-400"
              >
                <Linkedin size={20} />
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/AdityaRaghav0112", "_blank")
                }
                className="w-10 h-10 flex items-center justify-center bg-cyan-950 rounded-full hover:scale-110 duration-150 hover:border-2 hover:border-blue-400"
              >
                <Github size={20} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
