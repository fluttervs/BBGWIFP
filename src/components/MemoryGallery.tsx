import React from 'react';
import { memories } from '../data/memories';
import { MemoryCard } from './MemoryCard';
import { Reveal } from './Reveal';
import { SparkleField } from './SparkleField';
import { CloudDivider } from './CloudDivider';

const DEPTHS = [80, 30, 60, 20];
const PER_SECTION = 4;

const GROUPS = [
  {
    id: 'one',
    chapter: 'chapter one',
    subtitle: 'nights out, just us',
    bg: 'bg-butter',
    nextBg: '#ffe3ef'
  },
  {
    id: 'two',
    chapter: 'chapter two',
    subtitle: 'little adventures, big smiles',
    bg: 'bg-petal',
    nextBg: '#efe6ff'
  },
  {
    id: 'three',
    chapter: 'chapter three',
    subtitle: 'every photo is a reason I love you',
    bg: 'bg-lilac',
    nextBg: null
  }
];

export function MemoryGallery() {
  return (
    <>
      {GROUPS.map((group, g) => {
        const slice = memories.slice(g * PER_SECTION, g * PER_SECTION + PER_SECTION);
        return (
          <React.Fragment key={group.id}>
            <section
              className={`relative w-full overflow-hidden ${group.bg} px-6 py-24 sm:px-10`}>
              
              <SparkleField />
              <div className="relative mx-auto max-w-4xl">
                <header className="text-center">
                  <Reveal from="down">
                    <p className="font-hand text-3xl text-cherry">{group.chapter}</p>
                    <h2 className="mt-1 font-display text-4xl font-extrabold text-cocoa sm:text-5xl">
                      {group.subtitle}
                    </h2>
                  </Reveal>
                </header>

                <ul className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                  {slice.map((memory, index) =>
                  <MemoryCard key={memory.id} memory={memory} index={index} depth={DEPTHS[index % DEPTHS.length]} />
                  )}
                </ul>
              </div>
            </section>
            {group.nextBg &&
            <CloudDivider color={group.nextBg} />}
          </React.Fragment>
        );
      })}
    </>);

}
