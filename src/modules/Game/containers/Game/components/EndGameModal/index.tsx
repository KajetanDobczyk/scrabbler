import React, { useState } from 'react';
import { Text, ScrollView, View } from 'react-native';
import Modal from 'react-native-modal';
import { useSelector, useDispatch } from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import {
  selectPlayers,
  selectPreviousPlayerId,
} from 'src/modules/Players/store/selectors';
import { PlayerId, IFinalPlayersTiles } from 'src/modules/Players/interfaces';
import { selectTilesList } from 'src/modules/Game/store/selectors';
import { Letter } from 'src/modules/Dictionary/interfaces';
import {
  updateFinalPlayersTiles,
  setEndingPlayerId as setEndingPlayerIdAction,
} from 'src/modules/Players/store/slice';
import FlatButton from 'src/theme/components/FlatButton';

import { styles } from './styles';
import PlayerTilesLeft from './components/PlayerTilesLeft';

type Props = {
  onFinish: () => void;
  onClose: () => void;
};

const EndGameModal: React.FC<Props> = ({ onFinish, onClose }) => {
  const dispatch = useDispatch();

  const previousPlayerId = useSelector(selectPreviousPlayerId);
  const players = useSelector(selectPlayers);

  const playersIds = Object.keys(players) as PlayerId[];

  const initialPlayersTiles = playersIds.reduce(
    (acc, playerId) => ({
      ...acc,
      [playerId]: [],
    }),
    {} as IFinalPlayersTiles,
  );

  const [tilesLeft, setTilesLeft] = useState(useSelector(selectTilesList));
  const [endingPlayerId, setEndingPlayerId] = useState(previousPlayerId);
  const [finalPlayersTiles, setFinalPlayersTiles] = useState<
    IFinalPlayersTiles
  >(initialPlayersTiles);

  const handleSelectEndingPlayer = (playerId: any) => {
    setEndingPlayerId(playerId.toString());
    setFinalPlayersTiles(initialPlayersTiles);
  };

  const addPlayerTileLeft = (playerId: PlayerId, letter: Letter) => {
    setFinalPlayersTiles({
      ...finalPlayersTiles,
      [playerId]: [...finalPlayersTiles[playerId], letter],
    });
    setTilesLeft({
      ...tilesLeft,
      [letter]: {
        amountLeft: tilesLeft[letter].amountLeft - 1,
      },
    });
  };

  const removePlayerTileLeft = (
    playerId: PlayerId,
    letter: Letter,
    index: number,
  ) => {
    setFinalPlayersTiles({
      ...finalPlayersTiles,
      [playerId]: finalPlayersTiles[playerId].filter(
        (_letter, i) => i !== index,
      ),
    });
    setTilesLeft({
      ...tilesLeft,
      [letter]: {
        amountLeft: tilesLeft[letter].amountLeft + 1,
      },
    });
  };

  const finish = () => {
    dispatch(setEndingPlayerIdAction(endingPlayerId));
    dispatch(updateFinalPlayersTiles(finalPlayersTiles));
    onFinish();
    onClose();
  };

  const notEndingPlayersIds = playersIds.filter(
    (playerId) => playerId !== endingPlayerId,
  );

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
        {notEndingPlayersIds.map((playerId) => (
          <PlayerTilesLeft
            key={playerId}
            playerId={playerId}
            playerName={players[playerId]!.name}
            tilesLeft={tilesLeft}
            playerTilesLeft={finalPlayersTiles[playerId]}
            onListTilePressed={addPlayerTileLeft}
            onPlayerTilePressed={removePlayerTileLeft}
          />
        ))}
        <View style={styles.buttonsWrapper}>
          <FlatButton label="Anuluj" onPress={onClose} />
          <FlatButton label="Zakończ" onPress={finish} />
        </View>
      </ScrollView>
    </Modal>
  );
};

export default EndGameModal;
