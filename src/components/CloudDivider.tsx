import React from 'react';

type CloudDividerProps = {
  /** Hex color of the section BELOW the divider. */
  color: string;
  flip?: boolean;
  className?: string;
};

export function CloudDivider({ color, flip = false, className = '' }: CloudDividerProps) {
  return (
    <div aria-hidden="true" className={`relative -mb-px w-full leading-[0] ${className}`}>
      <svg
        viewBox="0 0 1200 80"
        preserveAspectRatio="none"
        className={`block h-12 w-full sm:h-16 ${flip ? 'rotate-180' : ''}`}>
        
        <path
          fill={color}
          d="M0,40 C60,80 120,80 180,48 C240,16 300,16 360,44 C420,72 480,72 540,44 C600,16 660,16 720,44 C780,72 840,72 900,44 C960,16 1020,16 1080,48 C1140,80 1170,72 1200,40 L1200,80 L0,80 Z" />
        
      </svg>
    </div>);

}