import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import ImageWithFallback from './figma/ImageWithFallback';

export default function ProjectPage({ project }) {
  useScrollReveal();

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Proyecto no encontrado</p>
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* ===== HERO SECTION - Industrial Raw ===== */}
      <section className="relative h-screen w-full overflow-hidden border-b border-white/10 z-[9999] -mt-20">
        <ImageWithFallback
          src={project.hero.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale"
        />
        
        {/* Technical overlay grid */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)'
             }} 
        />

        {/* Contenido texto */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12">
          {/* Datos técnicos arriba-derecha */}
          <div className="text-right">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-[10px] font-mono text-gray-500 mb-2"
            >
              ROLE: {project.hero.role}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-sm font-mono text-white"
            >
              CLIENT: {project.hero.client}
            </motion.div>
          </div>

          {/* Título abajo-izquierda */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="text-[10px] font-mono text-gray-500 mb-4 tracking-widest">
              PROJECT_DETAIL // {project.category.toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-6xl font-mono font-bold text-white leading-tight tracking-tight">
              {project.title}
            </h1>
            <div className="flex items-center gap-4 text-sm font-mono text-gray-400 mt-4">
              <span>YEAR: {project.year}</span>
              <span className="text-gray-700">|</span>
              <span>STATUS: COMPLETED</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== INTRO SECTION - Industrial Raw ===== */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-black border-b border-white/10">
        <div className="max-w-3xl mx-auto">
          {/* Hook */}
          <motion.p
            data-reveal
            className="text-xl md:text-2xl font-mono text-gray-200 mb-12 leading-relaxed"
          >
            {project.intro.hook}
          </motion.p>

          {/* Challenge */}
          <div data-reveal className="mb-12 border-l border-white/20 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-gray-600">SEC_01</span>
              <span className="text-gray-700">—</span>
              <span className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase">El Desafío</span>
            </div>
            <p className="text-base text-gray-400 leading-relaxed font-mono">
              {project.intro.challenge}
            </p>
          </div>

          {/* Process */}
          <div data-reveal className="border-l border-white/20 pl-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[10px] font-mono text-gray-600">SEC_02</span>
              <span className="text-gray-700">—</span>
              <span className="text-sm font-mono tracking-[0.3em] text-gray-500 uppercase">Proceso & Ingeniería</span>
            </div>
            <p className="text-base text-gray-400 leading-relaxed font-mono">
              {project.intro.process}
            </p>
          </div>
        </div>
      </section>

      {/* ===== GALLERY SECTION (BENTO BOX) - Industrial Raw ===== */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="py-20 md:py-32 px-0 md:px-0 bg-gray-950 border-b border-white/10">
          <div className="max-w-full mx-auto px-6 md:px-12 mb-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">GALLERY_MODULE</span>
                <span className="text-gray-700">+</span>
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">[VISUAL_DOCUMENTATION]</span>
              </div>
              <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">{project.gallery.length} ITEMS</span>
            </div>
          </div>
          <div className="space-y-8">
            {/* Foto 1 - Full-bleed 16:9 */}
            <motion.div data-reveal className="group relative z-[9999]">
              <div className="bg-gray-800 border-y border-white/10 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src={project.gallery?.[0]?.image || '/placeholder-16-9.jpg'}
                  alt={project.gallery?.[0]?.title || 'Project Image 1'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-75"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between mt-4 px-6 md:px-12">
                <span className="text-sm font-mono text-gray-400 uppercase tracking-wide">
                  {project.gallery?.[0]?.title || 'Process Overview'}
                </span>
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">IMG_01</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 px-6 md:px-12 font-mono">
                {project.gallery?.[0]?.description || 'Detailed view of the design process'}
              </p>
            </motion.div>

            {/* Foto 2 - Full-bleed 16:9 */}
            <motion.div data-reveal className="group relative z-[9999]">
              <div className="bg-gray-800 border-y border-white/10 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src={project.gallery?.[1]?.image || '/placeholder-16-9.jpg'}
                  alt={project.gallery?.[1]?.title || 'Project Image 2'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-75"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between mt-4 px-6 md:px-12">
                <span className="text-sm font-mono text-gray-400 uppercase tracking-wide">
                  {project.gallery?.[1]?.title || 'Technical Details'}
                </span>
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">IMG_02</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 px-6 md:px-12 font-mono">
                {project.gallery?.[1]?.description || 'Engineering specifications and components'}
              </p>
            </motion.div>

            {/* Foto 3 - Full-bleed 16:9 */}
            <motion.div data-reveal className="group relative z-[9999]">
              <div className="bg-gray-800 border-y border-white/10 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <ImageWithFallback
                  src={project.gallery?.[2]?.image || '/placeholder-16-9.jpg'}
                  alt={project.gallery?.[2]?.title || 'Project Image 3'}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-75"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between mt-4 px-6 md:px-12">
                <span className="text-sm font-mono text-gray-400 uppercase tracking-wide">
                  {project.gallery?.[2]?.title || 'Final Result'}
                </span>
                <span className="text-[10px] font-mono text-gray-600 uppercase tracking-wider">IMG_03</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 px-6 md:px-12 font-mono">
                {project.gallery?.[2]?.description || 'Implementation and final product'}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== FEATURES SECTION ===== */}
      {project.features && (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
              {Object.values(project.features).map((feature, index) => (
                <motion.div key={index} data-reveal data-reveal-delay={`${index * 80}ms`}>
                  <h3 className="text-xl md:text-2xl font-serif text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== DARK SECTION (UX/UI o similar) ===== */}
      {project.darkSection && (
        <section className="py-20 md:py-32 px-6 md:px-12" style={{ backgroundColor: '#111111' }}>
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <motion.h2
                data-reveal
                className="text-4xl md:text-5xl font-serif mb-6 text-white"
              >
                {project.darkSection.title}
              </motion.h2>
              <motion.p
                data-reveal
                data-reveal-delay="80ms"
                className="text-lg leading-relaxed max-w-3xl text-gray-200"
              >
                {project.darkSection.description}
              </motion.p>
            </div>

            {/* Imágenes en dark section */}
            <div className="grid grid-cols-1 gap-8">
              {project.darkSection.images?.map((image, index) => (
                <motion.div
                  key={index}
                  data-reveal
                  data-reveal-delay={`${80 + index * 80}ms`}
                  className="rounded-lg overflow-hidden"
                  style={{ backgroundColor: '#222222' }}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`Dark section image ${index + 1}`}
                    className="w-full aspect-video md:aspect-[16/9] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== VIDEO SECTION - Formato 19:6 ===== */}
      {project.video && (
        <section className="py-20 md:py-32 px-6 md:px-12 bg-black border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[10px] font-mono text-gray-500">VIDEO_MODULE</span>
              <span className="text-gray-700">+</span>
              <span className="text-[10px] font-mono text-gray-600">[MOTION_DOCUMENTATION]</span>
            </div>
            <motion.div data-reveal className="w-full">
              <div className="bg-gray-800 border border-white/20 overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <video
                  width="100%"
                  height="100%"
                  controls
                  poster={project.video.poster || "/images/projects/video-poster.jpg"}
                  className="w-full h-full object-cover"
                >
                  <source src={project.video.url} type="video/mp4" />
                  Tu navegador no soporta video HTML5.
                </video>
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-mono text-gray-400 uppercase">
                  {project.video.title || 'Project Demonstration'}
                </span>
                <span className="text-[10px] font-mono text-gray-600">VID_01</span>
              </div>
              <p className="text-xs text-gray-500 mt-2 font-mono">
                {project.video.description || 'Interactive demonstration of the final product'}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ===== NEXT PROJECT NAVIGATION ===== */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Volver al índice */}
            <a
              href="/#work"
              className="group flex items-center gap-3 text-gray-500 hover:text-black transition-colors duration-75"
            >
              <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-1 transition-transform duration-75" />
              <div>
                <p className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase mb-1">
                  BACK_TO
                </p>
                <p className="text-base font-mono font-medium uppercase">Índice de Proyectos</p>
              </div>
            </a>

            {/* Siguiente proyecto */}
            {project.nextProject && (
              <a
                href={`/project/${project.nextProject.slug}`}
                className="group flex items-center gap-4 text-gray-900 hover:text-gray-600 transition-colors duration-75"
              >
                <div className="text-right">
                  <p className="text-[10px] font-mono tracking-[0.2em] text-gray-400 uppercase mb-1">
                    NEXT_PROJECT
                  </p>
                  <p className="text-xl md:text-2xl font-serif">{project.nextProject.title}</p>
                  <p className="text-sm font-mono text-gray-500 mt-1 uppercase tracking-wide">{project.nextProject.tag}</p>
                </div>
                <ChevronRight className="w-8 h-8 group-hover:translate-x-2 transition-transform duration-75" />
              </a>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
