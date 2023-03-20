import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
export default function Layout() {
  const location = useLocation();
  const waveBackgrounds = [
    '/wave-about.svg',
    '/wave-contact.svg',
    '/wave-home.svg',
    '/wave-projects.svg',
  ];
  const projectImages = [
    '/images/BrainDump.jpg',
    '/images/MinimaList.jpg',
    '/images/VanVenture.jpg',
  ];
  const backgroundElements = waveBackgrounds.map((background, i) => {
    return <img key={i} src={background} style={{ display: 'none' }}></img>;
  });
  const projectImgElements = projectImages.map((img, i) => {
    return <img key={i} src={img} style={{ display: 'none' }}></img>;
  });

  return (
    <div>
      <Header />
      <AnimatePresence>
        <Outlet context={location} />
      </AnimatePresence>
      <Footer />
      {backgroundElements}
      {projectImgElements}
    </div>
  );
}
