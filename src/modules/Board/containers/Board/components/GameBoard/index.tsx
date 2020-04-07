import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectBoardFields,
  initBoardLayout,
} from 'src/modules/Board/store/slice';

import BoardField from './components/BoardField';
import { styles } from './styles';

const Board = () => {
  const dispatch = useDispatch();

  const boardFields = useSelector(selectBoardFields);

  useEffect(() => {
    dispatch(initBoardLayout());
  }, []);

  return (
    <View style={styles.container}>
      {boardFields.map((row, y) => (
        <View key={y} style={styles.row}>
          {row.map((field, x) => (
            <BoardField key={x} x={x} y={y} field={field} />
          ))}
        </View>
      ))}
    </View>
  );
};

export default Board;
