import React from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { selectNewWord } from 'src/modules/Board/store/slice';
import { acceptNewWord, cancelNewWord } from 'src/modules/Board/store/thunks';

import { styles } from './styles';

type Props = {};

const NewWordConfirmationButtons: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const newWord = useSelector(selectNewWord);

  const accept = () => {
    dispatch(acceptNewWord());
  };

  const cancel = () => {
    dispatch(cancelNewWord());
  };

  return newWord.word ? (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, styles.cancelButton]}
        onPress={cancel}
      >
        <Ionicons name="ios-close" size={20} style={styles.buttonIcon} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.acceptButton]}
        onPress={accept}
      >
        <Ionicons name="ios-checkmark" size={20} style={styles.buttonIcon} />
      </TouchableOpacity>
    </View>
  ) : null;
};

export default NewWordConfirmationButtons;
