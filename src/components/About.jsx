import React from "react";
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';
import HoverFocusOverlay from './HoverFocusOverlay';

export default function About() {
  const { language } = useLanguage();
  return (
    <section id="about" className="py-16 md:py-24 px-4 md:px-12 bg-black text-white border-t border-white/10 overflow-x-hidden">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header técnico estilo ficha */}
        <div className="flex items-center justify-between mb-8 md:mb-12 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 md:gap-4 min-w-0">
            <span className="text-[9px] md:text-[10px] font-mono text-gray-500 whitespace-nowrap">02 // PROFILE</span>
            <span className="text-gray-700 hidden md:inline">+</span>
            <span className="text-[9px] md:text-[10px] font-mono text-gray-700 hidden md:inline">[FICHA_TÉCNICA]</span>
          </div>
          <span className="text-[9px] md:text-[10px] font-mono text-gray-700 whitespace-nowrap">REV.2025</span>
        </div>

        {/* Layout Principal: Grid de 2 columnas */}
        <div className="md:grid md:grid-cols-[0.4fr,0.6fr] md:gap-12 lg:gap-16 gap-8">
          
          {/* --- COLUMNA IZQUIERDA: ID Card Style --- */}
          <div className="mb-8 md:mb-0">
            {/* Contenedor tipo ID card */}
            <div className="border border-white/20 p-1">
              {/* Foto con marco técnico - Aumentada */}
              <HoverFocusOverlay>
                <div
                  data-reveal
                  data-reveal-delay="80ms"
                  className="aspect-[3/4] w-full min-h-[50vh] md:min-h-[60vh] lg:min-h-[70vh] bg-neutral-900 overflow-hidden relative"
                >
                  {/* Marcas de registro en esquinas */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-white/30 z-10"></div>
                  <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-white/30 z-10"></div>
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-white/30 z-10"></div>
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-white/30 z-10"></div>
                  
                  {/* Imagen real */}
                  <img 
                  src="/images/about/FOTO BYN.jpg" 
                  alt="Mario Lourido" 
                  className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-300" 
                  onLoad={(e) => e.target.classList.remove('opacity-0')}
                />
                </div>
              </HoverFocusOverlay>
              
              {/* Número de serie */}
              <div className="bg-white/5 py-2 px-3 mt-1 flex justify-between items-center">
                <span className="text-[9px] font-mono text-gray-600">SN_</span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-white">ML-2025-001</span>
              </div>
            </div>

            {/* Datos técnicos tipo spec sheet */}
            <div
              data-reveal
              data-reveal-delay="140ms"
              className="mt-6 border border-white/10"
            >
              <div className="bg-white/5 px-3 py-2 border-b border-white/10">
                <span className="text-[9px] font-mono text-gray-600 tracking-widest">SPECIFICATIONS</span>
              </div>
              <dl className="divide-y divide-white/5">
                <div className="flex justify-between px-3 py-2">
                  <dt className="text-sm font-mono text-gray-600">{getTranslation(language, 'aboutLocation')}</dt>
                  <dd className="text-sm font-mono text-white tracking-wide">{getTranslation(language, 'aboutLocationValue')}</dd>
                </div>
                <div className="flex justify-between px-3 py-2">
                  <dt className="text-sm font-mono text-gray-600">{getTranslation(language, 'aboutLanguages')}</dt>
                  <dd className="text-sm font-mono text-white tracking-wide">{getTranslation(language, 'aboutLanguagesValue')}</dd>
                </div>
                <div className="flex justify-between px-3 py-2">
                  <dt className="text-sm font-mono text-gray-600">{getTranslation(language, 'aboutMobility')}</dt>
                  <dd className="text-sm font-mono text-white tracking-wide">{getTranslation(language, 'aboutMobilityValue')}</dd>
                </div>
                <div className="flex justify-between px-3 py-2">
                  <dt className="text-sm font-mono text-gray-500">STATUS</dt>
                  <dd className="text-sm font-mono text-green-400 tracking-wide">● AVAILABLE</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: Contenido Textual --- */}
          <div className="space-y-10">
            
            {/* 1. INTRODUCCIÓN BIO */}
            <div className="border-l border-white/20 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-gray-600">SEC_01</span>
                <span className="text-gray-700">—</span>
                <span className="text-sm font-mono text-gray-500 tracking-widest">OVERVIEW</span>
              </div>
              <h2
                data-reveal
                data-reveal-delay="100ms"
                className="text-2xl md:text-3xl font-mono font-bold mb-6 tracking-tight text-white"
              >
                {getTranslation(language, 'aboutBioTitle')}
              </h2>

              <p
                data-reveal
                data-reveal-delay="160ms"
                className="text-sm md:text-base text-gray-400 leading-relaxed font-mono"
              >
                {getTranslation(language, 'aboutBioContent')}
              </p>
            </div>

            {/* 2. EXPERIENCIA PROFESIONAL */}
            <div data-reveal data-reveal-delay="200ms" className="border-l border-white/20 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-gray-600">SEC_02</span>
                <span className="text-gray-700">—</span>
                <span className="text-sm font-mono text-gray-500 tracking-widest">{getTranslation(language, 'aboutExperienceTitle')}</span>
              </div>
              
              <div className="group">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                  <h4 className="text-lg font-mono font-bold text-white">{getTranslation(language, 'aboutCompany')}</h4>
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mt-1 md:mt-0">
                    {getTranslation(language, 'aboutCompanyRole')}
                  </span>
                </div>
                
                <div className="text-sm text-gray-400 space-y-4 font-mono leading-relaxed">
                  <p dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutCompanyDesc1') }} />
                  
                  <div className="bg-white/5 p-4 border-l-2 border-white/30">
                    <span className="block text-xs font-mono text-gray-500 mb-2 tracking-widest">
                      PROJECT_HIGHLIGHT
                    </span>
                    <span className="block text-sm font-bold text-white mb-1 font-mono">
                      {getTranslation(language, 'aboutProjectTitle')}
                    </span>
                    <p className="text-xs text-gray-500" dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutProjectDesc') }} />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. CONOCIMIENTOS Y SOFT SKILLS */}
            <div data-reveal data-reveal-delay="220ms" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Conocimientos Técnicos */}
                <div className="border border-white/10 p-4">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                      <span className="text-sm font-mono text-gray-500 tracking-widest">
                          {getTranslation(language, 'aboutSkillsTitle')}
                      </span>
                      <span className="text-[9px] font-mono text-gray-600">6 ITEMS</span>
                    </div>
                    <ul className="space-y-2 text-xs text-gray-400 font-mono">
                        <li className="flex items-center gap-2"><span className="text-gray-600">01.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSkill1') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">02.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSkill2') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">03.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSkill3') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">04.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSkill4') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">05.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSkill5') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">06.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSkill6') }} /></li>
                    </ul>
                </div>

                {/* Soft Skills */}
                <div className="border border-white/10 p-4">
                    <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/10">
                      <span className="text-sm font-mono text-gray-500 tracking-widest">
                          {getTranslation(language, 'aboutSoftSkillsTitle')}
                      </span>
                      <span className="text-[9px] font-mono text-gray-600">6 ITEMS</span>
                    </div>
                    <ul className="space-y-2 text-xs text-gray-400 font-mono">
                        <li className="flex items-center gap-2"><span className="text-gray-600">01.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSoftSkill1') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">02.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSoftSkill2') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">03.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSoftSkill3') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">04.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSoftSkill4') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">05.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSoftSkill5') }} /></li>
                        <li className="flex items-center gap-2"><span className="text-gray-600">06.</span> <span dangerouslySetInnerHTML={{ __html: getTranslation(language, 'aboutSoftSkill6') }} /></li>
                    </ul>
                </div>
            </div>

            {/* 4. EDUCACIÓN */}
            <div data-reveal data-reveal-delay="240ms" className="border-l border-white/20 pl-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-mono text-gray-600">SEC_03</span>
                <span className="text-gray-700">—</span>
                <span className="text-sm font-mono text-gray-500 tracking-widest">{getTranslation(language, 'aboutEducationTitle')}</span>
              </div>
              <ul className="space-y-3">
                <li className="flex justify-between items-start border-b border-white/5 pb-3 group">
                  <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors duration-75">
                    {getTranslation(language, 'aboutEducation1')}
                  </span>
                  <span className="text-[10px] font-mono text-gray-600 whitespace-nowrap ml-4">{getTranslation(language, 'aboutEducation1Date')}</span>
                </li>
                <li className="flex justify-between items-start group">
                  <span className="text-sm font-mono text-gray-300 group-hover:text-white transition-colors duration-75">
                    {getTranslation(language, 'aboutEducation2')}
                  </span>
                  <span className="text-[10px] font-mono text-gray-600 whitespace-nowrap ml-4">{getTranslation(language, 'aboutEducation2Date')}</span>
                </li>
              </ul>
            </div>

            {/* 5. BOTÓN DE DESCARGA */}
            <div
              data-reveal
              data-reveal-delay="300ms"
              className="pt-4 flex"
            >
              <a
                href="/JUN25_LouridoRegueiraMario_13_Curriculum_MODIFICADO.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase bg-transparent hover:border-white hover:bg-white hover:text-black transition-all duration-75"
              >
                <span className="text-gray-500 group-hover:text-black">↓</span>
                {getTranslation(language, 'aboutDownloadCV')}
                <span className="text-gray-600 group-hover:text-black">.PDF</span>
              </a>
            </div>

          </div>
        </div>
        
        {/* Footer técnico */}
        <div className="mt-16 pt-4 border-t border-white/5 flex justify-between text-[9px] font-mono text-gray-700">
          <span>DOC_PROFILE_V2.0</span>
          <span>LAST_UPDATE: 2025</span>
        </div>
      </div>
    </section>
  );
}