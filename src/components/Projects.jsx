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
  {
    slug: "sosterra",
    title: "SOSTERRA",
    titleKey: null, // Brand name - no translation needed
    tagKey: "projectBusinessStrategy",
    year: "2024",
    figRef: "FIG_04",
    image: "/images/projects/SosterraSHOT.png",
    imageTone: "from-[#d7f2e3] via-[#9fc3a8] to-[#3d5a4b]",
  },
];

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
        </div>
        
        {/* Footer de sección */}
        <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-[9px] font-mono tracking-wider text-gray-300 uppercase">
            TOTAL_PROJECTS: {projects.length}
          </span>
          <span className="text-[9px] font-mono tracking-wider text-gray-300 uppercase">
            STATUS: PORTFOLIO_ACTIVE
          </span>
        </div>
      </div>
    </section>
  );
}