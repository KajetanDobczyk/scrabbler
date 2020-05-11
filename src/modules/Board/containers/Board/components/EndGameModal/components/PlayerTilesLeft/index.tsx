import React from 'react';
import { Text, View } from 'react-native';

import { IPlayer } from 'src/modules/Players/interfaces';

import { Letter } from 'src/modules/Dictionary/interfaces';
import { ITilesList } from 'src/modules/Tiles/interfaces';
import TilesList from 'src/modules/Tiles/components/TilesList';

import { styles } from './styles';

type Props = {
  player: IPlayer;
  tilesLeft: ITilesList;
};

const PlayerTilesLeft: React.FC<Props> = ({ player, tilesLeft }) => {
  const handleOnTilePressed = (letter: Letter) => () => {
    console.log(letter);
  };

  const handleOnBlankPressed = () => () => {
    console.log('blank');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.minusPoints}>0</Text>
      </View>
      <TilesList
        tilesList={tilesLeft}
        onTilePressed={handleOnTilePressed}
        onBlankPressed={handleOnBlankPressed}
        hideNotLeft
      />
    </View>
  );
};

export default PlayerTilesLeft;
