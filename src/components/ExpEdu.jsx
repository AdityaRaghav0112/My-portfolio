import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import webD from "../assets/webD.png";
import DSA from "../assets/DSA.png";
import Col from "../assets/College.png";
import Sch from "../assets/School.png";

const ExpEdu = () => {
  const content = [
    {
      title: "Web Development Internship | Aptron Pvt. Ltd., Noida",
      description:
        "During my 5-week internship at Aptron Pvt. Ltd. (from 17th June 2024 to 20th July 2024), I gained hands-on experience in front-end web development using HTML, CSS, JS, and ReactJS. I built responsive and interactive web interfaces, strengthening my understanding of component-based architecture and modern UI design principles. This internship enhanced my problem-solving skills, improved code efficiency, and provided practical exposure to real-world development workflows.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={webD}
            className="h-auto w-full max-w-[350px] object-contain rounded-xl"
            alt="Web Development Internship"
          />
        </div>
      ),
    },
    {
      title: "DSA Summer School | Dronacharya College of Engineering",
      description:
        "I participated in a 6-week DSA (Data Structures and Algorithms) Summer School at Dronacharya College of Engineering, where I strengthened my understanding of core computer science concepts and problem-solving techniques. I implemented various data structures and algorithms in C++, focusing on optimizing time and space complexity. This experience enhanced my logical thinking, coding efficiency, and structured problem-solving skills.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={DSA}
            className="h-auto w-full max-w-[350px] object-contain rounded-xl"
            alt="DSA Summer School"
          />
        </div>
      ),
    },
    {
      title: "B.Tech CSE | Dronacharya College of Engineering, Gurgaon",
      description:
        "With a strong foundation in web development and modern front-end technologies, my academic journey has equipped me with solid programming and problem-solving skills. I’m passionate about designing efficient, user-friendly web applications and continuously exploring new tools and frameworks to enhance my development expertise.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={Col}
            className="h-auto w-full max-w-[350px] object-contain rounded-xl"
            alt="College"
          />
        </div>
      ),
    },
    {
      title: "High School | Pathfinder Global School, Pataudi",
      description:
        "I completed my schooling at Pathfinder Global School, Pataudi, where I built a strong academic foundation and developed curiosity, teamwork, and leadership through active participation in academics and cultural events. This environment shaped my communication, confidence, and interest in technology, guiding me toward computer science.",
      content: (
        <div className="flex h-full w-full items-center justify-center">
          <img
            src={Sch}
            className="h-auto w-full max-w-[350px] object-contain rounded-xl"
            alt="School"
          />
        </div>
      ),
    },
  ];

  return (
    <>
      {/* Header Section */}
      <div className="exp-container w-full px-4 sm:px-8 lg:px-20 mt-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl text-center font-semibold p-3 sm:p-5">
          Experience & Education
        </h1>
        <p className="text-gray-400 text-center text-base sm:text-lg md:text-xl font-medium max-w-3xl mx-auto">
          My professional journey and academic background
        </p>
      </div>

      {/* Sticky Scroll Section */}
      <div className="w-full py-6 sm:py-8 mt-8 sm:mt-10">
        <StickyScroll content={content} />
      </div>
    </>
  );
};

export default ExpEdu;