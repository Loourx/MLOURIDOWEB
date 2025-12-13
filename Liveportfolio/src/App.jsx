// Importamos las piezas que has copiado
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    // Usamos el fondo y texto que definimos en tu configuración
    <div className="min-h-screen bg-portfolio-bg text-portfolio-text font-sans selection:bg-gray-200">
      
      {/* Barra de Navegación */}
      <Header />

      <main>
        {/* Portada */}
        <Hero />
        
        {/* Proyectos */}
        <Projects />
        
        {/* Sobre mí */}
        <About />
        
        {/* Contacto */}
        <Contact />
      </main>

    </div>
  );
}

export default App;