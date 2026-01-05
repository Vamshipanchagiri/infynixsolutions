import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cloud, Shield, Code, Database, Smartphone, BarChart, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  const services = [
    {
      id: 'cloud',
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust, scalable cloud architectures designed for high availability.',
      fullDescription: 'We specialize in comprehensive cloud solutions that transform how your business operates. Our team handles everything from initial migration strategies to ongoing optimization, ensuring your infrastructure is secure, scalable, and cost-effective.',
      features: ['AWS & Azure Migration', 'Serverless Architecture', 'Kubernetes Orchestration', 'Cost Optimization', 'Disaster Recovery', 'Multi-Cloud Strategy']
    },
    {
      id: 'security',
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Advanced cybersecurity frameworks to protect your digital assets.',
      fullDescription: 'In an era of increasing cyber threats, our enterprise security services provide a fortress around your digital assets. We employ advanced threat detection, rigorous compliance frameworks, and proactive monitoring to keep your data safe.',
      features: ['Penetration Testing', 'SOC Operations', 'Identity Access Management', 'Compliance (ISO/SOC2)', 'Threat Intelligence', 'Zero Trust Implementation']
    },
    {
      id: 'engineering',
      icon: Code,
      title: 'Custom Engineering',
      description: 'Bespoke software solutions built with modern technology stacks.',
      fullDescription: 'Our engineering team builds software that perfectly aligns with your business goals. Whether you need a complex enterprise platform or a high-performance web application, we deliver code that is clean, maintainable, and scalable.',
      features: ['Full Stack Development', 'Microservices', 'API Design & Integration', 'Legacy Modernization', 'QA Automation', 'Performance Tuning']
    },
    {
      id: 'data',
      icon: Database,
      title: 'Data Intelligence',
      description: 'Turning raw data into strategic assets through advanced analytics.',
      fullDescription: 'Unlock the hidden value in your data. Our data scientists and engineers build robust pipelines and analytical models that transform raw information into actionable business insights, driving smarter decision-making.',
      features: ['Data Lakes & Warehousing', 'ETL/ELT Pipelines', 'Business Intelligence', 'Predictive Analytics', 'Big Data Processing', 'Data Governance']
    },
    {
      id: 'mobile',
      icon: Smartphone,
      title: 'Mobile Experience',
      description: 'Native and cross-platform mobile apps driving user engagement.',
      fullDescription: 'We create mobile experiences that users love. From smooth native applications to efficient cross-platform solutions, our apps are designed for performance, accessibility, and high user retention rates.',
      features: ['iOS & Android Native', 'React Native / Flutter', 'App Store Optimization', 'Mobile UI/UX', 'Offline Functionality', 'Push Notification Systems']
    },
    {
      id: 'strategy',
      icon: BarChart,
      title: 'Digital Strategy',
      description: 'Consulting services to guide your digital transformation roadmap.',
      fullDescription: 'Digital transformation is a journey, not a destination. Our strategic consultants work closely with your leadership to roadmap technology adoption, optimize processes, and foster a digital-first culture within your organization.',
      features: ['Digital Maturity Assessment', 'Technology Roadmapping', 'Process Automation (RPA)', 'Change Management', 'Innovation Workshops', 'Vendor Selection']
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    const element = document.querySelector('#services');
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBack = () => {
    setSelectedService(null);
  };

  return (
    <section id="services" className="py-24 bg-slate-50/50 min-h-screen transition-all duration-700 ease-[0.22,1,0.36,1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatePresence mode="wait">
          {!selectedService ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="text-center mb-20"
              >
                <span className="text-slate-400 font-medium tracking-widest text-sm uppercase mb-3 block">What We Do</span>
                <h2 className="text-4xl lg:text-5xl font-semibold text-slate-800 mb-6 tracking-tight">
                  Holistic <span className="text-slate-400">Solutions</span>
                </h2>
                <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
                  Select a service below to explore our comprehensive technology capabilities.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      variants={itemVariants}
                      whileHover={{ 
                        y: -12,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                      onClick={() => handleServiceClick(service)}
                      className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full hover:border-slate-200 cursor-pointer relative overflow-hidden"
                    >
                      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <ArrowRight className="w-5 h-5 text-slate-400" />
                      </div>

                      <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-800 group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-slate-800 mb-3 group-hover:text-slate-600 transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-slate-600 mb-4 font-medium leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mt-auto pt-4 text-sm font-medium text-slate-400 group-hover:text-blue-600 transition-colors flex items-center">
                        Read Details
                      </div>
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
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-3xl p-8 lg:p-12 border border-slate-100 shadow-xl"
            >
              <Button 
                variant="ghost" 
                onClick={handleBack}
                className="mb-8 pl-0 hover:pl-2 transition-all text-slate-500 hover:text-slate-800"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>

              <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                <motion.div
                   initial={{ opacity: 0, y: 20 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <div className="w-20 h-20 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 text-white shadow-lg">
                    {React.createElement(selectedService.icon, { className: "w-10 h-10" })}
                  </div>
                  <h2 className="text-4xl font-bold text-slate-800 mb-6">{selectedService.title}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
                    {selectedService.fullDescription}
                  </p>
                  <Button onClick={() => {
                     const element = document.querySelector('#contact');
                     if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }} className="bg-slate-800 text-white hover:bg-slate-700 px-8 py-6 rounded-xl text-lg transition-all duration-300">
                    Consult our Experts
                  </Button>
                </motion.div>

                <motion.div 
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.4, duration: 0.8 }}
                   className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
                >
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                        Key Capabilities
                    </h3>
                    <div className="grid gap-4">
                        {selectedService.features.map((feature, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                                className="flex items-start gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm"
                            >
                                <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                                <span className="text-slate-700 font-medium">{feature}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;