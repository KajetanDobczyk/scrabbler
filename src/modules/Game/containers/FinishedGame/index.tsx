import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import FlatButton from 'src/theme/components/FlatButton';
import { selectTheme } from 'src/modules/Settings/store/selectors';

import FinishedGameDetails from './components/FinishedGameDetails';
import { GameScreen, GameTabParamList } from '../../interfaces';
import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.FinishedGame>;
};

const FinishedGame: React.FC<Props> = ({ navigation }) => {
  const themedStyles = styles(useSelector(selectTheme));

  return (
    <View style={themedStyles.container}>
      <Text style={themedStyles.header}>Koniec gry!</Text>
      <FinishedGameDetails />
      <FlatButton
        label="Nowa gra"
        onPress={() => navigation.navigate(GameScreen.NewGame)}
      />
    </View>
  );
};

export default FinishedGame;
