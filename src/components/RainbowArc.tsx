import React from 'react';

const BANDS = [
{ color: '#ff9ec0', r: 250 },
{ color: '#ffc79e', r: 226 },
{ color: '#ffe9a3', r: 202 },
{ color: '#a9e9c8', r: 178 },
{ color: '#a9d8f7', r: 154 },
{ color: '#c4aef7', r: 130 }];


type RainbowArcProps = {
  className?: string;
};

export function RainbowArc({ className = '' }: RainbowArcProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 600 300"
      className={className}
      preserveAspectRatio="xMidYMax slice">
      
      {BANDS.map((band) =>
      <path
        key={band.color}
        d={`M ${300 - band.r} 300 A ${band.r} ${band.r} 0 0 1 ${300 + band.r} 300`}
        fill="none"
        stroke={band.color}
        strokeWidth="24"
        strokeLinecap="round" />

      )}
    </svg>);

}