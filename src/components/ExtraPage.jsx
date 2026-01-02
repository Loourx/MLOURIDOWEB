import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';

export default function ExtraPage() {
  // Scroll al top cuando se carga la página
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section - Industrial Raw */}
        <section className="py-16 px-6 md:px-12 border-b border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-mono text-gray-500">05 // PERSONAL_DATA</span>
                <span className="text-gray-400">+</span>
                <span className="text-[10px] font-mono text-gray-600">[BEYOND_DESIGN]</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-mono font-bold tracking-tight mb-4 text-black">
                Más allá del <span className="text-gray-500">Diseño</span>
              </h1>
              <p className="text-base text-gray-600 max-w-2xl leading-relaxed font-mono">
                Apasionado por la innovación en el diseño industrial, pero también pintor al óleo. 
                Aquí comparto mis intereses, ubicación y obras de arte.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Información Personal - Industrial Raw */}
        <section className="py-16 px-6 md:px-12 bg-white relative">
          {/* Grid de puntos estático */}
          <div className="absolute inset-0 pointer-events-none z-0" 
               style={{
                 backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)',
                 backgroundSize: '40px 40px'
               }}
          />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Ubicación */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="border border-gray-200 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-gray-500">LOC_01</span>
                  <span className="text-gray-400">—</span>
                </div>
                <h3 className="text-base font-mono font-bold mb-3 text-black uppercase">Galicia, España</h3>
                <p className="text-sm text-gray-600 font-mono leading-relaxed">
                  Costa atlántica donde convergen mar y montaña. Inspiración natural para diseño y pintura.
                </p>
              </motion.div>

              {/* Intereses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="border border-gray-200 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-gray-500">INT_04</span>
                  <span className="text-gray-400">—</span>
                </div>
                <h3 className="text-base font-mono font-bold mb-3 text-black uppercase">Intereses</h3>
                <ul className="space-y-2 text-sm text-gray-600 font-mono">
                  <li>• Pintura al Óleo</li>
                  <li>• Montaña & Outdoor</li>
                  <li>• Tecnología & IA</li>
                  <li>• Sostenibilidad</li>
                </ul>
              </motion.div>

              {/* Filosofía */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="border border-gray-200 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-mono text-gray-500">PHI_01</span>
                  <span className="text-gray-400">—</span>
                </div>
                <h3 className="text-base font-mono font-bold mb-3 text-black uppercase">Filosofía</h3>
                <p className="text-sm text-gray-600 font-mono leading-relaxed">
                  Diseño = Forma + Función + Emoción. El proceso es tan importante como el resultado.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Galería de Obras - Estilo Proyectos */}
        <section className="py-16 px-4 bg-white relative">
          <div className="max-w-7xl mx-auto">
            {/* Header de la galería */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-gray-500">GALLERY_MODULE</span>
                <span className="text-gray-400">—</span>
                <span className="text-sm font-mono tracking-[0.2em] text-gray-600 uppercase">Obras al Óleo</span>
              </div>
              <span className="text-[9px] font-mono text-gray-500">4 PIECES</span>
            </div>

            {/* Grid de obras - Layout específico */}
            <div className="grid grid-cols-4 grid-rows-3 gap-3 h-[800px] relative z-[9999]">
              {/* Obra 1 - Horizontal Grande (2x2) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="col-span-2 row-span-2 group cursor-pointer nothing-hover"
              >
                <div className="bg-gray-100 border border-gray-300 h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center text-gray-600 font-mono text-sm">
                    [Obra de Arte - Pintura al Óleo 1]
                  </div>
                  <div className="p-4 border-t border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-base font-mono text-black uppercase font-medium">Luz Natural I</span>
                      <span className="text-[9px] font-mono text-gray-500">ART_01</span>
                    </div>
                    <p className="text-xs text-gray-600 font-mono">Óleo sobre lienzo • 80 × 60 cm / 2024</p>
                  </div>
                </div>
              </motion.div>

              {/* Obra 2 - Vertical Grande (1x3) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="col-span-1 row-span-3 group cursor-pointer nothing-hover"
              >
                <div className="bg-gray-100 border border-gray-300 h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center text-gray-600 font-mono text-sm">
                    [Obra de Arte - Pintura al Óleo 2]
                  </div>
                  <div className="p-3 border-t border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-black uppercase font-medium">Montaña Suspendida</span>
                      <span className="text-[9px] font-mono text-gray-500">ART_02</span>
                    </div>
                    <p className="text-xs text-gray-600 font-mono">Óleo sobre lienzo • 100 × 80 cm / 2023</p>
                  </div>
                </div>
              </motion.div>

              {/* Obra 3 - Vertical Mediana (1x2) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="col-span-1 row-span-2 group cursor-pointer nothing-hover"
              >
                <div className="bg-gray-100 border border-gray-300 h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center text-gray-600 font-mono text-sm">
                    [Obra de Arte - Pintura al Óleo 3]
                  </div>
                  <div className="p-3 border-t border-gray-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-black uppercase font-medium">Transiciones</span>
                      <span className="text-[9px] font-mono text-gray-500">ART_03</span>
                    </div>
                    <p className="text-xs text-gray-600 font-mono">Óleo sobre lienzo • 90 × 70 cm / 2024</p>
                  </div>
                </div>
              </motion.div>

              {/* Obra 4 - Horizontal Pequeña (2x1) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="col-span-2 row-span-1 group cursor-pointer nothing-hover"
              >
                <div className="bg-gray-100 border border-gray-300 h-full flex">
                  <div className="flex-1 flex items-center justify-center text-gray-600 font-mono text-sm">
                    [Obra de Arte - Pintura al Óleo 4]
                  </div>
                  <div className="w-48 p-3 border-l border-gray-300 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-mono text-black uppercase font-medium">Reflejos Urbanos</span>
                      <span className="text-[9px] font-mono text-gray-500">ART_04</span>
                    </div>
                    <p className="text-xs text-gray-600 font-mono">Óleo sobre lienzo • 75 × 100 cm / 2024</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contacto y CTA */}
        <section className="py-16 px-6 md:px-12 bg-white relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="border border-gray-200 p-8"
            >
              <div className="flex items-center justify-center gap-4 mb-6">
                <span className="text-[10px] font-mono text-gray-500">CONTACT_INFO</span>
                <span className="text-gray-400">—</span>
                <span className="text-[10px] font-mono text-gray-500">AVAILABLE</span>
              </div>
              <p className="text-base text-gray-600 font-mono leading-relaxed">
                Interesado en colaboraciones, ver obras originales, o conversar sobre diseño, arte y tecnología. 
                Siempre abierto a nuevas perspectivas y proyectos desafiantes.
              </p>
            </motion.div>

            {/* CTA o Cierre */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="border-t border-gray-200 mt-16 pt-12"
              data-reveal
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[10px] font-mono text-gray-500">CONTACT_INFO</span>
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-[10px] font-mono text-gray-500">AVAILABLE</span>
              </div>
              <p className="text-gray-700 max-w-2xl leading-relaxed text-sm font-mono">
                Si te interesa colaborar, ver mis obras originales, o simplemente conversar 
                sobre diseño, arte y tecnología, no dudes en ponerte en contacto. 
                Siempre estoy abierto a nuevas perspectivas y proyectos desafiantes.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
