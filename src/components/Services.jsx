import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cog, Code, Cloud, ShieldCheck, BarChart, Server, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { servicesData } from '@/data/servicesData';

const Services = () => {
  return (
    <section id="services" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We provide a comprehensive suite of IT services designed to fuel your business growth and ensure you stay ahead of the curve.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {servicesData.map((service) => (
              <AccordionItem value={service.id} key={service.id} className="bg-gray-50 rounded-lg px-4 border">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  <div className="flex items-center gap-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                    {service.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-14">
                  <p className="text-gray-600 mb-4">{service.shortDescription}</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 mb-4">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                  <Link to={`/services/${service.id}`}>
                    <Button variant="link" className="p-0 h-auto text-blue-600">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;