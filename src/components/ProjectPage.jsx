import React, { useState, useEffect, useRef, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Maximize2, Minimize2, X, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useLanguage } from '../context/LanguageContext';
import ImageWithFallback from './figma/ImageWithFallback';
import CustomPdfViewer from './CustomPdfViewer';

// ═══════════════════════════════════════════════════════════════════════════
// CONTEXTO: Galería de Imágenes Fullscreen
// ═══════════════════════════════════════════════════════════════════════════
const GalleryContext = createContext(null);

const useGallery = () => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error('useGallery must be used within a GalleryProvider');
  }
  return context;
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Galería Fullscreen con Carrusel
// ═══════════════════════════════════════════════════════════════════════════
const FullscreenGallery = ({ images, currentIndex, onClose, onNavigate, language }) => {
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(true);

  const currentImage = images[currentIndex];

  // Reset zoom cuando cambia imagen
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentIndex]);

  // ESC para cerrar
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < images.length - 1) onNavigate(currentIndex + 1);
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, images.length, onClose, onNavigate]);

  // Bloquear scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Ocultar hint después de 3 segundos o interacción
  useEffect(() => {
    if (zoom > 1) setShowHint(false);
    const timer = setTimeout(() => setShowHint(false), 3000);
    return () => clearTimeout(timer);
  }, [zoom, currentIndex]);

  const handleWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom(prev => {
      const newZoom = Math.max(1, Math.min(prev + delta, 4));
      if (newZoom === 1) setPosition({ x: 0, y: 0 });
      return newZoom;
    });
  };

  const handleDoubleClick = (e) => {
    if (e.target.closest('button')) return;
    if (zoom > 1) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setZoom(2);
    }
  };

  const handleMouseDown = (e) => {
    if (e.target.closest('button')) return;
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
    }
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleTouchStart = (e) => {
    if (zoom > 1 && e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      const touch = e.touches[0];
      setPosition({ x: touch.clientX - dragStart.x, y: touch.clientY - dragStart.y });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 bg-black flex flex-col"
      style={{ zIndex: 99999 }}
    >
      {/* Header fijo - NO overlay, la imagen empieza debajo */}
      <div className="flex-shrink-0 bg-black border-b border-white/10 py-3 px-6">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-mono text-sm md:text-base font-bold tracking-tight truncate">
              {currentImage.title}
            </h3>
            <p className="text-white/40 font-mono text-[10px] mt-0.5 uppercase tracking-widest truncate">
              {currentImage.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0 ml-4">
            <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              <span className="text-white font-mono text-xs font-bold">
                {currentIndex + 1}
              </span>
              <span className="text-white/30 font-mono text-[10px]">/</span>
              <span className="text-white/50 font-mono text-xs">
                {images.length}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/5 hover:bg-white/15 rounded-full transition-all border border-white/10 hover:border-white/30"
            >
              <X size={16} className="text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Área de imagen - ocupa el espacio restante */}
      <div 
        className="flex-1 relative overflow-hidden select-none group/image"
        onWheel={handleWheel}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        onDoubleClick={handleDoubleClick}
        style={{ touchAction: 'none', cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
      >
        <div 
          className="w-full h-full flex items-center justify-center p-4"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          }}
        >
          <img
            src={currentImage.src}
            alt={currentImage.title}
            className="max-w-full max-h-full object-contain"
            draggable={false}
            style={{ userSelect: 'none', pointerEvents: 'none' }}
          />
        </div>

        {/* Hint de navegación - aparece brevemente */}
        {showHint && zoom === 1 && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="bg-black/80 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20">
              <span className="text-white/70 text-xs font-mono tracking-wide">
                {language === 'en' 
                  ? '← → Navigate • Scroll to zoom' 
                  : '← → Navegar • Scroll para zoom'}
              </span>
            </div>
          </motion.div>
        )}

        {/* Indicador de zoom */}
        {zoom > 1 && (
          <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/20 z-40">
            <span className="text-white text-xs font-mono">{Math.round(zoom * 100)}%</span>
          </div>
        )}

        {/* Navegación lateral - siempre visible pero sutil */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white/60 hover:text-white rounded-full border border-white/10 hover:border-white/40 transition-all z-10"
          >
            <ChevronLeft size={22} />
          </button>
        )}

        {currentIndex < images.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-black/80 text-white/60 hover:text-white rounded-full border border-white/10 hover:border-white/40 transition-all z-10"
          >
            <ChevronRight size={22} />
          </button>
        )}

        {/* Zona de hover inferior - dentro del viewport */}
        <div className="absolute bottom-0 left-0 right-0 h-20 group/bottom">
          {/* Indicador minimalista siempre visible */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 group-hover/bottom:opacity-0 transition-opacity duration-200 pointer-events-none">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`rounded-full transition-all duration-200 ${
                  currentIndex === idx 
                    ? 'w-5 h-1 bg-white' 
                    : 'w-1 h-1 bg-white/40'
                }`}
              />
            ))}
          </div>

          {/* Barra de miniaturas que aparece en hover */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover/bottom:translate-y-0 transition-transform duration-300 ease-out">
            <div className="bg-black/95 backdrop-blur-md border-t border-white/10 py-3 px-4">
              <div className="flex items-center justify-center gap-1 max-w-2xl mx-auto overflow-x-auto">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => onNavigate(idx)}
                    className={`relative flex-shrink-0 rounded transition-all duration-200 overflow-hidden ${
                      currentIndex === idx 
                        ? 'w-12 h-8 md:w-14 md:h-9 ring-2 ring-white ring-offset-1 ring-offset-black' 
                        : 'w-8 h-6 md:w-10 md:h-7 opacity-40 hover:opacity-80'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Imagen Clicable con Hover Effect
// ═══════════════════════════════════════════════════════════════════════════
const ClickableImage = ({ src, alt, className, title, subtitle, onOpenGallery, language }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative overflow-hidden bg-black/5 border border-gray-200 cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpenGallery}
    >
      <ImageWithFallback
        src={src}
        alt={alt}
        className={className}
      />
      
      {/* Overlay de hover */}
      <motion.div 
        initial={false}
        animate={{ 
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-black/40 flex items-center justify-center"
      >
        <motion.div
          initial={false}
          animate={{ 
            scale: isHovered ? 1 : 0.8,
            opacity: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.2 }}
          className="flex flex-col items-center gap-3"
        >
          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full border border-white/40">
            <ZoomIn size={28} className="text-white" />
          </div>
          <span className="text-white font-mono text-sm tracking-wider uppercase">
            {language === 'en' ? 'View Gallery' : 'Ver en galería'}
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Sección de Fase (Header con número y subsecciones)
// ═══════════════════════════════════════════════════════════════════════════
const PhaseHeader = ({ phase, title, titleEn, subsections, subsectionsEn, language }) => (
  <div data-reveal className="py-16 md:py-24 lg:py-32 px-4 md:px-16 lg:px-24 border-b border-black/5 bg-white">
    <div className="max-w-7xl mx-auto">
      {/* Stack vertical en móvil, horizontal en desktop */}
      <div className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-6 mb-6 md:mb-8">
        <span className="text-5xl md:text-7xl lg:text-9xl font-mono font-bold text-black/10">
          {phase}
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-mono font-bold text-black uppercase tracking-tight">
          {language === 'en' ? titleEn : title}
        </h2>
      </div>
      {subsections && (
        <div className="flex flex-wrap gap-4 md:gap-6 mt-6 md:mt-8">
          {(language === 'en' && subsectionsEn ? subsectionsEn : subsections).map((sub, i) => (
            <span key={i} className="text-xs md:text-sm font-mono text-black/40 uppercase tracking-widest">
              {sub}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Sección de Solo Texto (Introducción)
// ═══════════════════════════════════════════════════════════════════════════
const TextOnlySection = ({ phase, title, titleEn, content, language }) => (
  <section className="py-24 md:py-40 px-6 md:px-16 lg:px-24 bg-black border-b border-white/5">
    <div className="max-w-5xl mx-auto">
      {/* Phase indicator */}
      <div data-reveal className="flex items-center gap-4 mb-12">
        <span className="text-[10px] font-mono text-white/30 tracking-widest">{phase}</span>
        <div className="flex-1 h-px bg-white/10"></div>
        <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">
          {language === 'en' ? titleEn : title}
        </span>
      </div>
      
      {/* Hook - Grande y destacado */}
      <motion.p
        data-reveal
        className="text-2xl md:text-4xl lg:text-5xl font-mono text-white leading-tight mb-16"
      >
        {language === 'en' ? content.hookEn : content.hook}
      </motion.p>
      
      {/* Description */}
      <motion.p
        data-reveal
        data-reveal-delay="100ms"
        className="text-base md:text-lg font-mono text-white/50 leading-relaxed max-w-3xl"
      >
        {language === 'en' ? content.descriptionEn : content.description}
      </motion.p>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Sección con Imagen a la Izquierda
// ═══════════════════════════════════════════════════════════════════════════
const ImageLeftSection = ({ phase, subtitle, subtitleEn, image, content, language, onOpenGallery, imageIndex }) => (
  <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white border-b border-black/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 md:gap-6 items-center">
        {/* Imagen - 5 columnas */}
        <motion.div data-reveal className="order-2 lg:order-1 lg:col-span-5">
          <ClickableImage
            src={image}
            alt={language === 'en' ? content.titleEn : content.title}
            title={language === 'en' ? content.titleEn : content.title}
            subtitle={language === 'en' ? (subtitleEn || subtitle) : subtitle}
            onOpenGallery={() => onOpenGallery(imageIndex)}
            language={language}
            className={`w-full object-cover ${
              // Proporciones específicas para exterior form exploration y distribution layout
              (subtitle === "Conceptualización Inicial" || subtitle === "Interior Final") 
                ? "aspect-[2.5/1]" 
                // Branding con 20% menos altura 
                : subtitle === "Identidad Corporativa"
                ? "aspect-[2.2/1]"
                : "aspect-video"
            }`}
          />
          <div className="flex items-center justify-between mt-3">
            <span className="text-xs font-mono text-black/60 uppercase tracking-widest">
              {language === 'en' ? (subtitleEn || subtitle) : subtitle}
            </span>
            <span className="text-xs font-mono text-black/50">{phase}</span>
          </div>
        </motion.div>
        
        {/* Texto - 1 columna */}
        <div className="order-1 lg:order-2">
          <motion.div data-reveal data-reveal-delay="100ms">
            <h3 className="text-base md:text-lg font-mono font-bold text-black mb-3">
              {language === 'en' ? content.titleEn : content.title}
            </h3>
            <p className="text-sm font-mono text-black/80 leading-relaxed">
              {language === 'en' ? content.descriptionEn : content.description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Sección con Imagen a la Derecha
// ═══════════════════════════════════════════════════════════════════════════
const ImageRightSection = ({ phase, subtitle, subtitleEn, image, content, language, onOpenGallery, imageIndex }) => (
  <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white border-b border-black/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 md:gap-6 items-center">
        {/* Texto - 1 columna */}
        <div>
          <motion.div data-reveal>
            <h3 className="text-base md:text-lg font-mono font-bold text-black mb-4">
              {language === 'en' ? content.titleEn : content.title}
            </h3>
            <p className="text-sm font-mono text-black/80 leading-relaxed">
              {language === 'en' ? content.descriptionEn : content.description}
            </p>
          </motion.div>
        </div>
        
        {/* Imagen - 5 columnas */}
        <motion.div data-reveal data-reveal-delay="100ms" className="lg:col-span-5">
          <ClickableImage
            src={image}
            alt={language === 'en' ? content.titleEn : content.title}
            title={language === 'en' ? content.titleEn : content.title}
            subtitle={language === 'en' ? (subtitleEn || subtitle) : subtitle}
            onOpenGallery={() => onOpenGallery(imageIndex)}
            language={language}
            className={`w-full object-cover ${
              // Proporciones específicas para exterior form exploration y distribution layout
              (subtitle === "Dimensionamiento e Ingeniería" || subtitle === "Interior Final") 
                ? "aspect-[2.5/1]" 
                // UX/UI con 20% menos altura
                : subtitle === "UX/UI"
                ? "aspect-[2.5/1]"
                // Modelado CAD con 30% menos altura
                : subtitle === "Modelado CAD"
                ? "aspect-[2.3/1]"
                : "aspect-video"
            }`}
          />
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs font-mono text-black/60 uppercase tracking-widest">
              {language === 'en' ? (subtitleEn || subtitle) : subtitle}
            </span>
            <span className="text-xs font-mono text-black/50">{phase}</span>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Sección de Paneles (Imágenes de alta resolución)
// ═══════════════════════════════════════════════════════════════════════════
const PanelsSection = ({ phase, subtitle, subtitleEn, images, content, language }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [showHint, setShowHint] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = React.useRef(null);

  const totalPages = images?.length || 0;

  // PRECARGA DE IMÁGENES - Cargar todas las imágenes al montar el componente
  useEffect(() => {
    if (!images || images.length === 0) return;
    
    images.forEach((src, index) => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
      };
      img.src = src;
    });
  }, [images]);

  // Reset zoom y posición cuando cambia de página
  useEffect(() => {
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  }, [currentPage]);

  // Reset todo al salir de fullscreen
  useEffect(() => {
    if (!isFullscreen) {
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  }, [isFullscreen]);

  // Bloquear scroll del body cuando está en fullscreen
  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  // ESC para salir de fullscreen
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  // Ocultar hint después de interacción
  useEffect(() => {
    if (zoom > 1) {
      setShowHint(false);
    }
  }, [zoom]);

  // Zoom con scroll del ratón (SOLO en fullscreen)
  const handleWheel = (e, isFullscreenMode) => {
    if (!isFullscreenMode) return; // No hacer nada en vista normal
    
    e.preventDefault();
    e.stopPropagation();
    
    const delta = e.deltaY > 0 ? -0.15 : 0.15;
    setZoom(prev => {
      const newZoom = Math.max(1, Math.min(prev + delta, 4));
      if (newZoom === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return newZoom;
    });
  };

  // Doble click para reset o zoom (SOLO en fullscreen, NO en botones)
  const handleDoubleClick = (e, isFullscreenMode) => {
    if (!isFullscreenMode) return; // No hacer nada en vista normal
    
    // No hacer zoom si el doble click es en un botón
    if (e.target.closest('button') || e.target.tagName === 'BUTTON') {
      return;
    }
    
    e.preventDefault();
    if (zoom > 1) {
      // Reset zoom
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    } else {
      // Zoom in al punto del click
      setZoom(2);
    }
  };

  // Inicio de drag (SOLO en fullscreen con zoom, NO en botones)
  const handleMouseDown = (e, isFullscreenMode) => {
    if (!isFullscreenMode) return;
    
    // No iniciar drag si el click es en un botón o control
    if (e.target.closest('button') || e.target.tagName === 'BUTTON') {
      return;
    }
    
    if (zoom > 1) {
      e.preventDefault();
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  // Movimiento durante drag
  const handleMouseMove = (e) => {
    if (isDragging && zoom > 1) {
      const newX = e.clientX - dragStart.x;
      const newY = e.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  // Fin de drag
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events para móvil
  const handleTouchStart = (e) => {
    if (zoom > 1 && e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && zoom > 1 && e.touches.length === 1) {
      const touch = e.touches[0];
      const newX = touch.clientX - dragStart.x;
      const newY = touch.clientY - dragStart.y;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const goToPage = (index) => {
    setCurrentPage(index);
    // Auto-reset zoom cuando cambias de página
    setZoom(1);
    setPosition({ x: 0, y: 0 });
  };
  
  const goNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
      // Auto-reset zoom cuando cambias de página
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };
  
  const goPrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
      // Auto-reset zoom cuando cambias de página
      setZoom(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  if (!images || images.length === 0) return null;

  const ImageViewer = ({ isFullscreenMode }) => (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden select-none ${isFullscreenMode ? 'w-full h-full' : 'w-full'}`}
      onWheel={(e) => handleWheel(e, isFullscreenMode)}
      onMouseDown={(e) => handleMouseDown(e, isFullscreenMode)}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onDoubleClick={(e) => handleDoubleClick(e, isFullscreenMode)}
      style={{ 
        touchAction: isFullscreenMode ? 'none' : 'auto'
      }}
    >
      {/* Contenedor de imágenes con transición suave */}
      <div 
        className={`relative flex items-center justify-center ${isFullscreenMode ? 'h-full' : ''}`}
        style={{
          transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
          transition: isDragging ? 'none' : 'transform 0.2s ease-out',
          transformOrigin: 'center center'
        }}
      >
        {/* Todas las imágenes precargadas - solo la actual visible */}
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`Panel ${index + 1}`}
            className={`max-w-full transition-opacity duration-300 ease-out ${isFullscreenMode ? 'max-h-screen object-contain' : 'w-full h-auto'} ${
              currentPage === index ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
            }`}
            draggable={false}
            style={{ userSelect: 'none', pointerEvents: currentPage === index ? 'none' : 'none' }}
          />
        ))}
        
        {/* Indicador de carga si la imagen actual no está lista */}
        {!loadedImages[currentPage] && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Hint de scroll para zoom - SOLO en fullscreen */}
      {isFullscreenMode && showHint && zoom === 1 && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-black/70 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/20 animate-pulse">
            <div className="flex items-center gap-3 text-white/80">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3"/>
                <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
              </svg>
              <span className="text-sm font-mono">
                {language === 'en' ? 'Scroll to zoom • Double click to reset' : 'Scroll para zoom • Doble click para resetear'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Indicador de zoom actual - solo cuando hay zoom EN FULLSCREEN */}
      {isFullscreenMode && zoom > 1 && (
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
          <span className="text-white text-xs font-mono">{Math.round(zoom * 100)}%</span>
        </div>
      )}

      {/* Navegación lateral */}
      {currentPage > 0 && (
        <button
          onClick={(e) => { 
            e.stopPropagation(); 
            e.preventDefault();
            goPrev(); 
          }}
          className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white rounded-full border border-white/30 hover:border-white/60 transition-all shadow-2xl ${isFullscreenMode ? 'p-4' : 'p-3'} z-10`}
        >
          <ChevronLeft size={isFullscreenMode ? 28 : 20} />
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button
          onClick={(e) => { 
            e.stopPropagation(); 
            e.preventDefault();
            goNext(); 
          }}
          className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black/80 hover:bg-black text-white rounded-full border border-white/30 hover:border-white/60 transition-all shadow-2xl ${isFullscreenMode ? 'p-4' : 'p-3'} z-10`}
        >
          <ChevronRight size={isFullscreenMode ? 28 : 20} />
        </button>
      )}

      {/* Barra inferior de controles */}
      <div className={`absolute ${isFullscreenMode ? 'bottom-8' : 'bottom-4'} left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/90 backdrop-blur px-5 py-2.5 rounded-full border border-white/30 shadow-2xl z-10`}>
        {/* Indicadores de página */}
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => { 
              e.stopPropagation(); 
              e.preventDefault();
              goToPage(idx); 
            }}
            className={`rounded-full font-mono transition-all ${
              currentPage === idx
                ? 'bg-white text-black'
                : 'bg-transparent text-white/60 hover:text-white border border-white/30 hover:border-white/50'
            } ${isFullscreenMode ? 'w-10 h-10 text-sm' : 'w-8 h-8 text-xs'}`}
          >
            {idx + 1}
          </button>
        ))}

        <div className="w-px h-5 bg-white/30 mx-1"></div>

        {/* Botón fullscreen / salir */}
        <button
          onClick={(e) => { 
            e.stopPropagation(); 
            e.preventDefault();
            setIsFullscreen(!isFullscreen); 
          }}
          className={`flex items-center gap-2 bg-transparent hover:bg-white/10 text-white font-mono uppercase tracking-wider border border-white/30 hover:border-white/50 transition-all rounded ${isFullscreenMode ? 'px-4 py-2 text-sm' : 'px-3 py-1.5 text-xs'}`}
        >
          {isFullscreenMode ? (
            <>
              <Minimize2 size={isFullscreenMode ? 16 : 14} />
              {language === 'en' ? 'Exit' : 'Salir'}
              <span className="text-white/40 text-[10px] ml-1">ESC</span>
            </>
          ) : (
            <>
              <Maximize2 size={14} />
              {language === 'en' ? 'Full Screen' : 'Pantalla Completa'}
            </>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Vista normal en página */}
      <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto">
          {/* Título */}
          <div className="text-center mb-6">
            <motion.div data-reveal>
              <h3 className="text-2xl md:text-3xl font-mono font-bold text-black mb-3">
                {language === 'en' ? content.titleEn : content.title}
              </h3>
              <p className="text-sm md:text-base font-mono text-black/60 leading-relaxed max-w-2xl mx-auto">
                {language === 'en' ? content.descriptionEn : content.description}
              </p>
            </motion.div>
          </div>
          
          {/* Visor de paneles */}
          <motion.div data-reveal data-reveal-delay="100ms">
            <div className="relative bg-white border border-gray-200 mx-auto" style={{ maxWidth: '100%' }}>
              <ImageViewer isFullscreenMode={false} />
            </div>
            
            <div className="flex items-center justify-between mt-3 px-1">
              <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest">
                {language === 'en' ? (subtitleEn || subtitle) : subtitle}
              </span>
              <span className="text-[9px] font-mono text-black/30">
                {phase} • PANEL {currentPage + 1}/{totalPages}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fullscreen overlay */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black flex items-center justify-center"
          style={{ zIndex: 99999 }}
        >
          <ImageViewer isFullscreenMode={true} />
        </div>
      )}
    </>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: Sección de Video Mejorada
// ═══════════════════════════════════════════════════════════════════════════
const VideoSection = ({ phase, subtitle, subtitleEn, video, content, language }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const videoRef = useRef(null);

  // Manejar fullscreen
  const handleFullscreen = () => {
    if (!videoRef.current) return;
    
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitRequestFullscreen) {
      videoRef.current.webkitRequestFullscreen();
    } else if (videoRef.current.msRequestFullscreen) {
      videoRef.current.msRequestFullscreen();
    }
  };

  // Detectar cuando el video se carga
  const handleVideoLoad = () => {
    setIsLoaded(true);
  };

  // Determinar si es un video local o YouTube
  const isYouTube = video.url?.includes('youtube.com') || video.url?.includes('youtu.be');

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 lg:px-12 bg-white border-b border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Header explicativo breve */}
        <div className="text-center mb-6">
          <motion.div data-reveal>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-mono font-bold text-black mb-2">
              {language === 'en' ? (content?.titleEn || video.titleEn || video.title) : (content?.title || video.title)}
            </h3>
            <p className="text-xs md:text-sm font-mono text-black/60 leading-relaxed max-w-xl mx-auto">
              {language === 'en' ? (content?.descriptionEn || video.descriptionEn || video.description || "Interactive demonstration of the final product") : (content?.description || video.description || "Demostración interactiva del producto final")}
            </p>
          </motion.div>
        </div>
        
        {/* Contenedor de Video Optimizado */}
        <motion.div data-reveal data-reveal-delay="100ms">
          <div className="relative bg-black border border-gray-200 mx-auto rounded-lg overflow-hidden group">
            {/* YouTube Embed Optimizado */}
            {isYouTube ? (
              <div className="relative aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.url.replace('watch?v=', 'embed/').replace('youtu.be/', 'youtube.com/embed/') + '?rel=0&modestbranding=1&fs=1&iv_load_policy=3'}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            ) : (
              /* Video Nativo con Controles Avanzados */
              <>
                <div className="relative aspect-video">
                  <video
                    ref={videoRef}
                    className="w-full h-full object-cover"
                    controls
                    poster={video.poster}
                    preload="metadata"
                    onLoadedData={handleVideoLoad}
                    playsInline
                  >
                    <source src={video.url} type="video/mp4" />
                    <source src={video.url?.replace('.mp4', '.webm')} type="video/webm" />
                    Tu navegador no soporta el elemento video.
                  </video>
                  
                  {/* Botón Fullscreen Personalizado */}
                  <button
                    onClick={handleFullscreen}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10"
                    title="Fullscreen"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                    </svg>
                  </button>
                  
                  {/* Indicador de Calidad */}
                  {isLoaded && (
                    <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs font-mono px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      HD • {videoRef.current?.videoWidth}x{videoRef.current?.videoHeight}
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          
          {/* Información del Video */}
          <div className="flex items-center justify-between mt-3 px-1">
            <span className="text-[9px] font-mono text-black/40 uppercase tracking-widest">
              {language === 'en' ? (subtitleEn || subtitle || "Final Presentation") : (subtitle || "Presentación Final")}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-black/30">{phase} • VIDEO</span>
              {isYouTube && (
                <span className="text-[9px] font-mono text-red-500/60">YT</span>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL: ProjectPage
// ═══════════════════════════════════════════════════════════════════════════
export default function ProjectPage({ project }) {
  useScrollReveal();
  const { language } = useLanguage();
  
  // Estado de la galería fullscreen
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <p className="text-white/50 font-mono">Proyecto no encontrado</p>
      </div>
    );
  }

  // Extraer todas las imágenes del proyecto para la galería
  const galleryImages = project.sections
    ?.filter(section => section.type === 'image-left' || section.type === 'image-right')
    .map(section => ({
      src: section.image,
      title: language === 'en' ? section.content.titleEn : section.content.title,
      subtitle: language === 'en' ? (section.subtitleEn || section.subtitle) : section.subtitle,
    })) || [];

  // Función para abrir la galería
  const openGallery = (imageIndex) => {
    setGalleryIndex(imageIndex);
    setGalleryOpen(true);
  };

  // Función para cerrar la galería
  const closeGallery = () => {
    setGalleryOpen(false);
  };

  // Función para navegar en la galería
  const navigateGallery = (newIndex) => {
    setGalleryIndex(newIndex);
  };

  // Contador de imágenes para asignar índices correctos
  let imageCounter = 0;

  // Renderizar sección según su tipo
  const renderSection = (section, index) => {
    switch (section.type) {
      case 'text-only':
        return (
          <TextOnlySection
            key={section.id}
            phase={section.phase}
            title={section.title}
            titleEn={section.titleEn}
            content={section.content}
            language={language}
          />
        );
      case 'phase-header':
        return (
          <PhaseHeader
            key={section.id}
            phase={section.phase}
            title={section.title}
            titleEn={section.titleEn}
            subsections={section.subsections}
            subsectionsEn={section.subsectionsEn}
            language={language}
          />
        );
      case 'image-left': {
        const currentImageIndex = imageCounter++;
        return (
          <ImageLeftSection
            key={section.id}
            phase={section.phase}
            subtitle={section.subtitle}
            subtitleEn={section.subtitleEn}
            image={section.image}
            content={section.content}
            language={language}
            onOpenGallery={openGallery}
            imageIndex={currentImageIndex}
          />
        );
      }
      case 'image-right': {
        const currentImageIndex = imageCounter++;
        return (
          <ImageRightSection
            key={section.id}
            phase={section.phase}
            subtitle={section.subtitle}
            subtitleEn={section.subtitleEn}
            image={section.image}
            content={section.content}
            language={language}
            onOpenGallery={openGallery}
            imageIndex={currentImageIndex}
          />
        );
      }
      case 'video':
        return (
          <VideoSection
            key={section.id}
            phase={section.phase}
            subtitle={section.subtitle}
            subtitleEn={section.subtitleEn}
            video={section.video}
            content={section.content}
            language={language}
          />
        );
      case 'panels':
        return (
          <PanelsSection
            key={section.id}
            phase={section.phase}
            subtitle={section.subtitle}
            subtitleEn={section.subtitleEn}
            images={section.images}
            content={section.content}
            language={language}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white">
      {/* ═══════════════════════════════════════════════════════════════════
          HERO SECTION - Primera foto a sangre (invariable)
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="relative h-screen w-full overflow-hidden border-b border-white/10 z-[9999] -mt-20">
        <ImageWithFallback
          src={project.hero.image}
          alt={language === 'en' && project.titleEn ? project.titleEn : project.title}
          className="w-full h-full object-cover"
        />
        
        {/* Overlay sutil */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

        {/* Contenido texto */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="text-[10px] font-mono text-white/40 tracking-widest">
                PROJECT_DETAIL
              </span>
              <span className="text-white/20">//</span>
              <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                {language === 'en' && project.categoryEn ? project.categoryEn : project.category}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-mono font-bold text-white leading-none tracking-tight mb-6">
              {language === 'en' && project.titleEn ? project.titleEn : project.title}
            </h1>
            
            <div className="flex items-center gap-6 text-sm font-mono text-white/40">
              <span>YEAR: {project.year}</span>
              <span className="text-white/20">|</span>
              <span>STATUS: COMPLETED</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          SECCIONES DINÁMICAS - Renderizadas según tipo
      ═══════════════════════════════════════════════════════════════════ */}
      {project.sections?.map((section, index) => renderSection(section, index))}

      {/* ═══════════════════════════════════════════════════════════════════
          NAVEGACIÓN - Siguiente Proyecto
      ═══════════════════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-32 px-4 md:px-16 lg:px-24 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center md:items-start md:flex-row md:justify-between gap-8">
            {/* Volver al índice */}
            <a
              href="/#work"
              className="group flex items-center gap-4 text-white/40 hover:text-white transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-2 transition-transform duration-200" />
              <div className="text-center md:text-left">
                <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-1">
                  BACK_TO
                </p>
                <p className="text-base font-mono font-medium uppercase">
                  {language === 'en' ? 'Project Index' : 'Índice de Proyectos'}
                </p>
              </div>
            </a>

            {/* Siguiente proyecto */}
            {project.nextProject && (
              <a
                href={`/project/${project.nextProject.slug}`}
                className="group flex items-center gap-6 text-white hover:text-white/70 transition-colors duration-200"
              >
                <div className="text-center md:text-right">
                  <p className="text-[10px] font-mono tracking-widest text-white/30 uppercase mb-2">
                    NEXT_PROJECT
                  </p>
                  <p className="text-2xl md:text-4xl font-mono font-bold">
                    {language === 'en' && project.nextProject.titleEn ? project.nextProject.titleEn : project.nextProject.title}
                  </p>
                  <p className="text-sm font-mono text-white/40 mt-2 uppercase tracking-widest">
                    {language === 'en' && project.nextProject.tagEn ? project.nextProject.tagEn : project.nextProject.tag}
                  </p>
                </div>
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-200" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          GALERÍA FULLSCREEN
      ═══════════════════════════════════════════════════════════════════ */}
      <AnimatePresence>
        {galleryOpen && galleryImages.length > 0 && (
          <FullscreenGallery
            images={galleryImages}
            currentIndex={galleryIndex}
            onClose={closeGallery}
            onNavigate={navigateGallery}
            language={language}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
