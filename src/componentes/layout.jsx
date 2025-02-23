"use client"
import React from 'react'; 
import Header from './hearder';
import VideoComponet from './video'
import Footer from './footer';
import Home from './home';


export default function Layout({ children }) {
  return (
    <div>

<main>

<div id='Lateral' className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div  className="w-full flex-none md:w-64">
        <Header />
    </div>

    <div className="w-full flex-1">
        <Home></Home>
    </div>
</div>

</main>

<Footer></Footer>

  </div>
  );
};

