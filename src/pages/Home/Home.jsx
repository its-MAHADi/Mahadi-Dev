import React from 'react'
import Banner from '../../component/Banner'
import About from '../../component/About'
import Skills from '../../component/Skills'
import Projects from '../../component/Projects'
import ContactInfo from '../../component/ContactInfo'

const Home = () => {
  return (
    <div>
       <Banner></Banner>
       <About></About>
       <Skills></Skills>
       <Projects></Projects>
       <ContactInfo></ContactInfo>
    </div>
  )
}

export default Home
