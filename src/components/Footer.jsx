import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' }
  ];
  
  const footerSections = {
    'Services': ['Custom Software', 'Web & Mobile Apps', 'Cloud & DevOps', 'Cybersecurity', 'Data & AI'],
    'Company': ['About Us', 'Careers', 'Blog', 'Contact'],
    'Legal': ['Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2 pr-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="font-bold text-xl text-white">Infynix Solutions</span>
            </div>
            <p className="text-slate-400">
              Smart IT. Simple Solutions. We build technology that grows with your business.
            </p>
          </div>
          
          {Object.entries(footerSections).map(([title, links]) => (
            <div key={title}>
              <p className="font-semibold text-white mb-4">{title}</p>
              <ul className="space-y-3">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 sm:mb-0">
            © {currentYear} Infynix Solutions. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;