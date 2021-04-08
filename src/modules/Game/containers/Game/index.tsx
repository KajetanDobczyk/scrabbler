import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTranslation } from 'react-i18next';
import { Dimensions } from 'react-native';

import Header from 'src/layout/components/Header';
import IconButton from 'src/theme/components/IconButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import { GameTabParamList, GameScreen } from '../../interfaces';
import Board from './components/Board';
import EndGameModal from './components/EndGameModal';
import NewMoveMenu from './components/NewMoveMenu';
import TilesAvailability from './components/TilesAvailability';
import { styles } from './styles';
import { selectNewMove } from '../../store/board/selectors';
import { selectGameView } from '../../store/config/selectors';
import { setGameView } from '../../store/config/slice';
import ScoresTable from './components/ScoresTable';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.NewGame>;
};

const Game: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation('game');
  const dispatch = useDispatch();
  const scrollView = useRef<ScrollView>(null);

  const newMove = useSelector(selectNewMove);
  const view = useSelector(selectGameView);
  const themedStyles = styles(useSelector(selectTheme));

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
      setGameView(
        event.nativeEvent.contentOffset.x === Dimensions.get('window').width
          ? 'board'
          : 'points',
      ),
    );
  };

  return (
    <>
      <Header title={t('routeName')}>
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
        contentContainerStyle={themedStyles.scrollViewContent}
        pagingEnabled={true}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}
      >
        <View style={themedStyles.horizontalScreen}>
          <ScoresTable />
        </View>
        <View style={themedStyles.horizontalScreen}>
          <Board />
          {newMove.tiles.length || newMove.target ? (
            <NewMoveMenu />
          ) : (
            <TilesAvailability />
          )}
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
