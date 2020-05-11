import React, { useState } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import PlayersScores from 'src/modules/Players/containers/PlayersScores';
import IconButton from 'src/theme/components/IconButton';
import { Letter } from 'src/modules/Dictionary/interfaces';

import { selectNewMove, selectTilesList } from '../../store/selectors';
import GameBoard from './components/GameBoard';
import TilesList from '../../../Tiles/components/TilesList';
import BlankModal from './components/BlankModal';
import EndGameModal from './components/EndGameModal';
import { styles } from './styles';
import { listBoardTilePressed } from '../../store/thunks';
import {
  PointsTrackingTabParamList,
  PointsTrackingScreen,
} from '../../interfaces';

type Props = {
  navigation: StackNavigationProp<
    PointsTrackingTabParamList,
    PointsTrackingScreen.NewGame
  >;
};

const Board: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();

  const newMove = useSelector(selectNewMove);
  const tilesList = useSelector(selectTilesList);

  const [isBlankModalVisible, setIsBlankModalVisible] = useState(false);
  const [isEndGameModalVisible, setIsEndGameModalVisible] = useState(false);

  const toggleBlankModal = () => {
    setIsBlankModalVisible(!isBlankModalVisible);
  };

  const toggleEndGameModal = () => {
    setIsEndGameModalVisible(!isEndGameModalVisible);
  };

  const handleOnTilePressed = (letter: Letter) => {
    dispatch(listBoardTilePressed(letter));
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
        {newMove.target && (
          <View style={styles.tilesListWrapper}>
            <TilesList
              tilesList={tilesList}
              onTilePressed={handleOnTilePressed}
              onBlankPressed={toggleBlankModal}
            />
          </View>
        )}
      </View>
      {isBlankModalVisible && <BlankModal onClose={toggleBlankModal} />}
      {isEndGameModalVisible && (
        <EndGameModal
          onFinish={() =>
            navigation.navigate(PointsTrackingScreen.FinishedGame)
          }
          onClose={toggleEndGameModal}
        />
      )}
      <PlayersScores />
    </>
  );
};

export default Board;
