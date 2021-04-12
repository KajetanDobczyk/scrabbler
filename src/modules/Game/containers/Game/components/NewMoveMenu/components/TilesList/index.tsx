import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { css } from '@emotion/native';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Game/interfaces';
import IconButton from 'src/components/IconButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import {
  eraseLastTile,
  listBoardTilePressed,
} from 'src/modules/Game/store/board/thunks';

import * as S from './styles';
import TilesListElement from './components/TilesListElement';

type Props = {
  tilesList: ITilesList;
  onBlankPressed: () => void;
};

const TilesList: React.FC<Props> = ({ tilesList, onBlankPressed }) => {
  const dispatch = useDispatch();

  const selectTile = (letter: Letter) => {
    if (letter === '?') {
      onBlankPressed();
    } else {
      dispatch(listBoardTilePressed(letter));
    }
  };

  const eraseTile = () => {
    dispatch(eraseLastTile());
  };

  const theme = useSelector(selectTheme);

  const availableTiles = Object.keys(tilesList) as Letter[];

  return (
    <S.TilesListWrapper>
      {availableTiles.map((letter) => (
        <TilesListElement
          key={letter}
          letter={letter}
          amountLeft={tilesList[letter].amountLeft}
          onPress={selectTile}
        />
      ))}
      <IconButton
        icon="ios-backspace"
        iconSet="Ionicons"
        size={25}
        onPress={eraseTile}
        color={theme.color.tile}
        style={css({ marginLeft: 5 })}
      />
    </S.TilesListWrapper>
  );
};

export default TilesList;
