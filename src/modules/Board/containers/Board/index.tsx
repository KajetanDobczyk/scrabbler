import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import PlayersScores from 'src/modules/Players/containers/PlayersScores';
import IconButton from 'src/theme/components/IconButton';

import { selectNewMove } from '../../store/selectors';
import GameBoard from './components/GameBoard';
import TilesList from './components/TilesList';
import BlankModal from './components/BlankModal';
import EndGameModal from './components/EndGameModal';
import { styles } from './styles';

const Board = () => {
  const newMove = useSelector(selectNewMove);

  const [isBlankModalVisible, setIsBlankModalVisible] = useState(false);
  const [isEndGameModalVisible, setIsEndGameModalVisible] = useState(false);

  const toggleBlankModal = () => {
    setIsBlankModalVisible(!isBlankModalVisible);
  };

  const toggleEndGameModal = () => {
    setIsEndGameModalVisible(!isEndGameModalVisible);
  };

  return (
    <>
      <Header title={Screen.PointsTracking}>
        <IconButton
          icon="stop"
          iconSet="FontAwesome5"
          size={13}
          onPress={toggleEndGameModal}
          style={styles.button}
        />
      </Header>
      <View style={styles.container}>
        <GameBoard />
        {newMove.target && <TilesList onBlankPressed={toggleBlankModal} />}
      </View>
      {isBlankModalVisible && <BlankModal onClose={toggleBlankModal} />}
      {isEndGameModalVisible && <EndGameModal onClose={toggleEndGameModal} />}
      <PlayersScores />
    </>
  );
};

export default Board;
