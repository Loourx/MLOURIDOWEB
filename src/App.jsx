import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HeroBio from "./components/HeroBio";
import AboutPage from "./components/AboutPage";
import ContinuousLearning from "./components/ContinuousLearning";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectPageWrapper from "./components/ProjectPageWrapper";
import ExtraPage from "./components/ExtraPage";
import HardwareOverlay from "./components/HardwareOverlay";
import CustomCursor from "./components/CustomCursor";
import { useScrollReveal } from "./hooks/useScrollReveal";
import { FirstLoadProvider } from "./context/FirstLoadContext";
import { LanguageProvider } from "./context/LanguageContext";

// Página principal (SPA con todas las secciones)
function HomePage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text font-sans selection:bg-gray-200">
      
      {/* Barra de Navegación */}
      <Header />

      <main>
        {/* Portada */}
        <Hero />
        
        {/* Proyectos */}
        <Projects />

        {/* Sobre mí - Versión compacta (teaser) */}
        <HeroBio />

        {/* Contacto */}
        <Contact />
      </main>

    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <FirstLoadProvider>
        {/* Vercel Speed Insights */}
        <SpeedInsights />
        {/* Vercel Analytics */}
        <Analytics />
        {/* Cursor personalizado - Solo desktop */}
        <CustomCursor />
        {/* Hardware Overlay global - Píxeles estáticos estilo Nothing */}
        <HardwareOverlay />
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/project/:slug" element={<ProjectPageWrapper />} />
            {/* TODO: Página Extra - Continuar más adelante */}
            {/* <Route path="/extra" element={<ExtraPage />} /> */}
          </Routes>
        </Router>
      </FirstLoadProvider>
    </LanguageProvider>
  );
}

export default App;