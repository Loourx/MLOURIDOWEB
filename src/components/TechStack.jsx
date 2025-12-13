import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';



// DATOS ENRIQUECIDOS DE LAS HERRAMIENTAS

// Aquí definimos qué sale en el popup de cada una

const techData = {

  // 1. Research & Strategy

  Px: {

    name: "Perplexity AI",

    company: "Perplexity",

    role: "Research Engine",

    desc: "Búsqueda semántica y síntesis de fuentes para investigación de mercado acelerada."

  },

  GPT: {

    name: "ChatGPT-4o",

    company: "OpenAI",

    role: "Reasoning & Synthesis",

    desc: "Análisis de datos cualitativos, redacción técnica y estructuración estratégica."

  },

  Ge: { // Usado para Reasoning

    name: "Gemini 3 Pro",

    company: "Google DeepMind",

    role: "Multimodal AI",

    desc: "Procesamiento de grandes contextos y análisis lógico complejo."

  },

  Mi: {

    name: "Miro",

    company: "Miro",

    role: "Visual Collaboration",

    desc: "Mapas mentales, cronogramas y diagramas de flujo para gestión de proyectos."

  },

  // 2. Visual Generation

  Vz: {

    name: "Vizcom AI",

    company: "Vizcom",

    role: "Generative Rendering",

    desc: "Visualización rápida de bocetos (Sketch-to-Render) para iteración conceptual."

  },

  GeImg: { // Usado para Gemini Image (ID único)

    name: "Imagen 3 / Gemini",

    company: "Google DeepMind",

    role: "Image Generation",

    desc: "Generación de moodboards y exploración visual fotorrealista."

  },

  Ai: {

    name: "Adobe Illustrator",

    company: "Adobe Inc.",

    role: "Vector Graphics",

    desc: "Diseño de diagramas técnicos, iconografía y planimetría vectorial."

  },

  Ps: {

    name: "Adobe Photoshop",

    company: "Adobe Inc.",

    role: "Digital Imaging",

    desc: "Post-procesado de renders, retoque digital y composición visual."

  },

  // 3. Development & Engineering

  Cur: {

    name: "Cursor AI",

    company: "Cursor",

    role: "Code Editor",

    desc: "Desarrollo web asistido por IA para prototipado digital rápido."

  },

  Sw: {

    name: "SolidWorks",

    company: "Dassault Systèmes",

    role: "CAD Engineering",

    desc: "Modelado paramétrico 3D, ensamblajes complejos y validación técnica."

  },

  Fi: {

    name: "Figma",

    company: "Figma",

    role: "Interface Design",

    desc: "Diseño de interfaces (UI/UX), sistemas de diseño y prototipado interactivo."

  },

  Id: {

    name: "Adobe InDesign",

    company: "Adobe Inc.",

    role: "Editorial Design",

    desc: "Maquetación de memorias técnicas, dossiers de proyecto y portfolios."

  }

};



// Componente de Icono Orbital Reactivo con Popup

const OrbitalBadge = ({ id, initials, label }) => {

  // Estado local para manejar el hover en este componente específico

  const [isHovered, setIsHovered] = useState(false);

 

  // Datos específicos de esta herramienta

  const info = techData[id] || { name: label, company: "Tech Tool", role: "Utility", desc: "Herramienta profesional." };



  return (

    // Contenedor Principal: relative para posicionar el popup

    <div

      className="group relative flex flex-col items-center justify-center cursor-pointer"

      onMouseEnter={() => setIsHovered(true)}

      onMouseLeave={() => setIsHovered(false)}

    >

     

      {/* POPUP FLOTANTE (FICHA TÉCNICA) - Estilo Industrial Raw */}

      <div

        className={`

          absolute z-[100] p-4 sm:p-5 md:p-6

          bg-black border border-white/20 shadow-xl

          transform transition-all duration-100 ease-out

          w-64 sm:w-72 md:w-80

          top-full mt-3

          -translate-x-1/2 left-1/2

          ${isHovered ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}

        `}

      >

        {/* Cabecera del Popup */}

        <div className="border-b border-white/10 pb-3 mb-3">

          <h4 className="font-mono text-base md:text-lg text-white leading-tight mb-2">{info.name}</h4>

          <div className="flex justify-between items-center text-[11px] uppercase tracking-wider text-gray-200 font-mono">

            <span>{info.company}</span>

            <span className="text-gray-300">{info.role}</span>

          </div>

        </div>

        {/* Cuerpo del Popup */}

        <p className="font-mono text-xs md:text-sm text-gray-300 leading-relaxed">

          {info.desc}

        </p>

       
        {/* Flecha decorativa desde arriba - tema oscuro */}

        <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-black border-t border-l border-white/20 rotate-45 transform"></div>

      </div>





      {/* ICONO ORBITAL (Escala x1.75 en hover) */}

      <div className="relative flex items-center justify-center w-24 h-24 md:w-32 md:h-32 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.75] group-hover:z-50">

       

        {/* Sistema de Anillos SVG - Colores adaptados a tema oscuro */}

        <svg

          className="absolute inset-0 w-full h-full overflow-visible pointer-events-none"

          viewBox="0 0 100 100"

        >

          {/* CÍRCULO EXTERIOR */}

          <circle

            cx="50"

            cy="50"

            r="48"

            fill="none"

            stroke="currentColor"

            strokeWidth="3"

            strokeLinecap="square"

            strokeDasharray="230 100"

            strokeDashoffset="35"

            className="text-gray-700 transition-all duration-700 ease-out origin-center group-hover:text-white group-hover:stroke-[1] group-hover:animate-[spin_6s_linear_infinite]"

          />

         

          {/* CÍRCULO INTERIOR */}

          <circle

            cx="50"

            cy="50"

            r="36"

            fill="none"

            stroke="currentColor"

            strokeWidth="3"

            strokeLinecap="square"

            strokeDasharray="160 80"

            strokeDashoffset="-20"

            className="text-gray-600 transition-all duration-700 ease-out origin-center group-hover:text-gray-400 group-hover:stroke-[1] group-hover:animate-[spin_5s_linear_infinite_reverse]"

          />

        </svg>



        {/* Iniciales Centrales */}

        <span className="font-mono text-3xl md:text-4xl font-bold text-gray-500 transition-colors duration-300 group-hover:text-white">

          {initials}

        </span>

      </div>



      {/* Etiqueta Inferior - Estilo Industrial Raw */}

      <p className="mt-4 font-mono text-xs tracking-[0.2em] text-gray-600 uppercase transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:text-white group-hover:tracking-[0.1em] group-hover:translate-y-12 text-center whitespace-nowrap">

        {label}

      </p>

    </div>

  );

};



export default function TechStack() {
  const { language } = useLanguage();

  return (
    <section
      id="tech"
      className="py-32 px-6 md:px-12 bg-black text-white border-t border-white/10 overflow-visible"
    >
      <div className="max-w-screen-2xl mx-auto">
       
        {/* CABECERA DE SECCIÓN - Estilo Industrial Raw */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-[10px] font-mono text-gray-500">03 // TECH_ARSENAL</span>
              <span className="text-gray-800">+</span>
              <span className="text-[10px] font-mono text-gray-700">[HERRAMIENTAS_ACTIVAS]</span>
            </div>
            <span className="text-[10px] font-mono text-gray-700 hidden md:block">12 TOOLS</span>
          </div>
         
          <h2 className="text-3xl md:text-5xl font-mono font-bold tracking-tight mb-6 text-white">
            {getTranslation(language, 'techStackTitle')}
          </h2>
         
          <p className="text-sm md:text-base text-gray-300 leading-relaxed font-mono max-w-3xl">
            {getTranslation(language, 'techStackDescription')}
          </p>
        </div>



        {/* GRID DE ICONOS ORBITALES (3 Columnas) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-32">
         
          {/* 1. RESEARCH & STRATEGY */}
          <div className="flex flex-col items-center gap-12 border border-white/10 p-6">
            <div className="w-full border-b border-white/10 pb-4 flex items-center justify-between">
              <h3 className="font-mono text-base uppercase tracking-[0.2em] text-gray-300">
                {getTranslation(language, 'techStackCategory1')}
              </h3>
              <span className="text-[9px] font-mono text-gray-800">01</span>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-20 place-items-center w-full">
                <OrbitalBadge id="Px" initials="Px" label="Perplexity" />
                <OrbitalBadge id="GPT" initials="GPT" label="ChatGPT" />
                <OrbitalBadge id="Ge" initials="Ge" label="Gemini (R)" />
                <OrbitalBadge id="Mi" initials="Mi" label="Miro" />
            </div>
          </div>

          {/* 2. VISUAL GENERATION */}
          <div className="flex flex-col items-center gap-12 border border-white/10 p-6">
            <div className="w-full border-b border-white/10 pb-4 flex items-center justify-between">
              <h3 className="font-mono text-base uppercase tracking-[0.2em] text-gray-300">
                {getTranslation(language, 'techStackCategory2')}
              </h3>
              <span className="text-[9px] font-mono text-gray-800">02</span>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-20 place-items-center w-full">
                <OrbitalBadge id="Vz" initials="Vz" label="Vizcom AI" />
                <OrbitalBadge id="GeImg" initials="Ge" label="Gemini (Img)" />
                <OrbitalBadge id="Ai" initials="Ai" label="Illustrator" />
                <OrbitalBadge id="Ps" initials="Ps" label="Photoshop" />
            </div>
          </div>

          {/* 3. DEVELOPMENT & ENGINEERING */}
          <div className="flex flex-col items-center gap-12 border border-white/10 p-6">
            <div className="w-full border-b border-white/10 pb-4 flex items-center justify-between">
              <h3 className="font-mono text-base uppercase tracking-[0.2em] text-gray-300">
                {getTranslation(language, 'techStackCategory3')}
              </h3>
              <span className="text-[9px] font-mono text-gray-800">03</span>
            </div>
            <div className="grid grid-cols-2 gap-x-12 gap-y-20 place-items-center w-full">
                <OrbitalBadge id="Cur" initials="Cur" label="Cursor AI" />
                <OrbitalBadge id="Sw" initials="Sw" label="SolidWorks" />
                <OrbitalBadge id="Fi" initials="Fi" label="Figma" />
                <OrbitalBadge id="Id" initials="Id" label="InDesign" />
            </div>
          </div>
        </div>



        {/* CERTIFICACIONES OFICIALES */}
        <div className="mt-20 pt-12 border-t border-white/10 w-full">
          <div className="flex items-center gap-4 mb-12">
            <span className="text-[10px] font-mono text-gray-700">CERT_MODULE</span>
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-[10px] font-mono text-gray-700">VERIFIED</span>
          </div>
         
          <h3 className="font-mono text-lg md:text-xl uppercase tracking-[0.2em] text-gray-500 mb-16 text-center">
            {getTranslation(language, 'certificationsTitle')}
          </h3>
         
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 text-center">
           
            {/* Certificado 1 */}
            <div className="group flex flex-col items-center cursor-default transition-transform duration-75 hover:scale-105">
              <span className="font-mono text-4xl md:text-6xl font-bold text-gray-700 group-hover:text-white transition-colors duration-75">
                CSWA
              </span>
              <span className="block mt-4 font-mono text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors duration-75">
                Mechanical Design
              </span>
            </div>

            {/* Certificado 2 */}
            <div className="group flex flex-col items-center cursor-default transition-transform duration-75 hover:scale-105">
              <span className="font-mono text-4xl md:text-6xl font-bold text-gray-700 group-hover:text-white transition-colors duration-75">
                CSWP
              </span>
              <span className="block mt-4 font-mono text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors duration-75">
                Professional Design
              </span>
            </div>

            {/* Certificado 3 */}
            <div className="group flex flex-col items-center cursor-default transition-transform duration-75 hover:scale-105">
              <span className="font-mono text-4xl md:text-6xl font-bold text-gray-700 group-hover:text-white transition-colors duration-75">
                CSWP-SU
              </span>
              <span className="block mt-4 font-mono text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-gray-400 transition-colors duration-75">
                Surfacing Expert
              </span>
            </div>

          </div>
        </div>
        
        {/* Footer técnico */}
        <div className="mt-16 pt-4 border-t border-white/5 flex justify-between text-[9px] font-mono text-gray-700">
          <span>MODULE_TECH_STACK_V3.0</span>
          <span>LAST_SYNC: 2025</span>
        </div>
      </div>
    </section>
  );
}