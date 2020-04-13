import { View } from 'react-native';

import { IPlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

export type FieldBonus = 'dl' | 'tl' | 'dw' | 'tw' | 0;

export interface IBoardField {
  x: number;
  y: number;
  letter: Letter | '';
  bonus: FieldBonus;
  isHighlighted: boolean;
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

export type WordDirection = 'horizontal' | 'vertical';

export interface IPlayedMove {
  tiles: IBoardTile[];
  playerId: IPlayerId;
}

export type ITilesAmount = Record<Letter, number>;

export interface IDraggedTile {
  letter: Letter;
  source: 'list' | 'board';
}

export interface ITilesList {
  tilesRefs: Record<string, View | null>;
  tilesMeasurements: Record<string, { x: number; y: number; size: number }>;
}
