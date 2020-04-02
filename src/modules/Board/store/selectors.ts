import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectBoardState = (state: RootState) => state.board;

export const selectBoardFields = createSelector(
  selectBoardState,
  boardState => boardState.boardFields,
);

export const selectWordsHistory = createSelector(
  selectBoardState,
  boardState => boardState.wordsHistory,
);
