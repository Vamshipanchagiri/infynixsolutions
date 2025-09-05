import React from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';

const MainPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Careers />
      <Contact />
    </>
  );
};

export default MainPage;