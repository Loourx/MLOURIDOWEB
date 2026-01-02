// Datos de Proyectos - Base Central
export const projectsData = {
  cupra: {
    slug: "cupra",
    title: "CUPRA K2",
    category: "Diseño de Automoción & Estrategia",
    categoryEn: "Automotive Design & Strategy",
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
      // 0. INTRODUCCIÓN
      // ═══════════════════════════════════════════════════════════════
      {
        id: "intro",
        phase: "00",
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
      // 1. FASE CONCEPTUAL
      // ═══════════════════════════════════════════════════════════════
      {
        id: "concept-intro",
        phase: "01",
        title: "Fase Conceptual",
        titleEn: "Conceptual Phase",
        type: "phase-header",
        subsections: ["Conceptualización Inicial", "Dimensionamiento", "Interior Conceptual", "Interior Final"],
        subsectionsEn: ["Initial Conceptualization", "Dimensioning", "Conceptual Interior", "Final Interior"]
      },
      {
        id: "initial-design",
        phase: "01",
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
        phase: "01",
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
        phase: "01",
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
        phase: "01",
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
      // 2. FASE DE DESARROLLO
      // ═══════════════════════════════════════════════════════════════
      {
        id: "dev-intro",
        phase: "02",
        title: "Fase de Desarrollo",
        titleEn: "Development Phase",
        type: "phase-header",
        subsections: ["Identidad Corporativa", "UX/UI", "HMI", "Modelado CAD"],
        subsectionsEn: ["Corporate Identity", "UX/UI", "HMI", "CAD Modeling"]
      },
      {
        id: "branding",
        phase: "02",
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
        phase: "02",
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
        phase: "02",
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
        phase: "02",
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
      // 3. FASE FINAL
      // ═══════════════════════════════════════════════════════════════
      {
        id: "final-intro",
        phase: "03",
        title: "Fase Final",
        titleEn: "Final Phase",
        type: "phase-header",
        subsections: ["Renders Exteriores Finales", "Renders Interiores Finales", "Detalle de Columna de Esquís", "Puesta en Escena", "CMF"],
        subsectionsEn: ["Final Exterior Renders", "Final Interior Renders", "Ski Column Detail", "Staging", "CMF"]
      },
      {
        id: "renders-exterior",
        phase: "03",
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
        phase: "03",
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
        phase: "03",
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
        phase: "03",
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
        phase: "03",
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
      // 4. SECCIÓN DE PANELES (Presentación visual)
      // ═══════════════════════════════════════════════════════════════
      {
        id: "panels",
        phase: "04",
        title: "Paneles de Proyecto",
        titleEn: "Project Panels",
        type: "panels",
        images: [
          "/images/projects/cupra/panels/panel-1.png",
          "/images/projects/cupra/panels/panel-2.png"
        ],
        content: {
          title: "Presentación Visual",
          titleEn: "Visual Presentation",
          description: "Paneles de alta resolución con el resumen visual del proyecto completo.",
          descriptionEn: "High resolution panels with the visual summary of the complete project.",
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
          // OPCIÓN 1: Video de YouTube (ACTIVA)
          // Para activar YouTube: usar URL format: "https://www.youtube.com/watch?v=VIDEO_ID"
          // El sistema detectará automáticamente si es YouTube o MP4 local
          url: "https://youtu.be/u0du4zW_xFU", // Reemplazar VIDEO_ID_HERE con el ID real
          title: "CUPRA K2 - Presentación Final",
          titleEn: "CUPRA K2 - Final Presentation",
          description: "Video completo del proceso de diseño y resultado final del proyecto.",
          descriptionEn: "Complete video of the design process and final project result.",
          
          // OPCIÓN 2: Video local MP4 (descomentar si se prefiere local)
          // url: "/videos/cupra-final-presentation.mp4",
          // poster: "/images/projects/cupra-video-poster.png",
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
    title: "NAVANTIA BHC",
    category: "Fabricación Aditiva & Diseño Naval",
    categoryEn: "Additive Manufacturing & Naval Design",
    year: "2024",
    
    hero: {
      image: "/images/projects/navantia-hero.png ",
      role: "Design Engineering",
      client: "NAVANTIA",
    },

    sections: [
      // ═══════════════════════════════════════════════════════════════
      // 0. INTRODUCCIÓN
      // ═══════════════════════════════════════════════════════════════
      {
        id: "intro",
        phase: "00",
        title: "Introducción",
        titleEn: "Introduction",
        type: "text-only",
        content: {
          hook: "Fabricación aditiva naval a gran escala. Un palo de mástil que desafía los límites de la impresión 3D.",
          hookEn: "Large-scale naval additive manufacturing. A mast pole that challenges the limits of 3D printing.",
          description: "Diseño de un palo modular para el Buque Hidrográfico Costero (BHC) de 47m de eslora mediante fabricación aditiva FDM, integrando radares, antenas y sistemas de comunicación mientras cumple estrictos requisitos normativos navales.",
          descriptionEn: "Design of a modular mast for the 47m Coastal Hydrographic Vessel (BHC) using FDM additive manufacturing, integrating radars, antennas and communication systems while meeting strict naval regulatory requirements.",
        }
      },

      // ═══════════════════════════════════════════════════════════════
      // 1. FASE DE ANÁLISIS
      // ═══════════════════════════════════════════════════════════════
      {
        id: "analysis-intro",
        phase: "01",
        title: "Fase de Análisis",
        titleEn: "Analysis Phase",
        type: "phase-header",
        subsections: ["Contexto del Buque", "Desafíos del Proyecto", "Especificaciones Técnicas"],
        subsectionsEn: ["Vessel Context", "Project Challenges", "Technical Specifications"]
      },
      {
        id: "vessel-context",
        phase: "01",
        subtitle: "Contexto del Buque",
        subtitleEn: "Vessel Context",
        type: "image-left",
        image: "/images/projects/navantia-vessel-context.png",
        content: {
          title: "Buque Hidrográfico Costero",
          titleEn: "Coastal Hydrographic Vessel",
          description: "El BHC de 47 metros de eslora está diseñado para operaciones hidrográficas en aguas costeras. Su palo de mástil debe integrar múltiples sistemas de navegación, comunicaciones y sensorización en un ambiente marino exigente.",
          descriptionEn: "The 47-meter BHC is designed for hydrographic operations in coastal waters. Its mast pole must integrate multiple navigation, communication and sensing systems in a demanding marine environment.",
        }
      },
      {
        id: "problem",
        phase: "01",
        subtitle: "Integración de Sistemas",
        subtitleEn: "Systems Integration",
        type: "image-right",
        image: "/images/projects/navantia-problem.png",
        content: {
          title: "Distribución de Cargas",
          titleEn: "Load Distribution",
          description: "Diagrama de los cinco elementos tecnológicos y de telecomunicaciones a integrar: Radar Banda X (90kg), Radar Banda S (135kg), 2x Antenas U/V (30kg c/u), antenas patch y anemómetros. Gestión crítica de pesos y posicionamiento.",
          descriptionEn: "Diagram of the five technological and telecommunications elements to integrate: X-Band Radar (90kg), S-Band Radar (135kg), 2x U/V Antennas (30kg each), patch antennas and anemometers. Critical weight and positioning management.",
        }
      },
      {
        id: "requirements",
        phase: "01",
        subtitle: "Cobertura Radar",
        subtitleEn: "Radar Coverage",
        type: "image-left",
        image: "/images/projects/navantia-requirements.png",
        content: {
          title: "Eliminación de Zonas Muertas",
          titleEn: "Dead Zone Elimination",
          description: "Esquema de diseño para evitar sombras y zonas muertas en la cobertura radar. Posicionamiento estratégico de antenas para garantizar barrido completo 360° sin interferencias entre sistemas.",
          descriptionEn: "Design scheme to avoid shadows and dead zones in radar coverage. Strategic antenna positioning to ensure complete 360° sweep without interference between systems.",
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
        subsections: ["Propuesta Pragmática", "Propuesta Creativa", "Propuesta Desbarre"],
        subsectionsEn: ["Pragmatic Proposal", "Creative Proposal", "Disruptive Proposal"]
      },
      {
        id: "pragmatic",
        phase: "02",
        subtitle: "Propuesta Pragmática",
        subtitleEn: "Pragmatic Proposal",
        type: "image-left",
        image: "/images/projects/navantia-pragmatic.png",
        content: {
          title: "Diseño Original",
          titleEn: "Original Design",
          description: "Distribución de impresión 3D del palo original. Análisis de cómo se planteaba fabricar el mástil mediante fabricación aditiva convencional antes del rediseño.",
          descriptionEn: "3D printing distribution of the original mast. Analysis of how the mast was planned to be manufactured using conventional additive manufacturing before the redesign.",
        }
      },
      {
        id: "creative",
        phase: "02",
        subtitle: "Propuesta Creativa",
        subtitleEn: "Creative Proposal",
        type: "image-right",
        image: "/images/projects/navantia-creative.png",
        content: {
          title: "Sistema Dual Outer-Inner",
          titleEn: "Dual Outer-Inner System",
          description: "Concepto de reconstrucción basado en sistema dual: carcasa exterior (outer) y estructura interior (inner). Simplificación de la geometría de cabeza para implementación de radares e incremento de estructura interior como celosía para mayor rigidez.",
          descriptionEn: "Reconstruction concept based on dual system: outer shell and inner structure. Head geometry simplification for radar implementation and increased interior lattice structure for greater rigidity.",
        }
      },
      {
        id: "desbarre",
        phase: "02",
        subtitle: "Propuesta Desbarre",
        subtitleEn: "Disruptive Proposal",
        type: "image-left",
        image: "/images/projects/navantia-desbarre.png",
        content: {
          title: "Rediseño Modular",
          titleEn: "Modular Redesign",
          description: "Nuevo diseño con sistema de doble vaso para el cuerpo, rediseño de las partes superiores y visualización de las bandejas de impresión necesarias para fabricación a tamaño real.",
          descriptionEn: "New design with double vase system for the body, redesign of upper parts and visualization of print beds required for full-size manufacturing.",
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
        subsections: ["Estrategia de Impresión", "Sistema Híbrido", "Acceso y Mantenimiento"],
        subsectionsEn: ["Printing Strategy", "Hybrid System", "Access & Maintenance"]
      },
      {
        id: "printing-strategy",
        phase: "03",
        subtitle: "Impresión a 45°",
        subtitleEn: "45° Printing",
        type: "image-left",
        image: "/images/projects/navantia-printing.png",
        content: {
          title: "Impresión Física Inclinada",
          titleEn: "Tilted Physical Printing",
          description: "Innovación revolucionaria: la impresora fabrica físicamente a 45 grados (referencia: barco Universidad de Maine). Dos capas exteriores impresas a 45° y -45° respectivamente, combinadas con celosía interior de perfiles de fibra de vidrio para resistencia a torsión y cargas estructurales.",
          descriptionEn: "Revolutionary innovation: the printer physically manufactures at 45 degrees (reference: University of Maine boat). Two outer layers printed at 45° and -45° respectively, combined with interior lattice of fiberglass profiles for torsion and structural load resistance.",
        }
      },
      {
        id: "hybrid-system",
        phase: "03",
        subtitle: "Prototipado Escalado",
        subtitleEn: "Scaled Prototyping",
        type: "image-right",
        image: "/images/projects/navantia-hybrid.png",
        content: {
          title: "Validación en Slicer",
          titleEn: "Slicer Validation",
          description: "Display de piezas en el slicer para prototipado rápido. El diseño para la impresora industrial de Navantia se dividió y adaptó para impresoras domésticas, permitiendo validar el concepto a escala antes de la fabricación real.",
          descriptionEn: "Parts display in slicer for rapid prototyping. The design for Navantia's industrial printer was divided and adapted for desktop printers, allowing concept validation at scale before actual manufacturing.",
        }
      },
      {
        id: "maintenance",
        phase: "03",
        subtitle: "Proceso de Fabricación",
        subtitleEn: "Manufacturing Process",
        type: "image-left",
        image: "/images/projects/navantia-maintenance.png",
        content: {
          title: "Impresión y Soportes",
          titleEn: "Printing & Supports",
          description: "Impresoras funcionando durante el prototipado escalado. Piezas impresas con material de soporte orgánico y adaptaciones necesarias para viabilizar la propuesta en prototipado rápido doméstico.",
          descriptionEn: "Printers working during scaled prototyping. Parts printed with organic support material and necessary adaptations to make the proposal viable for domestic rapid prototyping.",
        }
      },

      // ═══════════════════════════════════════════════════════════════
      // 4. FASE FINAL - VALIDACIÓN
      // ═══════════════════════════════════════════════════════════════
      {
        id: "final-intro",
        phase: "04",
        title: "Fase de Validación",
        titleEn: "Validation Phase",
        type: "phase-header",
        subsections: ["Maqueta a Escala", "Especificaciones Técnicas"],
        subsectionsEn: ["Scale Model", "Technical Specifications"]
      },
      {
        id: "scale-model",
        phase: "04",
        subtitle: "Datos de Prototipado",
        subtitleEn: "Prototyping Data",
        type: "image-left",
        image: "/images/projects/navantia-model.png",
        content: {
          title: "Montaje y Ensamblaje",
          titleEn: "Assembly Process",
          description: "Datos técnicos de impresión del prototipo escalado. Proceso de montaje manual con cianoacrilato, ensamblaje de componentes y resultado final del mástil a escala reducida.",
          descriptionEn: "Technical printing data for the scaled prototype. Manual assembly process with cyanoacrylate, component assembly and final result of the reduced scale mast.",
        }
      },
      {
        id: "specs",
        phase: "04",
        subtitle: "Resultado Final",
        subtitleEn: "Final Result",
        type: "image-right",
        image: "/images/projects/navantia-specs.png",
        content: {
          title: "Prototipo vs CAD",
          titleEn: "Prototype vs CAD",
          description: "Comparativa del resultado final: prototipo escalado impreso junto al modelo CAD del diseño a tamaño real para Navantia. Validación completa del rediseño modular del palo de mástil.",
          descriptionEn: "Final result comparison: scaled printed prototype alongside the CAD model of the full-size design for Navantia. Complete validation of the modular mast redesign.",
        }
      },

    ],

    nextProject: {
      slug: "mobiliario",
      title: "MOBILIARIO URBANO",
      titleEn: "URBAN FURNITURE",
      tag: "Mobiliario Urbano",
      tagEn: "Urban Furniture",
    },
  },

  mobiliario: {
    slug: "mobiliario",
    title: "MOBILIARIO URBANO",
    titleEn: "URBAN FURNITURE",
    category: "Mobiliario Urbano & Diseño de Producto",
    categoryEn: "Urban Furniture & Product Design",
    year: "2024",
    
    hero: {
      image: "/images/projects/mobiliario-hero.jpg",
      role: "Product Design",
      client: "FORMATO VERDE + FRUTO DS",
    },

    sections: [
      // ═══════════════════════════════════════════════════════════════
      // 0. INTRODUCCIÓN
      // ═══════════════════════════════════════════════════════════════
      {
        id: "intro",
        phase: "00",
        title: "Introducción",
        titleEn: "Introduction",
        type: "text-only",
        content: {
          hook: "Diseño de mobiliario urbano para la gestión sostenible de residuos.",
          hookEn: "Urban furniture design for sustainable waste management.",
          description: "Proyecto académico en colaboración con Formato Verde (fundada en 2001) y Fruto DS. Desarrollo integral de papeleras y contenedores de carga lateral y trasera de 800L y 1100L.",
          descriptionEn: "Academic project in collaboration with Formato Verde (founded 2001) and Fruto DS. Comprehensive development of litter bins and side/rear loading containers of 800L and 1100L.",
        }
      },

      // ═══════════════════════════════════════════════════════════════
      // 1. FASE DE ANÁLISIS
      // ═══════════════════════════════════════════════════════════════
      {
        id: "analysis-intro",
        phase: "01",
        title: "Fase de Análisis",
        titleEn: "Analysis Phase",
        type: "phase-header",
        subsections: ["Contexto del Proyecto", "Benchmarking"],
        subsectionsEn: ["Project Context", "Benchmarking"]
      },
      {
        id: "context",
        phase: "01",
        subtitle: "Contexto del Proyecto",
        subtitleEn: "Project Context",
        type: "image-left",
        image: "/images/projects/mobiliario-context.png",
        content: {
          title: "Formato Verde + Fruto DS",
          titleEn: "Formato Verde + Fruto DS",
          description: "Colaboración con empresa especializada en equipamiento para recogida de residuos desde 2001. Proyecto enfocado en dos líneas: papeleras (trabajo grupal) y contenedores (desarrollo individual).",
          descriptionEn: "Collaboration with company specialized in waste collection equipment since 2001. Project focused on two lines: litter bins (group work) and containers (individual development).",
        }
      },
      {
        id: "benchmarking",
        phase: "01",
        subtitle: "Benchmarking",
        subtitleEn: "Benchmarking",
        type: "image-right",
        image: "/images/projects/mobiliario-benchmarking.png",
        content: {
          title: "Análisis de Mercado",
          titleEn: "Market Analysis",
          description: "Estudio exhaustivo de competidores, análisis de soluciones existentes en mobiliario urbano y sistemas de recogida. Identificación de oportunidades de mejora y diferenciación.",
          descriptionEn: "Comprehensive competitor study, analysis of existing solutions in urban furniture and collection systems. Identification of improvement and differentiation opportunities.",
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
        subsections: ["Ideación Inicial", "Formalización", "Modelado 3D"],
        subsectionsEn: ["Initial Ideation", "Formalization", "3D Modeling"]
      },
      {
        id: "initial-ideation",
        phase: "02",
        subtitle: "Ideación Inicial",
        subtitleEn: "Initial Ideation",
        type: "image-left",
        image: "/images/projects/mobiliario-containers-sketches.png",
        content: {
          title: "Bocetos y Digitalización",
          titleEn: "Sketches & Digitalization",
          description: "Bocetos a mano sobre retícula ortogonal explorando configuraciones volumétricas. Digitalización en Illustrator para definir proporciones y sistemas de apertura.",
          descriptionEn: "Hand sketches on orthogonal grid exploring volumetric configurations. Illustrator digitalization to define proportions and opening systems.",
        }
      },
      {
        id: "formalization",
        phase: "02",
        subtitle: "Formalización",
        subtitleEn: "Formalization",
        type: "image-right",
        image: "/images/projects/mobiliario-bins-sketches.png",
        content: {
          title: "Desarrollo Vectorial",
          titleEn: "Vector Development",
          description: "Formalización de conceptos en planos vectoriales e isométricos. Definición de detalles constructivos y preparación para modelado tridimensional.",
          descriptionEn: "Concept formalization in vector drawings and isometrics. Definition of construction details and preparation for 3D modeling.",
        }
      },
      {
        id: "3d-modeling",
        phase: "02",
        subtitle: "Modelado 3D",
        subtitleEn: "3D Modeling",
        type: "image-left",
        image: "/images/projects/mobiliario-cad.png",
        aspectRatio: "16/9",
        content: {
          title: "Modelado Paramétrico",
          titleEn: "Parametric Modeling",
          description: "Modelado CAD de papeleras y contenedores. Validación volumétrica, verificación de interferencias y preparación para visualización final.",
          descriptionEn: "CAD modeling of litter bins and containers. Volumetric validation, interference checking and preparation for final visualization.",
        }
      },

      // ═══════════════════════════════════════════════════════════════
      // 3. FASE FINAL
      // ═══════════════════════════════════════════════════════════════
      {
        id: "final-intro",
        phase: "03",
        title: "Fase Final",
        titleEn: "Final Phase",
        type: "phase-header",
        subsections: ["Papeleras B&N", "Papeleras en Contexto", "Contenedores B&N", "Contenedores en Contexto"],
        subsectionsEn: ["Litter Bins B&W", "Litter Bins in Context", "Containers B&W", "Containers in Context"]
      },
      {
        id: "bins-bw",
        phase: "03",
        subtitle: "Papeleras B&N",
        subtitleEn: "Litter Bins B&W",
        type: "image-left",
        image: "/images/projects/mobiliario-bins-bw.png",
        content: {
          title: "Render Final - Papeleras",
          titleEn: "Final Render - Litter Bins",
          description: "Visualización en blanco y negro de la propuesta final de papelera. Definición clara de formas, proporciones y detalles constructivos.",
          descriptionEn: "Black and white visualization of the final litter bin proposal. Clear definition of shapes, proportions and construction details.",
        }
      },
      {
        id: "bins-context",
        phase: "03",
        subtitle: "Papeleras en Contexto",
        subtitleEn: "Litter Bins in Context",
        type: "image-right",
        image: "/images/projects/mobiliario-bins-context.png",
        content: {
          title: "Papeleras en Uso",
          titleEn: "Litter Bins in Use",
          description: "Renders fotorrealistas de las papeleras en entornos urbanos reales. Propuesta cromática y validación visual del diseño en escenarios de uso.",
          descriptionEn: "Photorealistic renders of litter bins in real urban environments. Color proposal and visual validation of design in use scenarios.",
        }
      },
      {
        id: "containers-bw",
        phase: "03",
        subtitle: "Contenedores B&N",
        subtitleEn: "Containers B&W",
        type: "image-left",
        image: "/images/projects/mobiliario-containers-bw.png",
        content: {
          title: "Render Final - Contenedores",
          titleEn: "Final Render - Containers",
          description: "Visualización en blanco y negro de contenedores de 800L y 1100L. Definición de mecanismos, proporciones y sistemas de carga.",
          descriptionEn: "Black and white visualization of 800L and 1100L containers. Definition of mechanisms, proportions and loading systems.",
        }
      },
      {
        id: "containers-context",
        phase: "03",
        subtitle: "Contenedores en Contexto",
        subtitleEn: "Containers in Context",
        type: "image-right",
        image: "/images/projects/mobiliario-containers-context.png",
        content: {
          title: "Contenedores en Uso",
          titleEn: "Containers in Use",
          description: "Contenedores renderizados en contexto urbano. Visualización de variantes cromáticas y configuraciones de carga en situación real de uso.",
          descriptionEn: "Containers rendered in urban context. Visualization of color variants and loading configurations in real use situation.",
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
    category: "Estrategia de Negocio & Branding",
    categoryEn: "Business Strategy & Branding",
    year: "2024",
    
    hero: {
      image: "/images/projects/sosterra-hero.jpg",
      role: "Strategy & Brand",
      client: "SOSTERRA",
    },

    sections: [
      {
        id: "intro",
        phase: "00",
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
