import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * CustomCursor - Cursor personalizado tipo crosshair con círculo reactivo
 * 
 * Características:
 * - Ultra-responsivo con requestAnimationFrame
 * - Reacciona a elementos interactivos (hover expand)
 * - Oculta automáticamente en dispositivos táctiles
 * - Maneja edge cases (inputs, iframes, salida de ventana)
 * - Smooth trailing effect en el círculo exterior
 * - Alto contraste para accesibilidad
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  const requestRef = useRef(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const circlePos = useRef({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Detectar dispositivos táctiles
  useEffect(() => {
    const checkTouch = () => {
      const hasTouch = 'ontouchstart' in window || 
                       navigator.maxTouchPoints > 0 ||
                       window.matchMedia('(pointer: coarse)').matches;
      setIsTouchDevice(hasTouch);
    };
    
    checkTouch();
    window.addEventListener('resize', checkTouch);
    return () => window.removeEventListener('resize', checkTouch);
  }, []);

  // Selectores de elementos interactivos
  const interactiveSelectors = [
    'a',
    'button',
    '[role="button"]',
    'input[type="submit"]',
    'input[type="button"]',
    'input[type="checkbox"]',
    'input[type="radio"]',
    '[onclick]',
    '[data-clickable]',
    '.cursor-pointer',
    'label[for]',
    'summary',
    '[tabindex]:not([tabindex="-1"])',
    'video',
    '[data-cursor-hover]'
  ].join(', ');

  // Selectores donde ocultar el cursor personalizado (usar cursor nativo)
  const hideSelectors = [
    'input[type="text"]',
    'input[type="email"]',
    'input[type="password"]',
    'input[type="search"]',
    'input[type="number"]',
    'input[type="tel"]',
    'input[type="url"]',
    'textarea',
    '[contenteditable="true"]',
    'select',
    'iframe'
  ].join(', ');

  // Animation loop para el círculo (trailing suave)
  const animate = useCallback(() => {
    // Interpolación suave del círculo hacia la posición del mouse
    const ease = 0.15;
    circlePos.current.x += (mousePos.current.x - circlePos.current.x) * ease;
    circlePos.current.y += (mousePos.current.y - circlePos.current.y) * ease;

    if (circleRef.current) {
      circleRef.current.style.transform = `translate3d(${circlePos.current.x}px, ${circlePos.current.y}px, 0) translate(-50%, -50%)`;
    }

    requestRef.current = requestAnimationFrame(animate);
  }, []);

  // Manejar movimiento del mouse
  const handleMouseMove = useCallback((e) => {
    mousePos.current = { x: e.clientX, y: e.clientY };
    
    // El punto central sigue inmediatamente (sin delay)
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    }

    // Detectar si está sobre elemento interactivo
    const target = e.target;
    if (target) {
      const isInteractive = target.closest(interactiveSelectors);
      const shouldHide = target.closest(hideSelectors);
      
      setIsHovering(!!isInteractive && !shouldHide);
      setIsHidden(!!shouldHide);
    }
  }, [interactiveSelectors, hideSelectors]);

  // Manejar cuando el mouse sale de la ventana
  const handleMouseLeave = useCallback(() => {
    mousePos.current = { x: -100, y: -100 };
    if (dotRef.current) {
      dotRef.current.style.opacity = '0';
    }
    if (circleRef.current) {
      circleRef.current.style.opacity = '0';
    }
  }, []);

  // Manejar cuando el mouse entra a la ventana
  const handleMouseEnter = useCallback(() => {
    if (dotRef.current) {
      dotRef.current.style.opacity = '1';
    }
    if (circleRef.current) {
      circleRef.current.style.opacity = '1';
    }
  }, []);

  // Manejar clicks
  const handleMouseDown = useCallback(() => setIsClicking(true), []);
  const handleMouseUp = useCallback(() => setIsClicking(false), []);

  // Setup de event listeners
  useEffect(() => {
    if (isTouchDevice) return;

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Iniciar animation loop
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isTouchDevice, handleMouseMove, handleMouseLeave, handleMouseEnter, handleMouseDown, handleMouseUp, animate]);

  // No renderizar en dispositivos táctiles
  if (isTouchDevice) return null;

  // Tamaños aumentados para mejor visibilidad
  const dotSize = isHovering ? 10 : 8;
  const crossSize = isHovering ? 28 : 20;
  const circleSize = isClicking ? 38 : isHovering ? 56 : 48;

  return (
    <>
      {/* Estilos para ocultar cursor nativo globalmente */}
      <style>{`
        *, *::before, *::after {
          cursor: none !important;
        }
        
        /* Restaurar cursor en inputs de texto y selects */
        input[type="text"],
        input[type="email"],
        input[type="password"],
        input[type="search"],
        input[type="number"],
        input[type="tel"],
        input[type="url"],
        textarea,
        [contenteditable="true"],
        select {
          cursor: text !important;
        }
        
        select {
          cursor: pointer !important;
        }
        
        iframe {
          cursor: auto !important;
        }
      `}</style>

      {/* Punto central (crosshair) - sigue inmediatamente */}
      <div
        ref={dotRef}
        className="custom-cursor-dot"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: isHidden ? 'transparent' : '#ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 2147483647,
          boxShadow: isHidden ? 'none' : '0 0 0 1px rgba(0,0,0,0.8), 0 0 8px rgba(0,0,0,0.5)',
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)'
        }}
      >
        {/* Cruz/Crosshair lines - Con alto contraste */}
        {!isHidden && (
          <>
            {/* Línea horizontal - sombra para contraste */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: `${crossSize}px`,
                height: '2px',
                backgroundColor: '#ffffff',
                transform: 'translate(-50%, -50%)',
                transition: 'width 0.2s ease',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.6)'
              }}
            />
            {/* Línea vertical - sombra para contraste */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '2px',
                height: `${crossSize}px`,
                backgroundColor: '#ffffff',
                transform: 'translate(-50%, -50%)',
                transition: 'height 0.2s ease',
                boxShadow: '0 0 0 1px rgba(0,0,0,0.8), 1px 0 3px rgba(0,0,0,0.6)'
              }}
            />
          </>
        )}
      </div>

      {/* Círculo exterior - trailing suave con alto contraste */}
      <div
        ref={circleRef}
        className="custom-cursor-circle"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          border: isHidden ? 'none' : `2px solid rgba(255, 255, 255, ${isHovering ? 0.9 : 0.6})`,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 2147483646,
          boxShadow: isHidden ? 'none' : '0 0 0 1px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.3)',
          transition: 'width 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), height 0.25s cubic-bezier(0.25, 0.1, 0.25, 1), border 0.2s ease, opacity 0.2s ease',
          willChange: 'transform',
          transform: 'translate3d(-100px, -100px, 0) translate(-50%, -50%)'
        }}
      />
    </>
  );
};

export default CustomCursor;
