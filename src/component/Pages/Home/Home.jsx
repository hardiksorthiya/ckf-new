import React from 'react';
import Navbar from '../../Include/Navbar/Navbar';
import Hero from './Hero';
import About from './About';
import Services from './Services';

export default function Home() {
  return (
    <>
   <Navbar />
   <Hero/>
   <About/>
   <Services/>
   </>
  )
}
