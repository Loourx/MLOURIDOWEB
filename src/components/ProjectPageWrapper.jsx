import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ProjectPage from './ProjectPage';
import { getProject } from '../data/projects';

export default function ProjectPageWrapper() {
  const { slug } = useParams();
  const project = getProject(slug);

  // Scroll al top cuando se carga la página del proyecto
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <Header />
        <div className="text-center">
          <h1 className="text-2xl font-serif text-gray-900 mb-4">Proyecto no encontrado</h1>
          <a href="/" className="text-blue-600 hover:text-blue-800">
            Volver al inicio
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pt-20">
      <Header />
      <ProjectPage project={project} />
    </div>
  );
}
