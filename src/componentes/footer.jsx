import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Columna 1: Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-300 transition duration-300">Inicio</a></li>
              <li><a href="/nosotros" className="hover:text-blue-300 transition duration-300">Nosotros</a></li>
              <li><a href="/servicios" className="hover:text-blue-300 transition duration-300">Servicios</a></li>
              <li><a href="/contacto" className="hover:text-blue-300 transition duration-300">Contacto</a></li>
            </ul>
          </div>

          {/* Columna 2: Información de contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <ul className="space-y-2">
              <li><span className="font-semibold">Dirección:</span> Calle Falsa 123, Ciudad, País</li>
              <li><span className="font-semibold">Teléfono:</span> +123 456 789</li>
              <li><span className="font-semibold">Email:</span> info@misitio.com</li>
            </ul>
          </div>

          {/* Columna 3: Redes sociales */}
          <div>
            <h3 className="text-lg font-bold mb-4">Síguenos</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" className="hover:text-blue-300 transition duration-300">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:text-blue-300 transition duration-300">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="hover:text-blue-300 transition duration-300">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:text-blue-300 transition duration-300">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria y derechos de autor */}
        <div className="border-t border-blue-800 mt-8 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FaceCam. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}