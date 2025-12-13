# Estructura de Proyectos - Guía de Implementación

## 📁 Estructura de Carpetas Creada

```
src/
├── components/
│   ├── ProjectPage.jsx          (Template reutilizable para proyectos)
│   ├── ProjectPageWrapper.jsx   (Wrapper con React Router)
│   ├── Projects.jsx             (Grid de proyectos - actualizado)
│   └── ...otros componentes
├── data/
│   └── projects.js              (Base de datos centralizada)
└── ...

public/
├── images/
│   └── projects/
│       ├── cupra-hero.jpg
│       ├── cupra-interior.jpg
│       ├── cupra-clay.jpg
│       ├── cupra-process-1.jpg
│       ├── cupra-ui.png
│       ├── navantia-hero.jpg
│       ├── navantia-main.jpg
│       ├── sosterra-hero.jpg
│       └── ...
├── videos/
│   └── cupra-video.mp4
```

## 🚀 Próximos Pasos

### 1. **Agregar Imágenes y Videos**
Coloca las imágenes en `public/images/projects/` siguiendo los nombres en `src/data/projects.js`:
- `cupra-hero.jpg` (Imagen principal, fullscreen)
- `cupra-interior.jpg` (Grande, bento box)
- `cupra-clay.jpg` (Pequeña, bento box)
- `cupra-process-1.jpg` (Pequeña, bento box)
- `cupra-ui.png` (Dark section)

### 2. **Agregar Videos**
Coloca los videos en `public/videos/`:
- `cupra-video.mp4`

### 3. **Actualizar URLs en projects.js**
Si los nombres de las imágenes varían, actualiza las rutas en `src/data/projects.js`.

### 4. **Testing de Rutas**
```bash
npm run dev
```
Luego visita:
- `http://localhost:5173/` - Página principal (SPA)
- `http://localhost:5173/project/cupra` - Página del proyecto CUPRA
- `http://localhost:5173/project/navantia` - Página del proyecto NAVANTIA

## 🎨 Funcionalidades Implementadas

✅ **SPA Principal** - Mantiene la estructura original de la home
✅ **React Router** - Rutas dinámicas `/project/:slug`
✅ **ProjectPage Template** - Componente reutilizable que se adapta a cualquier proyecto
✅ **Datos Centralizados** - Todos los proyectos en `src/data/projects.js`
✅ **Navegación Inter-Proyectos** - "Next Project" linkea automáticamente
✅ **Scroll Reveal** - Animaciones al hacer scroll
✅ **Imágenes Responsivas** - ImageWithFallback component
✅ **Grid Bento Box** - Galería asimétrica automática
✅ **Sections Dinámicas** - Hero, Intro, Gallery, Features, Dark, Video, Navigation

## 🔧 Modificar Proyectos

Para agregar un nuevo proyecto, simplemente añade una entrada a `projectsData` en `src/data/projects.js`:

```javascript
export const projectsData = {
  // ... proyectos existentes
  
  nuevo_proyecto: {
    slug: "nuevo_proyecto",
    title: "NUEVO PROYECTO",
    category: "Categoría",
    year: "2025",
    hero: { ... },
    intro: { ... },
    gallery: [ ... ],
    features: { ... },
    // ... resto de secciones
  }
};
```

## 📝 Notas Técnicas

- **React Router v7.9.6** - Manejo de rutas
- **Framer Motion** - Animaciones (motion, AnimatePresence)
- **Tailwind CSS** - Estilos
- **Lucide React** - Iconos (ChevronRight)
- **Hook useScrollReveal** - Efectos de revelación
- **ImageWithFallback** - Componente robusto para imágenes

## ⚠️ Consideraciones de Diseño

- **Hero Section**: Imagen fullscreen con overlay gradient
- **Intro Block**: Columna estrecha para lectura cómoda
- **Gallery Grid**: Bento box asimétrico (large-left, small-right-top, small-right-bottom)
- **Dark Section**: Cambio drástico de fondo (bg-gray-900)
- **Video Section**: Ancho completo, sin márgenes (black background)
- **Typography**: Serif para títulos, Mono para tags

Todos los tamaños y espacios son responsivos (mobile + desktop).
