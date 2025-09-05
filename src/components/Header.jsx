import React, { useState, useEffect } from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home' },
  { name: 'About', to: 'about' },
  { name: 'Services', to: 'services' },
  { name: 'Careers', to: 'careers' },
  { name: 'Contact', to: 'contact' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (to) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroller.scrollTo(to, {
          spy: true,
          smooth: true,
          offset: -80,
          duration: 500,
        });
      }, 100);
    }
  };

  const NavLink = ({ to, children }) => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to={to}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
          activeClass="text-blue-600 font-semibold"
          onClick={() => setIsMenuOpen(false)}
        >
          {children}
        </ScrollLink>
      );
    }
    return (
      <a
        href={`/#${to}`}
        onClick={(e) => {
          e.preventDefault();
          handleNavClick(to);
        }}
        className="cursor-pointer text-gray-600 hover:text-blue-600 transition-colors"
      >
        {children}
      </a>
    );
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <RouterLink to="/" onClick={() => handleNavClick('home')} className="cursor-pointer">
            <h1 className="text-2xl font-bold text-gray-900">Infynix Solutions</h1>
          </RouterLink>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.name}</NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
             <NavLink to="contact">
              <Button>Get in Touch</Button>
            </NavLink>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to}>{link.name}</NavLink>
            ))}
            <NavLink to="contact">
              <Button>Get in Touch</Button>
            </NavLink>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;