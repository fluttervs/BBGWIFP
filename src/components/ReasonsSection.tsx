import React from 'react';
import { motion } from 'framer-motion';
import { reasons } from '../data/reasons';
import { crownCat } from '../data/cats';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useParallax';

export function ReasonsSection() {
  const { ref, y, rotate } = useParallax<HTMLElement>(50);

  return (
    <section ref={ref} className="relative w-full overflow-hidden bg-cream px-6 py-24 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="text-center lg:text-left">
            <Reveal from="left">
              <p className="font-hand text-3xl text-cherry">a very incomplete list</p>
              <h2 className="mt-2 font-display text-4xl font-extrabold leading-tight text-cocoa sm:text-5xl">
                Things I am <span className="rainbow-text">obsessed</span> with about you
              </h2>
            </Reveal>

            <motion.div style={{ y, rotate }} className="mx-auto mt-8 w-44 lg:mx-0 lg:w-52">
              <div className="overflow-hidden rounded-[28px] border-[8px] border-white shadow-cute">
                <img src={crownCat.src} alt={crownCat.alt} className="h-full w-full object-cover" />
              </div>
              <p className="mt-3 text-center font-hand text-2xl text-cherry">{crownCat.caption}</p>
            </motion.div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason, index) =>
            <Reveal
              key={reason.id}
              as="li"
              from={index % 2 === 0 ? 'left' : 'right'}
              delay={index * 0.04}
              amount={0.2}>
              
                <div
                className={`flex h-full items-start gap-4 rounded-3xl ${reason.color} p-5 shadow-sticker transition-transform duration-200 ease-out hover:-translate-y-1`}>
                
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-cute">
                    {reason.emoji}
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-cherry">{reason.title}</h3>
                    <p className="mt-1 font-body text-[0.98rem] leading-relaxed text-mocha">
                      {reason.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            )}
          </ul>
        </div>
      </div>
    </section>);

}