import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import { color } from 'src/theme';
import { RootStackParamList } from 'src/layout/interfaces';

import Board from './components/Board';

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

const Home: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Board />
    <TouchableOpacity style={{ marginTop: 10 }}>
      <Button
        title="See 2-letter words"
        onPress={() => navigation.navigate('Dictionary')}
      />
    </TouchableOpacity>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: color.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
