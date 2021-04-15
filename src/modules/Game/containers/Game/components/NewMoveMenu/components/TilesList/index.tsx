import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ScrollView, View } from 'react-native';
import { css } from '@emotion/native';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Game/interfaces';
import IconButton from 'src/components/IconButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';
import {
  eraseLastTile,
  listBoardTilePressed,
} from 'src/modules/Game/store/board/thunks';

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
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
      }}
    >
      {availableTiles.map((letter) => (
        <TilesListElement
          key={letter}
          letter={letter}
          amountLeft={tilesList[letter].amountLeft}
          onPress={selectTile}
        />
      ))}
      <View style={css({ marginTop: 3, marginLeft: 5 })}>
        <IconButton
          icon="ios-backspace"
          iconSet="Ionicons"
          size={25}
          onPress={eraseTile}
          color={theme.color.tile}
        />
      </View>
    </ScrollView>
  );
};

export default TilesList;
