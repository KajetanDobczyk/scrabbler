import React, { useRef } from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';

import { boardFields } from 'src/config/board';
import { Letter } from 'src/interfaces';
import { alphabet } from 'src/config/tiles';

import BoardField from './components/BoardField';
import { styles } from './styles';
import { insertLetter } from './store/slice';

const Board = () => {
  const textInputRef = useRef<any>(null);
  const dispatch = useDispatch();

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    const key = event.nativeEvent.key as Letter;

    if (alphabet.includes(key)) {
      dispatch(insertLetter({ x: 2, y: 2, letter: key }));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          textInputRef.current?.focus();
        }}
      >
        <View style={styles.board}>
          {boardFields.map((row, y) => (
            <View key={y} style={styles.row}>
              {row.map((field, x) => (
                <BoardField key={x} x={x} y={y} bonus={field} />
              ))}
            </View>
          ))}
        </View>
      </TouchableOpacity>
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
