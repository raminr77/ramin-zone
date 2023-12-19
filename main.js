const CONSOLE_STYLES = [
  'color: #fff',
  'font-size: 12px',
  'background: #333',
  'border-radius: 8px',
  'padding: 8px 16px 8px 0'
].join(';');
console.info('%c >>> Welcome To Ramin Zone', CONSOLE_STYLES);
console.info('%c >>> Developed By Ramin Rezaei', CONSOLE_STYLES);
console.info('%c >>> More Information: https://RaminRezaei.ir', CONSOLE_STYLES);

//
const COLORS = [
  {
    R: 255,
    G: 0,
    B: 0
  },
  {
    R: 255,
    G: 121,
    B: 68
  },
  {
    R: 1,
    G: 119,
    B: 181
  },
  {
    R: 109,
    G: 174,
    B: 224
  },
  {
    R: 156,
    G: 136,
    B: 254
  },
  {
    R: 255,
    G: 255,
    B: 255
  }
];

const PROFILE = document.querySelector('.js-profile');
const CONTAINER_BOX = document.querySelector('.js-container');

const setColors = (colorIndex = 5) => {
  const { R, G, B } = COLORS[colorIndex];
  const SIZE = randomInt(270, 300);
  // PROFILE
  PROFILE.style.border = `4px solid rgb(${R}, ${G}, ${B})`;
  PROFILE.style.backgroundColor = `rgba(${R}, ${G}, ${B}, 0.1)`;
  PROFILE.style.boxShadow = `0 0 ${SIZE}px 20px rgba(${R}, ${G}, ${B}, 0.4)`;
  // CONTAINER
  CONTAINER_BOX.style.border = `4px solid rgb(${R}, ${G}, ${B})`;
  CONTAINER_BOX.style.backgroundColor = `rgba(${R}, ${G}, ${B}, 0.1)`;
  CONTAINER_BOX.style.boxShadow = `0 0 ${SIZE}px 20px rgba(${R}, ${G}, ${B}, 0.4)`;
};

const randomInt = (min = 0, max = 255) =>
  Math.floor(Math.random() * (max - min + 1) + min);

document.querySelectorAll('li').forEach((item) => {
  item.addEventListener('mouseleave', () => setColors(5));
  item.addEventListener('mouseover', () => setColors(item.dataset.index || 5));
});
