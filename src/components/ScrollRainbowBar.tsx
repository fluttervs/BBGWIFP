import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollRainbowBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 28, mass: 0.3 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 top-0 z-50 h-2 w-full origin-left rounded-r-full">
      
      <div className="h-full w-full bg-[linear-gradient(90deg,#ff7fae,#ffc79e,#ffe6a3,#9fe8c6,#bfe4ff,#a882f5)]" />
    </motion.div>);

}