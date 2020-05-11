import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import { selectPlayers } from 'src/modules/Players/store/selectors';
import { PlayerId } from 'src/modules/Players/interfaces';
import { selectTilesList } from 'src/modules/Board/store/selectors';
import TextButton from 'src/theme/components/TextButton';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { styles } from './styles';
import PlayerTilesLeft from './components/PlayerTilesLeft';

type Props = {
  onClose: () => void;
};

const EndGameModal: React.FC<Props> = ({ onClose }) => {
  const dispatch = useDispatch();

  const players = useSelector(selectPlayers);

  const playersIds = Object.keys(players) as PlayerId[];

  const [tilesLeft, setTilesLeft] = useState(useSelector(selectTilesList));
  const [endingPlayerId, setEndingPlayerId] = useState<PlayerId>(playersIds[0]);
  const [playersTiles, setPlayersTiles] = useState<Record<PlayerId, Letter[]>>(
    Object.keys(players).reduce(
      (acc, playerId) => ({
        ...acc,
        [playerId]: [],
      }),
      {} as Record<PlayerId, Letter[]>,
    ),
  );

  const handleSelectEndingPlayer = (playerId: any) => {
    setEndingPlayerId(playerId.toString());
  };

  const handleOnListTilePressed = (playerId: PlayerId, letter: Letter) => {
    setPlayersTiles({
      ...playersTiles,
      [playerId]: [...playersTiles[playerId], letter],
    });
  };

  const handleOnPlayerTilePressed = (playerId: PlayerId, index: number) => {
    setPlayersTiles({
      ...playersTiles,
      [playerId]: playersTiles[playerId].filter((_letter, i) => i !== index),
    });
  };

  const finishGame = () => {
    console.log('finish');
  };

  return (
    <Modal isVisible onBackdropPress={onClose} onSwipeCancel={onClose}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Kto zakończył grę?</Text>
        <SegmentedControlTab
          values={playersIds.map((playerId) => players[playerId]?.name)}
          selectedIndex={parseInt(endingPlayerId)}
          onTabPress={handleSelectEndingPlayer}
          tabsContainerStyle={styles.controlTabWrapper}
          tabStyle={styles.controlTab}
          tabTextStyle={styles.controlTabText}
          activeTabStyle={styles.activeControlTab}
        />
        <Text style={styles.header}>Zaznacz płytki pozostałych graczy</Text>
        {playersIds
          .filter((playerId) => playerId !== endingPlayerId)
          .map((playerId) => (
            <PlayerTilesLeft
              key={playerId}
              playerId={playerId}
              player={players[playerId]!}
              playerTiles={playersTiles[playerId]}
              tilesLeft={tilesLeft}
              onListTilePressed={handleOnListTilePressed}
              onPlayerTilePressed={handleOnPlayerTilePressed}
            />
          ))}
        <View style={styles.buttonsWrapper}>
          <TextButton label="Anuluj" onPress={onClose} />
          <TextButton label="Zakończ" onPress={finishGame} />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default EndGameModal;
