import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cloud,
  Shield,
  Code,
  Database,
  Smartphone,
  BarChart,
  ArrowLeft,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from './ui/button';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const services = [
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust, scalable cloud architectures designed for high availability.',
      fullDescription:
        'We design, migrate, and manage cloud platforms that are secure, scalable, and cost-efficient.',
      features: [
        'AWS & Azure Migration',
        'Serverless Architecture',
        'Kubernetes',
        'Cost Optimization',
        'Disaster Recovery'
      ]
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced cybersecurity frameworks to protect your digital assets.',
      fullDescription:
        'We safeguard your infrastructure using modern security practices and compliance standards.',
      features: [
        'Penetration Testing',
        'SOC Operations',
        'Identity Management',
        'Compliance & Audits'
      ]
    },
    {
      id: 'engineering',
      icon: Code,
      title: 'Custom Engineering',
      description: 'Bespoke software solutions built with modern stacks.',
      fullDescription:
        'We build high-quality applications tailored exactly to your business needs.',
      features: [
        'Full Stack Development',
        'Microservices',
        'API Integration',
        'Legacy Modernization'
      ]
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data Intelligence',
      description: 'Transform raw data into actionable insights.',
      fullDescription:
        'We help organizations make smarter decisions using analytics and data platforms.',
      features: [
        'Data Warehousing',
        'ETL Pipelines',
        'Business Intelligence',
        'Predictive Analytics'
      ]
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'High-performance mobile apps for modern users.',
      fullDescription:
        'We create fast, reliable, and user-friendly mobile applications.',
      features: [
        'iOS & Android',
        'React Native',
        'Mobile UI/UX',
        'Offline Support'
      ]
    },
    {
      id: 'strategy',
      icon: BarChart,
      title: 'Digital Strategy',
      description: 'Guiding your digital transformation journey.',
      fullDescription:
        'We help leaders plan and execute successful digital strategies.',
      features: [
        'Technology Roadmaps',
        'Process Automation',
        'Change Management',
        'Innovation Consulting'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatePresence mode="wait">
          {!selectedService ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-800 mb-4">
                  Our Services
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Explore our technology services designed to accelerate growth.
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      onClick={() => setSelectedService(service)}
                      className="bg-white rounded-xl p-8 border shadow-sm hover:shadow-lg cursor-pointer"
                    >
                      <Icon className="w-10 h-10 text-slate-700 mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 mb-4">
                        {service.description}
                      </p>
                      <span className="text-sm text-blue-600 flex items-center gap-1">
                        Learn more <ArrowRight className="w-4 h-4" />
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl p-10 shadow-lg"
            >
              <Button
                variant="ghost"
                onClick={() => setSelectedService(null)}
                className="mb-8"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>

              <h2 className="text-4xl font-bold mb-6">
                {selectedService.title}
              </h2>
              <p className="text-slate-600 mb-8">
                {selectedService.fullDescription}
              </p>

              <div className="grid gap-4">
                {selectedService.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
