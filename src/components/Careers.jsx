import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Cloud, PenTool, BarChart } from 'lucide-react';
import { ApplicationForm } from '@/components/ApplicationForm';

const jobRoles = [
  { icon: Code, title: 'Developer', location: 'Bangalore', color: 'blue' },
  { icon: Cloud, title: 'Cloud Engineer', location: 'Remote', color: 'green' },
  { icon: PenTool, title: 'Designer', location: 'Remote', color: 'green' },
  { icon: BarChart, title: 'Analyst', location: 'Bangalore', color: 'blue' },
];

const LocationBadge = ({ location, color }) => {
  const badgeColor = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    gray: 'bg-gray-100 text-gray-800'
  };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${badgeColor[color]}`}>
      {location}
    </span>
  );
};

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <>
      <section id="careers" className="py-20 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Build tomorrow’s tech with us.
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Growth-focused, collaborative, innovation-driven. We're always looking for talented individuals who are passionate about technology.
            </p>
          </motion.div>

          <motion.div 
            className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {jobRoles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col justify-between">
                  <CardContent className="pt-6">
                    <role.icon className="h-10 w-10 text-blue-600 mx-auto" />
                    <h3 className="mt-4 text-lg font-semibold">{role.title}</h3>
                    <div className="mt-2">
                      <LocationBadge location={role.location} color={role.color} />
                    </div>
                  </CardContent>
                  <div className="p-4">
                    <Button variant="outline" onClick={() => setSelectedJob(role.title)}>Apply Now</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <ApplicationForm
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob}
      />
    </>
  );
};

export default Careers;