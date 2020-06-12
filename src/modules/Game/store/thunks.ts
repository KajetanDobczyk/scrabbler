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
import {
  findNextFreeBoardField,
  isInLineWithNewMove,
  isInNewMove,
} from './helpers';

export const boardFieldPressed = (x: number, y: number): AppThunk => (
  dispatch,
  getState,
) => {
  const boardFields = selectBoardFields(getState());
  const newMove = selectNewMove(getState());

  if (
    (newMove.target?.x === x && newMove.target?.y === y) ||
    // Letter present, and not from new move
    (boardFields[y][x].letter &&
      !newMove.tiles.find((tile) => tile.x === x && tile.y === y))
  ) {
    dispatch(cancelNewMove());
    return;
  }

  if (!newMove.tiles.length) {
    dispatch(setNewMoveTarget({ x, y }));
    return;
  }

  if (newMove.tiles.length === 7 && !isInNewMove(newMove, x, y)) {
    dispatch(resetNewMoveTarget());
    return;
  }

  if (isInLineWithNewMove(newMove, x, y)) {
    dispatch(setNewMoveTarget({ x, y }));
    return;
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
    dispatch(resetNewMoveTarget());
    return;
  }

  dispatch(addNewMoveTile({ ...newMove.target, letter, blankLetter }));

  let nextFreeBoardField = findNextFreeBoardField(
    boardFields,
    newMove.target,
    newMove.direction,
  );

  // There is no new word yet, try changing direction
  if (!newMove.tiles.length && !nextFreeBoardField) {
    nextFreeBoardField = findNextFreeBoardField(
      boardFields,
      newMove.target,
      newMove.direction === 'h' ? 'v' : 'h',
    );
  }

  dispatch(
    newMove.tiles.length < 6 && nextFreeBoardField
      ? setNewMoveTarget(nextFreeBoardField)
      : resetNewMoveTarget(),
  );
};
