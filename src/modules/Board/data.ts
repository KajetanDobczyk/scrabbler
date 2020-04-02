import { color } from 'src/theme';

import { FieldBonus } from './interfaces';

export const boardSize = 15;

export const boardFieldsColors: Record<FieldBonus, string> = {
  0: color.lightGreen,
  dl: color.lightBlue,
  tl: color.blue,
  dw: color.pink,
  tw: color.red,
};
