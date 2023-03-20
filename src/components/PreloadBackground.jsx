import React from 'react';

export default function PreloadBackground() {
  const waveBackgrounds = [
    '/wave-about.svg',
    '/wave-contact.svg',
    '/wave-home.svg',
    '/wave-projects.svg',
  ];

  waveBackgrounds.forEach(background => {
    const backgroundImg = new Image();
    backgroundImg.src = background;
    console.log(backgroundImg);
  });
  return <></>;
}
