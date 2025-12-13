import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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

  const handleExtraClick = () => {
    setIsMenuOpen(false);
    navigate('/extra');
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
  };

  const menuItems = [
    { label: getTranslation(language, 'work'), action: () => handleScrollToSection('work') },
    { label: getTranslation(language, 'about'), action: () => handleScrollToSection('about') },
    { label: getTranslation(language, 'contact'), action: () => handleScrollToSection('contact') },
    { label: getTranslation(language, 'extra'), action: handleExtraClick },
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
      <div className="flex justify-between items-center px-6 py-6">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            letterSpacing: '-0.02em',
            color: '#111111',
            fontFamily: 'system-ui, -apple-system, sans-serif',
          }}
          className="hover:text-gray-700 transition-colors flex-shrink-0"
        >
          MARIO LOURIDO
        </Link>

        {/* Contenedor derecho: Navegación + Language + Hamburguesa */}
        <div className="flex items-center gap-0">
          {/* Navegación Desktop */}
          <nav className="hidden md:flex gap-8">
          {menuItems.map((item) => (
            item.label === 'Extra' ? (
              <Link 
                key={item.label}
                to="/extra"
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#666666',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button 
                key={item.label}
                onClick={item.action}
                style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#666666',
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
                className="hover:text-black transition-colors"
              >
                {item.label}
              </button>
            )
          ))}
        </nav>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="hidden md:flex flex-shrink-0 ml-8 items-center justify-center"
          style={{
            background: '#111111',
            border: '1px solid #111111',
            borderRadius: '4px',
            padding: '6px 10px',
            cursor: 'pointer',
            color: '#ffffff',
            fontSize: '12px',
            fontWeight: '500',
            letterSpacing: '0.05em',
            transition: 'all 0.15s ease',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            transform: 'scale(1)',
          }}
          onMouseEnter={(e) => {
            e.target.style.background = '#000000';
            e.target.style.transform = 'scale(1.05)';
            e.target.style.borderColor = '#333333';
          }}
          onMouseLeave={(e) => {
            e.target.style.background = '#111111';
            e.target.style.transform = 'scale(1)';
            e.target.style.borderColor = '#111111';
          }}
        >
          {language === 'en' ? 'ESP' : 'ENG'}
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
            className="md:hidden border-t"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              borderColor: 'rgb(243, 243, 245)',
            }}
          >
            <nav className="flex flex-col px-4 md:px-6 py-4 gap-4">
              {menuItems.map((item) => (
                item.label === 'Extra' ? (
                  <Link 
                    key={item.label}
                    to="/extra"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#666666',
                      padding: '8px 0',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                    className="hover:text-black transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button 
                    key={item.label}
                    onClick={item.action}
                    style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#666666',
                      background: 'none',
                      border: 'none',
                      padding: '8px 0',
                      cursor: 'pointer',
                      textAlign: 'left',
                      fontFamily: 'system-ui, -apple-system, sans-serif',
                    }}
                    className="hover:text-black transition-colors"
                  >
                    {item.label}
                  </button>
                )
              ))}
              
              {/* Language Switcher Mobile */}
              <button
                onClick={toggleLanguage}
                className="md:hidden w-full"
                style={{
                  background: '#111111',
                  border: '1px solid #111111',
                  borderRadius: '4px',
                  padding: '8px 0',
                  cursor: 'pointer',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: '500',
                  letterSpacing: '0.05em',
                  marginTop: '8px',
                  transition: 'all 0.3s ease',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#000000';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#111111';
                }}
              >
                {language === 'en' ? 'ESPAÑOL' : 'ENGLISH'}
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}