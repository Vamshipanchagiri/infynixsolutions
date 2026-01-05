import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "Thanks for reaching out! Our team in Hyderabad will contact you shortly."
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@infynixsolutions.in',
      subtext: 'We respond within 24 hours'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 40 1234 5678',
      subtext: 'Mon-Fri, 9am - 6pm IST'
    },
    {
      icon: MapPin,
      title: 'Visit HQ',
      content: 'HITEC City, Hyderabad',
      subtext: 'Telangana, India 500081'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white rounded-full blur-3xl opacity-40 mix-blend-soft-light"
         />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
           <span className="text-slate-400 font-medium tracking-widest text-sm uppercase mb-3 block">Get In Touch</span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-800 mb-6 tracking-tight">
            Let's <span className="text-slate-400">Collaborate</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light">
            Have a project in mind? Our team in Hyderabad is ready to help you navigate your digital transformation journey.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)", transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm transition-all duration-300 border border-slate-100"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-slate-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{info.title}</h3>
                <p className="text-slate-800 font-medium select-all">{info.content}</p>
                <p className="text-slate-400 text-sm mt-2">{info.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100"
          >
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all"
                    placeholder="Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                   <label className="block text-sm font-medium text-slate-700 mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all"
                    placeholder="Your Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all"
                  placeholder="rahul@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-slate-400 focus:ring-2 focus:ring-slate-100 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-slate-800 hover:bg-slate-700 text-white py-6 rounded-xl text-lg font-medium shadow-md hover:shadow-lg transition-all group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col h-full"
          >
            <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex-grow h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-8 text-slate-800">
                <Clock className="w-8 h-8" />
                <h3 className="text-2xl font-semibold">Business Hours</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center py-4 border-b border-slate-50 text-lg">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-semibold text-slate-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-slate-50 text-lg">
                  <span className="text-slate-600">Saturday</span>
                  <span className="font-semibold text-slate-800">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-4 text-lg">
                  <span className="text-slate-600">Sunday</span>
                  <span className="text-slate-400">Closed</span>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3 text-slate-500 bg-slate-50 p-4 rounded-xl">
                <Globe className="w-5 h-5" />
                <span>Proudly serving clients globally from our HQ in Hyderabad, India</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;