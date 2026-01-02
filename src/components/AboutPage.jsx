import React, { useEffect, useState } from "react";
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import Header from './Header';
import TechStackHUD from './TechStackHUD';
import ContinuousLearning from './ContinuousLearning';
import Contact from './Contact';
import { useScrollReveal } from '../hooks/useScrollReveal';
import HoverFocusOverlay from './HoverFocusOverlay';

export default function AboutPage() {
  const { language } = useLanguage();
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);
  useScrollReveal();
  
  // Scroll to top on mount - usar useLayoutEffect para que sea instantáneo antes del paint
  useEffect(() => {
    // Scroll instantáneo sin animación
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero de la página About */}
      <section className="pt-32 pb-16 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb técnico */}
          <div className="flex items-center gap-3 mb-8 text-[10px] font-mono text-gray-500 tracking-wider">
            <a href="/" className="hover:text-white transition-colors">HOME</a>
            <span>/</span>
            <span className="text-white">ABOUT</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            {language === 'en' ? 'PROFILE' : 'PERFIL'}
            <span className="text-gray-600">_</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
            {getTranslation(language, 'aboutPageIntro')}
          </p>
        </div>
      </section>

      {/* Bloque Principal: CV y Experiencia */}
      <section className="py-20 px-6 md:px-12 border-b border-white/10">
        <div className="max-w-6xl mx-auto">
          
          {/* Grid: Foto + Info Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-[300px,1fr] gap-12 lg:gap-20">
            
            {/* Columna Izquierda: ID Card */}
            <div>
              <div className="border border-white/20 p-2 sticky top-28">
                <div 
                  className="aspect-[3/4] bg-neutral-900 overflow-hidden relative group"
                  onMouseEnter={() => setIsPhotoHovered(true)}
                  onMouseLeave={() => setIsPhotoHovered(false)}
                >
                  {/* HoverFocusOverlay animation */}
                  <HoverFocusOverlay isHovered={isPhotoHovered} />
                  
                  {/* Marcas de registro */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l border-t border-white/30 z-10"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-r border-t border-white/30 z-10"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-l border-b border-white/30 z-10"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r border-b border-white/30 z-10"></div>
                  
                  <img 
                    src="/images/about/FOTO BYN.jpg" 
                    alt="Mario Lourido" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                
                {/* Número de serie */}
                <div className="bg-white/5 py-3 px-4 mt-2 flex justify-between items-center">
                  <span className="text-[10px] font-mono text-gray-500">SN_</span>
                  <span className="text-sm font-mono tracking-[0.3em] text-white">ML-2025-001</span>
                </div>
                
                {/* Quick Specs */}
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm font-mono py-2 border-b border-white/5">
                    <span className="text-gray-500">{getTranslation(language, 'aboutLocation')}</span>
                    <span className="text-white">{getTranslation(language, 'aboutLocationValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono py-2 border-b border-white/5">
                    <span className="text-gray-500">{getTranslation(language, 'aboutLanguages')}</span>
                    <span className="text-white">{getTranslation(language, 'aboutLanguagesValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono py-2 border-b border-white/5">
                    <span className="text-gray-500">{getTranslation(language, 'aboutMobility')}</span>
                    <span className="text-white">{getTranslation(language, 'aboutMobilityValue')}</span>
                  </div>
                  <div className="flex justify-between text-sm font-mono py-2">
                    <span className="text-gray-500">STATUS</span>
                    <span className="text-green-400 flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      AVAILABLE
                    </span>
                  </div>
                </div>
                
                {/* Download CV */}
                <a
                  href="/JUN25_LouridoRegueiraMario_13_Curriculum_MODIFICADO.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full flex items-center justify-center gap-3 py-3 border border-white/20 text-sm font-mono tracking-wider hover:bg-white hover:text-black transition-all duration-150"
                >
                  <span>↓</span>
                  {getTranslation(language, 'aboutDownloadCV')}
                </a>
              </div>
            </div>

            {/* Columna Derecha: Contenido Principal */}
            <div className="space-y-16">
              
              {/* SEC 01: BIO */}
              <div data-reveal>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <span className="text-3xl font-bold text-white">01</span>
                  <span className="text-sm font-mono text-gray-400 tracking-[0.2em] uppercase">
                    {language === 'en' ? 'OVERVIEW' : 'RESUMEN'}
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight leading-tight">
                  {getTranslation(language, 'aboutBioTitle')}
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  {getTranslation(language, 'aboutBioContent')}
                </p>
              </div>

              {/* SEC 02: EXPERIENCIA */}
              <div data-reveal>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <span className="text-3xl font-bold text-white">02</span>
                  <span className="text-sm font-mono text-gray-400 tracking-[0.2em] uppercase">
                    {getTranslation(language, 'aboutExperienceTitle')}
                  </span>
                </div>
                
                {/* Bloque de experiencia destacado */}
                <div className="border-l-2 border-white/30 pl-8 py-4 relative">
                  
                  {/* Logo Navantia en el margen derecho - Aumentado y más alejado */}
                  <div className="hidden lg:block absolute -right-[500px] xl:-right-[400px] top-5 w-80 xl:w-96">
                    <div className="border border-white/20 p-4 bg-neutral-900">
                      <img 
                        src="/images/about/navantia-logo.png?v=1340"
                        alt="Navantia S.A. S.M.E."
                        className="w-full h-auto opacity-90"
                      />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      {getTranslation(language, 'aboutCompany')}
                    </h3>
                    <span className="text-sm font-mono text-gray-500 uppercase tracking-widest mt-2 md:mt-0">
                      2024 — PRESENT
                    </span>
                  </div>
                  
                  <p className="text-lg text-gray-400 mb-2 font-medium">
                    {getTranslation(language, 'aboutCompanyRole')}
                  </p>
                  
                  <div className="text-base text-gray-400 leading-relaxed space-y-4 mt-6">
                    <p dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutCompanyDesc1') }} />
                  </div>
                  
                  {/* Proyecto destacado */}
                  <div className="mt-8 bg-white/5 p-6 border-l-2 border-white/50">
                    <span className="text-xs font-mono text-gray-500 tracking-[0.2em] uppercase block mb-3">
                      PROJECT_HIGHLIGHT
                    </span>
                    <h4 className="text-xl font-bold text-white mb-3">
                      {getTranslation(language, 'aboutProjectTitle')}
                    </h4>
                    <p className="text-base text-gray-400" dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutProjectDesc') }} />
                  </div>
                </div>
              </div>

              {/* SEC 03: COMPETENCIES - REDESIGNED WITH MORE PROMINENCE */}
              <div data-reveal className="my-16">
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <span className="text-3xl font-bold text-white">03</span>
                  <span className="text-sm font-mono text-gray-400 tracking-[0.2em] uppercase">
                    {language === 'en' ? 'COMPETENCIES' : 'COMPETENCIAS'}
                  </span>
                </div>
                
                {/* Enhanced Grid Layout */}
                <div className="space-y-12">
                  {/* Technical Skills - Full Width with Enhanced Design */}
                  <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 p-8 rounded-sm">
                    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/20">
                      <span className="text-3xl font-mono font-bold text-white">01</span>
                      <h4 className="text-xl md:text-2xl font-mono font-bold text-white uppercase tracking-wide">
                        {getTranslation(language, 'aboutSkillsTitle')}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200">
                          <span className="text-lg font-mono text-white/40 font-bold min-w-[2rem]">0{i}</span>
                          <span className="text-lg text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: getTranslation(language, `aboutSkill${i}`) }} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Soft Skills - Full Width with Enhanced Design */}
                  <div className="bg-gradient-to-r from-white/5 to-transparent border border-white/10 p-8 rounded-sm">
                    <div className="flex items-center gap-4 mb-8 pb-4 border-b border-white/20">
                      <span className="text-3xl font-mono font-bold text-white">02</span>
                      <h4 className="text-xl md:text-2xl font-mono font-bold text-white uppercase tracking-wide">
                        {getTranslation(language, 'aboutSoftSkillsTitle')}
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[1,2,3,4,5,6].map((i) => (
                        <div key={i} className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200">
                          <span className="text-lg font-mono text-white/40 font-bold min-w-[2rem]">0{i}</span>
                          <span className="text-lg text-gray-200 leading-relaxed" dangerouslySetInnerHTML={{ __html: getTranslation(language, `aboutSoftSkill${i}`) }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* SEC 04: EDUCACIÓN */}
              <div data-reveal>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <span className="text-3xl font-bold text-white">04</span>
                  <span className="text-sm font-mono text-gray-400 tracking-[0.2em] uppercase">
                    {getTranslation(language, 'aboutEducationTitle')}
                  </span>
                </div>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline py-4 border-b border-white/10 group">
                    <a 
                      href="https://estudos.udc.es/es/study/detail/4555v01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors hover:underline"
                    >
                      {getTranslation(language, 'aboutEducation1')}
                    </a>
                    <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0">
                      {getTranslation(language, 'aboutEducation1Date')}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-baseline py-4 border-b border-white/10 group">
                    <a 
                      href="https://estudos.udc.es/es/study/detail/771g01v01"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors hover:underline"
                    >
                      {getTranslation(language, 'aboutEducation2')}
                    </a>
                    <span className="text-sm font-mono text-gray-500 mt-2 md:mt-0">
                      {getTranslation(language, 'aboutEducation2Date')}
                    </span>
                  </div>
                </div>
              </div>

              {/* SEC 05: PREMIOS Y RECONOCIMIENTOS */}
              <div data-reveal>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-white/10">
                  <span className="text-3xl font-bold text-white">05</span>
                  <span className="text-sm font-mono text-gray-400 tracking-[0.2em] uppercase">
                    {getTranslation(language, 'aboutAwardsTitle')}
                  </span>
                </div>
                
                <div className="border border-white/10 p-6">
                  <div className="flex flex-col space-y-4">
                    <h4 className="text-xl font-bold text-gray-200 group-hover:text-white transition-colors">
                      {getTranslation(language, 'aboutAward1Title')}
                    </h4>
                    <p className="text-base text-gray-400 leading-relaxed">
                      {getTranslation(language, 'aboutAward1Description')}
                    </p>
                    <span className="text-sm font-mono text-gray-500">
                      2025 | Navantia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack HUD - Iron Man Style */}
      <TechStackHUD />

      {/* Continuous Learning - Importado sin cambios */}
      <ContinuousLearning />

      {/* Contact - Duplicado al final */}
      <Contact />
    </div>
  );
}
