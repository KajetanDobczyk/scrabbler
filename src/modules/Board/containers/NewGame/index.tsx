import React from 'react';
import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import FlatButton from 'src/theme/components/FlatButton';

import { styles } from './styles';
import { startGame } from '../../store/slice';

const NewGame = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <FlatButton
        label="Rozpocznij grę"
        onPress={() => dispatch(startGame())}
      />
    </View>
  );
};

export default NewGame;
