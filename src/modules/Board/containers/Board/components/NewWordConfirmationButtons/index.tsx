import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { selectNewWord } from 'src/modules/Board/store/slice';

import { styles } from './styles';
import { color } from 'src/theme';

type Props = {};

const NewWordConfirmationButtons: React.FC<Props> = () => {
  const newWord = useSelector(selectNewWord);

  // return newWord.word ? (
  return true ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={() => console.log('cancel')}
      >
        <Ionicons name="ios-close" size={20} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.acceptButton]}
        onPress={() => console.log('accept')}
      >
        <Ionicons name="ios-checkmark" size={20} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  ) : null;
};

export default NewWordConfirmationButtons;
