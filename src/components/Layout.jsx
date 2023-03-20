import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';
export default function Layout() {
  const location = useLocation();

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
