import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { SparklesIcon } from 'lucide-react';
import { galleryCats } from '../data/cats';
import { Confetti } from './Confetti';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useParallax';

export function WishSection() {
  const [wished, setWished] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const cakeCat = galleryCats[0];
  const { ref, scale, rotate } = useParallax<HTMLElement>(50);

  const handleWish = () => {
    setWished(true);
    setBurstKey((key) => key + 1);
  };

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-lilac px-6 py-24 sm:px-10">
      <Confetti burstKey={burstKey} />

      <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
        <motion.div style={{ scale, rotate }}>
          <div className="w-40 animate-float overflow-hidden rounded-full border-[8px] border-white shadow-cute sm:w-52">
            <img src={cakeCat.src} alt={cakeCat.alt} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <Reveal from="left">
          <h2 className="mt-8 font-display text-4xl font-extrabold text-cocoa sm:text-5xl">
            Make a wish, birthday girl
          </h2>
        </Reveal>

        <Reveal from="right" delay={0.06}>
          <p className="mt-3 max-w-sm font-body text-lg text-mocha">
            Close your eyes, blow out the candle, and press the button. I&apos;ll take care of the
            rest.
          </p>
        </Reveal>

        <Reveal from="pop" delay={0.1}>
          <button
            type="button"
            onClick={handleWish}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-bubblegum px-8 py-4 font-display text-xl font-bold text-white shadow-cute outline-none transition-transform duration-150 ease-out hover:-translate-y-1 active:translate-y-0 focus-visible:ring-4 focus-visible:ring-grape/40">
            
            <SparklesIcon size={20} strokeWidth={2.4} />
            {wished ? 'wish again!' : 'blow out the candle'}
          </button>
        </Reveal>

        <div className="mt-6 h-10">
          <AnimatePresence>
            {wished &&
            <motion.p
              key="wish-made"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: [0.23, 1, 0.32, 1] }}
              className="font-hand text-3xl text-cherry"
              role="status">
              
                wish sent! it&apos;s already coming true 💖
              </motion.p>
            }
          </AnimatePresence>
        </div>
      </div>
    </section>);

}