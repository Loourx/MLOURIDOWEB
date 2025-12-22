// Datos de Proyectos - Base Central
export const projectsData = {
  cupra: {
    slug: "cupra",
    title: "CUPRA K2",
    category: "Automotive Design & Strategy",
    year: "2025",
    
    // Hero Section (Primera foto a sangre - invariable)
    hero: {
      image: "/images/projects/cupra-hero.png",
      role: "Design Engineering",
      client: "CUPRA",
    },

    // Estructura siguiendo la presentación
    sections: [
      // ═══════════════════════════════════════════════════════════════
      // 1. INTRODUCCIÓN
      // ═══════════════════════════════════════════════════════════════
      {
        id: "intro",
        phase: "01",
        title: "Introducción",
        titleEn: "Introduction",
        type: "text-only",
        content: {
          hook: "Un refugio de montaña sobre ruedas. Para el esquiador que busca perfección.",
          hookEn: "A mountain refuge on wheels. For the skier seeking perfection.",
          description: "Redefiniendo la tipología SUV para 2035. El vehículo como preparación activa para la experiencia.",
          descriptionEn: "Redefining SUV typology for 2035. The vehicle as active preparation for the experience.",
        }
      },

      // ═══════════════════════════════════════════════════════════════
      // 2. FASE CONCEPTUAL
      // ═══════════════════════════════════════════════════════════════
      {
        id: "concept-intro",
        phase: "02",
        title: "Fase Conceptual",
        titleEn: "Conceptual Phase",
        type: "phase-header",
        subsections: ["Conceptualización Inicial", "Dimensionamiento", "Interior Conceptual", "Interior Final"]
      },
      {
        id: "initial-design",
        phase: "02",
        subtitle: "Conceptualización Inicial",
        subtitleEn: "Initial Conceptualization",
        type: "image-left",
        image: "/images/projects/cupra-initial-design.png",
        content: {
          title: "Exploración Formal",
          titleEn: "Form Exploration",
          description: "Definición del lenguaje visual y carácter del vehículo.",
          descriptionEn: "Defining visual language and vehicle character.",
        }
      },
      {
        id: "dimensioning",
        phase: "02",
        subtitle: "Dimensionamiento e Ingeniería",
        subtitleEn: "Dimensioning & Engineering",
        type: "image-right",
        image: "/images/projects/cupra-dimensioning.png",
        content: {
          title: "Package Técnico",
          titleEn: "Technical Package",
          description: "Concepto sobre retícula técnica. Validación dimensional.",
          descriptionEn: "Concept on technical grid. Dimensional validation.",
        }
      },
      {
        id: "interior-concept",
        phase: "02",
        subtitle: "Conceptualización del Interior",
        subtitleEn: "Interior Conceptualization",
        type: "image-left",
        image: "/images/projects/cupra-interior-concept.png",
        content: {
          title: "Elementos Únicos",
          titleEn: "Unique Elements",
          description: "Volantes, asientos e interiores con formas orgánicas.",
          descriptionEn: "Steering wheels, seats and interiors with organic forms.",
        }
      },
      {
        id: "interior-final",
        phase: "02",
        subtitle: "Interior Final",
        subtitleEn: "Final Interior",
        type: "image-right",
        image: "/images/projects/cupra-interior-final.png",
        content: {
          title: "Layout Definitivo",
          titleEn: "Final Layout",
          description: "Columna central de esquís como elemento escultórico.",
          descriptionEn: "Central ski column as sculptural element.",
        }
      },

      // ═══════════════════════════════════════════════════════════════
      // 3. FASE DE DESARROLLO
      // ═══════════════════════════════════════════════════════════════
      {
        id: "dev-intro",
        phase: "03",
        title: "Fase de Desarrollo",
        titleEn: "Development Phase",
        type: "phase-header",
        subsections: ["Identidad Corporativa", "UX/UI", "HMI", "Modelado CAD"]
      },
      {
        id: "branding",
        phase: "03",
        subtitle: "Identidad Corporativa",
        subtitleEn: "Corporate Identity",
        type: "image-left",
        image: "/images/projects/cupra-branding.png",
        content: {
          title: "Branding K2",
          titleEn: "K2 Branding",
          description: "Naming, logos y sistema visual completo.",
          descriptionEn: "Naming, logos and complete visual system.",
        }
      },
      {
        id: "uxui",
        phase: "03",
        subtitle: "UX/UI",
        type: "image-right",
        image: "/images/projects/cupra-ui.png",
        content: {
          title: "Experiencia de Usuario",
          titleEn: "User Experience",
          description: "User journeys y ecosistema digital del vehículo.",
          descriptionEn: "User journeys and vehicle digital ecosystem.",
        }
      },
      {
        id: "hmi",
        phase: "03",
        subtitle: "HMI",
        type: "image-left",
        image: "/images/projects/cupra-hmi.png",
        content: {
          title: "Interfaces",
          titleEn: "Interfaces",
          description: "Pantallas, controles y sistemas de feedback.",
          descriptionEn: "Displays, controls and feedback systems.",
        }
      },
      {
        id: "modeling",
        phase: "03",
        subtitle: "Modelado CAD",
        subtitleEn: "CAD Modeling",
        type: "image-right",
        image: "/images/projects/cupra-clay.png", 
        content: {
          title: "Subdivision Surface",
          titleEn: "Subdivision Surface",
          description: "Modelado profesional en Blender. Topología optimizada.",
          descriptionEn: "Professional Blender modeling. Optimized topology.",
        }
      },

      // ═══════════════════════════════════════════════════════════════
      // 4. FASE FINAL
      // ═══════════════════════════════════════════════════════════════
      {
        id: "final-intro",
        phase: "04",
        title: "Fase Final",
        titleEn: "Final Phase",
        type: "phase-header",
        subsections: ["Renders Exteriores Finales", "Renders Interiores Finales", "Detalle de Columna de Esquís", "Puesta en Escena", "CMF"]
      },
      {
        id: "renders-exterior",
        phase: "04",
        subtitle: "Renders Exteriores Finales",
        subtitleEn: "Final Exterior Renders",
        type: "image-left",
        image: "/images/projects/cupra-render-exterior.png",
        content: {
          title: "Visualización Exterior",
          titleEn: "Exterior Visualization",
          description: "Renders fotorrealistas del diseño exterior en contexto.",
          descriptionEn: "Photorealistic renders of exterior design in context.",
        }
      },
      {
        id: "renders-interior",
        phase: "04",
        subtitle: "Renders Interiores Finales",
        subtitleEn: "Final Interior Renders",
        type: "image-right",
        image: "/images/projects/cupra-render-interior.png",
        content: {
          title: "Visualización Interior",
          titleEn: "Interior Visualization",
          description: "Experiencia interior y detalles de acabados.",
          descriptionEn: "Interior experience and finishing details.",
        }
      },
      {
        id: "ski-column",
        phase: "04",
        subtitle: "Detalle de Columna de Esquís",
        subtitleEn: "Ski Column Detail",
        type: "image-left",
        image: "/images/projects/cupra-ski-column.jpg",
        content: {
          title: "Almacenamiento de Esquís",
          titleEn: "Ski Storage",
          description: "Columna central escultórica para transporte seguro de equipos.",
          descriptionEn: "Central sculptural column for safe equipment transport.",
        }
      },
      {
        id: "staging",
        phase: "04",
        subtitle: "Puesta en Escena",
        subtitleEn: "Staging",
        type: "image-right",
        image: "/images/projects/cupra-staging.png",
        content: {
          title: "Contexto de Uso",
          titleEn: "Use Context",
          description: "El vehículo en su entorno natural de montaña.",
          descriptionEn: "Vehicle in its natural mountain environment.",
        }
      },
      {
        id: "cmf",
        phase: "04",
        subtitle: "CMF",
        type: "image-left",
        image: "/images/projects/cupra-cmf.png",
        content: {
          title: "Color, Material & Finish",
          titleEn: "Color, Material & Finish",
          description: "Paleta inspirada en alta montaña. Acabados mate y textiles técnicos.",
          descriptionEn: "High mountain inspired palette. Matte finishes and technical textiles.",
        }
      },
      
      // ═══════════════════════════════════════════════════════════════
      // 5. SECCIÓN DE VIDEO (OPCIONAL)
      // ═══════════════════════════════════════════════════════════════
      {
        id: "final-video",
        phase: "05",
        title: "Presentación Final",
        titleEn: "Final Presentation", 
        type: "video",
        video: {
          // OPCIÓN 1: Video local (MP4 optimizado)
          url: "/videos/cupra-final-presentation.mp4",
          poster: "/images/projects/cupra-video-poster.png",
          title: "CUPRA K2 - Presentación Final",
          titleEn: "CUPRA K2 - Final Presentation",
          description: "Video completo del proceso de diseño y resultado final del proyecto.",
          descriptionEn: "Complete video of the design process and final project result.",
          
          // OPCIÓN 2: Video de YouTube (comentar la opción 1 y descomentar esta)
          // url: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
          // title: "CUPRA K2 - Presentación Final",
          // titleEn: "CUPRA K2 - Final Presentation", 
          // description: "Video completo del proceso de diseño y resultado final del proyecto.",
          // descriptionEn: "Complete video of the design process and final project result.",
        },
        content: {
          title: "Proceso y Resultado",
          titleEn: "Process and Result",
          description: "Síntesis visual del proyecto completo desde concepto hasta implementación.",
          descriptionEn: "Visual synthesis of the complete project from concept to implementation.",
        }
      },
    ],

    // Next Project
    nextProject: {
      slug: "navantia",
      title: "NAVANTIA",
      tag: "Additive Manufacturing",
    },
  },

  navantia: {
    slug: "navantia",
    title: "NAVANTIA",
    category: "Additive Manufacturing & Prototyping",
    year: "2025",
    
    hero: {
      image: "/images/projects/navantia-hero.jpg",
      role: "Strategic Design",
      client: "NAVANTIA",
    },

    sections: [
      {
        id: "intro",
        phase: "01",
        title: "Introducción",
        titleEn: "Introduction",
        type: "text-only",
        content: {
          hook: "Revolucionando la fabricación naval con impresión 3D de gran escala.",
          hookEn: "Revolutionizing naval manufacturing with large-scale 3D printing.",
          description: "Optimización de procesos de manufactura tradicionales mediante tecnología aditiva avanzada.",
          descriptionEn: "Optimization of traditional manufacturing processes through advanced additive technology.",
        }
      },
    ],

    nextProject: {
      slug: "sosterra",
      title: "SOSTERRA",
      tag: "Business Strategy",
    },
  },

  sosterra: {
    slug: "sosterra",
    title: "SOSTERRA",
    category: "Business Strategy & Branding",
    year: "2024",
    
    hero: {
      image: "/images/projects/sosterra-hero.jpg",
      role: "Strategy & Brand",
      client: "SOSTERRA",
    },

    sections: [
      {
        id: "intro",
        phase: "01",
        title: "Introducción",
        titleEn: "Introduction",
        type: "text-only",
        content: {
          hook: "Posicionamiento de marca para una startup de sostenibilidad ambiental.",
          hookEn: "Brand positioning for an environmental sustainability startup.",
          description: "Research estratégico, arquetipos de marca y ecosistema visual completo.",
          descriptionEn: "Strategic research, brand archetypes and complete visual ecosystem.",
        }
      },
    ],

    nextProject: {
      slug: "cupra",
      title: "CUPRA K2",
      tag: "Automotive Design",
    },
  },
};

// Función auxiliar para obtener proyecto
export const getProject = (slug) => projectsData[slug];

// Función para obtener todos los slugs (para rutas dinámicas)
export const getAllProjectSlugs = () => Object.keys(projectsData);
