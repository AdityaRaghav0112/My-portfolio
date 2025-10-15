import React from 'react'
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import webD from '../assets/webD.png';
import DSA from '../assets/DSA.png';
import Col from '../assets/College.png';
import Sch from '../assets/School.png';

const ExpEdu = () => {
    const content = [
  {
    title: "Web Development Internship | Aptron pvt.ltd.,Noida",
    description:
      "During my 5-weeks internship at Aptron Pvt. Ltd.(from 17th June 2024 to 20th Julty 2024, I gained hands-on experience in front-end web development using HTML, CSS, JS, ReactJS. I worked on building responsive and interactive web interfaces while strengthening my understanding of component-based architecture and modern UI design principles. This internship helped me enhance my problem-solving skills, improve code efficiency, and gain practical exposure to real-world development workflows",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={webD}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "DSA summer school | Dronacharya college of engineering",
    description:
      "I participated in a 6-week DSA (Data Structures and Algorithms) Summer School at Dronacharya College of Engineering, where I strengthened my understanding of core computer science concepts and problem-solving techniques. During the program, I worked on implementing various data structures and algorithms in C++, focusing on optimizing time and space complexity. This experience significantly improved my logical thinking, coding efficiency, and ability to approach complex computational problems systematically.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={DSA}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "B.tech CSE | Dronacharya College of Engineering,Gurgaon",
    description:
      "With a strong foundation in Web development and modern front-end technilogies. My academic journey has equipped me with a solid programming and problem solving skills. I am passionate about designing efficient, user-friendly web applications and continuously exploring new tools and frameworks to enhance my development skills.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={Col}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "High School | Pathfinder Global School,Pataudi",
    description:
      "I completed my schooling at Pathfinder Global School, Pataudi, where I built a strong academic foundation and developed a disciplined and analytical approach to learning. My time at Pathfinder helped me cultivate curiosity, teamwork, and leadership skills through active participation in academics, cultural events, and co-curricular activities. The school’s emphasis on holistic development played a key role in shaping my communication skills, confidence, and interest in technology, which eventually guided me toward pursuing a career in computer science.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src={Sch}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  
];
  return (
    <> 
    <div className="exp-container">
      <h1 className='text-white text-5xl text-center font-semibold p-5'>Experience & Education </h1>
    <p className='text-gray-400 text-center text-xl font-semibold'>My professional journey and academic background</p>
    </div>
    <div className="w-full py-4 mt-10">
      <StickyScroll content={content} />
    </div>
    </>
  )
}

export default ExpEdu;
