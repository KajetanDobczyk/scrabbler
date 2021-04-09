import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { boardFieldPressed } from 'src/modules/Game/store/board/thunks';
import {
  selectBoardFields,
  selectNewMove,
} from 'src/modules/Game/store/board/selectors';

import BoardField from './components/BoardField';
import * as S from './styles';

const Board = () => {
  const dispatch = useDispatch();

  const boardFields = useSelector(selectBoardFields);
  const newMove = useSelector(selectNewMove);

  const handleOnBoardFieldPress = (x: number, y: number) => {
    dispatch(boardFieldPressed(x, y));
  };

  return (
    <S.BoardWrapper>
      {boardFields.map((row, y) => (
        <S.Row key={y}>
          {row.map((field, x) => (
            <BoardField
              key={x}
              x={x}
              y={y}
              field={field}
              onPress={handleOnBoardFieldPress}
              isTarget={newMove.target?.x === x && newMove.target?.y === y}
              isInNewMove={
                !!newMove.tiles.find((tile) => tile.x === x && tile.y === y)
              }
            />
          ))}
        </S.Row>
      ))}
    </S.BoardWrapper>
  );
};

export default Board;
