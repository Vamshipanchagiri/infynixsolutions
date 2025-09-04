import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, HeartHandshake as Handshake } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Handshake,
      title: 'Trust',
      description: 'Building lasting partnerships through transparency and reliability.',
    },
    {
      icon: Target,
      title: 'Speed',
      description: 'Delivering solutions quickly without compromising on quality.',
    },
    {
      icon: Eye,
      title: 'Excellence',
      description: 'Pursuing perfection in every project and client interaction.',
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">About Infynix Solutions</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are a forward-thinking IT company dedicated to transforming businesses through innovative technology solutions. 
            Our team of experts combines technical excellence with strategic thinking to deliver results that matter.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <motion.div {...fadeIn}>
            <img
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              alt="Professional team collaborating in a modern office environment" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" />
          </motion.div>

          <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.2}} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-lg text-muted-foreground">
                To simplify digital growth for every business. We envision a world where technology empowers organizations to achieve their full potential without complexity barriers.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-lg text-muted-foreground">
                To deliver dependable, agile, and future-ready IT services. We partner with businesses to create technology solutions that drive growth, efficiency, and innovation.
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeIn}>
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.5 }}
                className="text-center p-6 bg-card border rounded-lg"
              >
                <div className="inline-flex p-3 bg-blue-100 text-primary rounded-lg mb-5">
                  <value.icon className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;