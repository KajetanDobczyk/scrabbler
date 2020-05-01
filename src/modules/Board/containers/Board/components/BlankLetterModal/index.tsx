import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { selectTilesList } from 'src/modules/Board/store/selectors';
import Tile from 'src/modules/Tiles/components/Tile';

import { styles } from './styles';

type Props = {
  onSelectLetter: (letter: Letter) => void;
  onClose: () => void;
};

const BlankLetterModal: React.FC<Props> = ({ onClose, onSelectLetter }) => {
  const tilesList = useSelector(selectTilesList);

  const handleTilePress = (letter: Letter) => () => {
    onSelectLetter(letter);
    onClose();
  };

  return (
    <Modal isVisible onBackdropPress={onClose} onSwipeCancel={onClose}>
      <View style={styles.container}>
        <Text style={styles.header}>Wybierz literę</Text>
        <View style={styles.tilesList}>
          {(Object.keys(tilesList) as Letter[]).map((letter) =>
            letter !== '?' && tilesList[letter].amountLeft ? (
              <TouchableOpacity
                key={letter}
                style={styles.tileWrapper}
                onPress={handleTilePress(letter)}
              >
                <Tile letter={letter} hidePoints />
              </TouchableOpacity>
            ) : null,
          )}
        </View>
      </View>
    </Modal>
  );
};

export default memo(BlankLetterModal);
