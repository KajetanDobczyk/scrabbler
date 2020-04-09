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

export interface ICoordinates {
  x: number;
  y: number;
}

export interface ICoordinatesWithLetter extends ICoordinates {
  letter: Letter;
}
