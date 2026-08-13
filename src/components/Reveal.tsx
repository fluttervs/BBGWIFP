import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down' | 'pop';

const OFFSETS: Record<Direction, {x?: number;y?: number;scale?: number;rotate?: number;}> = {
  left: { x: -90, rotate: -3 },
  right: { x: 90, rotate: 3 },
  up: { y: 60 },
  down: { y: -60 },
  pop: { scale: 0.96, y: 24 }
};

type RevealProps = {
  children: React.ReactNode;
  from?: Direction;
  delay?: number;
  amount?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'header' | 'p' | 'article';
};

/**
 * Reveals children as they enter the viewport — and re-hides them when they
 * leave, so scrolling back up replays the movement every time.
 */
export function Reveal({
  children,
  from = 'up',
  delay = 0,
  amount = 0.35,
  className = '',
  as = 'div'
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as];
  const offset = OFFSETS[from];

  if (reduceMotion) {
    return <Component className={className}>{children}</Component>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, x: 0, y: 0, scale: 1, rotate: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration: 0.28, delay, ease: [0.23, 1, 0.32, 1] }}>
      
      {children}
    </Component>);

}