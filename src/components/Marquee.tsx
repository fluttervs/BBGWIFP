import React from 'react';

type MarqueeProps = {
  items: string[];
  reverse?: boolean;
  className?: string;
};

export function Marquee({ items, reverse = false, className = '' }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className={`relative flex w-full overflow-hidden border-y-2 border-white/70 py-3 ${className}`}>
      
      <div
        className={`flex w-max shrink-0 items-center gap-8 pr-8 ${
        reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`
        }>
        
        {track.map((item, index) =>
        <span
          key={`${item}-${index}`}
          className="flex items-center gap-8 whitespace-nowrap font-display text-xl font-bold text-cherry sm:text-2xl">
          
            {item}
            <span className="text-bubblegum">🐾</span>
          </span>
        )}
      </div>
    </div>);

}