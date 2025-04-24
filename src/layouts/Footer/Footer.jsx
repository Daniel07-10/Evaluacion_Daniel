import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white h-25 mt-auto flex w-full">
      <div className="container mx-auto px-4 flex items-center justify-around ">
        <p className="text-sm">&copy; {new Date().getFullYear()} Daniel Bañol. Todos los derechos reservados.</p>
        <div className="flex space-x-4">
          <a href="https://github.com" className="hover:text-gray-400 transition">GitHub</a>
          <a href="Daniel.banol58@gmail.com" className="hover:text-gray-400 transition">Contacto</a>
        </div>
      </div>
    </footer>
  );
};


