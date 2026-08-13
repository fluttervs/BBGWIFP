import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, MailIcon, PhoneIcon } from 'lucide-react';
import { galleryCats } from '../data/cats';
import { Reveal } from './Reveal';
import { useParallax } from '../hooks/useParallax';

const TINY_CATS = ['🐱', '🐈', '😻', '🐈‍⬛', '🐾'];

export function Footer() {
  const sleepyCat = galleryCats[3];
  const { ref, rotate } = useParallax<HTMLElement>(40);

  return (
    <footer
      ref={ref}
      className="w-full overflow-hidden bg-blush px-6 pb-16 pt-16 text-center sm:px-10">
      
      <div className="mx-auto max-w-xl">
        <Reveal from="left">
          <div className="relative mx-auto max-w-md rotate-[-1.5deg] rounded-3xl bg-butter px-7 py-6 shadow-cute">
            <p className="font-hand text-2xl text-cocoa">
              p.s. this whole site is yours forever. read it again whenever you need a reminder that
              someone is completely crazy about you. 💌
            </p>
          </div>
        </Reveal>

        <motion.div style={{ rotate }} className="mx-auto mt-10 w-28">
          <div className="animate-float-slow overflow-hidden rounded-full border-[6px] border-white shadow-cute">
            <img src={sleepyCat.src} alt={sleepyCat.alt} className="h-full w-full object-cover" />
          </div>
        </motion.div>

        <p aria-hidden="true" className="mt-6 flex justify-center gap-3 text-2xl">
          {TINY_CATS.map((cat, index) =>
          <span
            key={cat}
            className="animate-bob"
            style={{ animationDelay: `${index * 0.18}s` }}>
            
              {cat}
            </span>
          )}
        </p>

        <Reveal from="pop" as="p" className="mt-5 font-body text-base text-mocha">
          <span className="flex items-center justify-center gap-2">
            made with
            <HeartIcon size={16} fill="currentColor" className="text-bubblegum" strokeWidth={1} />
            just for you
          </span>
        </Reveal>

        <Reveal from="up" className="mt-14">
          <div className="mx-auto max-w-md rounded-[26px] bg-white px-7 py-7 shadow-cute">
            <p className="font-hand text-3xl text-cherry">get in touch</p>
            <h3 className="mt-1 font-display text-2xl font-extrabold text-cocoa">
              For <span className="rainbow-text">website enquiries</span> &amp; collaborations
            </h3>
            <p className="mt-2 font-body text-base text-mocha">
              Have a project in mind? My inbox is always open — let&apos;s make something lovely together.
            </p>
            <div className="mt-5 flex flex-col items-stretch gap-3">
              <a
                href="mailto:rafiqzakwan1111@gmail.com"
                className="flex items-center justify-center gap-2 rounded-full bg-petal px-5 py-2.5 font-body font-semibold text-cocoa transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-cute">
                
                <MailIcon size={18} className="text-bubblegum" />
                rafiqzakwan1111@gmail.com
              </a>
              <a
                href="tel:+60136093220"
                className="flex items-center justify-center gap-2 rounded-full bg-lilac px-5 py-2.5 font-body font-semibold text-cocoa transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-cute">
                
                <PhoneIcon size={18} className="text-grape" />
                +60 136 093 220
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>);

}