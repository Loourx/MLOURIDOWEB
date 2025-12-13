import React from 'react';
import { motion } from 'framer-motion';

export default function Personal() {
  return (
    <section id="personal" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <div
          data-reveal
          className="text-sm font-mono tracking-[0.3em] text-muted-foreground mb-2"
        >
          [04]
        </div>
        <p
          data-reveal
          data-reveal-delay="80ms"
          className="text-xs uppercase tracking-[0.35em] text-muted-foreground mb-3"
        >
          Personal
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2
            data-reveal
            data-reveal-delay="120ms"
            className="text-4xl md:text-5xl font-serif tracking-tight"
          >
            <span className="italic">Más allá del Diseño</span>
          </h2>
          <p
            data-reveal
            data-reveal-delay="200ms"
            className="text-sm text-muted-foreground md:max-w-sm"
          >
            Apasionado por la innovación en el diseño industrial, pero también pintor al óleo. 
            Aquí comparto mis intereses, ubicación y obras de arte.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Columna Izquierda: Información Personal */}
          <motion.div
            data-reveal
            data-reveal-delay="280ms"
            className="space-y-8"
          >
            {/* Ubicación */}
            <div>
              <h3 className="text-sm font-mono tracking-[0.2em] text-gray-500 uppercase mb-3">
                Ubicación
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">
                Galicia, España
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Donde el mar y la montaña convergen. Un lugar que inspira la creatividad 
                desde la perspectiva de la naturaleza y la innovación.
              </p>
            </div>

            {/* Intereses */}
            <div>
              <h3 className="text-sm font-mono tracking-[0.2em] text-gray-500 uppercase mb-3">
                Intereses Personales
              </h3>
              <ul className="space-y-2">
                <li className="text-gray-700 font-light">
                  <span className="font-medium">Pintura al Óleo:</span> Exploración de texturas y luces
                </li>
                <li className="text-gray-700 font-light">
                  <span className="font-medium">Montaña:</span> Esquí, naturaleza y deportes outdoor
                </li>
                <li className="text-gray-700 font-light">
                  <span className="font-medium">Tecnología:</span> IA, innovación y metodología de diseño
                </li>
                <li className="text-gray-700 font-light">
                  <span className="font-medium">Sostenibilidad:</span> Diseño responsable con el medio ambiente
                </li>
              </ul>
            </div>

            {/* Filosofía */}
            <div>
              <h3 className="text-sm font-mono tracking-[0.2em] text-gray-500 uppercase mb-3">
                Mi Filosofía
              </h3>
              <p className="text-gray-700 leading-relaxed font-light">
                Creo que el buen diseño es la intersección entre forma, función y emoción. 
                Tanto en la pintura como en la ingeniería de producto, busco crear experiencias 
                que trasciendan lo meramente utilitario.
              </p>
            </div>
          </motion.div>

          {/* Columna Derecha: Galería de Obras */}
          <motion.div
            data-reveal
            data-reveal-delay="360ms"
            className="space-y-6"
          >
            <div>
              <h3 className="text-sm font-mono tracking-[0.2em] text-gray-500 uppercase mb-6">
                Obras al Óleo
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {/* Obra 1 */}
                <div className="group">
                  <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video mb-4 flex items-center justify-center text-gray-500 font-mono text-xs">
                    [Obra de Arte - Pintura al Óleo 1]
                  </div>
                  <p className="text-sm font-mono tracking-[0.15em] text-gray-600 uppercase">
                    Luz Natural I
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Óleo sobre lienzo / 80x60cm / 2024</p>
                </div>

                {/* Obra 2 */}
                <div className="group">
                  <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video mb-4 flex items-center justify-center text-gray-500 font-mono text-xs">
                    [Obra de Arte - Pintura al Óleo 2]
                  </div>
                  <p className="text-sm font-mono tracking-[0.15em] text-gray-600 uppercase">
                    Montaña Suspendida
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Óleo sobre lienzo / 100x80cm / 2023</p>
                </div>

                {/* Obra 3 */}
                <div className="group">
                  <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video mb-4 flex items-center justify-center text-gray-500 font-mono text-xs">
                    [Obra de Arte - Pintura al Óleo 3]
                  </div>
                  <p className="text-sm font-mono tracking-[0.15em] text-gray-600 uppercase">
                    Transiciones
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Óleo sobre lienzo / 90x70cm / 2024</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA o Cierre */}
        <motion.div
          data-reveal
          data-reveal-delay="440ms"
          className="border-t border-gray-200 pt-12"
        >
          <p className="text-sm text-gray-600 max-w-2xl">
            Si te interesa colaborar, ver mis obras originales, o simplemente conversar 
            sobre diseño, arte y tecnología, no dudes en ponerte en contacto. 
            Siempre abierto a nuevas perspectivas y proyectos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
