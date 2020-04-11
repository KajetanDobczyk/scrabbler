import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { updateBoardLayout } from 'src/modules/Board/store/thunks';
import {
  selectBoardFields,
  selectNewMove,
} from 'src/modules/Board/store/selectors';

import BoardField from './components/BoardField';
import { styles } from './styles';

const Board = () => {
  const dispatch = useDispatch();

  const boardFields = useSelector(selectBoardFields);
  const newMove = useSelector(selectNewMove);

  useEffect(() => {
    dispatch(updateBoardLayout());
  }, []);

  return (
    <View style={styles.container}>
      {boardFields.map((row, y) => (
        <View key={y} style={styles.row}>
          {row.map((field, x) => (
            <BoardField
              key={x}
              field={field}
              isInNewMove={
                !!newMove.find((tile) => tile.x === x && tile.y === y)
              }
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
