import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

type Sticker = {
  emoji: string;
  left: string;
  top: string;
  size: string;
  anim: string;
  depth: number;
};

const STICKERS: Sticker[] = [
{ emoji: '🎈', left: '3%', top: '22%', size: 'text-3xl', anim: 'animate-float', depth: -90 },
{ emoji: '🎀', left: '11%', top: '76%', size: 'text-2xl', anim: 'animate-wiggle', depth: 60 },
{ emoji: '🍰', left: '31%', top: '84%', size: 'text-3xl', anim: 'animate-float-slow', depth: -50 },
{ emoji: '🌈', left: '46%', top: '10%', size: 'text-2xl', anim: 'animate-wiggle', depth: 80 },
{ emoji: '🧸', left: '62%', top: '80%', size: 'text-3xl', anim: 'animate-float', depth: -70 },
{ emoji: '💐', left: '84%', top: '78%', size: 'text-2xl', anim: 'animate-float-slow', depth: 55 },
{ emoji: '⭐', left: '95%', top: '32%', size: 'text-2xl', anim: 'animate-wiggle', depth: -40 },
{ emoji: '🐾', left: '73%', top: '8%', size: 'text-2xl', anim: 'animate-float', depth: 70 }];


export function FloatingStickers() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const factor = reduceMotion ? 0 : 1;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {STICKERS.map((sticker) =>
      <Sticker key={sticker.emoji} sticker={sticker} scrollY={scrollY} factor={factor} />
      )}
    </div>);

}

type StickerProps = {
  sticker: Sticker;
  scrollY: ReturnType<typeof useScroll>['scrollY'];
  factor: number;
};

function Sticker({ sticker, scrollY, factor }: StickerProps) {
  const y = useTransform(scrollY, [0, 1000], [0, sticker.depth * factor]);

  return (
    <motion.span
      style={{ left: sticker.left, top: sticker.top, y }}
      className="absolute -translate-x-1/2">
      
      <span
        className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/85 shadow-cute ${sticker.anim} ${sticker.size}`}>
        
        {sticker.emoji}
      </span>
    </motion.span>);

}