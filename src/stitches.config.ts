import { createStitches } from '@stitches/react';

export const { styled, css, getCssString } = createStitches({
  theme: {
    colors: {
      background: '#110E0E',
      buttonGradientStart: 'indigo-200',
      buttonGradientMid: 'red-200',
      buttonGradientEnd: 'yellow-100',
    },
  },
  utils: {
    gradientBg: () => (value: string) => ({
      backgroundImage: `linear-gradient(to right, ${value})`,
    }),
  },
});
