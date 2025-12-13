// Datos de Proyectos - Base Central
export const projectsData = {
  cupra: {
    slug: "cupra",
    title: "CUPRA K2",
    category: "Automotive Design & Strategy",
    year: "2025",
    
    // Hero Section
    hero: {
      image: "/images/projects/cupra-hero.jpg",
      role: "Design Engineering",
      client: "CUPRA",
    },

    // Intro Section
    intro: {
      hook: "Más que un SUV, un refugio de montaña. Diseñado para el esquiador que busca la perfección en el proceso, no solo en el destino.",
      challenge: "Redefinir la tipología SUV para 2035. El objetivo era romper los códigos tradicionales, transformando el vehículo en una herramienta proactiva que prepara al usuario antes de la acción.",
      process: "Combinación de bocetado tradicional con iteraciones de Vizcom AI para la exploración formal rápida. Modelado 3D en Blender utilizando técnicas de Guide Meshes y Shrinkwrap para garantizar superficies Clase-A perfectas.",
    },

    // Gallery Section (Bento Box)
    gallery: [
      {
        id: "interior",
        image: "/images/projects/cupra-interior.jpg",
        title: "Columna Central de Esquís",
        size: "large-left", // Ocupa lado izquierdo grande
        description: "Innovadora integración del equipamiento en la cabina como escultura.",
      },
      {
        id: "clay",
        image: "/images/projects/cupra-clay.jpg",
        title: "Tangibilidad Física",
        size: "small-right-top",
        description: "Maqueta 3D impresa en resina. Validación del concepto.",
      },
      {
        id: "process",
        image: "/images/projects/cupra-process-1.jpg",
        title: "Proceso de Diseño",
        size: "small-right-bottom",
        description: "Bocetos + Vizcom AI. Exploración formal acelerada.",
      },
    ],

    // Features Section
    features: {
      exterior: {
        title: "Exterior",
        description: "Silueta 'Shooting Brake' elevada con la línea Y0 tensa para comunicar deportividad y capacidad de carga.",
      },
      interior: {
        title: "Interior",
        description: "Innovadora Columna Central de Esquís que integra el equipamiento en la cabina, tratándolo como una escultura y no como carga oculta.",
      },
      digital: {
        title: "Digital",
        description: "Ecosistema UX/UI completo (App + HMI) para monitorización del estado de la nieve y gestión de equipo.",
      },
    },

    // Dark Section (UX/UI)
    darkSection: {
      title: "Modo Nieve: App Ecosystem",
      description: "Una experiencia digital pensada para el viajero activo. Dashboard integrado con monitorización de condiciones, gestión de equipo y planificación de rutas. La app se sincroniza con el HMI del vehículo para una experiencia seamless.",
      images: ["/images/projects/cupra-ui.png"],
    },

    // Video Section
    video: {
      url: "/videos/cupra-video.mp4",
      title: "CUPRA K2 - Final Film",
    },

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

    intro: {
      hook: "Revolucionando la fabricación naval con impresión 3D de gran escala.",
      challenge: "Optimizar procesos de manufactura tradicionales mediante tecnología aditiva avanzada.",
      process: "Investigación de flujos de trabajo, validación de materiales y diseño de optimización topológica.",
    },

    gallery: [
      {
        id: "main",
        image: "/images/projects/navantia-main.jpg",
        title: "Prototipo 3D",
        size: "large-left",
        description: "Pieza impresa en resina de ingeniería.",
      },
    ],

    features: {
      sustainability: {
        title: "Sostenibilidad",
        description: "Reducción de residuos mediante manufacturación aditiva.",
      },
    },

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

    intro: {
      hook: "Posicionamiento de marca para una startup de sostenibilidad ambiental.",
      challenge: "Crear identidad coherente en el mercado de soluciones climáticas.",
      process: "Research estratégico, arquetipos de marca y ecosistema visual completo.",
    },

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
