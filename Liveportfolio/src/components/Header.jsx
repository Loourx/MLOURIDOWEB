import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-center bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="text-xl font-bold tracking-tighter">MARIO LOURIDO</div>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
        <a href="#work" className="hover:text-black">Work</a>
        <a href="#about" className="hover:text-black">About</a>
        <a href="#contact" className="hover:text-black">Contact</a>
      </nav>
    </header>
  );
}