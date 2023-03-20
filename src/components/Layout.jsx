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
  waveBackgrounds.forEach(background => {
    const backgroundImg = new Image();
    backgroundImg.src = background;
    console.log(backgroundImg);
  });
  return (
    <div>
      <Header />
      <AnimatePresence>
        <Outlet context={location} />
      </AnimatePresence>

      <Footer />
    </div>
  );
}
