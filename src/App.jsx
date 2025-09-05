import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MainPage from '@/pages/MainPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  const location = useLocation();

  return (
    <div className="bg-gray-50 text-gray-800">
      <Helmet>
        <title>Infynix Solutions - Smart IT. Simple Solutions.</title>
        <meta name="description" content="From strategy to execution, Infynix Solutions builds technology that grows with you. We offer custom software, web & mobile apps, cloud & DevOps, cybersecurity, and data & AI services." />
        <meta property="og:title" content="Infynix Solutions - Smart IT. Simple Solutions." />
        <meta property="og:description" content="From strategy to execution, Infynix Solutions builds technology that grows with you." />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      
      <ScrollToTop />
      <Header />
      <main>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<MainPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;