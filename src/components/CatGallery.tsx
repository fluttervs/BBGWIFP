import React from 'react';
import { motion } from 'framer-motion';
import { galleryCats } from '../data/cats';
import { CatCard } from './CatCard';
import { Reveal } from './Reveal';
import { SparkleField } from './SparkleField';
import { useParallax } from '../hooks/useParallax';

const DEPTHS = [80, 30, 60, 20];

export function CatGallery() {
  const { ref, x } = useParallax<HTMLElement>(120);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-blush px-6 py-24 sm:px-10">
      <SparkleField />
      <div className="relative mx-auto max-w-6xl">
        <header className="text-center">
          <Reveal from="right">
            <h2 className="font-display text-4xl font-extrabold text-cocoa sm:text-5xl">
              A parade of <span className="rainbow-text">cats</span> for you
            </h2>
          </Reveal>
          <Reveal from="left" delay={0.06}>
            <p className="mx-auto mt-3 max-w-md font-body text-lg text-mocha">
              One for every kind of happy I want you to feel today.
            </p>
          </Reveal>
        </header>

        <motion.p
          style={{ x }}
          aria-hidden="true"
          className="mt-10 whitespace-nowrap text-center font-hand text-2xl text-bubblegum">
          
          🐾 meow · purr · meow · purr · meow · purr · meow · purr · meow · purr 🐾
        </motion.p>

        <ul className="mt-6 grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
          {galleryCats.map((cat, index) =>
          <CatCard key={cat.id} cat={cat} index={index} depth={DEPTHS[index % DEPTHS.length]} />
          )}
        </ul>
      </div>
    </section>);

}