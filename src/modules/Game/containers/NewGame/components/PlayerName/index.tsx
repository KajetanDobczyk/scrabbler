import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { PlayerId } from 'src/modules/Players/interfaces';

import { styles } from './styles';

type Props = {
  id: PlayerId;
  name: string;
  onChange: (id: PlayerId) => (name: string) => void;
  autoFocus?: boolean;
};

const PlayerName: React.FC<Props> = ({ id, name, onChange, autoFocus }) => {
  const normalizedIndex = parseInt(id) + 1;

  return (
    <View style={styles.container}>
      <Text
        style={
          name === '' ? styles.index : [styles.index, styles.indexHighlighted]
        }
      >
        {normalizedIndex}
      </Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={onChange(id)}
        autoFocus={autoFocus}
        autoCapitalize="sentences"
      />
    </View>
  );
};

export default PlayerName;
