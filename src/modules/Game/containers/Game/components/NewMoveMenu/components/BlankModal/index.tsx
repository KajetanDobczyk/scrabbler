import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import Tile from 'src/modules/Game/components/Tile';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';
import { listBoardTilePressed } from 'src/modules/Game/store/board/thunks';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { styles } from './styles';
import { useTranslation } from 'react-i18next';

type Props = {
  onClose: () => void;
};

const BlankModal: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();

  const tilesList = useSelector(selectTilesList);
  const themedStyles = styles(useSelector(selectTheme));

  const handleTilePress = (letter: Letter) => () => {
    dispatch(listBoardTilePressed('?', letter));
    onClose();
  };

  return (
    <Modal isVisible onBackdropPress={onClose} onSwipeCancel={onClose}>
      <View style={themedStyles.container}>
        <Text style={themedStyles.header}>{t('actions.selectLetter')}</Text>
        <View style={themedStyles.tilesList}>
          {(Object.keys(tilesList) as Letter[]).map((letter) =>
            !!(letter !== '?' && tilesList[letter].amountLeft) ? (
              <TouchableOpacity
                key={letter}
                style={themedStyles.tileWrapper}
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

export default BlankModal;
