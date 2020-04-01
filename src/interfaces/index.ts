export type Letter =
  | '?'
  | 'a'
  | 'ą'
  | 'b'
  | 'c'
  | 'ć'
  | 'd'
  | 'e'
  | 'ę'
  | 'f'
  | 'g'
  | 'h'
  | 'i'
  | 'j'
  | 'k'
  | 'l'
  | 'ł'
  | 'm'
  | 'n'
  | 'ń'
  | 'o'
  | 'ó'
  | 'p'
  | 'r'
  | 's'
  | 'ś'
  | 't'
  | 'u'
  | 'w'
  | 'y'
  | 'z'
  | 'ż'
  | 'ź';

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export type IBoard = Array<Letter | ' '>[];

export type IPlayerNumber = 0 | 1 | 2 | 3;

export interface IPlayedWord {
  player: IPlayerNumber;
  aligment: 'horizontal' | 'vertical';
  startCoordinates: number[];
  word: string;
}
