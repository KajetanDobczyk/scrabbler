import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { tryNewMove } from 'src/modules/Players/store/thunks';
import IconButton from 'src/theme/components/IconButton';
import { cancelNewMove } from 'src/modules/Game/store/slice';
import { selectTilesList } from 'src/modules/Game/store/selectors';
import TilesList from 'src/modules/Tiles/components/TilesList';
import { Letter } from 'src/modules/Dictionary/interfaces';
import { listBoardTilePressed } from 'src/modules/Game/store/thunks';

import BlankModal from './components/BlankModal';
import { styles } from './styles';

const menuActions: Record<string, any> = {
  cancel: cancelNewMove,
  accept: tryNewMove,
};

const NewMoveMenu = () => {
  const dispatch = useDispatch();

  const [isBlankModalVisible, setIsBlankModalVisible] = useState(false);

  const tilesList = useSelector(selectTilesList);

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  const toggleBlankModal = () => {
    setIsBlankModalVisible(!isBlankModalVisible);
  };

  const handleOnTilePressed = (letter: Letter) => {
    dispatch(listBoardTilePressed(letter));
  };

  return (
    <>
      <View style={styles.container}>
        <TilesList
          tilesList={tilesList}
          onTilePressed={handleOnTilePressed}
          onBlankPressed={toggleBlankModal}
        />
        <View style={styles.buttonsWrapper}>
          <IconButton
            icon="ios-close"
            size={40}
            onPress={handleMenuAction('cancel')}
            style={styles.button}
          />
          <IconButton
            icon="ios-checkmark"
            size={40}
            onPress={handleMenuAction('accept')}
            style={styles.button}
          />
        </View>
      </View>
      {isBlankModalVisible && <BlankModal onClose={toggleBlankModal} />}
    </>
  );
};

export default NewMoveMenu;
