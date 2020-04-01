import React, { useRef } from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { boardFields } from 'src/config/board';
import { Letter } from 'src/interfaces';
import { alphabet } from 'src/config/tiles';

import BoardField from './components/BoardField';
import { styles } from './styles';
import { insertWordLetter, insertWordStarted } from './store/slice';

const Board = () => {
  const textInputRef = useRef<any>(null); // TODO: Fix type
  const dispatch = useDispatch();

  const initWordInput = (x: number, y: number) => () => {
    dispatch(insertWordStarted({ x, y, direction: 'horizontal' }));
    textInputRef.current.focus();
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    const key = event.nativeEvent.key.toLowerCase() as Letter;

    if (alphabet.includes(key)) {
      dispatch(insertWordLetter(key));
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {boardFields.map((row, y) => (
          <View key={y} style={styles.row}>
            {row.map((field, x) => (
              <BoardField
                key={x}
                x={x}
                y={y}
                bonus={field}
                onTouchEnd={initWordInput}
              />
            ))}
          </View>
        ))}
      </View>
      <TextInput
        style={styles.textInput}
        keyboardType="default"
        ref={textInputRef}
        onKeyPress={handleKeyPress}
      />
    </View>
  );
};

export default Board;
