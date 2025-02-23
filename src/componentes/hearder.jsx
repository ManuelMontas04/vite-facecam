import React from 'react';

export default function Header() {
  return (

  <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-800 ">
    <h1 className="text-xl text-white mb-4">FaceCam</h1>
    <ul className="space-y-2">

      <li className="text-white">Home</li>
      <li className="text-white">Nosotros</li>
      <li className="text-white">Soporte</li>
    </ul>
  </div>

  );
};
