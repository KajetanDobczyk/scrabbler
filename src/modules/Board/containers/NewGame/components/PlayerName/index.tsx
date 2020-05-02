import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';

import { styles } from './styles';

type Props = {
  id: PlayerId;
  name: string;
  onChange: (id: PlayerId) => (name: string) => void;
};

const PlayerName: React.FC<Props> = ({ id, name, onChange }) => (
  <View style={styles.container}>
    <Text style={styles.index}>{parseInt(id) + 1}</Text>
    <TextInput style={styles.input} value={name} onChangeText={onChange(id)} />
  </View>
);

export default PlayerName;
