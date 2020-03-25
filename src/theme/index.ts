export const color = {
  black: '#000000',
  white: '#ffffff',
  grey: {
    100: '#2d373c',
    200: '#3e464a',
    300: '#879baa',
    400: '#b0beca',
    500: '#becdd7',
    700: '#dfe6ed',
    800: '#e6ecf2',
    900: '#f7f9fb',
  },
}

export type FontSize =
  | 'xxs'
  | 'xs'
  | 'sm'
  | 'base'
  | 'md'
  | 'xl'
  | 'xxl'
  | 'xxxl'
export type FontWeight =
  | 'light'
  | 'normal'
  | 'medium'
  | 'semiBold'
  | 'bold'
  | 'black'

type Font = {
  size: Record<FontSize, string>
  weight: Record<FontWeight, number>
}

export const font: Font = {
  size: {
    xxs: '0.6875rem',
    xs: '0.75rem',
    sm: '0.8125rem',
    base: '1rem',
    md: '1.25rem',
    xl: '1.375rem',
    xxl: '1.5rem',
    xxxl: '1.625rem',
  },
  weight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 900,
  },
}
