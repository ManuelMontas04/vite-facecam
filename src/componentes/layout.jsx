// src/components/layout/Header.js
import React from 'react'; 
import Header from './hearder';
import VideoComponet from './video'
import Footer from './footer';

export default function Layout() {
  return (
    <div>

    <Header />
    <main className="container mx-auto py-4 px-6">

      <VideoComponet></VideoComponet>
    </main>

    <Footer></Footer>

  </div>
  );
};

