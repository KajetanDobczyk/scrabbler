import { PlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export interface IBoardField {
  x: number;
  y: number;
  letter: Letter | '';
  blankLetter?: Letter;
  bonus: FieldBonus;
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
}

export type IBoardFields = IBoardField[][];

export type WordDirection = 'h' | 'v';

export interface IDraggedTile {
  x0: number;
  y0: number;
  letter: Letter;
  source: 'list' | 'board';
}

export type ITileMeasurements = { x: number; y: number; size: number };

export type ITilesListElement = {
  amountLeft: number;
  measurements: ITileMeasurements | undefined;
};

export type ITilesList = Record<Letter, ITilesListElement>;

export type SetTilesListMeasurementsPayload = Record<Letter, ITileMeasurements>;

export interface IPlayedWord {
  x: number;
  y: number;
  word: string;
  direction: WordDirection;
  points: number;
}
