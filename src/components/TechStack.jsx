import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

// DATOS ENRIQUECIDOS DE LAS HERRAMIENTAS
const getTechData = (language) => ({
  // 1. Research & Strategy
  Px: {
    name: "Perplexity AI",
    company: "Perplexity",
    role: language === 'en' ? "Research Engine" : "Motor de Investigación",
    desc: language === 'en' 
      ? "Semantic search and source synthesis for accelerated market research."
      : "Búsqueda semántica y síntesis de fuentes para investigación de mercado acelerada."
  },
  GPT: {
    name: "ChatGPT-4o",
    company: "OpenAI",
    role: language === 'en' ? "Reasoning & Synthesis" : "Razonamiento y Síntesis",
    desc: language === 'en'
      ? "Qualitative data analysis, technical writing and strategic structuring."
      : "Análisis de datos cualitativos, redacción técnica y estructuración estratégica."
  },
  Ge: {
    name: "Gemini 2.5 Pro",
    company: "Google DeepMind",
    role: language === 'en' ? "Multimodal AI" : "IA Multimodal",
    desc: language === 'en'
      ? "Large context processing and complex logical analysis."
      : "Procesamiento de grandes contextos y análisis lógico complejo."
  },
  Mi: {
    name: "Miro",
    company: "Miro",
    role: language === 'en' ? "Visual Collaboration" : "Colaboración Visual",
    desc: language === 'en'
      ? "Mind maps, timelines and flowcharts for project management."
      : "Mapas mentales, cronogramas y diagramas de flujo para gestión de proyectos."
  },
  // 2. Visual Generation
  Vz: {
    name: "Vizcom AI",
    company: "Vizcom",
    role: language === 'en' ? "Generative Rendering" : "Renderizado Generativo",
    desc: language === 'en'
      ? "Fast sketch visualization (Sketch-to-Render) for conceptual iteration."
      : "Visualización rápida de bocetos (Sketch-to-Render) para iteración conceptual."
  },
  GeImg: {
    name: "Imagen 3 / Gemini",
    company: "Google DeepMind",
    role: language === 'en' ? "Image Generation" : "Generación de Imágenes",
    desc: language === 'en'
      ? "Moodboard generation and photorealistic visual exploration."
      : "Generación de moodboards y exploración visual fotorrealista."
  },
  Ai: {
    name: "Adobe Illustrator",
    company: "Adobe Inc.",
    role: language === 'en' ? "Vector Graphics" : "Gráficos Vectoriales",
    desc: language === 'en'
      ? "Technical diagram design, iconography and vector planimetry."
      : "Diseño de diagramas técnicos, iconografía y planimetría vectorial."
  },
  Ps: {
    name: "Adobe Photoshop",
    company: "Adobe Inc.",
    role: language === 'en' ? "Digital Imaging" : "Imagen Digital",
    desc: language === 'en'
      ? "Render post-processing, digital retouching and visual composition."
      : "Post-procesado de renders, retoque digital y composición visual."
  },
  // 3. Development & Engineering
  Cur: {
    name: "Cursor AI",
    company: "Cursor",
    role: language === 'en' ? "Code Editor" : "Editor de Código",
    desc: language === 'en'
      ? "AI-assisted web development for rapid digital prototyping."
      : "Desarrollo web asistido por IA para prototipado digital rápido."
  },
  Sw: {
    name: "SolidWorks",
    company: "Dassault Systèmes",
    role: language === 'en' ? "CAD Engineering" : "Ingeniería CAD",
    desc: language === 'en'
      ? "3D parametric modeling, complex assemblies and technical validation."
      : "Modelado paramétrico 3D, ensamblajes complejos y validación técnica."
  },
  Fi: {
    name: "Figma",
    company: "Figma",
    role: language === 'en' ? "Interface Design" : "Diseño de Interfaces",
    desc: language === 'en'
      ? "Interface design (UI/UX), design systems and interactive prototyping."
      : "Diseño de interfaces (UI/UX), sistemas de diseño y prototipado interactivo."
  },
  Id: {
    name: "Adobe InDesign",
    company: "Adobe Inc.",
    role: language === 'en' ? "Editorial Design" : "Diseño Editorial",
    desc: language === 'en'
      ? "Layout of technical reports, project dossiers and portfolios."
      : "Maquetación de memorias técnicas, dossiers de proyecto y portfolios."
  },
  // System Extensions
  Ae: {
    name: "Adobe Creative Cloud",
    company: "Adobe Inc.",
    role: language === 'en' ? "Creative Suite" : "Suite Creativa",
    desc: language === 'en'
      ? "Complete ecosystem: Photoshop, Illustrator, InDesign, After Effects, Premiere Pro."
      : "Ecosistema completo: Photoshop, Illustrator, InDesign, After Effects, Premiere Pro."
  },
  Ms: {
    name: "Microsoft 365",
    company: "Microsoft",
    role: language === 'en' ? "Productivity Suite" : "Suite de Productividad",
    desc: language === 'en'
      ? "Word, Excel, PowerPoint, Teams - Documentation and enterprise collaboration."
      : "Word, Excel, PowerPoint, Teams - Documentación y colaboración empresarial."
  },
  Fg: {
    name: "Figma Enterprise",
    company: "Figma Inc.",
    role: language === 'en' ? "Design Platform" : "Plataforma de Diseño",
    desc: language === 'en'
      ? "Scalable design systems, components and real-time collaboration."
      : "Sistemas de diseño escalables, componentes y colaboración en tiempo real."
  }
});

// Componente de Herramienta - Diseño Nothing Tech
const ToolNode = ({ id, initials, label, tooltipDirection = 'up', language }) => {
  const [isHovered, setIsHovered] = useState(false);
  const techData = getTechData(language);
  const info = techData[id] || { 
    name: label, 
    company: "Tool", 
    role: "Utility", 
    desc: language === 'en' ? "Professional tool." : "Herramienta profesional." 
  };

  // Clases condicionales según la dirección del tooltip
  const isTooltipDown = tooltipDirection === 'down';

  return (
    <div
      className="group relative flex flex-col items-center cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* TOOLTIP - Contraste Absoluto - Tamaño Ampliado */}
      <div
        className={`
          absolute z-[100] p-6 md:p-8
          bg-white text-black
          shadow-[0_0_60px_rgba(255,255,255,0.2)]
          w-80 md:w-96
          left-1/2 -translate-x-1/2
          transition-all duration-150 ease-out
          ${isTooltipDown 
            ? 'top-full mt-4' 
            : 'bottom-full mb-4'
          }
          ${isHovered 
            ? 'opacity-100 scale-100 translate-y-0' 
            : `opacity-0 scale-95 ${isTooltipDown ? '-translate-y-2' : 'translate-y-2'} pointer-events-none`
          }
        `}
      >
        {/* Header */}
        <div className="border-b border-black/20 pb-4 mb-4">
          <h4 className="font-mono text-lg md:text-xl font-bold text-black uppercase tracking-wide">{info.name}</h4>
          <div className="flex justify-between items-center mt-3">
            <span className="font-mono text-sm text-black/60 uppercase tracking-wider">{info.company}</span>
            <span className="font-mono text-sm text-black/80 uppercase tracking-wider bg-black/10 px-3 py-1">{info.role}</span>
          </div>
        </div>
        {/* Body */}
        <p className="font-mono text-base md:text-lg text-black/70 leading-relaxed">
          {info.desc}
        </p>
        {/* Arrow - Posición condicional */}
        <div className={`
          absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-white rotate-45
          ${isTooltipDown ? '-top-2.5' : '-bottom-2.5'}
        `}></div>
      </div>

      {/* NODO CIRCULAR - Ampliado con animación de rotación */}
      <div className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.6] group-hover:z-50">
        {/* Anillo Exterior - Con rotación en hover */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="47"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="220 50"
            strokeDashoffset="0"
            className="text-white/40 transition-all duration-700 ease-out origin-center group-hover:text-white group-hover:stroke-[1.5] group-hover:animate-[spin_8s_linear_infinite]"
          />
        </svg>
        
        {/* Anillo Interior - Rotación inversa */}
        <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 100 100">
          <circle
            cx="50" cy="50" r="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray="160 80"
            strokeDashoffset="-20"
            className="text-white/30 transition-all duration-700 ease-out origin-center group-hover:text-white/80 group-hover:stroke-[2] group-hover:animate-[spin_5s_linear_infinite_reverse]"
          />
        </svg>

        {/* Iniciales */}
        <span className="font-mono text-3xl md:text-4xl font-bold text-white/50 transition-colors duration-300 group-hover:text-white">
          {initials}
        </span>
      </div>

      {/* Label */}
      <span className="mt-4 font-mono text-xs tracking-[0.2em] text-white/40 uppercase transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:text-white group-hover:tracking-[0.15em] group-hover:translate-y-10 text-center whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

// Componente de Fase del Pipeline
const PipelinePhase = ({ number, title, subtitle, tools, isActive = false, language }) => {
  return (
    <div className="relative flex flex-col">
      {/* Header de Fase */}
      <div className="mb-8">
        {/* Número Grande */}
        <div className="flex items-baseline gap-4 mb-2">
          <span className={`
            font-mono text-6xl md:text-8xl font-bold tracking-tighter
            ${isActive ? 'text-white' : 'text-white/20'}
            transition-colors duration-300
          `}>
            {number}
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-lg md:text-xl text-white uppercase tracking-[0.2em]">
              {title}
            </span>
            <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
              {subtitle}
            </span>
          </div>
        </div>
        
        {/* Línea de Progreso */}
        <div className="h-px bg-white/10 w-full relative">
          <div className={`
            absolute left-0 top-0 h-full bg-white/60
            transition-all duration-700
            ${isActive ? 'w-full' : 'w-0'}
          `}></div>
        </div>
      </div>

      {/* Grid de Herramientas - Ampliado */}
      <div className="grid grid-cols-2 gap-12 md:gap-16 lg:gap-20 place-items-center py-8">
        {tools.map((tool, index) => (
          <ToolNode
            key={tool.id}
            id={tool.id}
            initials={tool.initials}
            label={tool.label}
            tooltipDirection={index < 2 ? 'down' : 'up'}
            language={language}
          />
        ))}
      </div>
    </div>
  );
};

export default function TechStack() {
  const { language } = useLanguage();
  const [activePhase, setActivePhase] = useState(1);

  // Datos de las fases
  const phases = [
    {
      number: "01",
      title: getTranslation(language, 'techStackPhase1Title'),
      subtitle: getTranslation(language, 'techStackPhase1Subtitle'),
      tools: [
        { id: "Px", initials: "Px", label: "Perplexity" },
        { id: "GPT", initials: "GPT", label: "ChatGPT" },
        { id: "Ge", initials: "Ge", label: "Gemini" },
        { id: "Mi", initials: "Mi", label: "Miro" }
      ]
    },
    {
      number: "02",
      title: getTranslation(language, 'techStackPhase2Title'),
      subtitle: getTranslation(language, 'techStackPhase2Subtitle'),
      tools: [
        { id: "Vz", initials: "Vz", label: "Vizcom" },
        { id: "GeImg", initials: "Ge", label: "Imagen 3" },
        { id: "Ai", initials: "Ai", label: "Illustrator" },
        { id: "Ps", initials: "Ps", label: "Photoshop" }
      ]
    },
    {
      number: "03",
      title: getTranslation(language, 'techStackPhase3Title'),
      subtitle: getTranslation(language, 'techStackPhase3Subtitle'),
      tools: [
        { id: "Sw", initials: "Sw", label: "SolidWorks" },
        { id: "Cur", initials: "Cur", label: "Cursor" },
        { id: "Fi", initials: "Fi", label: "Figma" },
        { id: "Id", initials: "Id", label: "InDesign" }
      ]
    }
  ];

  return (
    <section
      id="tech"
      className="py-32 px-6 md:px-12 bg-black text-white overflow-visible"
    >
      <div className="max-w-screen-2xl mx-auto">
        
        {/* HEADER - Minimalista */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] text-white/40 tracking-widest">03 // {getTranslation(language, 'techStackProductionLabel')}</span>
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="font-mono text-[10px] text-white/40">12 {getTranslation(language, 'techStackToolsActive')}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-mono font-bold tracking-tight text-white mb-4">
            {getTranslation(language, 'techStackTitle')}
          </h2>
          
          <p className="font-mono text-sm md:text-base text-white/50 max-w-2xl leading-relaxed">
            {getTranslation(language, 'techStackDescription')}
          </p>
        </div>

        {/* PIPELINE GRID - Diseño Abierto */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 mb-24">
          {phases.map((phase, index) => (
            <div 
              key={phase.number}
              onMouseEnter={() => setActivePhase(index + 1)}
            >
              <PipelinePhase
                number={phase.number}
                title={phase.title}
                subtitle={phase.subtitle}
                tools={phase.tools}
                isActive={activePhase === index + 1}
                language={language}
              />
            </div>
          ))}
        </div>

        {/* CERTIFICACIONES */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-[10px] text-white/30 tracking-widest">{getTranslation(language, 'techStackCertLabel')}</span>
            <div className="flex-1 h-px bg-white/5"></div>
            <span className="font-mono text-[10px] text-white/20">{getTranslation(language, 'techStackCertVerified')}</span>
          </div>

          <div className="flex flex-wrap justify-center gap-16 md:gap-24">
            <a 
              href="https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center cursor-pointer"
            >
              <span className="font-mono text-5xl md:text-7xl font-bold text-white/20 group-hover:text-white transition-colors duration-200">
                CSWA
              </span>
              <span className="mt-3 font-mono text-[10px] text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-200">
                {getTranslation(language, 'techStackCert1')}
              </span>
            </a>

            <a 
              href="https://www.solidworks.com/certifications/solidworks-cad-design-professional" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center cursor-pointer"
            >
              <span className="font-mono text-5xl md:text-7xl font-bold text-white/20 group-hover:text-white transition-colors duration-200">
                CSWP
              </span>
              <span className="mt-3 font-mono text-[10px] text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-200">
                {getTranslation(language, 'techStackCert2')}
              </span>
            </a>

            <a 
              href="https://www.solidworks.com/es/certifications/surfacing-professional-cswp-su" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-center cursor-pointer"
            >
              <span className="font-mono text-5xl md:text-7xl font-bold text-white/20 group-hover:text-white transition-colors duration-200">
                CSWP-SU
              </span>
              <span className="mt-3 font-mono text-[10px] text-white/30 uppercase tracking-widest group-hover:text-white/60 transition-colors duration-200">
                {getTranslation(language, 'techStackCert3')}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
