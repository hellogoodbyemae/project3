import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import { homeObjOne, homeObjTwo } from './Data';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne}/>
      <HeroSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Home;