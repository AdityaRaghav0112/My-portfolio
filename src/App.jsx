import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skill from './components/Skill';

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
      <div id="contact" className="mt-20"></div>
      <Skill/>
    </div>
  )
}

export default App
