import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, Award, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Careers = () => {
  const openEmailClient = () => {
    window.location.href = "mailto:careers@infynixsolutions.in";
  };

  const culturePoints = [
    {
      icon: Zap,
      title: 'Growth-Focused',
      description: 'We invest in your development with continuous learning and career advancement opportunities.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive, team-oriented environment.'
    },
    {
      icon: Award,
      title: 'Innovation-Driven',
      description: 'Be part of a culture that encourages creativity and the pursuit of cutting-edge solutions.'
    }
  ];

  const openPositions = [ 'Senior Developer', 'Cloud Engineer', 'UI/UX Designer', 'Data Analyst' ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <section id="careers" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">Build Tomorrow’s Tech With Us</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join a growth-focused, collaborative, and innovation-driven team dedicated to shaping the future of technology.
          </p>
        </motion.div>

        <motion.div {...fadeIn} className="grid md:grid-cols-3 gap-8 mb-20">
          {culturePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.5 }}
              className="text-center p-6"
            >
              <div className="inline-flex p-3 bg-blue-100 text-blue-600 rounded-lg mb-5">
                <point.icon className="h-7 w-7" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-2">{point.title}</h4>
              <p className="text-muted-foreground">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div {...fadeIn} className="bg-secondary rounded-lg p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">Current Open Roles</h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">We're always looking for passionate people to join our team. Check out our open positions below.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            {openPositions.map((position) => (
              <div key={position} className="flex flex-col items-center text-center p-4 bg-background rounded-lg border">
                <Briefcase className="h-7 w-7 text-blue-600 mb-3" />
                <span className="font-semibold text-foreground text-sm sm:text-base">{position}</span>
              </div>
            ))}
          </div>
          <Button
            onClick={openEmailClient}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-primary-foreground px-8 text-base font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Apply Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;