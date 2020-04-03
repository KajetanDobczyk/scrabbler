import { IPlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export interface IBoardField {
  letter: Letter | '';
  bonus: FieldBonus;
  highlight: boolean;
}

export interface IBoardLayout {
  x: number;
  y: number;
  size: number;
  tileSize: number;
}

export type IBoardFields = IBoardField[][];

export type WordDirection = 'horizontal' | 'vertical';

export interface IWord {
  x: number;
  y: number;
  direction: WordDirection;
  word: string;
}

export interface INewWord extends IWord {
  targetLength: number;
}

export interface IPlayedWord extends IWord {
  playerId: IPlayerId;
}

export type ITilesAmount = Record<Letter, number>;
