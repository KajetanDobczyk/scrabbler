import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import PlayersScores from 'src/modules/Players/containers/PlayersScores';

import { selectNewMove } from '../../store/selectors';
import GameBoard from './components/GameBoard';
import TilesList from './components/TilesList';
import BlankModal from './components/BlankModal';
import { styles } from './styles';

const Board = () => {
  const newMove = useSelector(selectNewMove);

  const [isBlankModalVisible, setIsBlankModalVisible] = useState(false);

  const toggleBlankModal = () => {
    setIsBlankModalVisible(!isBlankModalVisible);
  };

  return (
    <>
      <Header title={Screen.PointsTracking} />
      <View style={styles.container}>
        <GameBoard />
        {newMove.target && <TilesList onBlankPressed={toggleBlankModal} />}
      </View>
      {isBlankModalVisible && <BlankModal onClose={toggleBlankModal} />}
      <PlayersScores />
    </>
  );
};

export default Board;
