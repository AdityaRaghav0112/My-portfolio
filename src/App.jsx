import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skill from './components/Skill';
import ExpEdu from './components/ExpEdu.jsx';

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
      <div id="exp" className='mt-20'></div>
      <ExpEdu/>
      
    </div>
  )
}

export default App
