import React from 'react';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
      <span className="text-sm font-mono text-gray-500 mb-4">[ INGENIERO DE DISEÑO ]</span>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 max-w-4xl">
        CREANDO ESPACIOS QUE INSPIRAN
      </h1>
      <p className="text-xl text-gray-600 max-w-xl">
        Diseño industrial, modelado 3D y optimización de producto.
        Basado en A Coruña.
      </p>
    </section>
  );
}