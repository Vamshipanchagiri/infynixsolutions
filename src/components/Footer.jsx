import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Careers', href: '#careers' },
      { name: 'Contact', href: '#contact' }
    ],
    services: [
      { name: 'Cloud Infrastructure', href: '#services' },
      { name: 'Enterprise Security', href: '#services' },
      { name: 'Custom Engineering', href: '#services' },
      { name: 'Data Intelligence', href: '#services' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'Sitemap', href: '#' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12"
        >
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center shadow-md">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800">
                Infynix <span className="text-slate-500">Solutions</span>
              </span>
            </div>
            
            <p className="text-slate-500 mb-6 leading-relaxed max-w-sm">
              Your trusted technology partner in Hyderabad. Delivering enterprise-grade digital solutions to businesses worldwide since 2015.
            </p>

            <div className="space-y-3 text-sm text-slate-500">
              <div className="flex items-center gap-3 hover:text-slate-800 transition-colors">
                <Mail className="w-4 h-4 text-slate-400" />
                <a href="mailto:info@infynixsolutions.in">info@infynixsolutions.in</a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>+91 40 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>HITEC City, Hyderabad, India</span>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="text-slate-800 font-semibold mb-4 block">Company</span>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="text-slate-800 font-semibold mb-4 block">Services</span>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <span className="text-slate-800 font-semibold mb-4 block">Legal</span>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-500 hover:text-slate-800 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="border-t border-slate-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-400 text-sm">
              © 2015 Infynix Solutions Pvt Ltd. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;