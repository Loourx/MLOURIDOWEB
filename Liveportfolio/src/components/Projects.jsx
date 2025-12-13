import React from "react";

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-bold mb-10 text-center">Mis Proyectos</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Tarjeta de Proyecto 1 de prueba */}
        <div className="border border-gray-200 p-4">
          <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
            IMAGEN PROYECTO
          </div>
          <h3 className="text-xl font-bold">Concepto SUV</h3>
          <p className="text-gray-500">Diseño Industrial</p>
        </div>

        {/* Tarjeta de Proyecto 2 de prueba */}
        <div className="border border-gray-200 p-4">
          <div className="h-48 bg-gray-200 mb-4 flex items-center justify-center text-gray-400">
            IMAGEN PROYECTO
          </div>
          <h3 className="text-xl font-bold">Palo Navantia</h3>
          <p className="text-gray-500">Naval</p>
        </div>
      </div>
    </section>
  );
}