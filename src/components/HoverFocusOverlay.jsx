import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HoverFocusOverlay({ children }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const updateDimensions = () => {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      };
      
      updateDimensions();
      window.addEventListener('resize', updateDimensions);
      return () => window.removeEventListener('resize', updateDimensions);
    }
  }, []);

  const offset = 6;
  const w = dimensions.width - offset * 2;
  const h = dimensions.height - offset * 2;
  const perimeter = 2 * (w + h);

  // Configuración de las líneas
  const lines = [
    { id: 1, duration: 12, startPercent: 0, length: 60, delay: 0 },
    { id: 2, duration: 14, startPercent: 0.25, length: 70, delay: 0 },
    { id: 3, duration: 13, startPercent: 0.5, length: 55, delay: 0 },
    { id: 4, duration: 15, startPercent: 0.75, length: 65, delay: 0 }
  ];

  // Función para calcular los segmentos rectangulares en una posición dada
  const getLineSegments = (distance) => {
    const segments = [];
    const normalizedDist = distance % perimeter;
    
    return segments;
  };

  // Componente individual de línea animada
  const AnimatedLine = ({ config }) => {
    const [progress, setProgress] = useState(0);
    const animationRef = useRef(null);
    const startTimeRef = useRef(null);

    useEffect(() => {
      if (!isHovered) {
        setProgress(0);
        startTimeRef.current = null;
        return;
      }

      const animate = (timestamp) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }

        const elapsed = timestamp - startTimeRef.current;
        const newProgress = (elapsed / (config.duration * 1000)) % 1;
        setProgress(newProgress);

        animationRef.current = requestAnimationFrame(animate);
      };

      animationRef.current = requestAnimationFrame(animate);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }, [isHovered, config.duration]);

    // Calcular posición actual basada en el progreso
    const currentDistance = (config.startPercent * perimeter) + (progress * perimeter);
    const normalizedDist = currentDistance % perimeter;
    
    // Calcular segmentos para la línea actual
    const segments = [];
    let remaining = config.length;
    let pos = normalizedDist;

    while (remaining > 0 && segments.length < 4) {
      if (pos < w) {
        // Top edge
        const len = Math.min(remaining, w - pos);
        segments.push({
          x: offset + pos,
          y: offset,
          width: len,
          height: 1
        });
        remaining -= len;
        pos += len;
      } else if (pos < w + h) {
        // Right edge
        const edgePos = pos - w;
        const len = Math.min(remaining, h - edgePos);
        segments.push({
          x: offset + w,
          y: offset + edgePos,
          width: 1,
          height: len
        });
        remaining -= len;
        pos += len;
      } else if (pos < 2 * w + h) {
        // Bottom edge
        const edgePos = pos - (w + h);
        const len = Math.min(remaining, w - edgePos);
        segments.push({
          x: offset + w - edgePos - len,
          y: offset + h,
          width: len,
          height: 1
        });
        remaining -= len;
        pos += len;
      } else if (pos < perimeter) {
        // Left edge
        const edgePos = pos - (2 * w + h);
        const len = Math.min(remaining, h - edgePos);
        segments.push({
          x: offset,
          y: offset + h - edgePos - len,
          width: 1,
          height: len
        });
        remaining -= len;
        pos += len;
      }
      
      // Wrap around
      if (pos >= perimeter) pos = 0;
    }

    return (
      <>
        {segments.map((seg, idx) => (
          <motion.div
            key={idx}
            className="absolute bg-[#d0d0d0]"
            style={{
              left: `${seg.x}px`,
              top: `${seg.y}px`,
              width: `${seg.width}px`,
              height: `${seg.height}px`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />
        ))}
      </>
    );
  };

  return (
    <div 
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      
      {/* Overlay de líneas de escaneo */}
      <AnimatePresence>
        {isHovered && dimensions.width > 0 && (
          <motion.div 
            className="absolute inset-0 pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          >
            {lines.map((line) => (
              <AnimatedLine key={line.id} config={line} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
