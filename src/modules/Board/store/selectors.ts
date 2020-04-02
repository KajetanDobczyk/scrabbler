import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectBoardState = (state: RootState) => state.board;

export const selectBoard = createSelector(
  selectBoardState,
  boardState => boardState.board,
);

export const selectWordsHistory = createSelector(
  selectBoardState,
  boardState => boardState.wordsHistory,
);
