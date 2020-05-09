import { AppThunk } from 'src/redux/store';
import { Letter } from 'src/modules/Dictionary/interfaces';

import {
  addNewMoveTile,
  setNewMoveTarget,
  resetNewMoveTarget,
  setNewMoveDirection,
  cancelNewMove,
} from './slice';
import { selectBoardFields, selectNewMove } from './selectors';
import { findNextFreeBoardField } from './helpers';

export const boardFieldPressed = (x: number, y: number): AppThunk => (
  dispatch,
  getState,
) => {
  const boardFields = selectBoardFields(getState());
  const newMove = selectNewMove(getState());

  if (
    boardFields[y][x].letter !== '' &&
    !newMove.tiles.find((tile) => tile.x === x && tile.y === y)
  ) {
    return dispatch(cancelNewMove());
  }

  dispatch(setNewMoveTarget({ x, y }));

  //TODO: Remove current newMove if not according to current direction
  //TODO: Change direction if pressed next to current target
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
