import React from "react";
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

export default function HeroBio() {
  const { language } = useLanguage();
  
  return (
    <section id="about" className="py-12 md:py-20 px-4 md:px-12 bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header técnico */}
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <span className="text-[10px] font-mono text-gray-600">02</span>
          <span className="text-[10px] font-mono text-gray-500 tracking-[0.2em] uppercase">
            // PROFILE_PREVIEW
          </span>
        </div>

        {/* Layout compacto: Avatar + Pitch + CTA */}
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          
          {/* Avatar / ID Card Mini - Proporción retrato - TAMAÑO AUMENTADO */}
          <div className="flex-shrink-0">
            <div className="w-40 h-56 md:w-44 md:h-60 border border-white/20 p-1 relative group">
              <img 
                src="/images/about/FOTO BYN.jpg" 
                alt="Mario Lourido" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              {/* Marcas de esquina */}
              <div className="absolute top-1 left-1 w-2 h-2 border-l border-t border-white/30"></div>
              <div className="absolute top-1 right-1 w-2 h-2 border-r border-t border-white/30"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 border-l border-b border-white/30"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 border-r border-b border-white/30"></div>
            </div>
            {/* Serial - Solo visible en desktop */}
            <div className="hidden md:block mt-2 text-[9px] font-mono text-gray-600 text-center tracking-[0.2em]">
              ML-2025-001
            </div>
          </div>

          {/* Elevator Pitch */}
          <div className="flex-1 space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
              {getTranslation(language, 'heroBioTitle')}
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-xl">
              {getTranslation(language, 'heroBioPitch')}
            </p>
            
            {/* Status + Specs rápidos */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-[10px] font-mono text-gray-500 uppercase tracking-wider">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                {language === 'en' ? 'AVAILABLE' : 'DISPONIBLE'}
              </span>
              <span className="text-gray-700">|</span>
              <span>{getTranslation(language, 'aboutLocationValue')}</span>
              <span className="text-gray-700">|</span>
              <span>{getTranslation(language, 'aboutMobilityValue')}</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0">
            <Link
              to="/about"
              className="group inline-flex items-center gap-6 px-8 py-5 border-2 border-white/30 bg-transparent hover:bg-white hover:text-black transition-all duration-150"
            >
              <span className="text-sm md:text-base font-mono tracking-[0.15em] uppercase">
                {language === 'en' ? 'ACCESS BIO' : 'VER PERFIL'}
              </span>
              <span className="text-xl group-hover:translate-x-1 transition-transform duration-150">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
