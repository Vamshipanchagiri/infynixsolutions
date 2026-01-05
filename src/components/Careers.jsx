import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';

const Careers = () => {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    resume: null
  });

  const jobs = [
    {
      title: 'Senior React Developer',
      department: 'Frontend Engineering',
      location: 'Hyderabad, India (Hybrid)',
      type: 'Full-time',
      description: 'Join our HITEC City team to build next-gen interfaces using React, TypeScript, and Tailwind.'
    },
    {
      title: 'Cloud Architect (AWS)',
      department: 'Cloud Services',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Design scalable infrastructure for global clients. Requires 5+ years of AWS experience.'
    },
    {
      title: 'Node.js Backend Engineer',
      department: 'Backend Engineering',
      location: 'Hyderabad, India (Remote Optional)',
      type: 'Full-time',
      description: 'Build robust APIs and microservices. Experience with NestJS and PostgreSQL is a plus.'
    },
    {
      title: 'DevOps Specialist',
      department: 'Operations',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Manage CI/CD pipelines and Kubernetes clusters. Ensure 99.9% system uptime.'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design Studio',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Create minimalist, accessible designs for enterprise applications. Figma expertise required.'
    },
    {
      title: 'Technical Project Manager',
      department: 'Management',
      location: 'Hyderabad, India',
      type: 'Full-time',
      description: 'Lead agile teams and ensure timely delivery of complex IT projects.'
    }
  ];

  const handleOpenModal = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setApplicationData({ name: '', email: '', phone: '', linkedin: '', resume: null });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      handleCloseModal();
      toast({
        title: "Application Received",
        description: `Thanks ${applicationData.name}! We've received your application for ${selectedJob?.title}.`,
      });
    }, 1000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="careers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <span className="text-slate-400 font-medium tracking-widest text-sm uppercase mb-3 block">Join Our Team</span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-800 mb-6 tracking-tight">
            Build the Future in <span className="text-slate-400">Hyderabad</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            We're looking for passionate problem solvers to join our growing team in India's technology capital.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {jobs.map((job) => (
            <motion.div
              key={job.title}
              variants={itemVariants}
              whileHover={{ 
                y: -6, 
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
              className="bg-slate-50/50 rounded-2xl p-8 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group cursor-default"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-600 transition-colors">
                      {job.title}
                    </h3>
                    <span className="inline-flex px-3 py-1 bg-white border border-slate-200 text-slate-600 rounded-full text-xs font-medium uppercase tracking-wide">
                      {job.department}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                    <MapPin className="w-4 h-4" />
                    {job.location}
                  </div>
                </div>

                <p className="text-slate-600 mb-8 leading-relaxed flex-grow font-light">
                  {job.description}
                </p>

                <Button
                  onClick={() => handleOpenModal(job)}
                  className="w-full bg-white border border-slate-200 text-slate-800 hover:bg-slate-800 hover:text-white rounded-xl transition-all duration-300 group/btn shadow-sm"
                >
                  Apply Position
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ scale: 1.01, transition: { duration: 0.4 } }}
          className="text-center bg-slate-100 rounded-3xl p-12 text-slate-800 border border-slate-200"
        >
          <h3 className="text-2xl font-semibold mb-4">Don't see your perfect role?</h3>
          <p className="text-slate-500 mb-8 text-lg font-light max-w-2xl mx-auto">
            We're always interested in meeting exceptional talent. Send your resume to our HR team for future consideration.
          </p>
          <Button
            onClick={() => handleOpenModal({ title: 'General Application', location: 'Hyderabad, India' })}
            className="bg-slate-800 text-white hover:bg-slate-700 px-8 py-6 rounded-xl text-lg font-medium shadow-md transition-all hover:shadow-xl"
          >
            Submit General Application
          </Button>
        </motion.div>
      </div>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[600px] bg-white text-slate-800 rounded-2xl p-0 overflow-hidden border border-slate-100 shadow-2xl">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <DialogHeader>
              <DialogTitle className="text-2xl font-semibold text-slate-800">Apply for {selectedJob?.title}</DialogTitle>
              <DialogDescription className="text-slate-500 mt-2">
                {selectedJob?.location || 'Hyderabad, India'}
              </DialogDescription>
            </DialogHeader>
          </div>
          
          <form onSubmit={handleFormSubmit} className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</Label>
                <input
                  id="name"
                  type="text"
                  required
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                  placeholder="Rahul Sharma"
                  value={applicationData.name}
                  onChange={(e) => setApplicationData({...applicationData, name: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-slate-700">Email</Label>
                <input
                  id="email"
                  type="email"
                  required
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                  placeholder="rahul@example.com"
                  value={applicationData.email}
                  onChange={(e) => setApplicationData({...applicationData, email: e.target.value})}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</Label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                  placeholder="+91 98765 43210"
                  value={applicationData.phone}
                  onChange={(e) => setApplicationData({...applicationData, phone: e.target.value})}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-sm font-medium text-slate-700">LinkedIn Profile</Label>
                <input
                  id="linkedin"
                  type="url"
                  className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                  placeholder="linkedin.com/in/rahul"
                  value={applicationData.linkedin}
                  onChange={(e) => setApplicationData({...applicationData, linkedin: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-medium text-slate-700">Resume/CV</Label>
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:bg-slate-50 transition-colors cursor-pointer group">
                <div className="flex flex-col items-center gap-2">
                  <Upload className="w-8 h-8 text-slate-400 group-hover:text-slate-600 transition-colors" />
                  <span className="text-sm text-slate-500">Drag and drop or click to upload PDF</span>
                </div>
                <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              </div>
            </div>

            <DialogFooter className="pt-4">
              <Button type="button" variant="outline" onClick={handleCloseModal} className="mr-2">Cancel</Button>
              <Button type="submit" className="bg-slate-800 text-white hover:bg-slate-700">Submit Application</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Careers;