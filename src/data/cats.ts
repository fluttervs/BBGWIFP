export type Cat = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  tilt: string;
};

export const heroCat: Cat = {
  id: 'party',
  src: "/ac0bfbeb-2ebd-4c11-8000-2bc863ceb300.jpg",
  alt: 'Fluffy cream kitten wearing a tiny pink party hat in front of a rainbow',
  caption: 'the birthday kitty',
  tilt: '-rotate-2'
};

export const crownCat: Cat = {
  id: 'crown',
  src: "/b6c6566a-2b15-471b-994c-172dc62caeb8.jpg",
  alt: 'Long-haired grey kitten wearing a tiny gold paper crown',
  caption: 'queen of today',
  tilt: 'rotate-2'
};

export const galleryCats: Cat[] = [
{
  id: 'cake',
  src: "/abe3577d-ef53-4fe7-bc48-42beee4eeab1.jpg",
  alt: 'Orange tabby kitten peeking over a pastel birthday cake with one candle',
  caption: 'one candle, one wish',
  tilt: '-rotate-3'
},
{
  id: 'balloons',
  src: "/e47332f0-35bc-4f95-93c0-3f2e4a3ab229.jpg",
  alt: 'Grey kitten floating while holding a bunch of pastel rainbow balloons',
  caption: 'floaty happy feelings',
  tilt: 'rotate-2'
},
{
  id: 'love',
  src: "/3a6b1d5b-47f9-457f-98c6-e8f6faca8f0f.jpg",
  alt: 'Two kittens cuddling with a pink heart above them',
  caption: 'this one is us',
  tilt: '-rotate-1'
},
{
  id: 'sleepy',
  src: "/e93fde7e-52eb-4b31-a3eb-db15ac7ae183.jpg",
  alt: 'Sleepy Siamese kitten curled up asleep on a pink cloud',
  caption: 'sweet dreams, birthday girl',
  tilt: 'rotate-3'
},
{
  id: 'flowers',
  src: "/a67fb8af-9ab0-4fbe-8896-8caf955ca7b2.jpg",
  alt: 'White kitten holding a small bouquet of pastel flowers in its mouth',
  caption: 'flowers, just because',
  tilt: 'rotate-1'
},
{
  id: 'gift',
  src: "/64abd563-0f00-43aa-a14a-110b3f5fd8a3.jpg",
  alt: 'Brown tabby kitten popping out of a pink gift box with a mint bow',
  caption: 'surprise, this one is for you',
  tilt: '-rotate-2'
},
{
  id: 'boba',
  src: "/34a7f2c9-6922-432b-831a-914b6430dcd1.jpg",
  alt: 'Cream kitten hugging an oversized pink boba milk tea cup',
  caption: 'boba date later?',
  tilt: 'rotate-3'
},
{
  id: 'chef',
  src: "/5c8456a4-54ae-471d-b300-78408a419a29.jpg",
  alt: 'Black and white kitten wearing a chef hat beside two frosted cupcakes',
  caption: 'baked these for you',
  tilt: '-rotate-1'
}];