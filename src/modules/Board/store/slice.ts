import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { emptyBoard } from 'src/modules/Board/config';
import { IPlayerId } from 'src/modules/Players/interfaces';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { IBoard, INewWord, IPlayedWord, WordDirection } from '../interfaces';

type IBoardState = {
  board: IBoard;
  newWord: INewWord;
  wordsHistory: IPlayedWord[];
};

const initialNewWord: INewWord = {
  x: 0,
  y: 0,
  direction: 'horizontal',
  word: '',
  length: 0,
};

const initialState: IBoardState = {
  board: emptyBoard,
  newWord: initialNewWord,
  wordsHistory: [],
};

type InsertWordStartedPayload = {
  x: number;
  y: number;
  direction: WordDirection;
  length: number;
};

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    insertWordStarted(state, action: PayloadAction<InsertWordStartedPayload>) {
      state.newWord = {
        ...action.payload,
        word: '',
      };
    },
    insertWordLetter(state, action: PayloadAction<Letter>) {
      if (state.newWord.word !== '') {
        state.newWord[state.newWord.direction === 'horizontal' ? 'x' : 'y']++;
      }

      const { x, y } = state.newWord;

      state.board[y][x] = action.payload;
      state.newWord.word += action.payload;
    },
    insertWordFinished(state, action: PayloadAction<IPlayerId>) {
      state.wordsHistory.push({
        ...state.newWord,
        player: action.payload,
      });
      state.newWord = initialNewWord;
    },
  },
});

export const {
  insertWordStarted,
  insertWordLetter,
  insertWordFinished,
} = board.actions;

export * from './selectors';

export default board.reducer;
