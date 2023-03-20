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
  useEffect(() => {
    waveBackgrounds.forEach(background => {
      const backgroundImg = new Image();
      backgroundImg.src = background;
    });
  }, []);
  const backgroundElements = waveBackgrounds.map((background, i) => {
    return <img key={i} src={background} style={{ display: 'none' }}></img>;
  });
  return (
    <div>
      <Header />
      <AnimatePresence>
        <Outlet context={location} />
      </AnimatePresence>
      <Footer />
      {backgroundElements}
    </div>
  );
}
