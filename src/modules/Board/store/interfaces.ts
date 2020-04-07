import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  INewWord,
  IBoardFields,
  IBoardLayout,
  IPlayedWord,
  ITilesAmount,
} from '../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  tilesAmount: ITilesAmount;
  layout: IBoardLayout;
  newWord: INewWord;
  wordsHistory: IPlayedWord[];
};

export type HighlightBoardFieldPayload = {
  x: number;
  y: number;
  highlight: boolean;
};

export type PlaceTilePayload = {
  x: number;
  y: number;
  letter: Letter;
};
