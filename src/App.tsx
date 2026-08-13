import React from 'react';
import { Hero } from './components/Hero';
import { LetterSection } from './components/LetterSection';
import { CatGallery } from './components/CatGallery';
import { MemoryGallery } from './components/MemoryGallery';
import { ReasonsSection } from './components/ReasonsSection';
import { FortuneCat } from './components/FortuneCat';
import { WishSection } from './components/WishSection';
import { Footer } from './components/Footer';
import { ScrollRainbowBar } from './components/ScrollRainbowBar';
import { Marquee } from './components/Marquee';
import { CloudDivider } from './components/CloudDivider';

const MARQUEE_ONE = ['happy birthday', 'my favourite girl', 'te amo', 'you are so loved'];
const MARQUEE_TWO = ['cake time', 'more cats', 'more kisses', 'best year ever'];

export function App() {
  return (
    <main className="w-full overflow-x-hidden bg-blush font-body text-cocoa">
      <ScrollRainbowBar />

      <Hero />
      <CloudDivider color="#ffe3ef" />

      <LetterSection />
      <Marquee items={MARQUEE_ONE} className="bg-lilac" />

      <CatGallery />
      <CloudDivider color="#ffe6a3" />

      <MemoryGallery />

      <CloudDivider color="#fffdf7" />

      <ReasonsSection />
      <Marquee items={MARQUEE_TWO} reverse className="bg-butter" />

      <FortuneCat />
      <CloudDivider color="#efe6ff" />

      <WishSection />
      <Footer />
    </main>);

}