import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skill from './components/Skill';
import ExpEdu from './components/ExpEdu.jsx';
import FeaturesSectionDemo from './components/features-section-demo-3';
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
      <div id="exp"><FeaturesSectionDemo/></div>
      <div id="skills">
        <Skill/>
      </div>
      
      <div id="contact" className='mt-20'><Contact/></div>
      
    </div>
  )
}

export default App
