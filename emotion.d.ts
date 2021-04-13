import '@emotion/react';
import { Color, Font } from 'src/theme/interfaces';

declare module '@emotion/react' {
  export interface Theme {
    color: Color;
    font: Font;
  }
}
