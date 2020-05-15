import { Letter } from 'src/modules/Dictionary/interfaces';
import { FetchStatus } from 'src/interfaces';

import { ICoordinates } from './store/interfaces';

export enum PointsTrackingScreen {
  NewGame = 'Nowa Gra',
  Board = 'Plansza',
  FinishedGame = 'Koniec Gry',
}

export type PointsTrackingTabParamList = Record<PointsTrackingScreen, any>;

export type GameStatus = FetchStatus;

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
