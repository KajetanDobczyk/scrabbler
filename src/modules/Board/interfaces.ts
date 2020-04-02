import { Letter } from 'src/modules/Dictionary/interfaces';

import { IPlayerId } from '../Players/interfaces';

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export type IBoardLetters = Array<Letter | ' '>[];

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
