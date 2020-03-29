import { FieldBonus } from 'src/interfaces';
import { color } from 'src/theme';

export const boardSize = 15;

export const boardFields: Array<FieldBonus>[] = [
  ['tw', 0, 0, 'dl', 0, 0, 0, 'tw', 0, 0, 0, 'dl', 0, 0, 'tw'],
  [0, 'dw', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'dw', 0],
  [0, 0, 'dw', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dw', 0, 0],
  ['dl', 0, 0, 'dw', 0, 0, 0, 'dw', 0, 0, 0, 'dw', 0, 0, 'dl'],
  [0, 0, 0, 0, 'dw', 0, 0, 0, 0, 0, 'dw', 0, 0, 0, 0],
  [0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0],
  [0, 0, 'dl', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dl', 0, 0],
  ['tw', 0, 0, 'dl', 0, 0, 0, 'dw', 0, 0, 0, 'dl', 0, 0, 'tw'],
  [0, 0, 'dl', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dl', 0, 0],
  [0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0],
  [0, 0, 0, 0, 'dw', 0, 0, 0, 0, 0, 'dw', 0, 0, 0, 0],
  ['dl', 0, 0, 'dw', 0, 0, 0, 'dw', 0, 0, 0, 'dw', 0, 0, 'dl'],
  [0, 0, 'dw', 0, 0, 0, 'dl', 0, 'dl', 0, 0, 0, 'dw', 0, 0],
  [0, 'dw', 0, 0, 0, 'tl', 0, 0, 0, 'tl', 0, 0, 0, 'dw', 0],
  ['tw', 0, 0, 'dl', 0, 0, 0, 'tw', 0, 0, 0, 'dl', 0, 0, 'tw'],
];

export const boardFieldsColors: Record<FieldBonus, string> = {
  0: color.lightGreen,
  dl: color.lightBlue,
  tl: color.blue,
  dw: color.pink,
  tw: color.red,
};
