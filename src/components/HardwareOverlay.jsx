import React from 'react';

/**
 * Hardware Overlay - Efecto de píxeles estáticos estilo Nothing
 * 
 * Los píxeles permanecen fijos (position: fixed) mientras el contenido
 * se desliza por encima. El color se invierte automáticamente según
 * el fondo del contenido (gris sobre claro, invertido sobre oscuro).
 */
export default function HardwareOverlay() {
  return (
    <div 
      className="hardware-overlay"
      aria-hidden="true"
    />
  );
}
