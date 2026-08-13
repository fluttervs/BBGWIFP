import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ChevronDownIcon, CakeIcon } from 'lucide-react';
import { heroCat } from '../data/cats';
import { RainbowArc } from './RainbowArc';
import { SparkleField } from './SparkleField';
import { FloatingStickers } from './FloatingStickers';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 150, damping: 26, mass: 0.35 });

  const on = reduceMotion ? 0 : 1;
  const textX = useTransform(smooth, [0, 1], [0, -120 * on]);
  const catX = useTransform(smooth, [0, 1], [0, 140 * on]);
  const catRotate = useTransform(smooth, [0, 1], [0, 12 * on]);
  const arcY = useTransform(smooth, [0, 1], [0, -90 * on]);
  const arcScale = useTransform(smooth, [0, 1], [1, 1.25]);
  const fade = useTransform(smooth, [0, 0.85], [1, 0]);
  const cueOpacity = useTransform(smooth, [0, 0.2], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] w-full items-center overflow-hidden bg-blush px-6 pb-24 pt-16 sm:px-10">
      
      <SparkleField />
      <FloatingStickers />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative z-10 text-center lg:text-left">
          
          <motion.div style={{ x: textX, opacity: fade }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-body text-sm font-semibold text-cherry shadow-cute">
              <CakeIcon size={16} strokeWidth={2.4} />
              it&apos;s your day
            </span>

            <h1 className="mt-5 font-display text-[3.4rem] font-extrabold leading-[0.95] tracking-tight sm:text-7xl lg:text-[5.5rem]">
              <span className="rainbow-text">Happy</span>
              <br />
              <span className="rainbow-text">Birthday</span>
            </h1>

            <p className="mt-4 font-hand text-4xl text-cherry sm:text-5xl">to my favourite person</p>

            <p className="mx-auto mt-6 max-w-md font-body text-lg leading-relaxed text-mocha lg:mx-0">
              I made you a tiny corner of the internet. Scroll slowly — everything here moves for
              you. 💗
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
          className="relative mx-auto w-full max-w-md">
          
          <motion.div style={{ y: arcY, scale: arcScale }}>
            <RainbowArc className="absolute -top-6 left-1/2 h-64 w-[125%] -translate-x-1/2 sm:h-72" />
          </motion.div>

          <motion.div style={{ x: catX, rotate: catRotate }} className="relative">
            <div className="animate-float-slow">
              <div className="mx-auto aspect-square w-64 overflow-hidden rounded-full border-[10px] border-white shadow-cute sm:w-80">
                <img src={heroCat.src} alt={heroCat.alt} className="h-full w-full object-cover" />
              </div>
              <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 rotate-[-4deg] rounded-full bg-white px-4 py-1.5 font-hand text-xl text-cherry shadow-cute">
                {heroCat.caption}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#letter"
        style={{ opacity: cueOpacity }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 rounded-full px-4 py-2 font-body text-sm font-semibold text-cherry outline-none transition-colors duration-150 ease-out hover:bg-white focus-visible:ring-2 focus-visible:ring-bubblegum">
        
        <span className="flex flex-col items-center gap-1">
          scroll for your letter
          <ChevronDownIcon size={20} className="animate-bob" strokeWidth={2.4} />
        </span>
      </motion.a>
    </section>);

}