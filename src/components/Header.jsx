"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ArrowDown } from "lucide-react";
import myFile from "../assets/Resume.pdf";

const Header = () => {
  const navLinks = [
    { id: "projects", title: "Projects" },
    { id: "exp", title: "About" },
    { id: "skills", title: "Skills" },
    { id: "contact", title: "Contact" },
  ];

  const handleNavClick = (event, targetId) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${
          scrolled
            ? "w-[90%] md:w-[75%] bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg px-6 py-3 border border-white/20"
            : "w-[95%] md:w-[85%] bg-transparent px-8 py-4"
        }`}
    >
      <div className="flex items-center w-full">
        {/* LEFT: LOGO */}
        <h1 className="font-semibold text-lg sm:text-xl text-white whitespace-nowrap">
          Aditya Raghav
        </h1>

        {/* RIGHT: NAV + RESUME */}
        <div className="hidden md:flex items-center ml-auto gap-10">
          {/* NAV LINKS */}
          <ul className="flex gap-8 font-medium text-gray-200">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className=""
                >
                  <button className="relative font-semibold group cursor-pointer">{link.title}
                    <span className="absolute left-0 bottom-0 w-0 h-0.75 bg-white transition-all duration-200 group-hover:w-full rounded-full"></span>
                  </button>
                </a>
              </li>
            ))}
          </ul>
          <div className="w-px h-7 bg-white"></div>
          {/* RESUME BUTTON */}
          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = myFile;
              link.download = "Resume.pdf";
              link.click();
            }}
            className="bg-white text-black px-4 py-2 rounded-xl flex items-center gap-2 font-medium hover:bg-white/80 transition"
          >
            Resume <ArrowDown size={18} />
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {menuOpen && (
        <div className="md:hidden mt-4 bg-black/70 backdrop-blur-lg rounded-2xl p-4 flex flex-col items-center space-y-4 border border-white/10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                handleNavClick(e, link.id);
                setMenuOpen(false);
              }}
              className="text-gray-200 hover:text-blue-400 text-lg transition"
            >
              {link.title}
            </a>
          ))}

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = myFile;
              link.download = "Resume.pdf";
              link.click();
            }}
            className="bg-white text-black px-4 py-2 rounded-xl flex items-center gap-2 font-medium"
          >
            Resume <ArrowDown size={18} />
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
