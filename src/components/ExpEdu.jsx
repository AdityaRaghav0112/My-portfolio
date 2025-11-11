import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import webD from "../assets/webD.png";
import DSA from "../assets/DSA.png";
import Col from "../assets/College.png";
import Sch from "../assets/School.png";

const experiences = [
  {
    icon: <GraduationCap className="text-cyan-400 w-6 h-6" />,
    title: "High School | Pathfinder Global School, Pataudi",
    period: "Completed 2021",
    description:
      "Developed teamwork, leadership, and curiosity through academics and cultural participation, which shaped my confidence and passion for technology.",
    image: Sch,
  },
  {
    icon: <GraduationCap className="text-cyan-400 w-6 h-6" />,
    title: "B.Tech CSE | Dronacharya College of Engineering, Gurgaon",
    period: "2021 – 2025 (Pursuing)",
    description:
      "Building a solid foundation in software development, data structures, and system design. Passionate about full-stack web development, creating efficient, user-friendly applications, and exploring new tools & frameworks.",
    image: Col,
  },
  {
    icon: <GraduationCap className="text-cyan-400 w-6 h-6" />,
    title: "B.Tech CSE | Dronacharya College of Engineering, Gurgaon",
    period: "2021 – 2025 (Pursuing)",
    description:
      "Building a solid foundation in software development, data structures, and system design. Passionate about full-stack web development, creating efficient, user-friendly applications, and exploring new tools & frameworks.",
    image: Col,
  },
  {
    icon: <Briefcase className="text-cyan-400 w-6 h-6" />,
    title: "Web Development Internship | Aptron Pvt. Ltd., Noida",
    period: "Jun 2024 – Jul 2024",
    description:
      "5-week internship where I gained hands-on experience in front-end web development using HTML, CSS, JavaScript, and React. I built responsive and interactive interfaces while improving my understanding of modern UI design and component-based architecture.",
    image: webD,
  },
];

const ExpEdu = () => {
  return (
    <section className="w-full bg-background py-20 px-4 sm:px-8 lg:px-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Experience & Education
        </h1>
        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
          My professional and academic journey so far.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-1/2 before:w-[2px] before:bg-gradient-to-b before:from-cyan-400 before:to-transparent">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex flex-col sm:flex-row items-center gap-6 mb-20 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="flex-shrink-0 w-full sm:w-1/2 flex justify-center">
              <motion.img
                src={exp.image}
                alt={exp.title}
                className="rounded-2xl shadow-lg w-full max-w-[350px] object-cover border border-gray-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Content */}
            <div className="w-full sm:w-1/2 bg-[#0f172a]/70 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg text-white">
              <div className="flex items-center gap-3 mb-3">
                {exp.icon}
                <h2 className="text-xl sm:text-2xl font-semibold">
                  {exp.title}
                </h2>
              </div>
              <p className="text-sm text-cyan-400 font-medium mb-2">
                {exp.period}
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                {exp.description}
              </p>
            </div>

            {/* Dot on timeline */}
            <span className="absolute left-1/2 -translate-x-1/2 bg-cyan-400 rounded-full w-4 h-4 border-4 border-[#0f172a]"></span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExpEdu;
