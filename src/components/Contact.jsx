import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const subject = formData.get('subject');
    const message = formData.get('message');
    window.location.href = `mailto:info@infynixsolutions.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Let’s create something powerful together.
          </h2>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <a href="mailto:info@infynixsolutions.in" className="text-gray-600 hover:text-blue-600 transition-colors">info@infynixsolutions.in</a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p className="text-gray-600">
                    6th Main Rd, SBI Staff Colony,<br />
                    Hoshalli Extension, Stage 1, Vijayanagar,<br />
                    Bengaluru, Karnataka 560040
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-sm">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" name="name" id="name" autoComplete="name" required />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" name="email" id="email" autoComplete="email" required />
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input type="text" name="subject" id="subject" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea name="message" id="message" rows={4} required />
                </div>
                <div className="text-center">
                  <Button type="submit" size="lg">Send Message</Button>
                </div>
              </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
