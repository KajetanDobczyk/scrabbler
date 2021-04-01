import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { Letter } from 'src/modules/Dictionary/interfaces';
import FlatButton from 'src/theme/components/FlatButton';
import { cancelNewMove } from 'src/modules/Game/store/board/slice';
import { tryNewMove } from 'src/modules/Game/store/players/thunks';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';
import { listBoardTilePressed } from 'src/modules/Game/store/board/thunks';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import TilesList from './components/TilesList';
import BlankModal from './components/BlankModal';
import { styles } from './styles';
import { useTranslation } from 'react-i18next';

const menuActions: Record<string, any> = {
  cancel: cancelNewMove,
  accept: tryNewMove,
};

const NewMoveMenu = () => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();

  const [isBlankModalVisible, setIsBlankModalVisible] = useState(false);

  const tilesList = useSelector(selectTilesList);
  const themedStyles = styles(useSelector(selectTheme));

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  const toggleBlankModal = () => {
    setIsBlankModalVisible(!isBlankModalVisible);
  };

  return (
    <>
      <View style={themedStyles.container}>
        <TilesList tilesList={tilesList} onBlankPressed={toggleBlankModal} />
        <View style={themedStyles.buttonsWrapper}>
          <View style={themedStyles.leftButtonWrapper}>
            <FlatButton
              label={t('actions.cancel')}
              onPress={handleMenuAction('cancel')}
            />
          </View>
          <FlatButton
            label={t('actions.accept')}
            onPress={handleMenuAction('accept')}
          />
        </View>
      </View>
      {isBlankModalVisible && <BlankModal onClose={toggleBlankModal} />}
    </>
  );
};

export default NewMoveMenu;
