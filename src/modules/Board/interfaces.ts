import { IPlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export type IBoardField = {
  letter: Letter | '';
  bonus: FieldBonus;
};

export type IBoardFields = IBoardField[][];

export type WordDirection = 'horizontal' | 'vertical';

export interface IWord {
  x: number;
  y: number;
  direction: WordDirection;
  word: string;
}

export interface INewWord extends IWord {
  length: number;
}

export interface IPlayedWord extends IWord {
  player: IPlayerId;
}
