import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import FlatButton from 'src/theme/components/FlatButton';

import FinishedGameDetails from './components/FinishedGameDetails';
import { GameScreen, GameTabParamList } from '../../interfaces';
import { styles } from './styles';

type Props = {
  navigation: StackNavigationProp<GameTabParamList, GameScreen.FinishedGame>;
};

const FinishedGame: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.header}>Koniec gry!</Text>
    <FinishedGameDetails />
    <FlatButton
      label="Nowa gra"
      onPress={() => navigation.navigate(GameScreen.NewGame)}
    />
  </View>
);

export default FinishedGame;
