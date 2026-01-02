import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, toggleLanguage } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isExtra = location.pathname === '/extra';

  // Lógica de hide/show al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Mostrar header si estamos en el top
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Haciendo scroll hacia abajo - ocultar header y cerrar menú
        setIsHeaderVisible(false);
        setIsMenuOpen(false);
      } else {
        // Haciendo scroll hacia arriba - mostrar header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleScrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { replace: false });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleAboutClick = () => {
    setIsMenuOpen(false);
    navigate('/about');
  };

  const handleExtraClick = () => {
    setIsMenuOpen(false);
    navigate('/extra');
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { id: 'work', label: getTranslation(language, 'work'), action: () => handleScrollToSection('work') },
    { id: 'about', label: getTranslation(language, 'about'), action: handleAboutClick },
    { id: 'contact', label: getTranslation(language, 'contact'), action: () => handleScrollToSection('contact') },
    { id: 'extra', label: getTranslation(language, 'extra'), action: handleExtraClick },
  ];

  return (
    <motion.header 
      className="fixed top-0 left-0 w-full z-[10000] border-b"
      animate={{ y: isHeaderVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(12px)',
        borderColor: 'rgb(243, 243, 245)',
        backfaceVisibility: 'hidden',
        willChange: 'transform',
      }}
    >
      <div className="flex justify-between items-center px-6 py-5">
        {/* Logo - Usando fuente mono consistente con el resto del sitio */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="font-mono text-2xl md:text-3xl font-bold tracking-tight text-[#111111] hover:text-gray-700 transition-colors flex-shrink-0"
        >
          MARIO LOURIDO
        </Link>

        {/* Contenedor derecho: Navegación + Language + Hamburguesa */}
        <div className="flex items-center gap-0">
          {/* Navegación Desktop */}
          <nav className="hidden md:flex gap-10">
          {menuItems.map((item) => (
            item.id === 'extra' ? (
              <Link 
                key={item.id}
                to="/extra"
                className="font-mono text-base font-medium text-gray-500 hover:text-black transition-colors tracking-wide"
              >
                {item.label}
              </Link>
            ) : (
              <button 
                key={item.id}
                onClick={item.action}
                className="font-mono text-base font-medium text-gray-500 hover:text-black transition-colors tracking-wide bg-transparent border-none p-0 cursor-pointer"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex flex-shrink-0 ml-8 items-center justify-center gap-2 font-mono text-sm font-medium text-white bg-[#111111] border border-[#111111] rounded-md px-3 py-2 cursor-pointer tracking-wide hover:bg-black hover:scale-105 hover:border-gray-700 transition-all"
        >
          <Globe size={16} />
          <span>{language === 'en' ? 'ESP' : 'ENG'}</span>
        </button>

        {/* Menú Hamburguesa Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex-shrink-0 flex items-center justify-center"
          style={{
            background: 'none',
            border: 'none',
            padding: '8px 16px 8px 12px',
            cursor: 'pointer',
            color: '#111111',
          }}
        >
          {isMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t w-full"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: 'rgb(243, 243, 245)',
            }}
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {menuItems.map((item) => (
                item.id === 'extra' ? (
                  <Link 
                    key={item.id}
                    to="/extra"
                    onClick={() => setIsMenuOpen(false)}
                    className="font-mono text-sm font-medium text-gray-500 hover:text-black transition-colors py-2.5 px-0 text-left"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    key={item.id}
                    onClick={item.action}
                    className="font-mono text-sm font-medium text-gray-500 hover:text-black transition-colors py-2.5 px-0 bg-transparent border-none text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Language Switcher Mobile */}
              <button
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 font-mono text-sm font-medium text-white bg-[#111111] border border-[#111111] rounded-md py-3 cursor-pointer tracking-wide mt-3 hover:bg-black transition-all"
              >
                <Globe size={16} />
                <span>{language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}</span>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}