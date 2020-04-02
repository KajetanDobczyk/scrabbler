import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectBoardState = (state: RootState) => state.board;

export const selectBoardLetters = createSelector(
  selectBoardState,
  boardState => boardState.letters,
);

export const selectWordsHistory = createSelector(
  selectBoardState,
  boardState => boardState.wordsHistory,
);
