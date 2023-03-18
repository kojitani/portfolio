import React from 'react';
import { motion } from 'framer-motion';
export default function Home() {
  return (
    <motion.div
      className="home-container container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
    >
      <h4>Welcome, my name is</h4>
      <h1>Koji Taniguchi</h1>
    </motion.div>
  );
}
