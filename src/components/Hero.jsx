import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Award, Globe, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const [counts, setCounts] = useState({
    clients: 0,
    projects: 0,
    partners: 0,
    years: 0
  });

  const stats = [
    { icon: Users, label: 'Clients Served', value: 200, suffix: '+', color: 'bg-slate-100 text-slate-600' },
    { icon: Award, label: 'Projects Delivered', value: 500, suffix: '+', color: 'bg-slate-100 text-slate-600' },
    { icon: Globe, label: 'Global Partners', value: 30, suffix: '+', color: 'bg-slate-100 text-slate-600' },
    { icon: Briefcase, label: 'Years Experience', value: 9, suffix: '+', color: 'bg-slate-100 text-slate-600' }
  ];

  useEffect(() => {
    const duration = 2500;
    const steps = 60;
    const interval = duration / steps;

    const counters = [
        { key: 'clients', target: 200 },
        { key: 'projects', target: 500 },
        { key: 'partners', target: 30 },
        { key: 'years', target: 9 }
    ];

    const timer = setInterval(() => {
      setCounts((prev) => {
        const newCounts = { ...prev };
        let allComplete = true;

        counters.forEach((counter) => {
          if (newCounts[counter.key] < counter.target) {
            const remaining = counter.target - newCounts[counter.key];
            const increment = Math.ceil(remaining / 15); // Slower finish
            
            newCounts[counter.key] = Math.min(
              newCounts[counter.key] + (increment > 0 ? increment : 1),
              counter.target
            );
            allComplete = false;
          }
        });

        if (allComplete) {
          clearInterval(timer);
        }

        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 1,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section ref={targetRef} id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-hero-mesh">
      {/* Parallax Background Elements */}
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -right-20 w-[500px] h-[500px] bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: textY }}
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 rounded-full text-sm font-medium mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Leading IT Consultancy in Hyderabad
            </motion.div>
            
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-semibold text-slate-800 mb-6 leading-tight tracking-tight"
            >
              Simplicity in <br/>
              <span className="text-slate-400">Complex</span> Innovation
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-slate-500 mb-8 leading-relaxed font-light max-w-lg"
            >
              From our headquarters in Hyderabad's HITEC City, we engineer minimalist digital solutions for global enterprises.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl hover:shadow-slate-200 transition-all duration-500 relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Start Project
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-slate-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out" />
              </Button>
              <Button
                onClick={() => {
                  const element = document.querySelector('#services');
                  if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                size="lg"
                variant="outline"
                className="border border-slate-200 text-slate-600 hover:bg-slate-50 px-8 py-6 text-lg rounded-xl transition-all duration-500 hover:scale-105 active:scale-95"
              >
                Explore Services
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              let key = '';
              if (stat.label.includes('Clients')) key = 'clients';
              else if (stat.label.includes('Projects')) key = 'projects';
              else if (stat.label.includes('Partners')) key = 'partners';
              else if (stat.label.includes('Years')) key = 'years';
              
              return (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ y: -8, transition: { duration: 0.4, ease: "easeOut" } }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
                >
                  <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl font-semibold text-slate-800 mb-1 tracking-tight">
                    {Math.floor(counts[key])}{stat.suffix}
                  </div>
                  <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;