export const color = {
  white: '#ffffff',
  black: '#000000',
  text: '#101913',
  cream: '#eeebdb',
  lightGreen: '#00997f',
  green: '#0a4b37',
  lightBlue: '#41c5f1',
  blue: '#0083e2',
  pink: '#ffa4b4',
  red: '#da2d37',
};

export type FontSize = 'sm' | 'base' | 'xl';

type Font = {
  size: Record<FontSize, number>;
};

export const font: Font = {
  size: {
    sm: 10,
    base: 16,
    xl: 25,
  },
};
