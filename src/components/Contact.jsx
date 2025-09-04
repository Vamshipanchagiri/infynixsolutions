import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleInputChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:info@infynixsolutions.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Redirecting to your email client...",
      description: "Please complete sending the email from your mail app.",
      duration: 5000,
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, title: 'Email', details: 'info@infynixsolutions.in', href: 'mailto:info@infynixsolutions.in' },
    { icon: Phone, title: 'Phone', details: '+91-XXXXXXXXXX', href: 'tel:+91-XXXXXXXXXX' },
    { icon: MapPin, title: 'Address', details: 'Koramangala, Bangalore', href: '#' }
  ];

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: 'easeOut' }
  };

  return (
    <section id="contact" className="section-padding bg-secondary">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">Let’s Create Something Powerful</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Reach out to us to discuss your project and discover how we can help.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div {...fadeIn} className="lg:col-span-3 bg-card p-8 rounded-lg border shadow-sm">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required placeholder="Your Name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="What is this about?" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} required rows={5} placeholder="Tell us about your project..." />
              </div>
              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">Submit Inquiry</Button>
            </form>
          </motion.div>
          
          <motion.div {...fadeIn} transition={{...fadeIn.transition, delay: 0.2}} className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Contact Information</h3>
            {contactInfo.map((info) => (
              <a key={info.title} href={info.href} className="flex items-start space-x-4 group">
                <div className="mt-1 flex-shrink-0 bg-secondary p-3 rounded-lg">
                  <info.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-lg">{info.title}</h4>
                  <p className="text-muted-foreground group-hover:text-blue-600 transition-colors">{info.details}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;