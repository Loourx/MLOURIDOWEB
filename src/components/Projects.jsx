import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getTranslation } from '../data/translations';

const projectsBase = [
  {
    slug: "cupra",
    title: "CUPRA K2",
    titleKey: null, // Brand name - no translation needed
    tagKey: "projectAutomotive",
    year: "2025",
    figRef: "FIG_01",
    image: "/images/projects/CupraSHOT.png",
    imageTone: "from-[#d3b48c] via-[#c48a4c] to-[#824b17]",
  },
  {
    slug: "navantia",
    title: "NAVANTIA",
    titleKey: null, // Brand name - no translation needed
    tagKey: "projectAdditiveManufacturing",
    year: "2025",
    figRef: "FIG_02",
    image: "/images/projects/NavantiaSHOT.png",
    imageTone: "from-[#d7e2f6] via-[#a7b8d6] to-[#3e4a60]",
  },
  {
    slug: "mobiliario",
    title: "MOBILIARIO URBANO",
    titleKey: "projectTitleUrbanFurniture", // Needs translation
    tagKey: "projectProduct",
    year: "2024",
    figRef: "FIG_03",
    image: "/images/projects/PapelerasSHOT.jpg",
    imageTone: "from-[#f0ebe3] via-[#d0c4af] to-[#847a69]",
  },
];

// Coming Soon placeholder
const ComingSoonCard = ({ language }) => {
  return (
    <div
      data-reveal
      data-reveal-delay="440ms"
      className="group relative bg-gray-50 border border-gray-100 p-0 flex flex-col transition-colors duration-[50ms] hover:bg-gray-100"
    >
      {/* Área de imagen - placeholder con animación Nothing */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-gray-100 via-gray-50 to-white flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.02]">
        {/* Patrón de puntos animados estilo Nothing */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle, #d1d5db 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}></div>
        </div>
        
        {/* Puntos flotantes animados */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-gray-300 group-hover:bg-gray-400 rounded-full animate-pulse transition-colors duration-300"
              style={{
                left: `${15 + i * 15}%`,
                top: `${30 + (i % 3) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: '2s',
              }}
            />
          ))}
        </div>
        
        {/* Texto Coming Soon */}
        <div className="relative z-10 text-center">
          <p className="text-[10px] font-mono tracking-[0.3em] text-gray-400 group-hover:text-gray-500 uppercase mb-2 transition-colors duration-300">
            {getTranslation(language, 'comingSoonLoading')}
          </p>
          <h3 className="text-2xl font-bold tracking-tight text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
            {getTranslation(language, 'comingSoonTitle')}
          </h3>
          <div className="flex items-center justify-center gap-1 mt-3">
            <span className="w-1 h-1 bg-gray-300 group-hover:bg-gray-400 rounded-full animate-bounce transition-colors duration-300" style={{ animationDelay: '0s' }}></span>
            <span className="w-1 h-1 bg-gray-300 group-hover:bg-gray-400 rounded-full animate-bounce transition-colors duration-300" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-1 h-1 bg-gray-300 group-hover:bg-gray-400 rounded-full animate-bounce transition-colors duration-300" style={{ animationDelay: '0.4s' }}></span>
          </div>
        </div>
        
        {/* Referencia de figura */}
        <div className="absolute bottom-3 left-3 text-[9px] font-mono tracking-wider text-gray-300 group-hover:text-gray-400 bg-white/50 px-2 py-1 transition-colors duration-300">
          FIG_04
        </div>
        
        {/* Marcas de corte en esquinas */}
        <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-gray-200 group-hover:border-gray-300 transition-colors duration-300"></div>
        <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-gray-200 group-hover:border-gray-300 transition-colors duration-300"></div>
        <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-gray-200 group-hover:border-gray-300 transition-colors duration-300"></div>
        <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-gray-200 group-hover:border-gray-300 transition-colors duration-300"></div>
      </div>

      {/* Info del proyecto - placeholder */}
      <div className="p-5 border-t border-gray-100">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold tracking-tight mb-2 text-gray-300 group-hover:text-gray-400 transition-colors duration-[50ms]">
              — — —
            </h3>
            <p className="text-[10px] font-mono tracking-[0.15em] text-gray-300 group-hover:text-gray-400 uppercase transition-colors duration-[50ms]">
              {getTranslation(language, 'comingSoonTag')}
            </p>
          </div>
          
          {/* Botón con hover */}
          <span className="border border-gray-200 group-hover:border-gray-300 h-10 w-10 flex items-center justify-center text-sm text-gray-300 group-hover:text-gray-400 cursor-default transition-all duration-[50ms]">
            ○
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Projects() {
  const { language } = useLanguage();
  const projects = projectsBase;
  
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white noise-texture relative">
      {/* Cruces de corte en esquinas */}
      <div className="absolute top-6 left-6 text-[10px] text-gray-200 font-mono">+</div>
      <div className="absolute top-6 right-6 text-[10px] text-gray-200 font-mono">+</div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header con estilo técnico */}
        <div className="flex items-center gap-4 mb-4">
          <span className="section-index">01</span>
          <span className="text-[10px] font-mono text-gray-400 tracking-[0.2em] uppercase">
            // INDEX_PROJECTS [2024-2025]
          </span>
        </div>
        
        <div className="border-b border-gray-200 pb-8 mb-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p
                data-reveal
                data-reveal-delay="80ms"
                className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-mono mb-3"
              >
                {getTranslation(language, 'projectsLabel')}
              </p>
              <h2
                data-reveal
                data-reveal-delay="120ms"
                className="text-4xl md:text-5xl font-bold tracking-tighter"
              >
                {getTranslation(language, 'projectsTitle')}
              </h2>
            </div>
            <p
              data-reveal
              data-reveal-delay="200ms"
              className="text-base text-gray-500 md:max-w-sm font-light leading-relaxed"
            >
              {getTranslation(language, 'projectsContent')}
            </p>
          </div>
        </div>

        {/* Grid estricto estilo blueprint - SIN SOMBRAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-200 relative z-[9999]">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/project/${project.slug}`}
              data-reveal
              data-reveal-delay={`${200 + index * 80}ms`}
              className="group relative bg-white border border-gray-100 p-0 flex flex-col transition-colors duration-[50ms] hover:bg-gray-50"
            >
              {/* Imagen con efecto zoom en hover */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                />
                
                {/* Referencia de figura estilo técnico */}
                <div className="absolute bottom-3 left-3 text-[9px] font-mono tracking-wider text-white/70 bg-black/20 px-2 py-1">
                  {project.figRef}
                </div>
                
                {/* Marcas de corte en esquinas de imagen */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-white/30"></div>
                <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-white/30"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-white/30"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-white/30"></div>
              </div>

              {/* Info del proyecto */}
              <div className="p-5 border-t border-gray-100">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-black transition-colors duration-[50ms]">
                      {project.titleKey ? getTranslation(language, project.titleKey) : project.title}
                    </h3>
                    <p className="text-[10px] font-mono tracking-[0.15em] text-gray-400 uppercase">
                      [{getTranslation(language, project.tagKey)}] // {project.year}
                    </p>
                  </div>
                  
                  {/* Botón con hover mecánico instantáneo */}
                  <span className="border border-gray-300 h-10 w-10 flex items-center justify-center text-sm text-gray-400 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-[50ms]">
                    →
                  </span>
                </div>
              </div>
              
              {/* Línea de conexión decorativa */}
              <div className="absolute -right-px top-1/2 w-2 h-px bg-gray-200 hidden md:block"></div>
            </Link>
          ))}
          
          {/* Coming Soon Card */}
          <ComingSoonCard language={language} />
        </div>
        
        {/* Footer de sección */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-wider text-gray-300 uppercase">
            TOTAL_PROJECTS: {projects.length + 1}
          </span>
          <span className="text-[9px] font-mono tracking-wider text-gray-300 uppercase">
            STATUS: PORTFOLIO_ACTIVE
          </span>
        </div>
      </div>
    </section>
  );
}