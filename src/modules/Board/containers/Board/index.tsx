import React, { useRef } from 'react';
import {
  View,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  GestureResponderEvent,
  LayoutChangeEvent,
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';

import {
  boardLoaded,
  insertWordLetter,
  insertWordPrepared,
  insertWordStarted,
  selectBoardFields,
} from 'src/modules/Board/store/slice';
import { alphabet } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';

import BoardField from './components/BoardField';
import { styles } from './styles';

const Board = () => {
  const textInputRef = useRef<any>(null); // TODO: Fix type
  const dispatch = useDispatch();
  const boardFields = useSelector(selectBoardFields);

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;

    dispatch(boardLoaded({ x, y, width, height }));
  };

  const prepareWordInput = (event: GestureResponderEvent) => {
    // dispatch(insertWordPrepared({ x, y }));
    console.log(event.nativeEvent);
    textInputRef.current.focus();
  };

  const initWordInput = (event: GestureResponderEvent) => {
    console.log(event.nativeEvent);
    // dispatch(insertWordStarted({ x, y, direction: 'horizontal', length: 5 }));
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
    <View
      style={styles.container}
      onLayout={handleOnLayout}
      onTouchStart={prepareWordInput}
      onTouchEnd={initWordInput}
    >
      <View style={styles.board}>
        {boardFields.map((row, y) => (
          <View key={y} style={styles.row}>
            {row.map((field, x) => (
              <BoardField key={x} x={x} y={y} field={field} />
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
