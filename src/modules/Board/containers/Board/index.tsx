import React, { useRef, useEffect } from 'react';
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
  boardLayoutLoaded,
  insertWordLetter,
  insertWordPrepared,
  insertWordStarted,
  selectBoardFields,
  selectBoardLayout,
  selectNewWord,
} from 'src/modules/Board/store/slice';
import { alphabet } from 'src/modules/Tiles/data';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { selectCurrentPlayerId } from 'src/modules/Players/store/slice';

import BoardField from './components/BoardField';
import { styles } from './styles';

const Board = () => {
  const textInputRef = useRef<any>(null); // TODO: Fix type
  const dispatch = useDispatch();

  const boardFields = useSelector(selectBoardFields);
  const boardLayout = useSelector(selectBoardLayout);
  const newWord = useSelector(selectNewWord);
  const currentPlayerId = useSelector(selectCurrentPlayerId);

  useEffect(() => {
    if (newWord.word === '') {
      textInputRef.current.blur();
    }
  }, [newWord.word]);

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const { x, y, width } = event.nativeEvent.layout;

    dispatch(boardLayoutLoaded({ x, y, size: width }));
  };

  const handleOnTouchStart = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;

    const x = Math.floor((pageX - boardLayout.x) / boardLayout.tileSize);
    const y = Math.floor((pageY - boardLayout.y) / boardLayout.tileSize);

    dispatch(insertWordPrepared({ x, y }));
  };

  const handleOnTouchEnd = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;

    const x = Math.floor((pageX - boardLayout.x) / boardLayout.tileSize);
    const y = Math.floor((pageY - boardLayout.y) / boardLayout.tileSize);

    dispatch(insertWordStarted({ x, y }));
    textInputRef.current.focus();
  };

  const handleKeyPress = (
    event: NativeSyntheticEvent<TextInputKeyPressEventData>,
  ) => {
    const key = event.nativeEvent.key.toLowerCase() as Letter;

    if (alphabet.includes(key)) {
      dispatch(insertWordLetter({ letter: key, playerId: currentPlayerId }));
    }
  };

  return (
    <View
      style={styles.container}
      onLayout={handleOnLayout}
      onTouchStart={handleOnTouchStart}
      onTouchEnd={handleOnTouchEnd}
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
        ref={textInputRef}
        onKeyPress={handleKeyPress}
      />
    </View>
  );
};

export default Board;
