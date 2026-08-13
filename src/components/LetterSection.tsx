import React from 'react';
import { motion } from 'framer-motion';
import { letter } from '../data/letter';
import { galleryCats } from '../data/cats';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useParallax';

export function LetterSection() {
  const peekCat = galleryCats[2];
  const { ref, y, rotate, x } = useParallax<HTMLElement>(60);

  return (
    <section
      id="letter"
      ref={ref}
      className="relative w-full overflow-hidden bg-petal px-6 py-24 sm:px-10">
      
      <div className="relative mx-auto max-w-3xl">
        <Reveal from="down" as="p" className="text-center font-hand text-3xl text-cherry">
          a little something I wrote you
        </Reveal>

        <Reveal from="left" amount={0.2} className="mt-8">
          <motion.article
            style={{ y, rotate }}
            className="paper relative rounded-[28px] px-7 py-12 shadow-cute ring-1 ring-bubblegum/25 sm:px-14 sm:py-16">
            
            <span
              aria-hidden="true"
              className="absolute -top-4 left-10 h-8 w-24 rotate-[-8deg] rounded-sm bg-mint/70" />
            
            <span
              aria-hidden="true"
              className="absolute -top-4 right-10 h-8 w-24 rotate-[7deg] rounded-sm bg-sky/70" />
            

            <div className="letter-scroll max-h-[58vh] overflow-y-auto pr-3 sm:max-h-[560px] sm:pr-4">
              <Reveal from="left" delay={0.04} amount={0.4}>
                <h2 className="font-hand text-4xl text-cherry sm:text-5xl">{letter.greeting}</h2>
              </Reveal>

              <div className="mt-6 space-y-6">
                {letter.paragraphs.map((paragraph, index) =>
                <Reveal
                  key={paragraph.slice(0, 24)}
                  as="p"
                  from={index % 2 === 0 ? 'left' : 'right'}
                  delay={0.05 * index}
                  amount={0.25}
                  className="font-body text-[1.06rem] leading-[38px] text-cocoa sm:text-lg">
                  
                    {paragraph}
                  </Reveal>
                )}
              </div>

              {(letter.signature || letter.signedBy) &&
              <Reveal from="right" amount={0.5}>
                <footer className="mt-10">
                  <p className="font-body text-base text-mocha">{letter.signature}</p>
                  <p className="mt-1 font-hand text-4xl text-cherry">{letter.signedBy}</p>
                </footer>
              </Reveal>}
            </div>

            <p className="mt-4 text-center font-hand text-xl text-mocha/80">
              keep scrolling the letter ↓
            </p>

            <motion.div
              style={{ x }}
              className="pointer-events-none absolute -bottom-10 -right-4 w-28 rotate-[8deg] sm:-right-12 sm:w-36">
              
              <div className="animate-wiggle overflow-hidden rounded-3xl border-[6px] border-white shadow-cute">
                <img src={peekCat.src} alt="" className="h-full w-full object-cover" />
              </div>
            </motion.div>
          </motion.article>
        </Reveal>
      </div>
    </section>);

}