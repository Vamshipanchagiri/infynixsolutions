import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Careers from '@/components/Careers';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>Infynix Solutions - Smart IT. Simple Solutions.</title>
        <meta name="description" content="From strategy to execution, Infynix Solutions builds technology that grows with you. Custom software, web & mobile apps, cloud & DevOps, cybersecurity, and data & AI solutions." />
        <meta name="keywords" content="IT solutions, custom software, web development, mobile apps, cloud services, DevOps, cybersecurity, data analytics, AI solutions" />
        <meta property="og:title" content="Infynix Solutions - Smart IT. Simple Solutions." />
        <meta property="og:description" content="From strategy to execution, Infynix Solutions builds technology that grows with you." />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Helmet>
      
      <div className="min-h-screen bg-background font-sans antialiased">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Careers />
          <Contact />
        </main>
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;