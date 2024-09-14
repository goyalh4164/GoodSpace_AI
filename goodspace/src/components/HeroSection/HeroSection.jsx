import React from 'react'
import { NavBar } from '../Navbar/Navbar'
import { Banner } from '../Banner/Banner'

const HeroSection = () => {
  return (
    <div>
        <div>
          <NavBar/>
        </div>
        <div>
            <Banner/>
        </div>
    </div>
  )
}

export default HeroSection