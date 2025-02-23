import React from 'react';

export default function Home () {
  return (
    <div className="flex h-screen bg-gray-900">

      {/* Main content area */}
      <div className="flex-1 bg-gray-700 p-4 relative">
        <div className="flex justify-between items-center mb-4">
          <button className="bg-orange-500 text-white py-2 px-4 rounded">Cámara</button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded">Buscar</button>
          <button className="bg-white text-gray-800 py-2 px-4 rounded">Registros</button>
        </div>
        
        <div className="bg-gray-300 h-full w-full mb-8">
          <video src="" className=''></video>
        </div>

        {/* Bottom controls */}
        <div className="absolute bottom-4 left-0 w-full flex justify-between mt-8">
          <div className="flex space-x-2">
            <div className="bg-red-600 h-4 w-4 rounded-full"></div>
            <div className="bg-red-600 h-4 w-4 rounded-full"></div>
            <div className="bg-red-600 h-4 w-4 rounded-full"></div>
          </div>
          <div className="flex space-x-2">
            <div className="bg-green-600 h-4 w-4 rounded-full"></div>
            <div className="bg-red-600 h-4 w-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

