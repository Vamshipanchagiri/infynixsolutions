import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CareersSection from "@/components/sections/CareersSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    // Update page title and meta description for SEO
    document.title = "Infynix Solutions | Enterprise IT Services & Digital Solutions";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Infynix Solutions delivers premium web development, mobile apps, cloud solutions, and IT consulting services. Your trusted technology partner for digital transformation."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CareersSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
