import React from 'react';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Services', to: 'services' },
    { name: 'Careers', to: 'careers' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleNavClick = (to) => {
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

  const SmartLink = ({ to, children }) => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          to={to}
          smooth={true}
          duration={500}
          offset={-80}
          className="text-base text-gray-400 hover:text-white cursor-pointer transition-colors duration-300"
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
        className="text-base text-gray-400 hover:text-white cursor-pointer transition-colors duration-300"
      >
        {children}
      </a>
    );
  };

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
             <RouterLink to="/" onClick={() => handleNavClick('home')} className="cursor-pointer">
              <span className="text-2xl font-bold text-white">Infynix Solutions</span>
            </RouterLink>
            <p className="text-gray-400 text-base">Smart IT. Simple Solutions.</p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Quick Links</h3>
                <ul className="mt-4 space-y-4">
                  {quickLinks.map((link) => (
                    <li key={link.name}>
                       <SmartLink to={link.to}>{link.name}</SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">&copy; 2019 Infynix Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;