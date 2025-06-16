import React from 'react'
import Hero from '../components/Hero'
import Menu from '../components/Menu'
import Location from '../components/Location'
import About from '../components/About'
import Contact from '../components/Contact'

function Home() {
  return (
    <div>
      <Hero/>
      <Menu/>
      <Location/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Home

