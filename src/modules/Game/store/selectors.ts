import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'src/redux/rootReducer';

export const selectGameState = (state: RootState) => state.game;

export const selectGameStatus = createSelector(
  selectGameState,
  (gameState) => gameState.status,
);

export const selectGameView = createSelector(
  selectGameState,
  (gameState) => gameState.view,
);

export const selectBoardFields = createSelector(
  selectGameState,
  (gameState) => gameState.boardFields,
);

export const selectTilesList = createSelector(
  selectGameState,
  (gameState) => gameState.tilesList,
);

export const selectNewMove = createSelector(
  selectGameState,
  (gameState) => gameState.newMove,
);
