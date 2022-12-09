import React from 'react'
import '../assets/css/custom.css';
// import all the components here to render.
import Navbar from './Navbar';
import Hero from './Hero';
import Linkedin from './Linkedin';
import Work from './Work';
import Resume from './Resume';
import Skills from './Skills';
import Upwork from './Upwork';
import Projects from './Projects';
import GitRepo from './GitRepo';
import Touch from './Touch';

const Home = () => {
  return (
    <>
       <Navbar /> 
       <Hero />
       <Resume />
       <Work />
       <Upwork />
       <Skills />
       <Linkedin />
       <Projects />
       <GitRepo />
       <Touch />
    </>
  )
}

export default Home