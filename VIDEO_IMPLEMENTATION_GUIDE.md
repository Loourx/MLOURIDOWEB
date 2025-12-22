# 📹 Guía de Implementación de Videos - Portfolio

## 🎯 Sistema de Video Restaurado y Optimizado

El componente `VideoSection` ha sido completamente rediseñado para ofrecer:

### ✅ **Características Implementadas**

#### **1. Calidad y Rendimiento**
- **Video Nativo**: Soporte para MP4 + WebM con fallback automático
- **YouTube Optimizado**: Embeds sin publicidad con `rel=0&modestbranding=1`
- **Carga Inteligente**: `preload="metadata"` y `loading="lazy"`
- **Responsive**: Aspecto 16:9 con diseño adaptativo
- **Indicador de Calidad**: Muestra resolución HD en hover

#### **2. Controles Avanzados**
- **Fullscreen Nativo**: Botón personalizado con soporte cross-browser
- **Headers Consistentes**: Mismo diseño que otros elementos del portafolio
- **Hover Effects**: Información adicional en hover
- **Controles Optimizados**: `playsInline` para móviles

#### **3. Optimización de Recursos**
- **Detección Automática**: Distingue entre videos locales y YouTube
- **Múltiples Formatos**: MP4 + WebM para mejor compresión
- **Lazy Loading**: Carga bajo demanda
- **Metadata First**: Carga solo información inicial

---

## 🚀 **Cómo Implementar Videos**

### **Opción 1: Video Local (Recomendado para calidad)**

```javascript
{
  id: "final-video",
  phase: "05", 
  title: "Presentación Final",
  titleEn: "Final Presentation",
  type: "video",
  video: {
    url: "/videos/tu-proyecto-video.mp4",
    poster: "/images/projects/tu-proyecto-poster.jpg",
    title: "Tu Proyecto - Video Final",
    titleEn: "Your Project - Final Video",
    description: "Descripción del video en español.",
    descriptionEn: "Video description in English."
  },
  content: {
    title: "Título de la Sección",
    titleEn: "Section Title", 
    description: "Descripción breve de la sección.",
    descriptionEn: "Brief section description."
  }
}
```

#### **Preparación de Videos Locales:**
```bash
# Crear versiones optimizadas
ffmpeg -i video-original.mov -c:v libx264 -crf 23 -c:a aac -movflags +faststart video-optimized.mp4
ffmpeg -i video-original.mov -c:v libvpx-vp9 -crf 30 -c:a libopus video-optimized.webm

# Crear poster (frame del video)  
ffmpeg -i video-optimized.mp4 -ss 00:00:05 -vframes 1 -q:v 2 poster.jpg
```

### **Opción 2: YouTube Embed (Recomendado para recursos)**

```javascript
{
  id: "final-video",
  phase: "05",
  title: "Presentación Final", 
  titleEn: "Final Presentation",
  type: "video",
  video: {
    url: "https://www.youtube.com/watch?v=TU_VIDEO_ID",
    // url: "https://youtu.be/TU_VIDEO_ID", // También válido
    title: "Tu Proyecto - Video Final",
    titleEn: "Your Project - Final Video",
    description: "Descripción del video en español.",
    descriptionEn: "Video description in English."
  },
  content: {
    title: "Título de la Sección",
    titleEn: "Section Title",
    description: "Descripción breve de la sección.", 
    descriptionEn: "Brief section description."
  }
}
```

---

## 📁 **Estructura de Archivos**

```
public/
├── videos/                          # Videos locales
│   ├── cupra-final-presentation.mp4 # Video principal (H.264)  
│   ├── cupra-final-presentation.webm# Video WebM (VP9)
│   └── navantia-demo.mp4            # Otros proyectos
├── images/
│   └── projects/
│       ├── cupra-video-poster.jpg   # Poster frames
│       └── navantia-video-poster.jpg
```

---

## ⚙️ **Configuraciones de Calidad**

### **Para Video Profesional (Portfolio)**
- **Resolución**: 1920x1080 (Full HD mínimo)
- **Bitrate**: 8-12 Mbps para MP4
- **Codec**: H.264 (compatibilidad) + VP9 (eficiencia)
- **Audio**: AAC 128kbps / Opus 128kbps
- **Duración**: 30-120 segundos (optimal para web)

### **Para YouTube (Tráfico Global)**
- **Resolución**: 4K si es posible (1440p mínimo)
- **Thumbnails**: Personalizados y de alta calidad
- **Títulos**: SEO optimizados
- **Descripciones**: Enlaces al portfolio

---

## 🎨 **Diseño Implementado**

### **Headers Consistentes**
- Tipografía: `font-mono` con escalado responsivo (text-xl → text-3xl)
- Color: `text-black` con subtítulos en `text-black/60`  
- Espaciado: Idéntico a otros elementos del portfolio

### **Controles de Video**
- **Botón Fullscreen**: Esquina superior derecha con hover
- **Indicador de Calidad**: Esquina inferior izquierda (HD + resolución)
- **Etiqueta YT**: Para videos de YouTube (esquina inferior derecha)

### **Estados Visuales**
- **Loading**: Poster image como placeholder
- **Hover**: Controles adicionales aparecen
- **Fullscreen**: Soporte nativo del navegador
- **Mobile**: `playsInline` para mejor experiencia

---

## 🔧 **Solución de Problemas**

### **Video No Se Reproduce**
1. **Verificar rutas**: Asegúrate que `/videos/archivo.mp4` existe en `public/`
2. **Formato**: Usa H.264 baseline profile para máxima compatibilidad
3. **HTTPS**: Algunos navegadores requieren HTTPS para video
4. **Mobile**: Añade `playsInline` attribute (ya incluido)

### **YouTube No Carga**
1. **URL correcta**: Usa formato `youtube.com/watch?v=ID` o `youtu.be/ID`
2. **Video público**: Verifica que no esté privado o restringido
3. **Embeds habilitados**: Algunos videos no permiten embeds

### **Fullscreen No Funciona**
- **Navegador**: Función implementada con fallbacks para Safari/IE
- **Permisos**: Algunos navegadores requieren interacción del usuario primero

---

## 📊 **Recomendaciones de Uso**

### **Videos Locales - Cuándo usar:**
✅ **Control total de calidad**  
✅ **Branding consistente**  
✅ **Sin dependencias externas**  
✅ **Contenido privado/exclusivo**  

❌ **Archivos grandes (>50MB)**  
❌ **Hosting limitado**  
❌ **Múltiples resoluciones necesarias**

### **YouTube - Cuándo usar:**  
✅ **Videos largos (>2 minutos)**  
✅ **Máximo alcance/SEO**  
✅ **Sin límites de ancho de banda**  
✅ **Analytics detallados**  

❌ **Contenido confidencial**  
❌ **Control total de UI**  
❌ **Sin conexión a internet**

---

## 🎬 **Ejemplo Completo Implementado**

El proyecto **CUPRA** incluye una sección de video de ejemplo en `src/data/projects.js` que muestra:

- Header explicativo bilingüe
- Video local optimizado con poster
- Controles fullscreen  
- Descripción detallada
- Integración perfecta con el resto del diseño

**Para activar**: Simplemente coloca el archivo de video en `/public/videos/cupra-final-presentation.mp4` y el poster en `/public/images/projects/cupra-video-poster.jpg`.

**¡El sistema está completamente restaurado y optimizado!** 🚀