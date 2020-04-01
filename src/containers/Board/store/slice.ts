import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { emptyBoard } from 'src/config/board';
import {
  IBoard,
  INewWord,
  IPlayedWord,
  IPlayerNumber,
  Letter,
  WordDirection,
} from 'src/interfaces';

type IBoardState = {
  board: IBoard;
  currentPlayer: IPlayerNumber;
  newWord: INewWord;
  wordsHistory: IPlayedWord[];
};

const initialNewWord: INewWord = {
  x: 0,
  y: 0,
  direction: 'horizontal',
  word: '',
};

const initialState: IBoardState = {
  board: emptyBoard,
  currentPlayer: 0,
  newWord: initialNewWord,
  wordsHistory: [],
};

type InsertWordStartedPayload = {
  x: number;
  y: number;
  direction: WordDirection;
};

const board = createSlice({
  name: 'board',
  initialState,
  reducers: {
    changeCurrentPlayer(state, action: PayloadAction<IPlayerNumber>) {
      state.currentPlayer = action.payload;
    },
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
    insertWordFinished(state) {
      state.wordsHistory.push({
        ...state.newWord!,
        player: state.currentPlayer,
      });
      state.newWord = initialNewWord;
    },
  },
});

export const {
  changeCurrentPlayer,
  insertWordStarted,
  insertWordLetter,
  insertWordFinished,
} = board.actions;

export * from './selectors';

export default board.reducer;
