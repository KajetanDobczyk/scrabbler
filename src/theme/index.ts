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

export type FontSize = 'xxs' | 'xs' | 'sm' | 'base' | 'xl';

type Font = {
  size: Record<FontSize, number>;
};

export const font: Font = {
  size: {
    xxs: 7,
    xs: 10,
    sm: 13,
    base: 16,
    xl: 25,
  },
};

export const hexToRGBA = (hex: string, a?: number): string => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return a ? `rgba(${r},${g},${b},${a})` : `rgb(${r},${g},${b})`;
};
