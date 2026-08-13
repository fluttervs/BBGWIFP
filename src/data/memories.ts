export type Memory = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tilt: string;
};

const base = import.meta.env.BASE_URL;

/** 🖼️ Our little photo album — same cards as the cats, but these are US. */
export const memories: Memory[] = [
{
  id: 'walk',
  src: `${base}memories/memory-01.jpg`,
  alt: 'Two of us smiling in a nighttime selfie by the road',
  caption: 'night walks, just us',
  tilt: '-rotate-3'
},
{
  id: 'aquarium',
  src: `${base}memories/memory-02.jpg`,
  alt: 'Two of us in front of a big aquarium window full of fish',
  caption: 'under the sea with you',
  tilt: 'rotate-2'
},
{
  id: 'cozy',
  src: `${base}memories/memory-03.jpg`,
  alt: 'A close, cozy selfie of us smiling together',
  caption: 'my favourite person',
  tilt: '-rotate-1'
},
{
  id: 'bowling',
  src: `${base}memories/memory-04.jpg`,
  alt: 'Two of us at the bowling alley holding bowling balls',
  caption: 'bowling champions',
  tilt: 'rotate-3'
},
{
  id: 'cat',
  src: `${base}memories/memory-05.jpg`,
  alt: 'A dark selfie of us with a cat in the foreground',
  caption: 'even the cat joins',
  tilt: '-rotate-2'
},
{
  id: 'bear',
  src: `${base}memories/memory-06.jpg`,
  alt: 'Us at night beside a road with a big white plush bear',
  caption: 'the bear approves',
  tilt: 'rotate-1'
},
{
  id: 'cool',
  src: `${base}memories/memory-07.jpg`,
  alt: 'A close selfie of us in sunglasses making peace signs',
  caption: 'coolest duo',
  tilt: '-rotate-3'
},
{
  id: 'street',
  src: `${base}memories/memory-08.jpg`,
  alt: 'Us smiling with peace signs by parked cars at night',
  caption: 'golden nights with you',
  tilt: 'rotate-2'
},
{
  id: 'arcade',
  src: `${base}memories/memory-09.jpg`,
  alt: 'Two of us in an arcade with colorful game machines',
  caption: 'arcade legends',
  tilt: '-rotate-1'
},
{
  id: 'drive',
  src: `${base}memories/memory-10.jpg`,
  alt: 'Us smiling inside the car at night',
  caption: 'late night drives',
  tilt: 'rotate-3'
},
{
  id: 'us',
  src: `${base}memories/memory-11.jpg`,
  alt: 'Another sweet selfie of the two of us',
  caption: 'still us, still happy',
  tilt: '-rotate-2'
},
{
  id: 'view',
  src: `${base}memories/memory-12.jpg`,
  alt: 'A cute selfie of us together',
  caption: 'my favourite view',
  tilt: 'rotate-1'
}];
