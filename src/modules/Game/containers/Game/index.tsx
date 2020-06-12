import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';

import Header from 'src/layout/components/Header';
import { Screen } from 'src/layout/interfaces';
import IconButton from 'src/theme/components/IconButton';
import ScoresTable from 'src/modules/Players/containers/ScoresTable';

import { GameTabParamList, GameScreen } from '../../interfaces';
import { selectNewMove, selectGameView } from '../../store/selectors';
import Board from './components/Board';
import EndGameModal from './components/EndGameModal';
import NewMoveMenu from './components/NewMoveMenu';
import { styles } from './styles';
import { setGameView } from '../../store/slice';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.NewGame>;
};

const Game: React.FC<Props> = ({ navigation }) => {
  const dispatch = useDispatch();
  const scrollView = useRef<ScrollView>(null);

  const newMove = useSelector(selectNewMove);
  const view = useSelector(selectGameView);

  const [isEndGameModalVisible, setIsEndGameModalVisible] = useState(false);

  useEffect(() => {
    if (view === 'points') {
      scrollView.current?.scrollTo({ x: 0 });
    } else {
      scrollView.current?.scrollToEnd();
    }
  }, [view]);

  const toggleEndGameModal = () => {
    setIsEndGameModalVisible(!isEndGameModalVisible);
  };

  const handleOnMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    dispatch(
      setGameView(event.nativeEvent.contentOffset.x ? 'points' : 'board'),
    );
  };

  return (
    <>
      <Header title={Screen.Game}>
        <IconButton
          icon="stop"
          iconSet="FontAwesome5"
          size={13}
          onPress={toggleEndGameModal}
        />
      </Header>
      <ScrollView
        ref={scrollView}
        horizontal={true}
        contentContainerStyle={styles.scrollViewContent}
        pagingEnabled={true}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}
      >
        <View style={styles.horizontalScreen}>
          <ScoresTable />
        </View>
        <View style={styles.horizontalScreen}>
          <Board />
          {newMove.tiles.length || (newMove.target && <NewMoveMenu />)}
        </View>
      </ScrollView>
      {isEndGameModalVisible && (
        <EndGameModal
          onFinish={() => navigation.navigate(GameScreen.FinishedGame)}
          onClose={toggleEndGameModal}
        />
      )}
    </>
  );
};

export default Game;
