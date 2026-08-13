export type Reason = {
  id: string;
  emoji: string;
  title: string;
  text: string;
  color: string;
};

/** ✏️ Swap any of these for your own little reasons. */
export const reasons: Reason[] = [
{
  id: 'laugh',
  emoji: '😹',
  title: 'your laugh',
  text: 'You start giggling before the joke even lands, and it fixes my whole day.',
  color: 'bg-petal'
},
{
  id: 'cats',
  emoji: '🐈',
  title: 'the cat spam',
  text: 'Twelve cat pictures in a row at 1am. Never stop doing this, please.',
  color: 'bg-lilac'
},
{
  id: 'kind',
  emoji: '🌷',
  title: 'how soft you are',
  text: 'You are gentle with everyone, even when the world is not gentle with you.',
  color: 'bg-white'
},
{
  id: 'brave',
  emoji: '✨',
  title: 'your brave heart',
  text: 'You keep going and keep dreaming, and I am so proud of you for it.',
  color: 'bg-white'
},
{
  id: 'home',
  emoji: '🏠',
  title: 'you feel like home',
  text: 'Anywhere gets cozy the second you are next to me.',
  color: 'bg-petal'
},
{
  id: 'us',
  emoji: '💞',
  title: 'us, honestly',
  text: 'Boring Tuesdays with you beat perfect days with anyone else.',
  color: 'bg-lilac'
}];


/** Sweet little fortunes the cat tells when you tap it. */
export const catFortunes: string[] = [
'you are the prettiest girl in every single room 💗',
'today the universe is officially on your side ✨',
'someone is thinking about you right now (it is me) 🐾',
'infinite cuddles have been approved for you 🧸',
'you are allowed one extra slice of cake. maybe two 🍰',
'this year is going to be so soft and so good 🌈',
'you make my heart do that stupid little flip 💓',
'reminder: you are so, so loved 🎀'];