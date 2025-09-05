import React from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { Cog, Code, Cloud, ShieldCheck, BarChart } from 'lucide-react';

const serviceHighlights = [
  { icon: Cog, text: 'Custom Software' },
  { icon: Code, text: 'Web & Mobile Apps' },
  { icon: Cloud, text: 'Cloud & DevOps' },
  { icon: ShieldCheck, text: 'Cybersecurity' },
  { icon: BarChart, text: 'Data & AI' },
];

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      <motion.div 
        className="absolute inset-0 z-0"
        animate={{
          background: [
            "linear-gradient(135deg, #e0f7fa 0%, #e8eaf6 100%)",
            "linear-gradient(135deg, #e8eaf6 0%, #f3e5f5 100%)",
            "linear-gradient(135deg, #f3e5f5 0%, #e0f7fa 100%)",
          ]
        }}
        transition={{
          duration: 15,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <div className="absolute inset-0 bg-grid-gray-200/[0.4] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl"
          >
            Smart IT. <span className="text-blue-600">Simple Solutions.</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg leading-8 text-gray-600 sm:text-xl"
          >
            From strategy to execution, Infynix Solutions builds technology that grows with you.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-10">
            <ScrollLink to="services" smooth={true} duration={500} offset={-80}>
              <Button size="lg">Start Your Journey</Button>
            </ScrollLink>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 lg:mt-24 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-12">
            {serviceHighlights.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-2 text-gray-600"
              >
                <item.icon className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;