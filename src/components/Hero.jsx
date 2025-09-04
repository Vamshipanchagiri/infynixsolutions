import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Settings, Smartphone, Cloud, Shield, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };

  const services = [
    { icon: Settings, label: 'Custom Software' },
    { icon: Smartphone, label: 'Web & Mobile' },
    { icon: Cloud, label: 'Cloud & DevOps' },
    { icon: Shield, label: 'Cybersecurity' },
    { icon: BarChart3, label: 'Data & AI' }
  ];

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-slate-900/60 backdrop-brightness-75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
            Smart IT.
            <span className="block text-blue-400">Simple Solutions.</span>
          </h1>
          
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
            From strategy to execution, Infynix Solutions builds technology that grows with you.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-primary-foreground px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Get in touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="mt-12">
            <p className="text-sm font-medium text-slate-300 uppercase tracking-wider">Our Core Expertise</p>
            <div className="mt-4 flex justify-center items-center flex-wrap gap-x-6 gap-y-2">
              {services.map((service) => (
                <div key={service.label} className="flex items-center space-x-2 text-slate-200">
                  <service.icon className="h-4 w-4 text-blue-400" />
                  <span className="font-medium text-sm">{service.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;