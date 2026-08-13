import React from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#ff7fae', '#a882f5', '#9fe8c6', '#ffe6a3', '#bfe4ff', '#ffc79e'];

const PIECES = Array.from({ length: 46 }, (_, i) => ({
  id: i,
  left: i * 37 % 100,
  color: COLORS[i % COLORS.length],
  size: 8 + i % 4 * 3,
  drift: (i % 7 - 3) * 26,
  delay: i % 10 * 0.03,
  duration: 1.5 + i % 5 * 0.18,
  round: i % 3 === 0
}));

type ConfettiProps = {
  burstKey: number;
};

export function Confetti({ burstKey }: ConfettiProps) {
  if (burstKey === 0) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {PIECES.map((piece) =>
      <motion.span
        key={`${burstKey}-${piece.id}`}
        initial={{ y: '-12%', x: 0, opacity: 1, rotate: 0 }}
        animate={{ y: '115%', x: piece.drift, opacity: 0, rotate: 420 }}
        transition={{
          duration: piece.duration,
          delay: piece.delay,
          ease: 'easeIn'
        }}
        style={{
          left: `${piece.left}%`,
          width: piece.size,
          height: piece.size,
          backgroundColor: piece.color,
          borderRadius: piece.round ? '9999px' : '3px'
        }}
        className="absolute top-0 block" />

      )}
    </div>);

}