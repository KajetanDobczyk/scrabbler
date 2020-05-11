import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import { selectPlayers } from 'src/modules/Players/store/selectors';
import { PlayerId } from 'src/modules/Players/interfaces';
import { selectTilesList } from 'src/modules/Board/store/selectors';

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
  const [playersTiles, setPlayersTiles] = useState(
    Object.keys(players).reduce(
      (acc, playerId) => ({
        ...acc,
        [playerId]: [],
      }),
      {},
    ),
  );

  const handleSelectEndingPlayer = (playerId: any) => {
    setEndingPlayerId(playerId.toString());
  };

  return (
    <Modal isVisible onBackdropPress={onClose} onSwipeCancel={onClose}>
      <View style={styles.container}>
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
              player={players[playerId]!}
              tilesLeft={tilesLeft}
            />
          ))}
      </View>
    </Modal>
  );
};

export default EndGameModal;
