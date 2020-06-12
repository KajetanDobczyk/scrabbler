import React, { useState } from 'react';
import { View, LayoutChangeEvent, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import ScoresTable from 'src/modules/Players/containers/ScoresTable';
import IconButton from 'src/theme/components/IconButton';
import CurrentPlayerMenu from 'src/modules/Players/components/CurrentPlayerMenu';
import { StatusBarHeight } from 'src/config';

import { selectNewMove } from '../../store/selectors';
import GameBoard from './components/GameBoard';
import EndGameModal from './components/EndGameModal';
import NewMoveMenu from './components/NewMoveMenu';
import { styles } from './styles';
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
  const newMove = useSelector(selectNewMove);

  const [isEndGameModalVisible, setIsEndGameModalVisible] = useState(false);
  const [scoresTableYRange, setScoresTableYRange] = useState({
    y: 0,
    min: 0,
    max: 0,
  });

  const toggleEndGameModal = () => {
    setIsEndGameModalVisible(!isEndGameModalVisible);
  };

  const handleOnLayout = (event: LayoutChangeEvent) => {
    const screenHeight = Dimensions.get('window').height;
    const { y, height } = event.nativeEvent.layout;

    setScoresTableYRange({
      y,
      min: screenHeight - StatusBarHeight - y - height,
      max: screenHeight - StatusBarHeight - 20,
    });
  };

  return (
    <>
      <Header title={Screen.PointsTracking}>
        <CurrentPlayerMenu />
        <IconButton
          icon="stop"
          iconSet="FontAwesome5"
          size={13}
          onPress={toggleEndGameModal}
          style={styles.button}
        />
      </Header>
      <View style={styles.container} onLayout={handleOnLayout}>
        <GameBoard />
      </View>
      <View style={styles.bottomContent}>
        {(newMove.tiles.length || newMove.target) && <NewMoveMenu />}
        {scoresTableYRange.min ? (
          <ScoresTable
            y={scoresTableYRange.y}
            maxY={scoresTableYRange.max}
            minY={scoresTableYRange.min}
            onBottom={!!newMove.target}
          />
        ) : null}
        {isEndGameModalVisible && (
          <EndGameModal
            onFinish={() =>
              navigation.navigate(PointsTrackingScreen.FinishedGame)
            }
            onClose={toggleEndGameModal}
          />
        )}
      </View>
    </>
  );
};

export default Board;
