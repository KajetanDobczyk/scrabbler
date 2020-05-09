import { AppThunk } from 'src/redux/store';
import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  addNewMoveTile,
  setNewMoveTarget,
  resetNewMoveTarget,
  changeNewMoveDirection,
  cancelNewMove,
} from './slice';
import { selectBoardFields, selectNewMove } from './selectors';
import { findNextFreeBoardField, isInLineWithNewMove } from './helpers';

export const boardFieldPressed = (x: number, y: number): AppThunk => (
  dispatch,
  getState,
) => {
  const boardFields = selectBoardFields(getState());
  const newMove = selectNewMove(getState());

  // Letter present, and not from new move
  if (
    boardFields[y][x].letter !== '' &&
    !newMove.tiles.find((tile) => tile.x === x && tile.y === y)
  ) {
    return dispatch(cancelNewMove());
  }

  if (!newMove.tiles.length || isInLineWithNewMove(newMove, x, y)) {
    return dispatch(setNewMoveTarget({ x, y }));
  }

  if (newMove.tiles.length === 1) {
    dispatch(setNewMoveTarget({ x, y }));
    dispatch(changeNewMoveDirection());
  } else {
    dispatch(cancelNewMove());
    dispatch(setNewMoveTarget({ x, y }));
  }
};

export const listBoardTilePressed = (
  letter: Letter,
  blankLetter?: Letter,
): AppThunk => (dispatch, getState) => {
  const boardFields = selectBoardFields(getState());
  const newMove = selectNewMove(getState());

  if (!newMove.target || !newMove.direction) {
    return;
  }

  dispatch(addNewMoveTile({ ...newMove.target, letter, blankLetter }));

  const nextFreeBoardField = findNextFreeBoardField(
    boardFields,
    newMove.target,
    newMove.direction,
  );

  dispatch(
    nextFreeBoardField
      ? setNewMoveTarget(nextFreeBoardField)
      : resetNewMoveTarget(),
  );
};
