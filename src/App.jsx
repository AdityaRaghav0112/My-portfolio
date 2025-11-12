import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skill from './components/Skill';
import ExpEdu from './components/ExpEdu.jsx';
import Contact from './components/Contact';

const App = () => {

  
  return (
    <div>
      <Header/>
      <div id="about">
        <Hero/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="skills">
        <Skill/>
      </div>
      <div id="exp"><ExpEdu/></div>
      <div id="contact" className='mt-20'><Contact/></div>
      
    </div>
  )
}

export default App
