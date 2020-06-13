import React from 'react';
import { ScrollView } from 'react-native';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Game/interfaces';

import { styles } from './styles';
import TilesListElement from './components/TilesListElement';

type Props = {
  tilesList: ITilesList;
  onTilePressed: (letter: Letter) => void;
  onBlankPressed: () => void;
};

const TilesList: React.FC<Props> = ({
  tilesList,
  onTilePressed,
  onBlankPressed,
}) => {
  const selectTile = (letter: Letter) => {
    if (letter === '?') {
      onBlankPressed();
    } else {
      onTilePressed(letter);
    }
  };

  const availableTiles = Object.keys(tilesList) as Letter[];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {availableTiles.map((letter) => (
        <TilesListElement
          key={letter}
          letter={letter}
          amountLeft={tilesList[letter].amountLeft}
          onPress={selectTile}
        />
      ))}
    </ScrollView>
  );
};

export default TilesList;
