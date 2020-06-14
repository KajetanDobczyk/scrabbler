import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectBoardState = (state: RootState) => state.game.board;

export const selectBoardFields = createSelector(
  selectBoardState,
  (boardState) => boardState.boardFields,
);

export const selectTilesList = createSelector(
  selectBoardState,
  (boardState) => boardState.tilesList,
);

export const selectNewMove = createSelector(
  selectBoardState,
  (boardState) => boardState.newMove,
);
