import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Eye, Rocket, Star } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'To simplify digital growth for every business, making technology an asset, not a hurdle.',
  },
  {
    icon: Rocket,
    title: 'Our Mission',
    description: 'To deliver dependable, agile, and future-ready IT services that empower our clients to succeed.',
  },
  {
    icon: Star,
    title: 'Core Values',
    description: 'Trust, Speed, and Excellence are the pillars of our work, ensuring quality and integrity in all we do.',
  },
];

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Pioneering Digital Transformation
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            At Infynix Solutions, we are more than just a technology provider; we are your strategic partner in navigating the complexities of the digital world. Our team is dedicated to crafting innovative solutions that drive growth and efficiency.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-3"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full text-center shadow-sm hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <value.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="mt-4">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;