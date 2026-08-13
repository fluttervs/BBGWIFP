import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCwIcon } from 'lucide-react';
import { catFortunes } from '../data/reasons';
import { galleryCats } from '../data/cats';
import { Reveal } from './Reveal';
import { SparkleField } from './SparkleField';

export function FortuneCat() {
  const [index, setIndex] = useState(0);
  const fortuneCat = galleryCats[6];

  const nextFortune = () => {
    setIndex((current) => (current + 1) % catFortunes.length);
  };

  return (
    <section className="relative w-full overflow-hidden bg-petal px-6 py-24 sm:px-10">
      <SparkleField />
      <div className="relative mx-auto max-w-3xl text-center">
        <Reveal from="down">
          <h2 className="font-display text-4xl font-extrabold text-cocoa sm:text-5xl">
            Ask the fortune kitty
          </h2>
          <p className="mx-auto mt-3 max-w-sm font-body text-lg text-mocha">
            Tap her nose. She only ever says nice things about you.
          </p>
        </Reveal>

        <Reveal from="pop" delay={0.06} className="mt-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:gap-8">
            <button
              type="button"
              onClick={nextFortune}
              aria-label="Get another sweet message from the cat"
              className="shrink-0 rounded-full outline-none transition-transform duration-150 ease-out hover:-translate-y-1 active:scale-95 focus-visible:ring-4 focus-visible:ring-grape/40">
              
              <span className="block w-40 overflow-hidden rounded-full border-[8px] border-white shadow-cute sm:w-48">
                <img
                  src={fortuneCat.src}
                  alt={fortuneCat.alt}
                  className="h-full w-full object-cover" />
                
              </span>
            </button>

            <div className="relative max-w-sm rounded-[26px] bg-white px-7 py-6 shadow-cute">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 rounded-sm bg-white sm:left-[-10px] sm:top-10 sm:translate-x-0" />
              
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                className="font-hand text-3xl leading-snug text-cherry"
                role="status">
                
                {catFortunes[index]}
              </motion.p>

              <p className="mt-4 flex items-center justify-center gap-2 font-body text-sm font-semibold text-mocha">
                <RefreshCwIcon size={14} strokeWidth={2.4} />
                tap the kitty for another
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);

}