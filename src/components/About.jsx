import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Shield } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const values = [
    {
      icon: Target,
      title: 'Precision Driven',
      description: 'Delivering exact, high-quality solutions from our development center in HITEC City.'
    },
    {
      icon: Lightbulb,
      title: 'Global Innovation',
      description: 'Bringing world-class Indian engineering talent to solve complex global challenges.'
    },
    {
      icon: Heart,
      title: 'Client First',
      description: 'Building sustainable, long-term partnerships rooted in transparency and trust.'
    },
    {
      icon: Shield,
      title: 'Data Integrity',
      description: 'Adhering to strict international security standards and compliance protocols.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 transform origin-top-right z-0 pointer-events-none" 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-slate-400 font-medium tracking-widest text-sm uppercase mb-3 block">Who We Are</span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-800 mb-6 tracking-tight">
            Engineering Excellence from <span className="text-slate-500">Hyderabad</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Infynix Solutions is a premier IT consultancy headquartered in India's tech hub. We bridge the gap between complex business requirements and elegant technical execution, serving clients across North America, Europe, and Asia.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ 
                  y: -10, 
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 group cursor-default hover:shadow-xl"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6 text-slate-600 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">{value.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{value.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.02, transition: { duration: 0.4 } }}
          className="bg-slate-900 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900 z-0" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" 
          />
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold mb-4 tracking-tight">Partner with India's Finest Talent</h3>
            <p className="text-lg mb-8 text-slate-300 font-light">
              Join the league of forward-thinking companies powered by Infynix.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="bg-white text-slate-900 px-8 py-4 rounded-xl font-medium text-lg hover:bg-slate-50 hover:shadow-lg transition-all duration-300"
            >
              Start Your Journey
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;