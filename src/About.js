import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from "./context/productcontex"


const About = () => {

  const { myName } = useProductContext();
  return (
   <>
   {myName}
   <HeroSection name="MinkMart Store" />
   </>

  )
}

export default About
