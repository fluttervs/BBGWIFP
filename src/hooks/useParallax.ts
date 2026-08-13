import { useRef } from 'react';
import { useScroll, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * Scroll-linked parallax: the returned motion values follow the scroll position
 * in BOTH directions (down and back up) while the element is in view.
 */
export function useParallax<T extends HTMLElement = HTMLDivElement>(distance = 70) {
  const ref = useRef<T>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    mass: 0.35
  });

  const travel = reduceMotion ? 0 : distance;
  const y = useTransform(smooth, [0, 1], [travel, -travel]);
  const x = useTransform(smooth, [0, 1], [travel, -travel]);
  const rotate = useTransform(smooth, [0, 1], [travel / 14, -travel / 14]);
  const scale = useTransform(smooth, [0, 0.5, 1], [0.9, 1.02, 0.9]);

  return { ref, progress: smooth, y, x, rotate, scale };
}