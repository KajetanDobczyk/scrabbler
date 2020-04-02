import {
  WordDirection,
  INewWord,
  IBoardFields,
  IPlayedWord,
} from '../interfaces';

export type IBoardState = {
  boardFields: IBoardFields;
  layout: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  newWord: INewWord;
  wordsHistory: IPlayedWord[];
};

export type BoardLoadedPayload = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type InsertWordPreparedPayload = {
  x: number;
  y: number;
};

export type InsertWordStartedPayload = {
  x: number;
  y: number;
  direction: WordDirection;
  length: number;
};
