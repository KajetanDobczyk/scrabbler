import { Letter } from 'src/modules/Dictionary/interfaces';
import { FetchStatus } from 'src/interfaces';

import { ICoordinates } from './store/interfaces';

export enum GameScreen {
  NewGame = 'Nowa Gra',
  Game = 'Gra',
  FinishedGame = 'Koniec Gry',
}

export type GameTabParamList = Record<GameScreen, any>;

export type GameStatus = FetchStatus;

export type GameView = 'points' | 'board';

export interface ITilesListElement {
  amountLeft: number;
}

export type ITilesList = Record<Letter, ITilesListElement>;

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export interface IBoardField {
  x: number;
  y: number;
  letter: Letter | null;
  blankLetter?: Letter;
  bonus: FieldBonus;
}

export interface IBoardTile {
  x: number;
  y: number;
  letter: Letter;
  blankLetter?: Letter;
}

export interface INewMove {
  target?: ICoordinates;
  direction: WordDirection;
  tiles: IBoardTile[];
}

export type IBoardFields = IBoardField[][];

export type WordDirection = 'h' | 'v';
