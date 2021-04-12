import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import FlatButton from 'src/components/FlatButton';
import {
  removeLastMove,
  skipTurn,
} from 'src/modules/Game/store/players/thunks';
import { selectIsFirstMove } from 'src/modules/Game/store/players/selectors';
import { setGameView } from 'src/modules/Game/store/config/slice';

import * as S from './styles';

const menuActions: Record<string, any> = {
  undo: removeLastMove,
  skip: skipTurn,
};

const CurrentPlayerMenu = () => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();

  const isFirstMove = useSelector(selectIsFirstMove);

  const handleMenuAction = (actionLabel: string) => () => {
    const action = menuActions[actionLabel];

    if (action) {
      dispatch(action());
    }
  };

  const scrollToBoard = () => {
    dispatch(setGameView('board'));
  };

  return (
    <S.CurrentPlayerMenuWrapper>
      {!isFirstMove && (
        <S.ButtonWrapper>
          <FlatButton
            label={t('actions.undo')}
            onPress={handleMenuAction('undo')}
          />
        </S.ButtonWrapper>
      )}
      <S.ButtonWrapper>
        <FlatButton
          label={t('actions.skip')}
          onPress={handleMenuAction('skip')}
        />
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <FlatButton label={t('actions.newWord')} onPress={scrollToBoard} />
      </S.ButtonWrapper>
    </S.CurrentPlayerMenuWrapper>
  );
};

export default CurrentPlayerMenu;
