import React, { useRef, useEffect, useCallback } from 'react';

/**
 * HoverFocusOverlay - Efecto "Choose Your Character" estilo Nothing Tech
 * 
 * 4 líneas blancas ultra-finas (1px) que viajan por el perímetro de la foto
 * a velocidades asíncronas cuando se hace hover. Las líneas giran en las 
 * esquinas formando "L" sin abandonar nunca el perímetro.
 * 
 * @param {boolean} isHovered - Controla si la animación está activa
 */
export default function HoverFocusOverlay({ isHovered }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const linesRef = useRef([]);
  const opacityRef = useRef(0);

  // Configuración de las 4 líneas con velocidades asíncronas (requisito clave)
  const lineConfigs = [
    { startPercent: 0.00, speed: 0.9, length: 50 },   // Línea 1 - velocidad base
    { startPercent: 0.25, speed: 0.75, length: 60 },  // Línea 2 - ligeramente más lenta
    { startPercent: 0.50, speed: 0.65, length: 45 },  // Línea 3 - más lenta
    { startPercent: 0.75, speed: 0.8, length: 55 },   // Línea 4 - intermedia
  ];

  // Calcular segmentos de una línea que viaja por el perímetro
  const getLineSegments = useCallback((position, length, w, h, perimeter, offset) => {
    const segments = [];
    let remaining = length;
    let pos = ((position % perimeter) + perimeter) % perimeter;

    while (remaining > 0 && segments.length < 4) {
      if (pos < w) {
        // Borde superior (izquierda → derecha)
        const availableLength = w - pos;
        const segLength = Math.min(remaining, availableLength);
        segments.push({
          x: offset + pos,
          y: offset,
          width: segLength,
          height: 1,
        });
        remaining -= segLength;
        pos += segLength;
      } else if (pos < w + h) {
        // Borde derecho (arriba → abajo)
        const edgePos = pos - w;
        const availableLength = h - edgePos;
        const segLength = Math.min(remaining, availableLength);
        segments.push({
          x: offset + w - 1,
          y: offset + edgePos,
          width: 1,
          height: segLength,
        });
        remaining -= segLength;
        pos += segLength;
      } else if (pos < 2 * w + h) {
        // Borde inferior (derecha → izquierda)
        const edgePos = pos - (w + h);
        const availableLength = w - edgePos;
        const segLength = Math.min(remaining, availableLength);
        segments.push({
          x: offset + w - edgePos - segLength,
          y: offset + h - 1,
          width: segLength,
          height: 1,
        });
        remaining -= segLength;
        pos += segLength;
      } else if (pos < perimeter) {
        // Borde izquierdo (abajo → arriba)
        const edgePos = pos - (2 * w + h);
        const availableLength = h - edgePos;
        const segLength = Math.min(remaining, availableLength);
        segments.push({
          x: offset,
          y: offset + h - edgePos - segLength,
          width: 1,
          height: segLength,
        });
        remaining -= segLength;
        pos += segLength;
      }

      // Wrap around al completar el perímetro
      if (pos >= perimeter) {
        pos = 0;
      }
    }

    return segments;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const parent = canvas.parentElement;
    
    const updateCanvasSize = () => {
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    const offset = 4;
    
    // Inicializar líneas si no existen
    const initLines = () => {
      const w = canvas.width - offset * 2;
      const h = canvas.height - offset * 2;
      const perimeter = 2 * (w + h);
      
      if (linesRef.current.length === 0) {
        linesRef.current = lineConfigs.map((config) => ({
          position: config.startPercent * perimeter,
          speed: config.speed,
          length: config.length,
          initialPosition: config.startPercent * perimeter,
        }));
      }
    };
    
    initLines();

    const animate = () => {
      const w = canvas.width - offset * 2;
      const h = canvas.height - offset * 2;
      const perimeter = 2 * (w + h);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Transición de opacidad casi instantánea (sin fade suave)
      const opacitySpeed = 0.3;
      if (isHovered) {
        opacityRef.current = Math.min(opacityRef.current + opacitySpeed, 1);
      } else {
        opacityRef.current = Math.max(opacityRef.current - opacitySpeed, 0);
      }

      // Si no visible, continuar animación pero no dibujar
      if (opacityRef.current <= 0) {
        // Reset posiciones cuando completamente oculto
        linesRef.current.forEach((line, i) => {
          line.position = lineConfigs[i].startPercent * perimeter;
        });
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Actualizar posiciones solo si hover activo
      if (isHovered) {
        linesRef.current.forEach((line) => {
          line.position = (line.position + line.speed) % perimeter;
        });
      }
      // Si !isHovered, las líneas se DETIENEN inmediatamente (sin desaceleración)

      // Dibujar las líneas - color blanco puro para contraste máximo
      ctx.fillStyle = `rgba(255, 255, 255, ${opacityRef.current})`;

      linesRef.current.forEach((line) => {
        const segments = getLineSegments(line.position, line.length, w, h, perimeter, offset);
        segments.forEach((seg) => {
          ctx.fillRect(seg.x, seg.y, seg.width, seg.height);
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovered, getLineSegments]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20"
    />
  );
}
