import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Smartphone, Cloud, Shield, BarChart3, Code, Globe, Server, Lock, Database, LifeBuoy, Activity, Repeat } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Services = () => {
  const services = [
    {
      id: 'custom-software',
      icon: Settings,
      title: 'Custom Software',
      description: 'Tailored solutions built to meet your unique business requirements.',
      subServices: [
        { icon: Code, title: 'Tailored ERP Systems' },
        { icon: Globe, title: 'SaaS Platforms' },
        { icon: Repeat, title: 'Enterprise Automation' }
      ]
    },
    {
      id: 'web-mobile',
      icon: Smartphone,
      title: 'Web & Mobile Apps',
      description: 'Modern, responsive apps that deliver exceptional user experiences.',
      subServices: [
        { icon: Globe, title: 'Responsive Websites' },
        { icon: Smartphone, title: 'iOS/Android Apps' },
        { icon: Code, title: 'Cross-platform Solutions' }
      ]
    },
    {
      id: 'cloud-devops',
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and streamlined deployment.',
      subServices: [
        { icon: Cloud, title: 'Cloud Migration' },
        { icon: Server, title: 'Infrastructure Automation' },
        { icon: Repeat, title: 'CI/CD Pipelines' }
      ]
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Cybersecurity Advisory',
      description: 'Comprehensive security to protect your assets and ensure compliance.',
      subServices: [
        { icon: Lock, title: 'Risk Assessment' },
        { icon: Shield, title: 'Data Protection' },
        { icon: Code, title: 'Compliance Support' }
      ]
    },
    {
      id: 'data-ai',
      icon: BarChart3,
      title: 'AI & Data Intelligence',
      description: 'Transform your data into actionable insights with AI solutions.',
      subServices: [
        { icon: Database, title: 'Predictive Analytics' },
        { icon: BarChart3, title: 'BI Dashboards' },
        { icon: Settings, title: 'Machine Learning Models' }
      ]
    },
    {
      id: 'managed-it',
      icon: LifeBuoy,
      title: 'Managed IT Support',
      description: 'Proactive support and management for your IT infrastructure.',
      subServices: [
        { icon: Activity, title: '24/7 Monitoring' },
        { icon: Globe, title: 'Remote Support' },
        { icon: Server, title: 'Infrastructure Management' }
      ]
    }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation and drive business growth.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full grid lg:grid-cols-2 gap-8 items-start">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <AccordionItem value={service.id} className="bg-card p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow">
                <AccordionTrigger className="w-full text-left hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 bg-blue-100 text-blue-600 rounded-lg p-3">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                      <p className="text-muted-foreground mt-1">{service.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-6 border-t mt-4">
                    <p className="font-semibold text-foreground mb-4">Specialized Services:</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {service.subServices.map((sub, subIndex) => (
                        <div key={subIndex} className="flex items-center space-x-2 text-sm bg-secondary p-2 rounded-md">
                          <sub.icon className="h-4 w-4 text-blue-600 flex-shrink-0" />
                          <span className="text-muted-foreground font-medium">{sub.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Services;