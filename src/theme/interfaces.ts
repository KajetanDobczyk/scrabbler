export type Color = Record<string, string>;

type FontSize = 'xxs' | 'xs' | 'sm' | 'base' | 'md' | 'xl';

export type Font = {
  size: Record<FontSize, number>;
};

export type Theme = {
  color: Color;
  font: Font;
};

export type IThemeName = 'classic' | 'deluxe';
