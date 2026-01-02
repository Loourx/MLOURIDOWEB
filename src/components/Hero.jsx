import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFirstLoad } from '../context/FirstLoadContext';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

// Componente de reloj en tiempo real
function LiveClock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  return (
    <span className="font-mono text-[10px] tracking-wider">
      {time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </span>
  );
}

export default function Hero() {
  const { isFirstLoad } = useFirstLoad();
  const { language } = useLanguage();
  const [showIntro, setShowIntro] = useState(isFirstLoad);
  const [fontIndex, setFontIndex] = useState(0);

  // COLECCIÓN DE PERSONALIDADES TIPOGRÁFICAS (5 Variedades)
  const typefaces = [
    "font-serif italic font-light tracking-wide text-gray-400",       // 1. Elegante Clásica
    "font-tech font-black tracking-tighter uppercase scale-110",      // 2. Brutalista Técnica
    "font-sans font-thin tracking-[0.5em] uppercase text-gray-500",   // 3. Minimalista Aérea
    "font-mono font-medium lowercase tracking-tight italic",          // 4. Código Raw
    "font-serif font-black uppercase tracking-widest scale-125",      // 5. Editorial Moda Impacto
  ];

  useEffect(() => {
    // Solo mostrar intro si es la primera carga
    if (!isFirstLoad) {
      setShowIntro(false);
      // Remover overflow hidden
      document.body.style.overflow = 'unset';
      return;
    }

    // Agregar overflow hidden al body durante la intro
    document.body.style.overflow = 'hidden';

    // Esperar a que el navegador esté listo (requestAnimationFrame)
    let frameId = requestAnimationFrame(() => {
      // 1. Ciclo de cambio de fuentes (150ms por fuente para mejor rendering en dispositivos lentos)
      const interval = setInterval(() => {
        setFontIndex((prev) => (prev + 1) % typefaces.length);
      }, 150);

      // 2. Finalizar la intro en 0.8 segundos (más tiempo para mejor animación)
      const timer = setTimeout(() => {
        clearInterval(interval);
        setShowIntro(false);
        // Remover overflow hidden cuando termina la intro
        document.body.style.overflow = 'unset';
      }, 800);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    });

    return () => {
      cancelAnimationFrame(frameId);
      document.body.style.overflow = 'unset';
    };
  }, [isFirstLoad]);

  return (
    <section className="h-screen relative flex flex-col justify-center px-6 md:px-12 bg-portfolio-bg overflow-hidden noise-texture">
      
      {/* ═══ DATOS TÉCNICOS EN ESQUINAS (Estilo Nothing) ═══ */}
      {!showIntro && (
        <>
          {/* Esquina superior izquierda - Ubicación - SOLO DESKTOP */}
          <div className="absolute top-24 left-6 md:left-12 z-10 hidden md:block">
            <div className="flex items-center gap-2 text-[10px] font-mono tracking-widest text-gray-400 uppercase">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span>42.8805°N, 8.5457°W</span>
            </div>
            <div className="text-[9px] font-mono tracking-wider text-gray-300 mt-1">
              GALICIA, ES // <LiveClock />
            </div>
          </div>

          {/* Esquina superior derecha - Status - SOLO DESKTOP */}
          <div className="absolute top-24 right-6 md:right-12 z-10 text-right hidden md:block">
            <div className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
              SYS_STATUS: ONLINE
            </div>
            <div className="text-[9px] font-mono tracking-wider text-gray-300 mt-1">
              BUILD_2025.12 // v3.0
            </div>
          </div>

          {/* Indicador de scroll - Esquina inferior - Oculto en móvil para evitar overlap */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-3 hidden md:flex">
            <div className="text-xs font-mono tracking-[0.3em] text-gray-400 uppercase">
              {language === 'en' ? 'SCROLL FOR SPECS' : 'SCROLL PARA SPECS'}
            </div>
            <div className="w-px h-12 bg-gradient-to-b from-gray-400 to-transparent"></div>
          </div>

          {/* Cruces de corte decorativas */}
          <div className="absolute top-20 left-4 text-[10px] text-gray-200 font-mono hidden md:block">+</div>
          <div className="absolute top-20 right-4 text-[10px] text-gray-200 font-mono hidden md:block">+</div>
          <div className="absolute bottom-20 left-4 text-[10px] text-gray-200 font-mono hidden md:block">+</div>
          <div className="absolute bottom-20 right-4 text-[10px] text-gray-200 font-mono hidden md:block">+</div>
        </>
      )}

      <AnimatePresence mode="wait">
        {showIntro ? (
          /* --- FASE 1: INTRO CINÉTICA (0.8s con mejor rendering) --- */
          <motion.div
            key="intro"
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-portfolio-bg"
            exit={{ y: -50, opacity: 0 }} 
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            style={{ backfaceVisibility: 'hidden', perspective: 1000 }}
          >
            {/* Contenedor fijo para evitar saltos */}
            <div className="w-full text-center" style={{ backfaceVisibility: 'hidden' }}>
                <motion.h1
                key={fontIndex} // Clave para forzar re-render
                initial={{ opacity: 0, scale: 0.95 }} 
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.08 }}
                className={`text-5xl md:text-8xl lg:text-9xl text-portfolio-text transition-all duration-75 ${typefaces[fontIndex]}`}
                style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
                >
                DESIGN
                </motion.h1>
            </div>
          </motion.div>
        ) : (
          /* --- FASE 2: CONTENIDO REAL (HERO) --- */
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col justify-center h-full pt-20 relative z-10"
            style={{ backfaceVisibility: 'hidden', willChange: 'transform' }}
          >
            {/* Etiqueta de sección estilo CAD */}
            <div className="flex items-center gap-4 mb-6">
              <span className="section-index">00</span>
              <span className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase">
                // INDEX_HERO
              </span>
            </div>

            {/* Tag técnico - ROL VISIBLE */}
            <span
              data-reveal
              className="text-base md:text-lg font-mono text-gray-600 mb-6 tracking-[0.15em] uppercase border-l-2 border-gray-400 pl-4 font-medium"
            >
              {getTranslation(language, 'heroTag')}
            </span>

            {/* Título principal con frame técnico */}
            <div className="relative">
              <h1
                data-reveal
                data-reveal-delay="120ms"
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 max-w-5xl text-portfolio-text leading-[0.9]"
              >
                {language === 'en' ? 'STRATEGIC' : 'DISEÑO'} <br />
                <span className="text-gray-500">{language === 'en' ? 'DESIGN &' : 'ESTRATÉGICO &'}</span> <br />
                {language === 'en' ? 'AUTOMOTIVE' : 'AUTOMOCIÓN'}
              </h1>
              
              {/* Línea técnica decorativa */}
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block"></div>
            </div>

            {/* Descripción con formato técnico */}
            <div className="border-t border-gray-200 pt-6 mt-2 max-w-2xl">
              <p
                data-reveal
                data-reveal-delay="200ms"
                className="text-base md:text-lg text-gray-600 leading-relaxed font-light"
              >
                {language === 'en' 
                  ? 'Specialized in transportation and product development.' 
                  : 'Especializado en transporte y desarrollo de producto.'}
                <br />
                <span className="text-gray-400 text-sm">
                  {language === 'en'
                    ? "Master's degree in Industrial Design Engineering // "
                    : 'Máster en Ingeniería en Diseño Industrial // '}
                  <span className="text-black font-medium">{getTranslation(language, 'university')}</span>
                </span>
              </p>
            </div>

            {/* Barra de estado inferior */}
            <div className="flex items-center gap-6 mt-12 text-[9px] font-mono tracking-wider text-gray-400 uppercase">
              <span>REF: ML_2025</span>
              <span className="w-px h-3 bg-gray-300"></span>
              <span>CAD // AI // UX</span>
              <span className="w-px h-3 bg-gray-300"></span>
              <span className="live-indicator">READY</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}