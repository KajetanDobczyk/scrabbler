import React from 'react';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { Letter } from 'src/modules/Dictionary/interfaces';
import Tile from 'src/modules/Game/components/Tile';
import { selectTilesList } from 'src/modules/Game/store/board/selectors';
import { listBoardTilePressed } from 'src/modules/Game/store/board/thunks';

import * as S from './styles';

type Props = {
  onClose: () => void;
};

const BlankModal: React.FC<Props> = ({ onClose }) => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();

  const tilesList = useSelector(selectTilesList);

  const handleTilePress = (letter: Letter) => () => {
    dispatch(listBoardTilePressed('?', letter));
    onClose();
  };

  return (
    <Modal isVisible onBackdropPress={onClose} onSwipeCancel={onClose}>
      <S.ModalContent>
        <S.Header>{t('actions.selectLetter')}</S.Header>
        <S.TilesList>
          {(Object.keys(tilesList) as Letter[]).map((letter) =>
            !!(letter !== '?' && tilesList[letter].amountLeft) ? (
              <S.TileWrapper key={letter} onPress={handleTilePress(letter)}>
                <Tile letter={letter} hidePoints />
              </S.TileWrapper>
            ) : null,
          )}
        </S.TilesList>
      </S.ModalContent>
    </Modal>
  );
};

export default BlankModal;
