import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black text-white">
      <h2 className="text-6xl font-bold mb-12">Hablemos.</h2>
      <div className="flex flex-col gap-4 text-xl">
        <a href="mailto:tuemail@ejemplo.com" className="hover:text-gray-300 transition-colors">
          mariolouridoregueira@gmail.com
        </a>
        <a href="#" className="hover:text-gray-300 transition-colors">
          LinkedIn
        </a>
      </div>
    </section>
  );
}