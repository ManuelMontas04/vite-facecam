import React from 'react';

export default function VideoComponent() {
  return (
    <div className="flex min-h-screen bg-gray-100 p-4">
      {/* Contenedor del canvas */}
      <div className="w-8/10 bg-white p-4 rounded-lg shadow-lg">
        <canvas id="videoCanvas" className="w-full h-full"></canvas>
      </div>

      {/* Contenedor de botones */}
      <div className="w-2/10 flex flex-col items-center justify-center ml-4 space-y-2">
        {/* Botón de Imágenes */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Imagenes
        </button>

        {/* Botón de Buscar */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Buscar
        </button>

        {/* Contenedor de botones Iniciar y Cerrar */}
        <div className="flex justify-center space-x-2 mt-4">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Iniciar
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}