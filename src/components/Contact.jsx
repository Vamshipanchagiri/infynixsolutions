import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Clock, Globe } from 'lucide-react';
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
      icon: MapPin,
      title: 'Our Address',
      content: `Infynix Solutions
3rd Floor, Phoenix Tech Tower,
Financial District, Gachibowli,
Hyderabad – 500032, Telangana, India`,
      subtext: 'Headquarters'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-slate-400 font-medium tracking-widest text-sm uppercase mb-3 block">
            Get In Touch
          </span>
          <h2 className="text-4xl lg:text-5xl font-semibold text-slate-800 mb-6">
            Let's <span className="text-slate-400">Collaborate</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto">
            Have a project in mind? Our Hyderabad team is ready to help.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm border border-slate-100"
              >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-slate-600">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {info.title}
                </h3>
                <pre className="text-slate-700 font-medium whitespace-pre-line">
                  {info.content}
                </pre>
                <p className="text-slate-400 text-sm mt-2">{info.subtext}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Form + Business Hours */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-semibold text-slate-800 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full px-4 py-3 rounded-xl border"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full px-4 py-3 rounded-xl border"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <textarea
                rows={5}
                placeholder="Your message"
                required
                className="w-full px-4 py-3 rounded-xl border"
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <Button type="submit" className="w-full">
                Send Message <Send className="ml-2 w-4 h-4" />
              </Button>
            </form>
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-3xl p-10 shadow-lg border border-slate-100 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6" />
              <h3 className="text-xl font-semibold">Business Hours</h3>
            </div>
            <p className="text-slate-600 mb-2">Monday – Friday: 9:00 AM – 6:00 PM</p>
            <p className="text-slate-600 mb-2">Saturday: 10:00 AM – 2:00 PM</p>
            <p className="text-slate-400">Sunday: Closed</p>

            <div className="mt-6 flex items-center gap-2 text-slate-500">
              <Globe className="w-4 h-4" />
              Serving clients globally from Hyderabad
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
