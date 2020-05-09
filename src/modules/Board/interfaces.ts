import { Letter } from 'src/modules/Dictionary/interfaces';
import { FetchStatus } from 'src/interfaces';

import { ICoordinates } from './store/interfaces';

export enum PointsTrackingScreen {
  NewGame = 'Nowa Gra',
  Board = 'Plansza',
}

export type PointsTrackingTabParamList = Record<PointsTrackingScreen, any>;

export type GameStatus = FetchStatus;

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export interface IBoardField {
  x: number;
  y: number;
  letter: Letter | '';
  blankLetter?: Letter;
  bonus: FieldBonus;
  isHighlighted?: boolean;
}

export interface IBoardLayout {
  x: number;
  y: number;
  size: number;
  tileSize: number;
}

export interface IBoardTile {
  x: number;
  y: number;
  letter: Letter;
  blankLetter?: Letter;
}

export interface INewMove {
  target?: ICoordinates;
  tiles: IBoardTile[];
}

export type IBoardFields = IBoardField[][];

export type WordDirection = 'h' | 'v';

export interface ITilesListElement {
  amountLeft: number;
}

export type ITilesList = Record<Letter, ITilesListElement>;

export interface IPlayedWord {
  x: number;
  y: number;
  word: string;
  direction: WordDirection;
  points: number;
}
