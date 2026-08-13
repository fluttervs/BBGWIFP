import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { HeartIcon, SparklesIcon, StarIcon } from 'lucide-react';

type Sparkle = {
  left: string;
  top: string;
  size: number;
  delay: string;
  color: string;
  kind: 'heart' | 'star' | 'sparkle';
  layer: 0 | 1 | 2;
};

const SPARKLES: Sparkle[] = [
{ left: '6%', top: '12%', size: 22, delay: '0s', color: 'text-bubblegum', kind: 'heart', layer: 0 },
{ left: '14%', top: '58%', size: 16, delay: '1.2s', color: 'text-grape', kind: 'star', layer: 1 },
{ left: '24%', top: '26%', size: 14, delay: '2.1s', color: 'text-mint', kind: 'sparkle', layer: 2 },
{ left: '38%', top: '8%', size: 18, delay: '0.6s', color: 'text-butter', kind: 'star', layer: 1 },
{ left: '52%', top: '70%', size: 20, delay: '1.8s', color: 'text-bubblegum', kind: 'heart', layer: 2 },
{ left: '66%', top: '18%', size: 16, delay: '0.3s', color: 'text-sky', kind: 'sparkle', layer: 0 },
{ left: '78%', top: '48%', size: 22, delay: '2.4s', color: 'text-grape', kind: 'heart', layer: 1 },
{ left: '88%', top: '14%', size: 14, delay: '1.5s', color: 'text-mint', kind: 'star', layer: 2 },
{ left: '93%', top: '66%', size: 18, delay: '0.9s', color: 'text-butter', kind: 'sparkle', layer: 0 }];


export function SparkleField() {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const range = reduceMotion ? 0 : 1;
  const layerA = useTransform(scrollY, [0, 900], [0, -160 * range]);
  const layerB = useTransform(scrollY, [0, 900], [0, 130 * range]);
  const layerC = useTransform(scrollY, [0, 900], [0, -70 * range]);
  const spin = useTransform(scrollY, [0, 900], [0, 180 * range]);

  const layers = [layerA, layerB, layerC];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {SPARKLES.map((s, i) => {
        const Icon = s.kind === 'heart' ? HeartIcon : s.kind === 'star' ? StarIcon : SparklesIcon;
        return (
          <motion.span
            key={i}
            style={{ left: s.left, top: s.top, y: layers[s.layer], rotate: spin }}
            className={`absolute ${s.color}`}>
            
            <span className="block animate-twinkle" style={{ animationDelay: s.delay }}>
              <Icon size={s.size} fill="currentColor" strokeWidth={1} />
            </span>
          </motion.span>);

      })}
    </div>);

}