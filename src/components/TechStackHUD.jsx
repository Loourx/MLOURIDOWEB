import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

// ═══════════════════════════════════════════════════════════════════════════
// TECH STACK HUD - IRON MAN STYLE
// ═══════════════════════════════════════════════════════════════════════════

// LOGOS DE HERRAMIENTAS - Cambia las rutas según tus archivos
// Los logos deben ser PNG con fondo transparente, idealmente en blanco puro
const ToolLogos = {
  // ─── RESEARCH ───
  'Perplexity AI': '/images/logos/perplexity.png',
  'ChatGPT-4o': '/images/logos/chatgpt.png',
  'Claude': '/images/logos/claude.png',
  'Gemini 2.5': '/images/logos/gemini.png',
  'NotebookLM': '/images/logos/notebooklm.png',
  'Notion': '/images/logos/notion.png',
  'Miro': '/images/logos/miro.png',
  'Google Trends': '/images/logos/google-trends.png',
  'Mendeley': '/images/logos/mendeley.png',
  
  // ─── VISUALIZE ───
  'Blender': '/images/logos/blender.png',
  'KeyShot': '/images/logos/keyshot.png',
  'Midjourney': '/images/logos/midjourney.png',
  'Vizcom': '/images/logos/vizcom.png',
  'Photoshop': '/images/logos/photoshop.png',
  'Illustrator': '/images/logos/illustrator.png',
  'InDesign': '/images/logos/indesign.png',
  'Figma': '/images/logos/figma.png',
  'Procreate': '/images/logos/procreate.png',
  
  // ─── ENGINEER ───
  'SolidWorks': '/images/logos/solidworks.png',
  'SW Simulation': '/images/logos/solidworks-simulation.png',
  'Fusion 360': '/images/logos/fusion360.png',
  'AutoCAD': '/images/logos/autocad.png',
  'Rapid Prototyping': '/images/logos/3dprinting.png',
  'ISO Standards': '/images/logos/iso.png',
  'VS Code': '/images/logos/vscode.png',
  'Cursor': '/images/logos/cursor.png',
  'Claude Sonnet': '/images/logos/claude-sonnet.png',
  'React': '/images/logos/react.png',
  'Git': '/images/logos/git.png',
  
  // ─── STRATEGY ─── (usa SVGs inline, ver StrategySVGs)
};

// SVGs inline para Strategy - Iconos blancos puros
const StrategySVGs = {
  'Business Model Canvas': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="3" y1="15" x2="21" y2="15" />
      <line x1="9" y1="3" x2="9" y2="21" />
      <line x1="15" y1="3" x2="15" y2="21" />
    </svg>
  ),
  'Lean Startup': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  'Design Thinking': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v4" />
      <path d="M12 18v4" />
      <path d="M4.93 4.93l2.83 2.83" />
      <path d="M16.24 16.24l2.83 2.83" />
      <path d="M2 12h4" />
      <path d="M18 12h4" />
      <path d="M4.93 19.07l2.83-2.83" />
      <path d="M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  'User Journey Map': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <circle cx="5" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
      <path d="M7 12h3" />
      <path d="M14 12h3" />
      <circle cx="12" cy="12" r="2" />
      <path d="M12 2v6" />
      <path d="M12 16v6" />
    </svg>
  ),
  'Product Lifecycle': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <path d="M12 2a10 10 0 1 0 10 10" />
      <path d="M12 2v10l7-7" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'Industrialization': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <path d="M2 20h20" />
      <path d="M5 20V8l5 4V8l5 4V4l5 4v12" />
      <rect x="7" y="14" width="3" height="6" />
      <rect x="14" y="14" width="3" height="6" />
    </svg>
  ),
  'Co-creation': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <circle cx="9" cy="7" r="3" />
      <circle cx="15" cy="7" r="3" />
      <path d="M12 14c-4 0-6 2-6 4v2h12v-2c0-2-2-4-6-4z" />
      <path d="M12 10v4" />
      <path d="M10 12h4" />
    </svg>
  ),
  'Holistic Design': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
      <line x1="12" y1="2" x2="12" y2="6" />
      <line x1="12" y1="18" x2="12" y2="22" />
      <line x1="2" y1="12" x2="6" y2="12" />
      <line x1="18" y1="12" x2="22" y2="12" />
    </svg>
  ),
  'Industrial Planning': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <path d="M2 20h20" />
      <rect x="4" y="10" width="4" height="10" />
      <rect x="10" y="6" width="4" height="14" />
      <rect x="16" y="2" width="4" height="18" />
      <path d="M4 10l3-3 3 3 3-5 3 3 3-4" />
    </svg>
  ),
};

// SVGs inline para Engineer - Iconos técnicos blancos puros
const EngineerSVGs = {
  'Rapid Prototyping': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <rect x="6" y="6" width="12" height="2" />
      <rect x="7" y="10" width="10" height="2" />
      <rect x="8" y="14" width="8" height="2" />
      <path d="M12 18v2" />
    </svg>
  ),
  'ISO Standards': (size, glow) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: glow }}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 9h8" />
      <path d="M8 13h6" />
      <circle cx="18" cy="6" r="2" fill="white" />
    </svg>
  ),
};

// Función para obtener SVG de Strategy
const getStrategySVG = (toolName) => {
  return StrategySVGs[toolName] || null;
};

// Función para obtener SVG de Engineer
const getEngineerSVG = (toolName) => {
  return EngineerSVGs[toolName] || null;
};

// Función para obtener el logo de una herramienta
const getToolLogo = (toolName) => {
  return ToolLogos[toolName] || null;
};

// DATOS DE HERRAMIENTAS COMPLETOS
const getTechData = (language) => ({
  research: {
    color: '#00D4FF',
    colorMuted: '#006680',
    colorRGB: '0, 212, 255',
    colorRGBMuted: '0, 102, 128',
    gradient: 'from-cyan-500 to-blue-500',
    tools: [
      { id: 'Px', name: 'Perplexity AI', category: 'AI Research', level: 'Expert', desc: language === 'en' ? 'Semantic search engine for accelerated research' : 'Motor de búsqueda semántica para investigación acelerada' },
      { id: 'GPT', name: 'ChatGPT-4o', category: 'AI Reasoning', level: 'Expert', desc: language === 'en' ? 'Advanced reasoning and synthesis' : 'Razonamiento avanzado y síntesis' },
      { id: 'Cl', name: 'Claude', category: 'AI Analysis', level: 'Expert', desc: language === 'en' ? 'Deep analysis and technical writing' : 'Análisis profundo y redacción técnica' },
      { id: 'Ge', name: 'Gemini 2.5', category: 'Multimodal AI', level: 'Expert', desc: language === 'en' ? 'Large context processing' : 'Procesamiento de grandes contextos' },
      { id: 'NL', name: 'NotebookLM', category: 'Research', level: 'Advanced', desc: language === 'en' ? 'AI-powered note-taking and synthesis' : 'Notas y síntesis potenciadas por IA' },
      { id: 'No', name: 'Notion', category: 'Management', level: 'Expert', desc: language === 'en' ? 'Project documentation and organization' : 'Documentación y organización de proyectos' },
      { id: 'Mi', name: 'Miro', category: 'Collaboration', level: 'Advanced', desc: language === 'en' ? 'Visual collaboration and mind mapping' : 'Colaboración visual y mapas mentales' },
      { id: 'GT', name: 'Google Trends', category: 'Analysis', level: 'Advanced', desc: language === 'en' ? 'Market trend analysis' : 'Análisis de tendencias de mercado' },
      { id: 'Md', name: 'Mendeley', category: 'Scientific', level: 'Advanced', desc: language === 'en' ? 'Scientific papers and bibliography management' : 'Papers científicos y gestión bibliográfica' },
    ]
  },
  visualize: {
    color: '#00FF88',
    colorMuted: '#008844',
    colorRGB: '0, 255, 136',
    colorRGBMuted: '0, 136, 68',
    gradient: 'from-green-400 to-emerald-500',
    tools: [
      { id: 'Bl', name: 'Blender', category: '3D & Rendering', level: 'Expert', desc: language === 'en' ? 'Advanced 3D modeling, subsurfaces, nodes' : 'Modelado 3D avanzado, subsuperficies, nodos' },
      { id: 'Ks', name: 'KeyShot', category: 'Visualization', level: 'Advanced', desc: language === 'en' ? 'Photorealistic rendering' : 'Renderizado fotorrealista' },
      { id: 'Mj', name: 'Midjourney', category: 'AI Visual', level: 'Expert', desc: language === 'en' ? 'AI image generation and concepts' : 'Generación de imágenes e conceptos con IA' },
      { id: 'Vz', name: 'Vizcom', category: 'AI Rendering', level: 'Advanced', desc: language === 'en' ? 'Rapid sketch-to-render iteration and visualization' : 'Iteración rápida de boceto a render y visualización' },
      { id: 'Ps', name: 'Photoshop', category: 'Image Editing', level: 'Expert', desc: language === 'en' ? 'Professional image editing and composition' : 'Edición y composición de imágenes profesional' },
      { id: 'Ai', name: 'Illustrator', category: 'Vector', level: 'Expert', desc: language === 'en' ? 'Vector graphics and technical diagrams' : 'Gráficos vectoriales y diagramas técnicos' },
      { id: 'Id', name: 'InDesign', category: 'Editorial', level: 'Advanced', desc: language === 'en' ? 'Professional layout and documentation' : 'Maquetación y documentación profesional' },
      { id: 'Fi', name: 'Figma', category: 'UX/UI', level: 'Intermediate', desc: language === 'en' ? 'Interface design and prototyping' : 'Diseño de interfaces y prototipado' },
      { id: 'Pr', name: 'Procreate', category: 'Sketching', level: 'Advanced', desc: language === 'en' ? 'Digital sketching and concept art' : 'Bocetado digital y arte conceptual' },
    ]
  },
  engineer: {
    color: '#FF6B35',
    colorMuted: '#993F20',
    colorRGB: '255, 107, 53',
    colorRGBMuted: '153, 63, 32',
    gradient: 'from-orange-500 to-red-500',
    tools: [
      { id: 'Sw', name: 'SolidWorks', category: 'CAD Pro', level: 'Expert', desc: language === 'en' ? 'Parametric 3D modeling and engineering' : 'Modelado 3D paramétrico e ingeniería' },
      { id: 'SWS', name: 'SW Simulation', category: 'FEM / CFD', level: 'Advanced', desc: language === 'en' ? 'Finite element and fluid dynamics analysis' : 'Análisis por elementos finitos y dinámica de fluidos' },
      { id: 'F3', name: 'Fusion 360', category: 'CAD', level: 'Advanced', desc: language === 'en' ? 'Cloud-based CAD and simulation' : 'CAD en la nube y simulación' },
      { id: 'AC', name: 'AutoCAD', category: 'Technical Drawing', level: 'Expert', desc: language === 'en' ? 'Standardized technical drawings and plans' : 'Planos técnicos normalizados' },
      { id: 'RP', name: 'Rapid Prototyping', category: 'FDM / 3D Print', level: 'Expert', desc: language === 'en' ? 'Functional prototypes with FDM technology' : 'Prototipos funcionales con tecnología FDM' },
      { id: 'ISO', name: 'ISO Standards', category: 'Normative', level: 'Advanced', desc: language === 'en' ? 'ISO, UNE standards and technical regulations' : 'Normativa ISO, UNE y regulaciones técnicas' },
      { id: 'VS', name: 'VS Code', category: 'Development', level: 'Advanced', desc: language === 'en' ? 'Code editing with AI extensions' : 'Edición de código con extensiones IA' },
      { id: 'Cu', name: 'Cursor', category: 'AI IDE', level: 'Advanced', desc: language === 'en' ? 'AI-native code editor' : 'Editor de código nativo con IA' },
      { id: 'Cs', name: 'Claude Sonnet', category: 'AI Dev', level: 'Expert', desc: language === 'en' ? 'AI pair programming assistant' : 'Asistente de programación en pareja IA' },
      { id: 'Rc', name: 'React', category: 'Frontend', level: 'Intermediate', desc: language === 'en' ? 'Modern web application development' : 'Desarrollo de aplicaciones web modernas' },
      { id: 'Gt', name: 'Git', category: 'Version Control', level: 'Intermediate', desc: language === 'en' ? 'Code versioning and collaboration' : 'Versionado de código y colaboración' },
    ]
  },
  strategy: {
    color: '#A855F7',
    colorMuted: '#6B21A8',
    colorRGB: '168, 85, 247',
    colorRGBMuted: '107, 33, 168',
    gradient: 'from-purple-500 to-violet-600',
    tools: [
      { id: 'BMC', name: 'Business Model Canvas', category: 'Strategy', level: 'Expert', desc: language === 'en' ? 'Business model definition and validation' : 'Definición y validación de modelos de negocio' },
      { id: 'LS', name: 'Lean Startup', category: 'Methodology', level: 'Expert', desc: language === 'en' ? 'Rapid validation and iteration cycles' : 'Ciclos de validación e iteración rápidos' },
      { id: 'DT', name: 'Design Thinking', category: 'Innovation', level: 'Expert', desc: language === 'en' ? 'Human-centered problem solving' : 'Resolución de problemas centrada en el usuario' },
      { id: 'UJM', name: 'User Journey Map', category: 'UX Strategy', level: 'Advanced', desc: language === 'en' ? 'End-to-end user experience mapping' : 'Mapeo de experiencia de usuario end-to-end' },
      { id: 'PLC', name: 'Product Lifecycle', category: 'Analysis', level: 'Advanced', desc: language === 'en' ? 'Product lifecycle analysis and planning' : 'Análisis y planificación del ciclo de vida' },
      { id: 'IP', name: 'Industrial Planning', category: 'Manufacturing', level: 'Expert', desc: language === 'en' ? 'Production scaling and feasibility planning' : 'Planificación industrial y escalado de producción' },
      { id: 'CC', name: 'Co-creation', category: 'Collaboration', level: 'Advanced', desc: language === 'en' ? 'Stakeholder collaborative design' : 'Diseño colaborativo con stakeholders' },
      { id: 'HD', name: 'Holistic Design', category: 'Systems', level: 'Expert', desc: language === 'en' ? 'Integrated systems thinking approach' : 'Enfoque de pensamiento sistémico integrado' },
    ]
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: GLOBO 3D ANIMADO (Research)
// ═══════════════════════════════════════════════════════════════════════════
const Globe3D = ({ isHovered, isActive, color }) => {
  return (
    <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-700 ${isHovered ? 'scale-110' : ''} ${isActive ? 'scale-125' : ''}`}>
      {/* Esfera principal */}
      <div className="absolute inset-0 rounded-full" style={{
        background: `radial-gradient(circle at 30% 30%, ${color}20, transparent 60%)`,
        boxShadow: isHovered ? `0 0 60px ${color}40, inset 0 0 30px ${color}20` : `0 0 20px ${color}20`
      }}>
        {/* Anillos orbitales */}
        <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-dashed opacity-40" style={{ borderColor: color, transform: 'rotateX(70deg)' }}></div>
        </div>
        <div className="absolute inset-0 animate-[spin_8s_linear_infinite_reverse]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full border opacity-30" style={{ borderColor: color, transform: 'rotateX(70deg) rotateZ(45deg)' }}></div>
        </div>
        <div className="absolute inset-0 animate-[spin_15s_linear_infinite]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full border border-dotted opacity-20" style={{ borderColor: color, transform: 'rotateX(70deg) rotateZ(-30deg)' }}></div>
        </div>
      </div>
      
      {/* Núcleo brillante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: color, boxShadow: `0 0 20px ${color}` }}></div>
      
      {/* Partículas de datos */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full animate-ping"
          style={{
            backgroundColor: color,
            top: `${20 + Math.random() * 60}%`,
            left: `${20 + Math.random() * 60}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: '2s'
          }}
        />
      ))}
      
      {/* Grid esférico */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <ellipse cx="50" cy="50" rx="45" ry="45" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="50" cy="50" rx="45" ry="20" fill="none" stroke={color} strokeWidth="0.5" opacity="0.2" className="animate-[spin_20s_linear_infinite]" />
        <ellipse cx="50" cy="50" rx="20" ry="45" fill="none" stroke={color} strokeWidth="0.5" opacity="0.2" className="animate-[spin_25s_linear_infinite_reverse]" />
        <line x1="5" y1="50" x2="95" y2="50" stroke={color} strokeWidth="0.3" opacity="0.2" />
        <line x1="50" y1="5" x2="50" y2="95" stroke={color} strokeWidth="0.3" opacity="0.2" />
      </svg>
      
      {/* Holographic scanline */}
      <div className="absolute inset-0 rounded-full overflow-hidden">
        <div className="absolute w-full h-1 animate-[scanline_3s_ease-in-out_infinite]" style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}></div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: CUBO 3D ANIMADO (Visualize)
// ═══════════════════════════════════════════════════════════════════════════
const Cube3D = ({ isHovered, isActive, color }) => {
  return (
    <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-700 ${isHovered ? 'scale-110' : ''} ${isActive ? 'scale-125' : ''}`} style={{ perspective: '500px' }}>
      {/* Cubo wireframe */}
      <div className="absolute inset-4 animate-[cubeRotate_8s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }}>
        {/* Caras del cubo */}
        {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face, i) => {
          const transforms = {
            front: 'translateZ(40px)',
            back: 'translateZ(-40px) rotateY(180deg)',
            left: 'translateX(-40px) rotateY(-90deg)',
            right: 'translateX(40px) rotateY(90deg)',
            top: 'translateY(-40px) rotateX(90deg)',
            bottom: 'translateY(40px) rotateX(-90deg)'
          };
          return (
            <div
              key={face}
              className="absolute inset-0 border"
              style={{
                borderColor: `${color}${isHovered ? '80' : '40'}`,
                backgroundColor: `${color}${isHovered ? '10' : '05'}`,
                transform: transforms[face],
                backfaceVisibility: 'visible'
              }}
            >
              {/* Esquinas */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l" style={{ borderColor: color }}></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r" style={{ borderColor: color }}></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l" style={{ borderColor: color }}></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r" style={{ borderColor: color }}></div>
            </div>
          );
        })}
      </div>
      
      {/* Centro brillante */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4">
        <div className="w-full h-full rounded-sm animate-pulse" style={{ backgroundColor: color, boxShadow: `0 0 30px ${color}` }}></div>
      </div>
      
      {/* Grid técnico */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <line x1="0" y1="50" x2="100" y2="50" stroke={color} strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
        <line x1="50" y1="0" x2="50" y2="100" stroke={color} strokeWidth="0.5" opacity="0.2" strokeDasharray="4 4" />
        <circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="2 6" className="animate-[spin_30s_linear_infinite]" />
      </svg>
      
      {/* Dimension lines */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-40">
        <div className="w-6 h-px" style={{ backgroundColor: color }}></div>
        <span className="text-[8px] font-mono" style={{ color }}>CAD</span>
        <div className="w-6 h-px" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: LLAVE/ENGRANAJE 3D ANIMADO (Engineer)
// ═══════════════════════════════════════════════════════════════════════════
const Wrench3D = ({ isHovered, isActive, color }) => {
  return (
    <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-700 ${isHovered ? 'scale-110' : ''} ${isActive ? 'scale-125' : ''}`}>
      {/* Engranaje principal */}
      <svg className="absolute inset-0 w-full h-full animate-[spin_15s_linear_infinite]" viewBox="0 0 100 100">
        {/* Dientes del engranaje */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30) * Math.PI / 180;
          const x1 = 50 + 35 * Math.cos(angle);
          const y1 = 50 + 35 * Math.sin(angle);
          const x2 = 50 + 42 * Math.cos(angle);
          const y2 = 50 + 42 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" opacity={isHovered ? 0.8 : 0.4} />
          );
        })}
        <circle cx="50" cy="50" r="30" fill="none" stroke={color} strokeWidth="2" opacity={isHovered ? 0.6 : 0.3} />
        <circle cx="50" cy="50" r="12" fill="none" stroke={color} strokeWidth="3" opacity={isHovered ? 0.8 : 0.4} />
      </svg>
      
      {/* Engranaje secundario (más pequeño, rotación inversa) */}
      <svg className="absolute top-2 right-2 w-12 h-12 animate-[spin_10s_linear_infinite_reverse]" viewBox="0 0 100 100">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 45) * Math.PI / 180;
          const x1 = 50 + 30 * Math.cos(angle);
          const y1 = 50 + 30 * Math.sin(angle);
          const x2 = 50 + 40 * Math.cos(angle);
          const y2 = 50 + 40 * Math.sin(angle);
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="6" strokeLinecap="round" opacity="0.3" />
          );
        })}
        <circle cx="50" cy="50" r="22" fill="none" stroke={color} strokeWidth="3" opacity="0.2" />
      </svg>
      
      {/* Llave inglesa superpuesta */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[wrenchFloat_3s_ease-in-out_infinite]">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 10px ${color})` }}>
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" opacity={isHovered ? 1 : 0.6} />
        </svg>
      </div>
      
      {/* Partículas de chispa */}
      {isHovered && [...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full animate-ping"
          style={{
            backgroundColor: color,
            top: `${30 + Math.random() * 40}%`,
            left: `${30 + Math.random() * 40}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1s'
          }}
        />
      ))}
      
      {/* Círculo de progreso */}
      <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="46" fill="none" stroke={color} strokeWidth="1" opacity="0.1" />
        <circle
          cx="50" cy="50" r="46"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray={`${isHovered ? 220 : 70} 290`}
          strokeLinecap="round"
          opacity={isHovered ? 0.6 : 0.2}
          className="transition-all duration-700"
        />
      </svg>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: RED DE NODOS 3D ANIMADO (Strategy)
// ═══════════════════════════════════════════════════════════════════════════
const Network3D = ({ isHovered, isActive, color }) => {
  // Nodos de la red
  const nodes = [
    { x: 50, y: 25 },   // Top
    { x: 25, y: 45 },   // Left
    { x: 75, y: 45 },   // Right
    { x: 35, y: 70 },   // Bottom-left
    { x: 65, y: 70 },   // Bottom-right
    { x: 50, y: 50 },   // Center
  ];
  
  // Conexiones entre nodos
  const connections = [
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], // Todos al centro
    [0, 1], [0, 2], [1, 3], [2, 4], [3, 4], // Conexiones externas
  ];
  
  return (
    <div className={`relative w-32 h-32 md:w-40 md:h-40 transition-all duration-700 ${isHovered ? 'scale-110' : ''} ${isActive ? 'scale-125' : ''}`}>
      {/* Círculo exterior pulsante */}
      <div className="absolute inset-0 rounded-full animate-pulse" style={{
        border: `1px solid ${color}20`,
        boxShadow: isHovered ? `0 0 40px ${color}30, inset 0 0 20px ${color}10` : 'none'
      }}></div>
      
      {/* SVG con la red */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        {/* Conexiones animadas */}
        {connections.map(([from, to], i) => (
          <line
            key={i}
            x1={nodes[from].x}
            y1={nodes[from].y}
            x2={nodes[to].x}
            y2={nodes[to].y}
            stroke={color}
            strokeWidth={isHovered ? "1.5" : "1"}
            opacity={isHovered ? 0.6 : 0.3}
            className="transition-all duration-500"
            strokeDasharray={isHovered ? "none" : "3 3"}
          >
            {isHovered && (
              <animate
                attributeName="stroke-dashoffset"
                from="20"
                to="0"
                dur="1s"
                repeatCount="indefinite"
              />
            )}
          </line>
        ))}
        
        {/* Nodos */}
        {nodes.map((node, i) => (
          <g key={i}>
            {/* Glow del nodo */}
            <circle
              cx={node.x}
              cy={node.y}
              r={i === 5 ? "8" : "5"}
              fill={color}
              opacity={isHovered ? 0.3 : 0.1}
              className="transition-all duration-500"
            >
              {isHovered && (
                <animate
                  attributeName="r"
                  values={i === 5 ? "8;12;8" : "5;8;5"}
                  dur="2s"
                  repeatCount="indefinite"
                />
              )}
            </circle>
            {/* Nodo sólido */}
            <circle
              cx={node.x}
              cy={node.y}
              r={i === 5 ? "4" : "3"}
              fill={i === 5 ? color : "transparent"}
              stroke={color}
              strokeWidth="1.5"
              opacity={isHovered ? 1 : 0.6}
              className="transition-all duration-500"
            />
          </g>
        ))}
        
        {/* Círculos orbitales */}
        <circle cx="50" cy="50" r="35" fill="none" stroke={color} strokeWidth="0.5" opacity="0.15" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
        <circle cx="50" cy="50" r="42" fill="none" stroke={color} strokeWidth="0.5" opacity="0.1" strokeDasharray="2 6" className="animate-[spin_30s_linear_infinite_reverse]" />
      </svg>
      
      {/* Pulsos de datos viajando */}
      {isHovered && [...Array(4)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full animate-ping"
          style={{
            backgroundColor: color,
            top: `${nodes[i].y}%`,
            left: `${nodes[i].x}%`,
            transform: 'translate(-50%, -50%)',
            animationDelay: `${i * 0.3}s`,
            animationDuration: '1.5s'
          }}
        />
      ))}
      
      {/* Label técnico */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 opacity-40">
        <div className="w-4 h-px" style={{ backgroundColor: color }}></div>
        <span className="text-[8px] font-mono" style={{ color }}>SYS</span>
        <div className="w-4 h-px" style={{ backgroundColor: color }}></div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: BARRA TRANSVERSAL DE ESTRATEGIA
// ═══════════════════════════════════════════════════════════════════════════
const StrategyBar = ({ phase, isHovered, onHover, onOpenModal, language }) => {
  const { color, colorMuted, colorRGB, tools, title, subtitle } = phase;
  
  return (
    <div
      className="relative border rounded-lg overflow-hidden transition-all duration-500 cursor-pointer group"
      style={{
        borderColor: isHovered ? `${color}60` : 'rgba(255,255,255,0.1)',
        backgroundColor: isHovered ? `${color}08` : 'rgba(255,255,255,0.02)',
      }}
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      onClick={onOpenModal}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `
          linear-gradient(90deg, ${color}20 1px, transparent 1px),
          linear-gradient(${color}20 1px, transparent 1px)
        `,
        backgroundSize: '20px 20px'
      }}></div>
      
      {/* Scanning line */}
      {isHovered && (
        <div 
          className="absolute top-0 left-0 w-full h-0.5 animate-[scanVertical_2s_ease-in-out_infinite]" 
          style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)` }}
        ></div>
      )}
      
      <div className="relative z-10 p-6 md:p-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Left: Icon + Title */}
          <div className="flex items-center gap-6">
            {/* Mini Network Icon */}
            <div className="w-16 h-16 flex-shrink-0">
              <Network3D isHovered={isHovered} isActive={false} color={isHovered ? color : colorMuted} />
            </div>
            
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="text-xs font-mono tracking-widest" style={{ color: isHovered ? color : colorMuted }}>04</span>
                <div className="w-8 h-px" style={{ backgroundColor: isHovered ? color : colorMuted }}></div>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">TRANSVERSAL</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">{title}</h3>
              <p className="text-sm text-gray-400 mt-1">{subtitle}</p>
            </div>
          </div>
          
          {/* Center: Description */}
          <div className="flex-1 max-w-2xl">
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              {language === 'en' 
                ? 'Methodologies and frameworks for project viability, financial planning, and strategic business development. From ideation to industrialization.'
                : 'Metodologías y frameworks para la viabilidad del proyecto, planificación financiera y desarrollo estratégico del negocio. Desde la ideación hasta la industrialización.'
              }
            </p>
          </div>
          
          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <span className="text-xs font-mono text-gray-500 block">{tools.length} {language === 'en' ? 'methods' : 'métodos'}</span>
              <span className="text-[10px] font-mono text-gray-600 uppercase">{language === 'en' ? 'Click to explore' : 'Clic para explorar'}</span>
            </div>
            <div 
              className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ 
                borderColor: isHovered ? color : 'rgba(255,255,255,0.2)',
                backgroundColor: isHovered ? `${color}20` : 'transparent'
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={isHovered ? color : '#666'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: TARJETA DE HERRAMIENTA
// ═══════════════════════════════════════════════════════════════════════════
const ToolCard = ({ tool, color, index, isLarge = false, hideLevel = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const levelColors = {
    'Expert': '#00FF88',
    'Advanced': '#FFD93D',
    'Intermediate': '#00D4FF',
    'Basic': '#888888'
  };
  
  return (
    <div
      className={`relative border rounded-lg transition-all duration-300 cursor-pointer group overflow-hidden ${isLarge ? 'p-8' : 'p-4'}`}
      style={{
        borderColor: isHovered ? `${color}60` : 'rgba(255,255,255,0.1)',
        backgroundColor: isHovered ? `${color}15` : 'rgba(255,255,255,0.02)',
        animationDelay: `${index * 50}ms`
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      {isHovered && (
        <div className="absolute inset-0 opacity-30" style={{ background: `radial-gradient(circle at center, ${color}, transparent 70%)` }}></div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-3">
            {/* Logo de la herramienta o SVGs para Strategy/Engineer */}
            {getStrategySVG(tool.name) ? (
              <div className={`${isLarge ? 'w-10 h-10' : 'w-5 h-5'} flex-shrink-0 transition-all duration-300`} style={{ opacity: isHovered ? 1 : 0.7 }}>
                {getStrategySVG(tool.name)(isLarge ? 40 : 20, isHovered ? `drop-shadow(0 0 6px ${color})` : 'none')}
              </div>
            ) : getEngineerSVG(tool.name) ? (
              <div className={`${isLarge ? 'w-10 h-10' : 'w-5 h-5'} flex-shrink-0 transition-all duration-300`} style={{ opacity: isHovered ? 1 : 0.7 }}>
                {getEngineerSVG(tool.name)(isLarge ? 40 : 20, isHovered ? `drop-shadow(0 0 6px ${color})` : 'none')}
              </div>
            ) : getToolLogo(tool.name) && (
              <img 
                src={getToolLogo(tool.name)}
                alt={tool.name}
                className={`${isLarge ? 'w-10 h-10' : 'w-5 h-5'} flex-shrink-0 object-contain transition-all duration-300`}
                style={{ 
                  filter: `brightness(0) invert(1) ${isHovered ? `drop-shadow(0 0 6px ${color})` : ''}`,
                  opacity: isHovered ? 1 : 0.7
                }}
              />
            )}
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-white font-bold ${isLarge ? 'text-2xl' : 'text-base'}`}>{tool.name}</span>
                {tool.cert && (
                  <span className={`${isLarge ? 'text-sm' : 'text-[9px]'} px-2 py-0.5 rounded border font-mono`} style={{ borderColor: color, color }}>
                    CERT
                  </span>
                )}
              </div>
              <span className={`${isLarge ? 'text-base' : 'text-xs'} text-gray-400 font-mono`}>{tool.category}</span>
            </div>
          </div>
          {!hideLevel && (
            <div className="flex items-center gap-1.5">
              <div className={`${isLarge ? 'w-3 h-3' : 'w-2 h-2'} rounded-full animate-pulse`} style={{ backgroundColor: levelColors[tool.level] }}></div>
              <span className={`${isLarge ? 'text-sm' : 'text-[10px]'} font-mono text-gray-500`}>{tool.level}</span>
            </div>
          )}
        </div>
        
        <p className={`${isLarge ? 'text-base' : 'text-xs'} text-gray-400 leading-relaxed mt-3`}>{tool.desc}</p>
        
        {tool.cert && (
          <div className={`${isLarge ? 'mt-4 pt-4' : 'mt-2 pt-2'} border-t border-white/10`}>
            <span className={`${isLarge ? 'text-sm' : 'text-[10px]'} font-mono`} style={{ color }}>{tool.cert}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: MODAL FULLSCREEN (Desktop)
// ═══════════════════════════════════════════════════════════════════════════
const FullscreenModal = ({ phase, isOpen, onClose, language }) => {
  const modalRef = useRef(null);
  
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      // Guardar posición actual del scroll
      const scrollY = window.scrollY;
      // Bloquear scroll del body y html de forma robusta
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${scrollY}px`;
      // Añadir clase para ocultar el header
      document.body.classList.add('hud-modal-open');
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      // Restaurar scroll
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      // Quitar clase que oculta el header
      document.body.classList.remove('hud-modal-open');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen, onClose]);
  
  if (!isOpen || !phase) return null;
  
  const { title, subtitle, tools, color, colorRGB, icon: Icon } = phase;
  
  return (
    <div 
      className="fixed inset-0 z-[99999] hidden lg:flex items-center justify-center"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Backdrop con blur */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
      
      {/* HUD Grid Lines Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(${colorRGB}, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${colorRGB}, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Scanning line horizontal */}
        <div className="absolute w-full h-0.5 animate-[scanVertical_4s_ease-in-out_infinite]" style={{ background: `linear-gradient(90deg, transparent, ${color}60, transparent)` }}></div>
        
        {/* Scanning line vertical */}
        <div className="absolute h-full w-0.5 animate-[scanHorizontal_5s_ease-in-out_infinite]" style={{ background: `linear-gradient(180deg, transparent, ${color}60, transparent)` }}></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: color,
              opacity: 0.3,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Contenido del modal */}
      <div 
        ref={modalRef}
        className="relative w-[98vw] max-w-[1800px] h-[95vh] flex flex-col rounded-2xl border-2 animate-[modalSlideIn_0.4s_ease-out]"
        style={{ 
          borderColor: color,
          background: `linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(${colorRGB},0.1) 100%)`,
          boxShadow: `0 0 100px ${color}30, inset 0 0 100px rgba(0,0,0,0.5)`
        }}
      >
        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5 rounded-2xl overflow-hidden" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(${colorRGB}, 0.3) 2px, rgba(${colorRGB}, 0.3) 4px)`
        }}></div>
        
        {/* Header del modal */}
        <div className="flex-shrink-0 z-20 px-8 py-6 border-b backdrop-blur-xl" style={{ borderColor: `${color}40`, backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div>
                <div className="text-xs font-mono tracking-[0.3em] uppercase mb-1" style={{ color }}>
                  PHASE {phase.phase} // {language === 'en' ? 'TOOLS INTERFACE' : 'INTERFAZ DE HERRAMIENTAS'}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                  {title}
                </h2>
                <p className="text-sm text-gray-400 font-mono mt-1">{subtitle}</p>
              </div>
            </div>
            
            {/* Status y Close */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg border" style={{ borderColor: `${color}40` }}>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
                <span className="text-sm font-mono" style={{ color }}>{tools.length} TOOLS LOADED</span>
              </div>
              
              <button
                onClick={onClose}
                className="w-12 h-12 rounded-xl border-2 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                style={{ borderColor: color, backgroundColor: `${color}10` }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-90 transition-transform duration-300">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Grid de herramientas - Grande y espaciado */}
        <div 
          className="flex-1 overflow-y-auto p-10 md:p-12 hud-scrollbar"
          style={{
            '--scrollbar-color': color,
            '--scrollbar-rgb': colorRGB
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} color={color} index={index} isLarge={true} hideLevel={phase.id === 'strategy'} />
            ))}
          </div>
        </div>
        
        {/* Footer del modal - siempre al final */}
        <div className="flex-shrink-0 px-8 py-4 border-t backdrop-blur-xl" style={{ borderColor: `${color}40`, backgroundColor: 'rgba(0,0,0,0.8)' }}>
          <div className="flex items-center justify-between text-xs font-mono text-gray-500">
            <span>ESC {language === 'en' ? 'or click outside to close' : 'o clic fuera para cerrar'}</span>
            <div className="flex items-center gap-4">
              <span style={{ color }}>● ONLINE</span>
              <span>SYS_STATUS: NOMINAL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE: FASE HUD
// ═══════════════════════════════════════════════════════════════════════════
const PhaseHUD = ({ phase, title, subtitle, icon: Icon, tools, color, colorMuted, colorRGB, colorRGBMuted, isExpanded, onToggle, onHover, isHovered, language, onOpenModal }) => {
  const toolCount = tools.length;
  
  // Usar color brillante en hover, apagado por defecto
  const activeColor = isHovered || isExpanded ? color : colorMuted;
  const activeColorRGB = isHovered || isExpanded ? colorRGB : colorRGBMuted;
  
  // En desktop usamos modal, en móvil expansión
  const handleClick = () => {
    if (window.innerWidth >= 1024) {
      onOpenModal();
    } else {
      onToggle();
    }
  };
  
  return (
    <div className="relative">
      {/* Card principal */}
      <div
        className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-500 cursor-pointer overflow-hidden ${
          isExpanded ? 'border-opacity-60' : 'border-opacity-20'
        }`}
        style={{
          borderColor: isExpanded || isHovered ? color : colorMuted + '40',
          background: isExpanded 
            ? `linear-gradient(135deg, ${color}15 0%, transparent 50%)`
            : isHovered 
              ? `linear-gradient(135deg, ${color}08 0%, transparent 50%)`
              : 'transparent'
        }}
        onClick={handleClick}
        onMouseEnter={() => onHover(true)}
        onMouseLeave={() => onHover(false)}
      >
        {/* Scanlines overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(${activeColorRGB}, 0.1) 2px, rgba(${activeColorRGB}, 0.1) 4px)`
        }}></div>
        
        {/* Contenido principal */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Icono 3D animado */}
          <div className="mb-6">
            <Icon isHovered={isHovered} isActive={isExpanded} color={activeColor} />
          </div>
          
          {/* Fase label */}
          <div className="text-xs font-mono tracking-[0.3em] uppercase mb-2 transition-colors duration-300" style={{ color: activeColor }}>
            PHASE {phase}
          </div>
          
          {/* Título */}
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
            {title}
          </h3>
          
          {/* Subtítulo */}
          <p className="text-sm text-gray-400 font-mono mb-4">
            {subtitle}
          </p>
          
          {/* Stats */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full transition-colors duration-300" style={{ backgroundColor: activeColor, opacity: isHovered ? 1 : 0.6 }}></div>
              <span className="text-xs font-mono transition-colors duration-300" style={{ color: activeColor }}>{toolCount} TOOLS</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-xs font-mono text-gray-500 hidden lg:block">
              {language === 'en' ? 'CLICK TO OPEN' : 'CLIC PARA ABRIR'}
            </span>
            <span className="text-xs font-mono text-gray-500 lg:hidden">
              {isExpanded ? 'TAP TO CLOSE' : 'TAP TO EXPAND'}
            </span>
          </div>
          
          {/* Expand indicator - Solo en móvil */}
          <div className={`mt-4 transition-transform duration-300 lg:hidden ${isExpanded ? 'rotate-180' : ''}`}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={activeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6,9 12,15 18,9"></polyline>
            </svg>
          </div>
          
          {/* Desktop expand indicator */}
          <div className="mt-4 hidden lg:flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={activeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
            <span className="text-[10px] font-mono text-gray-500">{language === 'en' ? 'FULLSCREEN' : 'PANTALLA COMPLETA'}</span>
          </div>
        </div>
        
        {/* Glow pulse - solo en hover */}
        {isHovered && !isExpanded && (
          <div className="absolute inset-0 rounded-2xl animate-pulse" style={{ boxShadow: `inset 0 0 30px ${color}20` }}></div>
        )}
      </div>
      
      {/* Panel expandido con herramientas - SOLO MÓVIL */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
        <div className="p-6 rounded-xl border" style={{ borderColor: `${color}30`, backgroundColor: `${color}05` }}>
          {/* Header del panel */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b" style={{ borderColor: `${color}20` }}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: color }}></div>
              <span className="text-sm font-mono uppercase tracking-wider" style={{ color }}>
                {language === 'en' ? 'Active Tools' : 'Herramientas Activas'}
              </span>
            </div>
            <span className="text-xs font-mono text-gray-500">{toolCount} LOADED</span>
          </div>
          
          {/* Grid de herramientas */}
          <div className="grid grid-cols-1 gap-4">
            {tools.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} color={color} index={index} hideLevel={phase === '04'} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL: TECH STACK HUD
// ═══════════════════════════════════════════════════════════════════════════
export default function TechStackHUD() {
  const { language } = useLanguage();
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [hoveredPhase, setHoveredPhase] = useState(null);
  const [hoveredStrategy, setHoveredStrategy] = useState(false);
  const [modalPhaseId, setModalPhaseId] = useState(null); // Solo guardamos el ID, no el objeto
  const techData = getTechData(language);
  
  const phases = [
    {
      id: 'research',
      phase: '01',
      title: getTranslation(language, 'techStackPhase1Title'),
      subtitle: getTranslation(language, 'techStackPhase1Subtitle'),
      icon: Globe3D,
      ...techData.research
    },
    {
      id: 'visualize',
      phase: '02',
      title: getTranslation(language, 'techStackPhase2Title'),
      subtitle: getTranslation(language, 'techStackPhase2Subtitle'),
      icon: Cube3D,
      ...techData.visualize
    },
    {
      id: 'engineer',
      phase: '03',
      title: getTranslation(language, 'techStackPhase3Title'),
      subtitle: getTranslation(language, 'techStackPhase3Subtitle'),
      icon: Wrench3D,
      ...techData.engineer
    }
  ];
  
  // Fase de estrategia (transversal)
  const strategyPhase = {
    id: 'strategy',
    phase: '04',
    title: language === 'en' ? 'STRATEGIZE' : 'ESTRATEGIA',
    subtitle: language === 'en' ? 'Business & Viability' : 'Negocio y Viabilidad',
    icon: Network3D,
    ...techData.strategy
  };
  
  // Obtener la fase actual para el modal basándose en el ID (siempre actualizado con el idioma actual)
  const allPhases = [...phases, strategyPhase];
  const currentModalPhase = modalPhaseId ? allPhases.find(p => p.id === modalPhaseId) : null;
  
  const totalTools = phases.reduce((acc, p) => acc + p.tools.length, 0) + strategyPhase.tools.length;

  return (
    <section id="tech" className="py-24 md:py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-3xl font-bold text-white">03</span>
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-sm font-mono text-gray-400 tracking-[0.2em] uppercase">
              {getTranslation(language, 'techStackProductionLabel')}
            </span>
            <div className="flex-1 h-px bg-white/10"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-green-400">{totalTools} {getTranslation(language, 'techStackToolsActive')}</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
            {getTranslation(language, 'techStackTitle')}
          </h2>
          
          <p className="text-base md:text-lg text-gray-400 max-w-3xl leading-relaxed">
            {getTranslation(language, 'techStackDescription')}
          </p>
        </div>
        
        {/* Phases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {phases.map((phase) => (
            <PhaseHUD
              key={phase.id}
              {...phase}
              isExpanded={expandedPhase === phase.id}
              isHovered={hoveredPhase === phase.id}
              onToggle={() => setExpandedPhase(expandedPhase === phase.id ? null : phase.id)}
              onHover={(val) => setHoveredPhase(val ? phase.id : null)}
              onOpenModal={() => setModalPhaseId(phase.id)}
              language={language}
            />
          ))}
        </div>
        
        {/* Strategy Bar - Transversal */}
        <div className="mb-16">
          <StrategyBar
            phase={strategyPhase}
            isHovered={hoveredStrategy}
            onHover={setHoveredStrategy}
            onOpenModal={() => setModalPhaseId(strategyPhase.id)}
            language={language}
          />
        </div>
        
        {/* Modal Fullscreen - Solo Desktop */}
        <FullscreenModal 
          phase={currentModalPhase} 
          isOpen={currentModalPhase !== null} 
          onClose={() => setModalPhaseId(null)} 
          language={language}
        />
        
        {/* Certificaciones */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-mono text-gray-500 tracking-widest uppercase">
              {getTranslation(language, 'techStackCertLabel')}
            </span>
            <div className="flex-1 h-px bg-white/5"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs font-mono text-green-400">{getTranslation(language, 'techStackCertVerified')}</span>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { code: 'CSWA', label: getTranslation(language, 'techStackCert1'), url: 'https://www.solidworks.com/certifications/mechanical-design-cswa-mechanical-design' },
              { code: 'CSWP', label: getTranslation(language, 'techStackCert2'), url: 'https://www.solidworks.com/certifications/solidworks-cad-design-professional' },
              { code: 'CSWP-SU', label: getTranslation(language, 'techStackCert3'), url: 'https://www.solidworks.com/es/certifications/surfacing-professional-cswp-su' }
            ].map((cert, i) => (
              <a
                key={cert.code}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center text-center transition-all duration-300 hover:scale-105"
              >
                <span className="text-5xl md:text-7xl font-bold text-white/20 group-hover:text-white transition-colors duration-300 font-mono tracking-tighter">
                  {cert.code}
                </span>
                <span className="mt-2 text-xs font-mono text-gray-500 group-hover:text-gray-300 uppercase tracking-widest transition-colors duration-300">
                  {cert.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes cubeRotate {
          0% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(90deg) rotateY(90deg); }
          50% { transform: rotateX(180deg) rotateY(180deg); }
          75% { transform: rotateX(270deg) rotateY(270deg); }
          100% { transform: rotateX(360deg) rotateY(360deg); }
        }
        
        @keyframes scanline {
          0%, 100% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes wrenchFloat {
          0%, 100% { transform: translateY(0) rotate(-15deg); }
          50% { transform: translateY(-5px) rotate(-10deg); }
        }
        
        @keyframes modalSlideIn {
          0% { 
            opacity: 0; 
            transform: scale(0.9) translateY(20px); 
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        @keyframes scanVertical {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        
        @keyframes scanHorizontal {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
        
        /* Custom HUD Scrollbar */
        .hud-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: var(--scrollbar-color) rgba(0, 0, 0, 0.3);
        }
        
        .hud-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .hud-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.4);
          border-radius: 4px;
          border: 1px solid rgba(var(--scrollbar-rgb), 0.2);
        }
        
        .hud-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(var(--scrollbar-rgb), 0.6) 0%,
            rgba(var(--scrollbar-rgb), 0.8) 50%,
            rgba(var(--scrollbar-rgb), 0.6) 100%
          );
          border-radius: 4px;
          border: 1px solid rgba(var(--scrollbar-rgb), 0.4);
          box-shadow: 0 0 10px rgba(var(--scrollbar-rgb), 0.3),
                      inset 0 0 5px rgba(var(--scrollbar-rgb), 0.2);
        }
        
        .hud-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(var(--scrollbar-rgb), 0.8) 0%,
            rgba(var(--scrollbar-rgb), 1) 50%,
            rgba(var(--scrollbar-rgb), 0.8) 100%
          );
          box-shadow: 0 0 15px rgba(var(--scrollbar-rgb), 0.5),
                      inset 0 0 8px rgba(var(--scrollbar-rgb), 0.3);
        }
        
        .hud-scrollbar::-webkit-scrollbar-thumb:active {
          background: var(--scrollbar-color);
          box-shadow: 0 0 20px rgba(var(--scrollbar-rgb), 0.7);
        }
        
        .hud-scrollbar::-webkit-scrollbar-corner {
          background: transparent;
        }
      `}</style>
    </section>
  );
}
