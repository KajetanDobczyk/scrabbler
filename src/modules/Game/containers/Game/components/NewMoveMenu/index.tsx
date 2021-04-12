import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FlatButton from 'src/components/FlatButton';
import { cancelNewMove } from 'src/modules/Game/store/board/slice';
import { tryNewMove } from 'src/modules/Game/store/players/thunks';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';

import TilesList from './components/TilesList';
import BlankModal from './components/BlankModal';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

const menuActions: Record<string, any> = {
  cancel: cancelNewMove,
  accept: tryNewMove,
};

const NewMoveMenu = () => {
  const { t } = useTranslation('game');
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

  return (
    <>
      <S.NewMoveMenuWrapper>
        <TilesList tilesList={tilesList} onBlankPressed={toggleBlankModal} />
        <S.ButtonsWrapper>
          <S.LeftButtonWrapper>
            <FlatButton
              label={t('actions.cancel')}
              onPress={handleMenuAction('cancel')}
            />
          </S.LeftButtonWrapper>
          <FlatButton
            label={t('actions.accept')}
            onPress={handleMenuAction('accept')}
          />
        </S.ButtonsWrapper>
      </S.NewMoveMenuWrapper>
      {isBlankModalVisible && <BlankModal onClose={toggleBlankModal} />}
    </>
  );
};

export default NewMoveMenu;
