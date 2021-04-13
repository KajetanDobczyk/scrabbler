type ColorName =
  | 'white'
  | 'black'
  | 'grayLight'
  | 'grayMedium'
  | 'text'
  | 'tile'
  | 'board'
  | 'boardField'
  | 'doubleLetter'
  | 'trippleLetter'
  | 'doubleWord'
  | 'trippleWord';

export type Color = Record<ColorName, string>;

type FontSize = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'xl';

export type Font = {
  size: Record<FontSize, number>;
};

export type IThemeName = 'classic' | 'deluxe';
