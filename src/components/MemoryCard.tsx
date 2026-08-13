import React from 'react';
import { motion } from 'framer-motion';
import type { Memory } from '../data/memories';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useParallax';

type MemoryCardProps = {
  memory: Memory;
  index: number;
  depth: number;
};

export function MemoryCard({ memory, index, depth }: MemoryCardProps) {
  const { ref, y } = useParallax(depth);

  return (
    <Reveal as="li" from={index % 2 === 0 ? 'left' : 'right'} delay={index * 0.05} amount={0.3}>
      <motion.div ref={ref} style={{ y }} className="h-full">
        <figure
          className={`group h-full rounded-[26px] bg-white p-3 pb-5 shadow-cute transition-transform duration-200 ease-out hover:-translate-y-2 hover:rotate-0 ${memory.tilt}`}>
          
          <div className="overflow-hidden rounded-[18px] bg-petal">
            <img
              src={memory.src}
              alt={memory.alt}
              className="aspect-square w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.05]" />
            
          </div>
          <figcaption className="mt-3 text-center font-hand text-2xl text-cherry">
            {memory.caption}
          </figcaption>
        </figure>
      </motion.div>
    </Reveal>);

}
