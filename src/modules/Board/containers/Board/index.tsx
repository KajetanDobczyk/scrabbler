import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import IconButton from 'src/theme/components/IconButton';
import ScoresTable from 'src/modules/Players/containers/ScoresTable';

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
        />
      </Header>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
        pagingEnabled={true}
      >
        <View style={styles.screen}>
          <ScoresTable />
        </View>
        <View style={styles.screen}>
          <GameBoard />
          {(newMove.tiles.length || newMove.target) && <NewMoveMenu />}
        </View>
      </ScrollView>
      {isEndGameModalVisible && (
        <EndGameModal
          onFinish={() =>
            navigation.navigate(PointsTrackingScreen.FinishedGame)
          }
          onClose={toggleEndGameModal}
        />
      )}
    </>
  );
};

export default Board;
